import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './+state/music.reducer';
import { MusicEffects } from './+state/music.effects';
import { initialState } from './+state/music.init';
import { MusicService } from './services/music.service';
import { MusicFacade } from './+state/music.facade';

@NgModule({
  imports: [
    EffectsModule.forFeature([MusicEffects]),
    StoreModule.forFeature('music', reducer, { initialState: initialState })
  ],
  providers: [MusicEffects, MusicFacade, MusicService]
})
export class ApiMusicModule {}
