import * as faker from 'faker';

import { Music } from '../interfaces/music.interface';

/**
 * A factory to generate test data instances of the {@link Music} interface
 */
export class MusicDataFactory {
  private static get generateName(): string {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  }

  /**
   * Generates an instance of the music interface using FakerJS.
   * @see Music
   * @static
   * @param includeCast
   * @param includeMultipleLyricists
   * @param includeMultipleComposers
   * @param includeMultipleArtists
   * @returns {Music} - A single instance of the music interface
   */
  static single(includeCast: boolean = false,
                includeMultipleLyricists: boolean = false,
                includeMultipleComposers: boolean = false,
                includeMultipleArtists: boolean = false): Music {
    return {
      id: faker.random.uuid(),
      title: faker.random.words(3),
      imageUrl: faker.image.people(),
      composer: includeMultipleComposers ? [this.generateName, this.generateName, this.generateName] : [],
      lyricist: includeMultipleLyricists ? [this.generateName, this.generateName, this.generateName] : [],
      artists: includeMultipleArtists ? [this.generateName, this.generateName, this.generateName] : [this.generateName],
      releaseYear: faker.date.between('1980-01-01', new Date()).getFullYear(),
      recordingDate: faker.date.between('1980-01-01', new Date()),
      cast: includeCast ? [this.generateName, this.generateName, this.generateName] : []
    };
  }

  /**
   * Generate an array of multiple instances of the music interface using FakerJS.
   * @see Music
   * @static
   * @param includeCast
   * @param includeMultipleLyricists
   * @param includeMultipleComposers
   * @param includeMultipleArtists
   * @param count - default to 3 items in the array.
   * @returns {Music} - An array containing multiple instances of the music interface
   */
  static many(includeCast: boolean = false,
              includeMultipleLyricists: boolean = false,
              includeMultipleComposers: boolean = false,
              includeMultipleArtists: boolean = false,
              count: number = 3): Music[] {
    const output: Music[] = [];

    for (let i = 0; i < count; i++) {
      output.push(MusicDataFactory.single(includeCast, includeMultipleLyricists, includeMultipleComposers, includeMultipleArtists));
    }

    return output;
  }
}
