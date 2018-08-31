import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { MusicState } from './music.reducer';
import {
  LoadMusic,
  MusicLoaded,
  MusicLoadError,
  MusicActionTypes
} from './music.actions';

@Injectable()
export class MusicEffects {
  @Effect()
  loadMusic$ = this.dataPersistence
    .fetch(MusicActionTypes.LoadMusic, {
      run: (action: LoadMusic, state: MusicState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new MusicLoaded([]);
      },

      onError: (action: LoadMusic, error) => {
        console.error('Error', error);
        return new MusicLoadError(error);
      }
    });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<MusicState>
  ) {
  }
}
