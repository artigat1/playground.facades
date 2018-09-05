import { Action } from '@ngrx/store';

import { Music } from '../interfaces/music.interface';
import { Update } from '@ngrx/entity';

export enum MusicActionTypes {
  LOAD_COLLECTION = '[Music] Load Music Collection',
  LOAD_COLLECTION_SUCCESS = '[Music] Load Music Collection Success',
  ADD_MUSIC = '[Music] Add Music',
  ADD_MUSIC_SUCCESS = '[Music] Add Music Success',
  REMOVE_MUSIC = '[Music] Remove Music',
  REMOVE_MUSIC_SUCCESS = '[Music] Remove Music Success',
  UPDATE_MUSIC = '[Music] Update Music',
  UPDATE_MUSIC_SUCCESS = '[Music] Update Music Success'
}

// Load Music
export class LoadCollection implements Action {
  readonly type = MusicActionTypes.LOAD_COLLECTION;
}

export class LoadCollectionSuccess implements Action {
  readonly type = MusicActionTypes.LOAD_COLLECTION_SUCCESS;

  constructor(public payload: { collection: Music[] }) {
  }
}

// Create music
export class AddMusic implements Action {
  readonly type = MusicActionTypes.ADD_MUSIC;

  constructor(public payload: { music: Music }) {
  }
}

export class AddMusicSuccess implements Action {
  readonly type = MusicActionTypes.ADD_MUSIC_SUCCESS;

  constructor(public payload: { music: Music }) {
  }
}

// Delete music
export class RemoveMusic implements Action {
  readonly type = MusicActionTypes.REMOVE_MUSIC;

  constructor(public payload: { id: string }) {
  }
}

export class RemoveMusicSuccess implements Action {
  readonly type = MusicActionTypes.REMOVE_MUSIC_SUCCESS;

  constructor(public payload: { id: string }) {
  }
}

// Update music
export class UpdateMusic implements Action {
  readonly type = MusicActionTypes.UPDATE_MUSIC;

  constructor(public payload: { music: Update<Music> }) {
  }
}

export class UpdateMusicSuccess implements Action {
  readonly type = MusicActionTypes.UPDATE_MUSIC_SUCCESS;

  constructor(public payload: { music: Update<Music> }) {
  }
}

export type MusicAction = LoadCollection
  | LoadCollectionSuccess
  | AddMusic
  | AddMusicSuccess
  | RemoveMusic
  | RemoveMusicSuccess
  | UpdateMusic
  | UpdateMusicSuccess;
