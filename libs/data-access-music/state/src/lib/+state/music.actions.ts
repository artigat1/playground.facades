import { Action } from '@ngrx/store';
import { Entity } from './music.reducer';

export enum MusicActionTypes {
  LoadMusic = '[Music] Load Music',
  MusicLoaded = '[Music] Music Loaded',
  MusicLoadError = '[Music] Music Load Error'
}

export class LoadMusic implements Action {
  readonly type = MusicActionTypes.LoadMusic;
}

export class MusicLoadError implements Action {
  readonly type = MusicActionTypes.MusicLoadError;
  constructor(public payload: any) {}
}

export class MusicLoaded implements Action {
  readonly type = MusicActionTypes.MusicLoaded;
  constructor(public payload: Entity[]) {}
}

export type MusicAction = LoadMusic | MusicLoaded | MusicLoadError;

export const fromMusicActions = {
  LoadDataAccessMusic: LoadMusic,
  MusicLoaded: MusicLoaded,
  MusicLoadError: MusicLoadError
};
