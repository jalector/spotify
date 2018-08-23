import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  artists:any[] = [];
  loading:boolean;

  constructor(private spotify:SpotifyService) { 
    this.loading = false;
  }


  buscar(termino:string){
    if(termino != ""){
      this.loading = true;
      this.spotify.getArtists(termino).subscribe((data:any) => { this.artists = data;  this.loading = false;});
      
    }
  }
}
