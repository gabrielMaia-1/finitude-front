import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthInterceptorService } from './auth-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _authInterceptor: AuthInterceptorService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(state.url == '/adm/login'){
      return this._authInterceptor.isAuthenticated() ? this._router.parseUrl('/adm') : true;
    } else {
      return this._authInterceptor.isAuthenticated() ? true : this._router.parseUrl('/adm/login');
    }
  }
}
