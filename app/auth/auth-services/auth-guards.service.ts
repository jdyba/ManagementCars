import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      console.log(this.authService.user);
    if (this.authService.user || this.authService.user === undefined) {
      return true;
    } else {
      this.router.navigate(['/auth', {name: 'Add bus'}]);
      return false;
    }
  }
}
