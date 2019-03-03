import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router"
import { AppComponent } from "./app.component";
import { ModelModule } from "./model/model.module";
import { SearchModule } from "./search/search.module";
import { LoginModule } from "./login/login.module";
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { MoviesModule } from './movies/movies.module';
import { NgxWebstorageModule } from "ngx-webstorage";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCheckboxModule,
  MatInputModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    NgxWebstorageModule.forRoot(),
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
