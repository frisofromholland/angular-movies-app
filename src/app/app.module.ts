import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router"
import { AppComponent } from "./app.component";
import { ModelModule } from "./model/model.module";
import { SearchModule } from "./search/search.module";
import {LoginModule} from "./login/login.module";
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ModelModule,
    SearchModule,
    LoginModule,
    AdminModule,
    MoviesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
