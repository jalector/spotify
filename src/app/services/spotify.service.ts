import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  _TOKEN:string = "BQBB8gYrRbRm0dziapyax5gJS67Gnamh4rwmJNbzGnpHYcs3SickqB5hmdWTlwcLH3PZS4tJWIEKJhO9g-Y";

  
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
  
}
