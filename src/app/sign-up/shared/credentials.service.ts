import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  path = 'http://localhost:3000/user';

  constructor(private http:HttpClient) { }


  registerUser(user) : Observable<User> {

    const options = {
      body: {
        user : user
      }
    };

    return this.http.post<User>(this.path, options.body);
  }



}
