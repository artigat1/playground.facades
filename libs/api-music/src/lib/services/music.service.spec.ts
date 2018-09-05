import { MusicDataFactory } from './music-factory.data';
import { MusicService } from './music.service';
import { Music } from '../interfaces/music.interface';
import { map, switchMap } from 'rxjs/operators';

describe('Music Service', () => {
  let sut: MusicService;

  beforeEach(() => {
    sut = new MusicService();
  });

  it('should return the music collection', () => {
    const spy = jest.spyOn(MusicDataFactory, 'many');

    sut
      .getMusicCollection()
      .subscribe((music: Music[]) => {
        expect(music.length).toBeGreaterThan(0);
        expect(spy).toHaveBeenCalledTimes(1);
      });
  });

  it('should add new music to the collection', () => {
    const newMusic = MusicDataFactory.single();

    sut
      .add(newMusic)
      .pipe(
        switchMap(() => sut.getMusicCollection())
      )
      .subscribe((collection: Music[]) => {
        // NOT WORKING!!!
        const added = collection.filter(x => x.id === newMusic.id);
        expect(added).toBeFalsy();
      });
  });

  it('should remove music from the collection', () => {
    let deleteId: string;

    sut
      .getMusicCollection()
      .pipe(
        map((collection: Music[]) => {
          deleteId = collection[0].id;
          return deleteId;
        }),
        switchMap((id: string) => sut.remove(id))
      )
      .subscribe((collection: Music[]) => {
        // NOT WORKING!!!
        expect(collection.filter(x => x.id === deleteId)).toBeTruthy();
      });
  });
});
