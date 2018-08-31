import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MusicState } from './music.reducer';

// Lookup the 'DataAccessMusic' feature state managed by NgRx
const getMusicState = createFeatureSelector<MusicState>('dataAccessMusic');

const getLoaded = createSelector(
  getMusicState,
  (state: MusicState) => state.loaded
);
const getError = createSelector(
  getMusicState,
  (state: MusicState) => state.error
);

const getAllDataAccessMusic = createSelector(
  getMusicState,
  getLoaded,
  (state: MusicState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getMusicState,
  (state: MusicState) => state.selectedId
);
const getSelectedMusic = createSelector(
  getAllDataAccessMusic,
  getSelectedId,
  (dataAccessMusic, id) => {
    const result = dataAccessMusic.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const musicQuery = {
  getLoaded,
  getError,
  getAllMusic: getAllDataAccessMusic,
  getSelectedMusic: getSelectedMusic
};
