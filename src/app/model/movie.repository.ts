import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './movie';

@Injectable()
export class MovieRepository {

    firstTime: boolean = true;
    movies: Array<Movie> = new Array<Movie>();

    constructor(private httpClient: HttpClient) {
    }


    updateMovies() {
        let observable = this.httpClient.get<Movie[]>('http://localhost:8080/movies');
        observable.subscribe((data: Movie[]) => {
            this.movies = data;
            console.log(data);
            console.log("Yeah data");
        },
            error => {
                console.log(error);
            }
        );
    }

    getMovies(startIndex: number, endIndex: number): Movie[] {
        return this.movies.slice(startIndex, endIndex);
    }

    getMoviesCount(): number {
        return this.movies.length
    }

}