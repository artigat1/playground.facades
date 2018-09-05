import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as faker from 'faker';

import { Music } from '../interfaces/music.interface';
import { MusicDataFactory } from './music-factory.data';

@Injectable()
export class MusicService {

  private musicCollection: Music[] = [];

  constructor(){}

  public getMusicCollection(): Observable<Music[]> {
    if(this.musicCollection.length === 0) {
      this.musicCollection = MusicDataFactory.many(true, true, true, true, 50);
    }
    return of(this.musicCollection);
  }

  public add(music: Music): Observable<Music> {
    music.id = faker.random.uuid();

    this.musicCollection = [...this.musicCollection, music];

    return of(music);
  }

  public remove(musicId: string): Observable<Music[]> {
    this.musicCollection = this.musicCollection.filter(x => x.id !== musicId);

    return of(this.musicCollection);
  }

  public update(music: Music): Observable<Music[]> {
    if(!music.id) {
      throw new Error('Music object must have an id to be updated');
    }

    const updateIndex: number = this.musicCollection.findIndex(x => x.id === music.id);
    this.musicCollection[updateIndex] = music;

    return of(this.musicCollection);
  }
}
