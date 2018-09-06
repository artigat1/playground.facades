import { MusicState } from './music.init';
import { MusicDataFactory } from '../services/music-factory.data';
import * as musicQueries from './music.queries';
import { Music } from '../interfaces/music.interface';
import * as faker from 'faker';

describe('Music Queries', () => {
  let state: MusicState;
  let testData: Music[];

  beforeEach(() => {
    testData = MusicDataFactory.many();

    const entities = {};
    testData.forEach(x => {
      entities[x.id] = x;
    });

    state = {
      ids: testData.map(x => x.id),
      entities,
      isLoading: false,
      error: undefined
    };
  });

  it('should return current state', () => {
    expect(musicQueries.getMusicState.projector(state)).toBe(state);
  });

  it('should return music ids', () => {
    expect(musicQueries.selectMusicIds.projector(state)).toBe(state.ids);
  });

  it('should return music entities', () => {
    expect(musicQueries.selectMusicEntities.projector(state)).toBe(state.entities);
  });

  it('should return music objects', () => {
    expect(musicQueries.selectAllMusic.projector(state)).toEqual(testData);
  });

  it('should return music objects', () => {
    expect(musicQueries.selectAllMusic.projector(state)).toEqual(testData);
  });

  it('should return count of music objects', () => {
    expect(musicQueries.musicCount.projector(state)).toEqual(testData.length);
  });

  it('should return the error', () => {
    const error = faker.random.words(5);
    state.error = error;
    expect(musicQueries.error.projector(state)).toEqual(error);
  });

  it('should return true is loading', () => {
    state.isLoading = true;
    expect(musicQueries.isLoading.projector(state)).toBeTruthy();
  });

  it('should return false if is not loading', () => {
    state.isLoading = false;
    expect(musicQueries.isLoading.projector(state)).toBeFalsy();
  });
});
