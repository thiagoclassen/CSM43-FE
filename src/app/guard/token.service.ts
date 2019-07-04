import { Injectable, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokenService implements OnInit {

  constructor(private storage: Storage) { }

  private token: any = null;
  private userId: any = null;

  ngOnInit() {
    this.storage.ready();
    //this.storage.get("token").then(token => this.token = token);
  }

  getToken() {
    if (this.token == null) {
      this.storage.get("token").then(token => {
        this.token = token;
        console.info('Token Service Called, getToken: ', this.token);
        return this.token;
      });
    } else {
      console.info('Token Service Called, cached getToken: ', this.token);
      return this.token;
    }
  }

  getUserId() {
    if (this.userId == null) {
      this.storage.get("userId").then(userId => {
        this.userId = userId;
        console.info('Token Service Called, getUserId: ', this.userId);
        return this.userId;
      });
    } else {
      console.info('Token Service Called, cached getUserId: ', this.userId);
      return this.userId;
    }
  }

  setToken(token: string) {
    this.storage.set('token', token);
    this.token = token;
    console.info('Token Service Called, setToken: ', token);
  }

  setUserId(userId) {
    this.storage.set('userId', userId);
    this.userId = userId;
    console.info('Token Service Called, setUserId: ', userId);
  }

}
