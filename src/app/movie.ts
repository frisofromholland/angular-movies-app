import { MovieDetails } from "./moviedetails";
import { Screening } from "./screening";

export class Movie {


  title: string;
  //movieDetails: MovieDetails;
  trailerLink: String;
  screenings: Screening[];
  favorite: boolean;

  constructor(title: string,
    movieDetails: MovieDetails,
    trailerLink: String,
    screenings: Screening[],
    favorite: boolean) {

    this.title = title;
    this.favorite = favorite;
    //this.movieDetails = movieDetails;
    this.trailerLink = trailerLink;
    this.screenings = screenings;
  }

  // [{ "id": "5c02a9fbcba8190a8d9d7d96", "title": "A Land Shaped By women", "movieDetails": { "poster": null, "actors": null, "director": null, "rated": null, "plot": null, "runtime": null, "year": null, "title": null }, "trailerLink": null, "screenings": [{ "cinema": { "name": "Melkweg Cinema", "city": "amsterdam" }, "startDateTime": "2018-12-03T19:00:00" }, { "cinema": { "name": "Melkweg Cinema", "city": "amsterdam" }, "startDateTime": "2018-12-03T21:30:00" }] }]








}
