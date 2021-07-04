import { Injectable } from '@angular/core';
import { UserService } from '../../users/user.service';
import { HttpClient } from '@angular/common/http';
import { map, count } from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import { Observable } from '../../../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  signUp(username: string,name:string, password: string):Observable<any> {
  
     //updated: Dont change this now
    //return this.http.post<any>(environment.apiUrl+`/v1/auth/register`, { email:username,name:name, password })
	return this.http.post<any>(environment.apiUrl+`/auth/register`, { email:username,name:name, password })
        .pipe(map(user => {
            // sign Up successful if there's a jwt token in the response
            
            return user;
        }));
  }
}
