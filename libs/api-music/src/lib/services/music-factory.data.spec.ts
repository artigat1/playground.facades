import * as faker from 'faker';

import { MusicDataFactory } from './music-factory.data';

describe('Music Data Factory', () => {
  describe('single', () => {
    it('should return a single instance of Music with all properties', () => {
      const result = MusicDataFactory.single(true, true, true, true);

      expect(result.id).toBeTruthy();
      expect(result.title).toBeTruthy();
      expect(result.imageUrl).toBeTruthy();
      expect(result.artists.length).toBeGreaterThan(0);
      expect(result.composer.length).toBeGreaterThan(0);
      expect(result.lyricist.length).toBeGreaterThan(0);
      expect(result.cast.length).toBeGreaterThan(0);
      expect(result.recordingDate).toBeTruthy();
      expect(result.releaseYear).toBeGreaterThan(1980);
    });

    it('should return generate 3 cast members', () => {
      const result = MusicDataFactory.single(true, false, false, false);

      expect(result.cast.length).toEqual(3);
    });

    it('should return generate 3 lyricists', () => {
      const result = MusicDataFactory.single(false, true, false, false);

      expect(result.lyricist.length).toEqual(3);
    });

    it('should return generate 3 composers', () => {
      const result = MusicDataFactory.single(false, false, true, false);

      expect(result.composer.length).toEqual(3);
    });

    it('should return generate 3 artists', () => {
      const result = MusicDataFactory.single(false, false, false, true);

      expect(result.artists.length).toEqual(3);
    });
  });

  describe('many', () => {
    it('should generate 3 music instance by default', () => {
      const result = MusicDataFactory.many();
      expect(result.length).toEqual(3);
    });

    it('should generate the count number of music instance', () => {
      const count = faker.random.number(6);
      const result = MusicDataFactory.many(false, false, false, false, count);

      expect(result.length).toEqual(count);
    });
  });
});
