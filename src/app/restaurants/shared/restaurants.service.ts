import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  path = 'http://localhost:3000/restaurants';

  constructor(private http: HttpClient) { }

  getRestaurants(){
    // TODO
  }

}
