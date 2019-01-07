import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router"
import { AppComponent } from "./app.component";
import { ModelModule } from "./model/model.module";
import { SearchModule } from "./search/search.module";
import {LoginModule} from "./login/login.module";

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
    RouterModule.forRoot([
      {path: 'movies', component: AppComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
