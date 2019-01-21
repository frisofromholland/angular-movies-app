import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators/map";
import {SessionStorageService} from "ngx-webstorage";

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private authenticationURL:string = "http://localhost:8080/login";

  constructor(private httpClient:HttpClient, private sessionStorageService:SessionStorageService) {
  }

  authenticate(username:string, password:string):Observable<boolean> {

    return this.httpClient
      .post<any>(this.authenticationURL, {
        username: username, password: password
      }, {observe: 'body'})
      .pipe(map(body => {
        this.sessionStorageService.store('jwtToken', body);
        return body != null;
      }));
  }

  public authenticated():boolean {
    return this.sessionStorageService.retrieve('jwtToken');
  }

}