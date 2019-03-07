import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators/map";
import {SessionStorageService} from "ngx-webstorage";


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private SESSION_KEY_JWT_TOKEN:string = 'jwtToken';
  private authenticationURL:string = 'http://localhost:8080/login';
  private refreshURL:string = '"http://localhost:8080/updatemovies"';


  constructor(private httpClient:HttpClient, private sessionStorageService:SessionStorageService) {
  }

  authenticate(username:string, password:string):Observable<boolean> {

    return this.httpClient
      .post<any>(this.authenticationURL, {
        username: username, password: password
      }, {observe: 'body'})
      .pipe(map(body => {
        this.sessionStorageService.store(this.SESSION_KEY_JWT_TOKEN, body);
        return body != null;
      }));
  }

  public authenticated():boolean {
    return this.sessionStorageService.retrieve(this.SESSION_KEY_JWT_TOKEN);
  }

  public refreshMovies(){
    this.httpClient.post(
      this.refreshURL, {}, {headers:{'Authorization':this.sessionStorageService.retrieve(this.SESSION_KEY_JWT_TOKEN)}}
      ).pipe(map(body => console.log(body)));
  }

}
