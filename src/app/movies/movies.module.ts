import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { SearchModule } from '../search/search.module'
import { MoviesComponent } from './movies.component';

@NgModule({
  declarations: [MoviesComponent],
  imports: [CommonModule, FormsModule, SearchModule],
  exports: [MoviesComponent]
})
export class MoviesModule {
}
