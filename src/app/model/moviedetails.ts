export class MovieDetails {

    title: string;
    year: string;
    rated: string;
    runtime: string;
    plot: string;
    poster: string;
    actors: string;
    director: string;

    constructor(title: string,
        year: string,
        rated: string,
        runtime: string,
        plot: string,
        poster: string,
        actors: string,
        director: string) {
        this.year = year;
        this.rated = rated;
        this.runtime = runtime;
        this.plot = plot;
        this.poster = poster;
        this.actors = actors;
        this.director = director;
    }

}
