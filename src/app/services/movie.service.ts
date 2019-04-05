import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://omdbapi.com/';
  apiKey='70dd614a'; //enter your own key
  constructor(private http: HttpClient) { }

  searchData(title:string, type:SearchType):Observable<any>{
    console.log(`${this.url}?s=${encodeURI(title)}&type=${type}&apiKey=${this.apiKey}`);
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apiKey=${this.apiKey}`);
    //.pipe(map(results => results['search'])
   
    //);
  }
  getDetails(id){
    console.log(`${this.url}?i=${id}&plot=full&apiKey=${this.apiKey}`);
    return this.http.get(`${this.url}?i=${id}&plot=full&apiKey=${this.apiKey}`);
  }

  
}
