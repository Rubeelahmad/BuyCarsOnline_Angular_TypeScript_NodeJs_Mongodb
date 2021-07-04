import { Injectable } from '@angular/core';
import { UserService } from '../../users/user.service';
import { Subject } from '../../../../../node_modules/rxjs';


@Injectable({
    providedIn: 'root',
})
export class LoginService {

    

    constructor(private userService:UserService) {
    }


    login(username: string, password: string):void {
        this.userService.login(username,password).subscribe(res=>{
            if(res){
                if(res.user){
                    localStorage.setItem('isUserLoggedIn', JSON.stringify(true));
                    localStorage.setItem('tokens', res.tokens);
                    this.userService.setCurrentUser({...res.user,username:res.user.name});
                }else{
                    localStorage.setItem('isUserLoggedIn', JSON.stringify(false));
                    localStorage.setItem('tokens',null);
                }  
            }
        });
    }

    public isLoggedIn() {
        return JSON.parse(localStorage.getItem('isUserLoggedIn'));
    }
}
