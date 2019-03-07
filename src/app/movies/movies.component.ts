import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Movie} from '../model/movie';
import {MovieRepository} from "../model/movie.repository";
import {BehaviorSubject, Observable, of} from "rxjs/index";
import {MatPaginator} from "@angular/material";
import {catchError, finalize, tap} from "rxjs/operators";
import {DataSource} from "@angular/cdk/table";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, AfterViewInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;
  public displayedColumns = ['save','poster','title', 'description','favorite'];
  public displayedHeaders = ['save','poster','title', 'description','favorite'];
  public dataSource: MovieDataSource;
  public size: number;

  constructor(private movieRepository: MovieRepository, private router: Router) {

  }

  ngOnInit() {
    this.dataSource = new MovieDataSource(this.movieRepository, this.router);
    this.dataSource.loadMovies(this.extractCityName(), 0, 10)
    this.movieRepository.getMoviesCount(this.extractCityName()).pipe().subscribe(nr => this.size = nr);
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.dataSource.loadMovies(this.extractCityName(),this.paginator.pageIndex, this.paginator.pageSize))
      )
      .subscribe();
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }

  private extractCityName(): string {
    let url: string = this.router.url;
    let city = url.substr(url.lastIndexOf("/") + 1);
    return city == '' || city == null ? "all" : city
  }


}


//@See https://blog.angular-university.io/angular-material-data-table/
export class MovieDataSource extends DataSource<Movie> {

  private myMovies = new BehaviorSubject<Movie[]>([]);
  public loading = false;

  constructor(private movieRepository: MovieRepository, private router: Router) {
    super();
  }

  connect(): Observable<Movie[]> {
    return this.myMovies.asObservable();
  }

  disconnect() {
    this.myMovies.complete();
  }

  loadMovies(city: string, pageIndex: number, pageSize: number): void {

    this.loading = true;

    this.movieRepository.getMovies(city, pageIndex, pageSize)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loading = false)
      )
      .subscribe(data => {
        this.myMovies.next(data);
      });
  }

}
