import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Movie} from './movie';
import {Observable} from "rxjs/index";

@Injectable()
export class MovieRepository {

  movies:Array<Movie> = new Array<Movie>();

  constructor(private httpClient:HttpClient) {
  }

  getMovies(city:string):Observable<Movie[]> {
    return this.httpClient
      .get<Movie[]>('http://localhost:8080/movies/' + city);
  }

  getMoviesCount():number {
    return this.movies.length
  }

}
