import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ofAction } from 'ngrx-actions/dist';
import { catchError, map, switchMap } from 'rxjs/operators';

import { MusicService } from '../services/music.service';

import * as fromAdapter from './music.init';
import * as MusicActions from './music.action';

@Injectable()
export class MusicEffects {

  constructor(
    private readonly store: Store<fromAdapter.MusicState>,
    private readonly update$: Actions,
    private readonly service: MusicService){}

  @Effect()
  loadCollection$ = this.update$
    .pipe(
      ofAction(MusicActions.LoadCollection),
      switchMap(() => this.service.getMusicCollection()),
      map(response => new MusicActions.LoadCollectionSuccess({collection: response })),
      catchError(error => error.subscribe().switchMap(error => console.error(error)))
    );
}
