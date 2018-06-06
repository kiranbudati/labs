import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate() {
        if (localStorage.getItem('user') != null) {
            return true;
        } else {
            if (localStorage.getItem('userType') === 'mentor') {
                this.router.navigate(['/mentor']);
            } else {
                this.router.navigate(['/login']);
                return false;
            }
            // this.router.navigate(['/login']);
            // return false;
        }
    }
}
