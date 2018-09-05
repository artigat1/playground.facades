import { Component, OnInit } from '@angular/core';
import { Music, MusicFacade } from '@facades/api-music';
import { Observable } from 'rxjs';

@Component({
  selector: 'facades-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'music-catalogue';
  collection$: Observable<Music[]>;

  constructor(private readonly musicStore: MusicFacade) {
  }

  ngOnInit(): void {
    this.collection$ = this.musicStore.allMusic$;

    this.musicStore.loadCollection();
  }
}
