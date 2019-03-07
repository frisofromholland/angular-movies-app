import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {MatExpansionModule} from "@angular/material";

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule,MatExpansionModule],
  exports: [SearchComponent]
})
export class SearchModule { }
