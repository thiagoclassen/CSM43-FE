import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER } from '../env/server';
import { TokenService } from "../guard/token.service";

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  restaurants_path = SERVER + '/restaurants/';

  user_path = SERVER + '/users/2fe50d3a-bf6c-4283-a4b9-a49b628f21c3/restaurants/';

  reservations_path = SERVER + '/users/:userId/restaurants/:restaurantId/reservations';

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  listRestaurants(): Observable<any[]> {
    return this.http.get<any[]>(this.restaurants_path);
  }

  getRestautant(id): Observable<any> {
    console.log('called id:', id)
    return this.http.get<any>(this.restaurants_path + id);
  }

  createRestaurant(restaurant: any): Observable<any> {
    return this.http.post(this.user_path, restaurant);
  }

  createReservation(restaurantId: string, tables: number) {

    let url = this.reservations_path.replace(':restaurantId', restaurantId);
    let userId = this.tokenService.getUserId();
    url = url.replace(':userId', userId);
    const reservation = { tables, date: this.tomorrowDate() }

    return this.http.post(url, reservation);
  }

  tomorrowDate() {
    const today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow;
  }

}
