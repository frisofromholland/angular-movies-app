import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators/map";
import {SessionStorageService} from "ngx-webstorage";
import {BACKEND_URL} from "./app.constants";
import {errorObject} from "rxjs/internal-compatibility";
import {UpdateResult} from "./model/update.result";


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private SESSION_KEY_JWT_TOKEN:string = 'jwtToken';
  private authenticationURL:string = BACKEND_URL + 'login';
  private refreshURL:string = BACKEND_URL + 'updatemovies';


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

  public refreshMovies() : Observable<UpdateResult>{

    return this.httpClient.post<UpdateResult>(
      this.refreshURL, {observe: 'response'}
      ).pipe(response => {
      return response;
    });

  }

}
