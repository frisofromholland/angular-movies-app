import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {MatExpansionModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ValidationMessagesComponent} from "../validation-messages/validation-messages.component";

@NgModule({
  declarations: [SearchComponent,ValidationMessagesComponent],
  imports: [CommonModule,MatExpansionModule, FormsModule, ReactiveFormsModule],
  exports: [SearchComponent,ValidationMessagesComponent]
})
export class SearchModule { }
