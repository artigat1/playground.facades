import { Entity, MusicState } from './music.reducer';
import { musicQuery } from './music.selectors';

describe('DataAccessMusic Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getDataAccessMusicId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createDataAccessMusic = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      dataAccessMusic: {
        list: [
          createDataAccessMusic('PRODUCT-AAA'),
          createDataAccessMusic('PRODUCT-BBB'),
          createDataAccessMusic('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('DataAccessMusic Selectors', () => {
    it('getAllDataAccessMusic() should return the list of DataAccessMusic', () => {
      const results = musicQuery.getAllMusic(storeState);
      const selId = getDataAccessMusicId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedDataAccessMusic() should return the selected Entity', () => {
      const result = musicQuery.getSelectedMusic(storeState);
      const selId = getDataAccessMusicId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = musicQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = musicQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
