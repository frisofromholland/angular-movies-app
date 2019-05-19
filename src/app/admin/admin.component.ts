import {Component, OnInit} from '@angular/core';
import {JwtService} from "../jwt.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public responseMessage: string;

  constructor(private jwtService: JwtService) {
  }

  ngOnInit() {
  }

  onRefreshClick() {

    this.jwtService.refreshMovies()
      .subscribe(body => {
        if (body.result == 'UPDATED') {
          this.responseMessage = 'Films zijn bijgewerkt';
        } else if (body.result == 'SKIPPED') {
          this.responseMessage = 'Films zijn niet bijgewerkt';
        } else {
          this.responseMessage = 'Onduidelijk of de films zijn bijgewerkt';
        }
      }, err => {
        this.responseMessage = 'Er is een fout opgetreden bij het bijwerken van de films: ' + err.toString();
      })
  }



}
