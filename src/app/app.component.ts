import { Component, OnInit } from '@angular/core';
import { User } from "./user";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'movie-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User = new User();
  firstTime: boolean = true;
  movies: Array<Movie> = new Array<Movie>();
  moviesObservable: Observable<Movie[]>;

  constructor(private httpClient: HttpClient) {
    console.log("constructor");
  }

  ngOnInit() {
    console.log("onOnit");
    this.updateMovies()
  }

  updateMovies() {
    console.log("start update");
    let observable = this.httpClient.get<Movie[]>('http://localhost:8080/movies');
    observable.subscribe((data: Movie[]) => {
      this.movies = data;
      console.log(data);
      console.log("Yeah data");
    },
      error => {
        console.log("OOPS");
        console.log(error);
      }
    );
    console.log("end update");
  }

  getName() {
    return this.user.name;
  }

  getMovies(): Movie[] {
    console.log("start getMovies");
    return this.movies;
  }

}


