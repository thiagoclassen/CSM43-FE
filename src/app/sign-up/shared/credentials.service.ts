import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  path = 'http://localhost:3000/credentials';

  constructor(private http: HttpClient) { }


  registerUser(user) {

    const options = {
      body: user
    };

    return this.http.post(this.path, options.body);
  }



}
