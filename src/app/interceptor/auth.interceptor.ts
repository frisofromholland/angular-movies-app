import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import {Observable} from 'rxjs/internal/Observable';

export class AuthInterceptor implements HttpInterceptor {
  constructor(private localStorage: LocalStorageService, private sessionStorage: SessionStorageService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('********************************************************************1' + request.url)
    if (!request
      || !request.url
      || (/^http/.test(request.url)
          && request.url.includes('localhost:4200'))) {
      return next.handle(request);
    }

    console.log('********************************************************************2' + request.url)
    const token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('jwtToken');
    if (!!token) {
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      });
    }
    console.log(request.headers);
    return next.handle(request);
  }
}
