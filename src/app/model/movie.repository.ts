import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http';
import {Movie} from './movie';
import {Observable} from "rxjs/index";

@Injectable()
export class MovieRepository {

  constructor(private httpClient: HttpClient) {
  }

  getMovies(city: string, pageIndex: number, pageSize: number): Observable<Movie[]> {
    let params = this.createHttpParameters(city, pageIndex, pageSize);
    return this.httpClient.get<Movie[]>('http://localhost:8080/movies/paginated', {params});
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
      .get<number>('http://localhost:8080/movies/count?city=' + city);
  }

}
