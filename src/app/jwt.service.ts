import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators/map";

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private auth_token;
  private authenticationURL: string = "http://localhost:8080/login";

  constructor(private httpClient:HttpClient) {
  }

  authenticate(username:string, password:string):Observable<boolean> {

    return this.httpClient
      .post<any>(this.authenticationURL, {
        username: username, password: password
      }, {observe: 'body'})
      .pipe(map(body => {
        this.auth_token = body;
        console.log(this.auth_token);
        return body != null;
      }));
  }

  public authenticated():boolean {
    return this.auth_token != null;
  }

}
