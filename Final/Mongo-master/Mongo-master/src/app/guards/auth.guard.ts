import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/authentication/login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private loginService: LoginService) {}

    canActivate(): boolean {
        console.log(" Is there ");
        if (this.loginService.isLoggedIn()) {
            console.log(" True");
            return true;
        } else {
            this.router.navigate(['']);
            return false;
        }
    }
}
