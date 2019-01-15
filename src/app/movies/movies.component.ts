import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "../model/user";
import { Movie } from '../model/movie';
import { MovieRepository } from "../model/movie.repository";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public productsPerPage = 15;
  public selectedPage = 1;

  constructor(private movieRepository:MovieRepository, private router:Router) {

  }

  ngOnInit() {
    let url:string = this.router.url;
    let city = url.substr(url.lastIndexOf("/") + 1);
    this.movieRepository.updateMovies(city == '' || city == null ? "all" : city);
  }

  get movies():Movie[] {

    let startIndex = (this.selectedPage - 1) * this.productsPerPage;
    let endIndex = startIndex + this.productsPerPage;

    return this.movieRepository.getMovies(startIndex, endIndex);
  }

  get pages():number[] {

    let pages:number[] = new Array();
    let numerOfPages = Math.ceil(this.movieRepository.getMoviesCount() / this.productsPerPage);
    let count = 1;

    while (count <= numerOfPages) {
      pages.push(count);
      count++;
    }

    return pages;
  }

  changePage(newPage:number) {
    this.selectedPage = newPage;
  }


}
