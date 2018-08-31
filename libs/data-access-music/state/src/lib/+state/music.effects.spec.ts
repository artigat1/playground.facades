import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { MusicEffects } from './music.effects';
import { LoadMusic, MusicLoaded } from './music.actions';

describe('DataAccessMusicEffects', () => {
  let actions: Observable<any>;
  let effects: MusicEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        MusicEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(MusicEffects);
  });

  describe('loadDataAccessMusic$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadMusic() });
      expect(effects.loadMusic$).toBeObservable(
        hot('-a-|', { a: new MusicLoaded([]) })
      );
    });
  });
});
