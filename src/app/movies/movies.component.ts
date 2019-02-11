import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Movie} from '../model/movie';
import {MovieRepository} from "../model/movie.repository";
import {BehaviorSubject, Observable, of} from "rxjs/index";
import {MatPaginator} from "@angular/material";
import {catchError, finalize} from "rxjs/operators";
import {DataSource} from "@angular/cdk/table";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit/*, AfterViewInit*/ {

  public productsPerPage = 15;
  public selectedPage = 1;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  public displayedColumns = ['title', 'description'];
  public dataSource;


  constructor(private movieRepository: MovieRepository, private router: Router) {

  }

  ngOnInit() {
    this.dataSource = new MovieDataSource(this.movieRepository, this.router);
    this.dataSource.loadMovies()
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }

  get pages(): number[] {

    let pages: number[] = new Array();
    let numerOfPages = Math.ceil(this.movieRepository.getMoviesCount() / this.productsPerPage);
    let count = 1;

    while (count <= numerOfPages) {
      pages.push(count);
      count++;
    }

    return pages;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

}


//@See https://blog.angular-university.io/angular-material-data-table/
export class MovieDataSource extends DataSource<Movie> {

  private myMovies = new BehaviorSubject<Movie[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading = false;

  constructor(private movieRepository: MovieRepository, private router: Router) {
    super();
  }

  connect(): Observable<Movie[]> {
    return this.myMovies.asObservable();
  }

  disconnect() {
    this.myMovies.complete();
    this.loadingSubject.complete();
  }


  loadMovies(): void {

    //this.loadingSubject.next(true);
    this.loading = true;

    let url: string = this.router.url;
    let city = url.substr(url.lastIndexOf("/") + 1);
    this.movieRepository.getMovies(city == '' || city == null ? "all" : city)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loading = false /*this.loadingSubject.next(false)*/)
      )
      .subscribe(data => {
        this.myMovies.next(data);
      });

  }

}

/*export class MovieDataSource extends DataSource<any> {
  constructor(private movieRepository:MovieRepository, private router:Router) {
    super();
  }

  connect():Observable<Movie[]> {
    let url:string = this.router.url;
    let city = url.substr(url.lastIndexOf("/") + 1);
    return this.movieRepository.getMovies2(city == '' || city == null ? "all" : city);
  }

  disconnect() {
  }
}*/

