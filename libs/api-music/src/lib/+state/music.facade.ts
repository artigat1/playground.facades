import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { MusicState } from './music.init';
import * as musicQueries from './music.queries';
import * as MusicActions from './music.action';

@Injectable()
export class MusicFacade {
  count$ = this.store.select(musicQueries.musicCount);
  allMusic$ = this.store.select(musicQueries.selectAllMusic);
  musicIds$ = this.store.select(musicQueries.selectMusicIds);
  isLoading$ = this.store.select(musicQueries.isLoading);
  error$ = this.store.select(musicQueries.error);

  constructor(private readonly store: Store<MusicState>) {
  }

  loadCollection() {
    this.store.dispatch(new MusicActions.LoadCollection());
  }
}
