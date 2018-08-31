import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { MusicState } from './music.reducer';
import { musicQuery } from './music.selectors';
import { LoadMusic } from './music.actions';

@Injectable()
export class MusicFacade {
  loaded$ = this.store.select(musicQuery.getLoaded);
  allMusic$ = this.store.select(musicQuery.getAllMusic);
  selectedMusic = this.store.select(musicQuery.getSelectedMusic);

  constructor(private readonly store: Store<MusicState>){}

  /**
   * Dispatch the action to load all music
   */
  loadAll(): void {
    this.store.dispatch(new LoadMusic());
  }
}
