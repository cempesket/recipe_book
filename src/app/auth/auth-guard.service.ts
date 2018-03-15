import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate, CanLoad {


  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (this.authService.isAuthenticated()) {
      return this.authService.isAuthenticated();
    } else {
      this.router.navigate(['/login']);
    }
  }

  canLoad(route: Route): any {
    if (this.authService.isAuthenticated()) {
      return this.authService.isAuthenticated();
    } else {
      this.router.navigate(['/login']);
    }
  }
}
