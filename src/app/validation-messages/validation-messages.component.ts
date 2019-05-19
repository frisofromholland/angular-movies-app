import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {bloomAdd} from "@angular/core/src/render3/di";

@Component({
  selector: 'validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.css']
})
export class ValidationMessagesComponent implements OnInit {

  @Input() control: FormControl;

  constructor() { }

  ngOnInit() {
  }

  get validationMessage(){

    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && !this.control.pristine) {

        if ('required' == propertyName){
          return 'Dit veld is verplicht';
        } else if('minLength'){
          let minLength = this.control.errors[propertyName].requiredLength.toString();
          return `Dit veld heeft minimaal ${minLength} karakters`;
        } else {
          return propertyName;
        }

      }
    }

    return null;
  }

}
