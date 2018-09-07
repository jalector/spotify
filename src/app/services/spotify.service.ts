import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  _TOKEN:string = "BQBPhD7JHBs46pj0TaFeggSQwfLBBA1d5Da2eWLydwbL-3t4cMl0ZsRFpKOAuAhdjay2VGA03UNZJogbFAo";

  
  constructor(
    private http: HttpClient
  ) { }
  
  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders ({
      'Authorization' : 'Bearer ' + this._TOKEN
    });
    return this.http.get(url, { headers: headers });
  }

  getNewReleases(){   
    return this.getQuery('browse/new-releases').pipe(map( data => data['albums'].items ));
  }

  getArtists(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=10`)
      .pipe(map( data => data['artists'].items));
  }

  getArtist(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe(map(data => data['tracks']))
  }
  
}
