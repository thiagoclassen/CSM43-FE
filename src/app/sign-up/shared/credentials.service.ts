import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  path = 'http://localhost:3000/credentials';

  constructor(private http: HttpClient) { }


  registerUser(user: User) {

    const options = {
      body: user
    };

    return this.http.post(this.path, user);
  }



}
