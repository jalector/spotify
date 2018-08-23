import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  albums:any[] = [];
  loading:boolean;

  constructor(private spotify:SpotifyService) { 
    this.loading = true;

    this.spotify.getNewReleases().subscribe( (data:any) => {
        this.albums = data;
        this.loading = false;
    });
  }


}
