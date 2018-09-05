import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Music, MusicFacade } from '@libs/api-music';

@Component({
  selector: 'facades-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  collection$: Observable<Music[]>;

  constructor(private readonly musicStore: MusicFacade) {
  }

  ngOnInit(): void {
    this.collection$ = this.musicStore.allMusic$;

    this.musicStore.loadCollection();
  }
}
