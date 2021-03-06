import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { SearchModule } from '../search/search.module'
import { MoviesComponent } from './movies.component';
import {
  MatCheckboxModule, MatExpansionModule,
  MatInputModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule
} from "@angular/material";

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    FormsModule,
    SearchModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatPaginatorModule],
  exports: [MoviesComponent]
})
export class MoviesModule {
}
