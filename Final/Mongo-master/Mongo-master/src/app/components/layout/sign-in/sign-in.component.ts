import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../../services/authentication/login/login.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
    loginForm: FormGroup;
    user: any;

    constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router) {
        localStorage.setItem('isUserLoggedIn', JSON.stringify(false));
    }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    onSubmit({ value }) {
        if (value) {
            this.loginService.login(value.username, value.password);
            
            this.router.navigate(['/home']);
        }
    }
}
