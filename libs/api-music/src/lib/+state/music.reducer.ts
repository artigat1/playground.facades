import * as fromAdapter from './music.init';
import { initialState, MusicState } from './music.init';
import { MusicAction, MusicActionTypes } from './music.action';

export function reducer(state: MusicState = initialState, action: MusicAction): MusicState {
  switch (action.type) {

    case MusicActionTypes.LOAD_COLLECTION_SUCCESS:
      return fromAdapter.adapter.addAll(action.payload.collection, state);

    case MusicActionTypes.REMOVE_MUSIC_SUCCESS:
      return fromAdapter.adapter.removeOne(action.payload.id, state);

    case MusicActionTypes.UPDATE_MUSIC_SUCCESS:
      return fromAdapter.adapter.updateOne(action.payload.music, state);

    case MusicActionTypes.ADD_MUSIC_SUCCESS:
      return fromAdapter.adapter.addOne(action.payload.music, state);

    default:
      return state;
  }
}
