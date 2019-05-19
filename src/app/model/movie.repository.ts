import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http';
import {Movie} from './movie';
import {Observable} from "rxjs/index";
import {BACKEND_URL} from "../app.constants";

@Injectable()
export class MovieRepository {

  constructor(private httpClient: HttpClient) {
  }

  getMovies(city: string, pageIndex: number, pageSize: number): Observable<Movie[]> {
    let params = this.createHttpParameters(city, pageIndex, pageSize);
    return this.httpClient.get<Movie[]>(BACKEND_URL + 'movies/paginated', {params});
  }

  createHttpParameters(city: string, pageIndex: number, pageSize: number): HttpParams {
    let params = new HttpParams();
    params = params.append('city', city);
    params = params.append('pageIndex', '' + pageIndex);
    params = params.append('pageSize', '' + pageSize);
    return params;
  }

  getMoviesCount(city: string): Observable<number> {
    return this.httpClient
      .get<number>(BACKEND_URL + 'movies/count?city=' + city);
  }

}
