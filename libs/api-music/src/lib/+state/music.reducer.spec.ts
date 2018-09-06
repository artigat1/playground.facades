import { MusicState } from './music.init';
import { reducer } from './music.reducer';

describe('Music Reducer', () => {

  /**
   * Most of the reducer is using the adapter methods provided by ngrx entity.
   * These are already tested, so no point in testing them again here.
   */

  it('should return default state', () => {
    const state: MusicState = {} as MusicState;
    const result: MusicState = reducer(state, { type: 'NOOP' } as any);

    expect(result).toBe(state);
  });
});
