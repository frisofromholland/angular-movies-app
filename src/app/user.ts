import { Movie } from "./movie";
import { MovieDetails } from "./moviedetails";
import { Screening } from "./screening";
import { Cinema } from "./cinema";

export class User {

  name: string;
  movies: Movie[];

  constructor() {
    this.name = "Marieke";

    var movieDetails: MovieDetails = new MovieDetails("Title",
      "2018",
      "AA",
      "runtime",
      "plotplot plotplot plotplotplot plotplotplot plot plotplot plotplot plotplotplot plotplotplot plot plotplot plotplot plotplotplot plotplotplot plot plotplot plotplot plotplotplot plotplotplot plot plotplot plotplot plotplotplot plotplotplot plot plotplot plotplot plotplotplot plotplotplot plot END",
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg?antiCache=1543704859478",
      "actors",
      "director");
    var screenings: Screening[] = [new Screening("2018-11-31", new Cinema("Eye", "Amsterdam"))]

    this.movies = [new Movie("Antman", movieDetails, "www.google.nl", screenings, false),
    new Movie("Superjuffie", movieDetails, "www.google.nl", screenings, true),
    new Movie("De Grinch (NL)", movieDetails, "www.google.nl", screenings, false),
    new Movie("De kleine zeemeerin", movieDetails, "www.google.nl", screenings, true),
    new Movie("Incredibles 2 (NL)", movieDetails, "www.google.nl", screenings, true),
    new Movie("Sing (NL)", movieDetails, "www.google.nl", screenings, false),
    new Movie("Sinterklaas en de Vlucht door de Lucht", movieDetails, "www.google.nl", screenings, false)]
  }

  setMovies(movies: Movie[]) {
    this.movies = this.movies;
  }

  getMovies(){
    return this.movies;
  }

}
