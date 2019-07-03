import { Injectable, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokenService implements OnInit {

  constructor(private storage: Storage) { }

  private token: any = null;

  ngOnInit() {
    this.storage.get("token").then(token => this.token = token);
  }

  getToken() {
    if (this.token == null) {
      this.storage.get("token").then(token => {
        this.token = token;
        return this.token;
      });
    } else {
      return this.token;
    }
  }

}
