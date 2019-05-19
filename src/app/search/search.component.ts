import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm = new FormGroup({
    title : new FormControl()
  });

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      title: ['',[Validators.required, Validators.minLength(3)]]
    })
  }

  ngOnInit() {

  }

  submitMovieSearch() {
    if(this.searchForm.dirty && this.searchForm.valid){
      alert(`Titel: ${this.searchForm.value.title}`)
    }

  }

}
