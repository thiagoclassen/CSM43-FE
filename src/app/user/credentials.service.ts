import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Storage } from '@ionic/storage';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { SERVER } from '../env/server';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  path = SERVER + '/credentials';

  constructor(private http: HttpClient, private storage: Storage) { }


  registerUser(user: User) {

    return this.http.post<any>(this.path + '/signup', user).pipe(catchError(error => {
      console.log(error)
      return throwError(error);
    }));
  }

  login(login: any) {
    return this.http.post<any>(this.path + '/login', login);
  }

  listUsers(): Observable<any[]> {
    return this.http.get<any[]>(SERVER + '/users');
  }

}
