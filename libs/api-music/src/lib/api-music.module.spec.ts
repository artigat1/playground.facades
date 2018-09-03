import { async, TestBed } from '@angular/core/testing';
import { ApiMusicModule } from './api-music.module';

describe('ApiMusicModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ApiMusicModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ApiMusicModule).toBeDefined();
  });
});
