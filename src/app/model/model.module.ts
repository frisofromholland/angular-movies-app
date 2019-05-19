import {NgModule} from "@angular/core";
import {MovieRepository} from "./movie.repository";

@NgModule({
  providers: [MovieRepository]
})
export class ModelModule {
}
