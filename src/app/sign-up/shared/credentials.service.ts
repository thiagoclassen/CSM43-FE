import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  path = 'http://localhost:3000/credentials';

  constructor(private http: HttpClient, private storage: Storage) { }


  registerUser(user: User) {

    this.http.post(this.path, user).subscribe(response => console.log(response));
  }

  login(login: any) {   
    return this.http.post<any>(this.path + '/login', login);
  }


}
