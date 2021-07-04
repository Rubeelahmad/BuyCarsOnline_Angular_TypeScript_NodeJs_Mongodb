import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../../../services/authentication/register/register.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  
  contactForm: FormGroup;
  constructor(private registerService:RegisterService,private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        name: ['', Validators.required],
    });
  }

  onSubmit({value}) {
    console.log(value);
    if (value) {
        this.registerService.signUp(value.email,value.name, value.password).subscribe(res=>{
            if(res){
               console.log(res);
               this.router.navigate(['']);
            }
        });  
    }
}

}
