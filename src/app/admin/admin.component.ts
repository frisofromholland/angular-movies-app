import {Component, OnInit} from '@angular/core';
import {JwtService} from "../jwt.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private jwtService: JwtService) {
  }

  ngOnInit() {
  }

  onRefreshClick() {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    this.jwtService.refreshMovies();
    console.log("#####################################################################");
  }

}
