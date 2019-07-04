import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Storage } from '@ionic/storage';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  path = 'http://localhost:3000/credentials';

  constructor(private http: HttpClient, private storage: Storage) { }


  registerUser(user: User) {

    return this.http.post(this.path + '/signup', user).pipe(catchError(error => {
      console.log(error)
      return throwError(error);
    }));
  }

  login(login: any) {
    return this.http.post<any>(this.path + '/login', login);
  }


}
