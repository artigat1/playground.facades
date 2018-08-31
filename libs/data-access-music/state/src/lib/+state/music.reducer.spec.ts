import { MusicLoaded } from './music.actions';
import {
  MusicState,
  Entity,
  initialState,
  musicReducer
} from './music.reducer';

describe('DataAccessMusic Reducer', () => {
  const getDataAccessMusicId = it => it['id'];
  let createDataAccessMusic;

  beforeEach(() => {
    createDataAccessMusic = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid DataAccessMusic actions ', () => {
    it('should return set the list of known DataAccessMusic', () => {
      const dataAccessMusics = [
        createDataAccessMusic('PRODUCT-AAA'),
        createDataAccessMusic('PRODUCT-zzz')
      ];
      const action = new MusicLoaded(dataAccessMusics);
      const result: MusicState = musicReducer(initialState, action);
      const selId: string = getDataAccessMusicId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = musicReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
