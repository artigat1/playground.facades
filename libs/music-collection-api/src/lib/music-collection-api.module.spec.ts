import { async, TestBed } from '@angular/core/testing';
import { MusicCollectionApiModule } from './music-collection-api.module';

describe('MusicCollectionApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MusicCollectionApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MusicCollectionApiModule).toBeDefined();
  });
});
