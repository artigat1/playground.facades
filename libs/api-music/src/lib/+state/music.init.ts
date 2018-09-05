import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Music } from '@facades/api-music';

export function sortByTitle(obj1: Music, obj2: Music): number {
  return obj1.title.localeCompare(obj2.title);
}

export const adapter: EntityAdapter<Music> = createEntityAdapter<Music>({
  sortComparer: sortByTitle
});

export interface MusicState extends EntityState<Music> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: MusicState = adapter.getInitialState({
  isLoading: false,
  error: null
});

export const {
  selectIds: selectMusicIds,
  selectEntities: selectMusicEntities,
  selectAll: selectAllMusic,
  selectTotal: musicCount
} = adapter.getSelectors();
