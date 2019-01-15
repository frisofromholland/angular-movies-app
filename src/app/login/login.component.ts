import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import {JwtService} from "../jwt.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username:string;
  public password:string;
  public errorMessage:string;

  constructor(private jwtService:JwtService, private router:Router) {
  }

  ngOnInit() {
  }

  submitLogin(form:NgForm) {
    //if (form.valid) {
    this.jwtService.authenticate(this.username, this.password)
      .subscribe(response => {
        if (response) {
          this.router.navigateByUrl("/admin");
        } else {
          this.errorMessage = "Gebruikersnaam of wachtwoord fout";
        }
      });
    // }
  }

}
