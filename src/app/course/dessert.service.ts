import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DessertService {

  constructor(private http: HttpClient) { }

  listDesserts() {

    let url = '/users/:userId/restaurants/:restaurantId/desserts';

    return this.http.get(url);

  }

  getDessert() {

    let url = '/users/:userId/restaurants/:restaurantId/desserts/:dessertId';

    return this.http.get(url);

  }

  createDessert(dessert) {

    let url = '/users/:userId/restaurants/:restaurantId/desserts';

    return this.http.post(url, dessert);

  }

  removeDessert() {

    let url = '/users/:userId/restaurants/:restaurantId/desserts/:dessertId';

    return this.http.delete(url);

  }

}
