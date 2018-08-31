import { MusicAction, MusicActionTypes } from './music.actions';

/**
 * Interface for the 'DMusic' data used in
 *  - MusicState, and
 *  - musicReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface MusicState {
  list: Entity[]; // list of DataAccessMusic; analogous to a sql normalized table
  selectedId?: string | number; // which DataAccessMusic record has been selected
  loaded: boolean; // has the DataAccessMusic list been loaded
  error?: any; // last none error (if any)
}

export const initialState: MusicState = {
  list: [],
  loaded: false
};

export function musicReducer(
  state: MusicState = initialState,
  action: MusicAction
): MusicState {
  switch (action.type) {
    case MusicActionTypes.MusicLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
