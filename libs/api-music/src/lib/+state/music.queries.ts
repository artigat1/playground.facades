import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAdapter from './music.init';

export const getMusicState = createFeatureSelector<fromAdapter.MusicState>('music');

export const selectMusicIds = createSelector(getMusicState, fromAdapter.selectMusicIds);
export const selectMusicEntities = createSelector(getMusicState, fromAdapter.selectMusicEntities);
export const selectAllMusic = createSelector(getMusicState, fromAdapter.selectAllMusic);
export const musicCount = createSelector(getMusicState, fromAdapter.musicCount);

export const isLoading = createSelector(getMusicState, (state) => state.isLoading);
export const error = createSelector(getMusicState, (state) => state.error);

