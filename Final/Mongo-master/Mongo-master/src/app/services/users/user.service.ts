import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Observable,Subject } from '../../../../node_modules/rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    // private users: any = [
    //     {
    //         username: 'admin',
    //         password: 'admin',
    //     },
    //     {
    //         username: 'oNionUxx',
    //         password: 'Red12345',
    //     },
    //     {
    //         username: 'Jarvis',
    //         password: 'Purple789',
    //     },
    // ];

    public currentUser: Subject<any>; // Sotore the Current User 

    constructor(private http:HttpClient) {}

    get usersData() {
        return [];
    }

    // set Current User Loged In
    setCurrentUser(user:any):void{
        this.currentUser.next(user);
    }

    // get the Current User Loged In
    getCurrentUser():any{
       this.currentUser;
    }
   
    // login the User this Service will hit the API 
    login(username: string, password: string):Observable<any> {
        return this.http.post<any>(environment.apiUrl+`/auth/login`, { email:username, password });
    }


}
