import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
  initialState as musicInitialState,
  musicReducer
} from './+state/music.reducer';
import { MusicEffects } from './+state/music.effects';
import { MusicFacade } from './+state/music.facade';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('music', musicReducer, {
      initialState: musicInitialState
    }),
    EffectsModule.forFeature([MusicEffects])
  ],
  providers: [MusicFacade]
})
export class MusicStateModule {
}
