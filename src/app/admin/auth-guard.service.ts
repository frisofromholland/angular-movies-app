import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import {JwtService} from "../jwt.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router:Router, private jwtService:JwtService) {
  }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean {

    if (!this.jwtService.authenticated()) {
      this.router.navigateByUrl("/login");
      return false;
    } else {
      return true;
    }
  }
}
