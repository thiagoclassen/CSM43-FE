import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER } from '../env/server';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  restaurants_path = SERVER + '/restaurants/';

  user_path = SERVER + '/users/:userId/restaurants/';

  reservations_path = SERVER + '/users/:userId/restaurants/:restaurantId/reservations';

  favorites_path = SERVER + '/users/:userId/restaurants/:restaurantId/favorites';

  list_favorites_path = SERVER + '/users/:userId/favorites';

  employee_path = SERVER + '/users/:userId/restaurants/:restaurantId/employees';

  constructor(private http: HttpClient) { }

  listRestaurants(): Observable<any[]> {
    return this.http.get<any[]>(this.restaurants_path);
  }

  getRestautant(id: string): Observable<any> {
    return this.http.get<any>(this.restaurants_path + id);
  }

  createRestaurant(restaurant: any): Observable<any> {
    return this.http.post(this.user_path, restaurant);
  }

  createReservation(restaurantId: string, tables: number) {

    let url = this.reservations_path.replace(':restaurantId', restaurantId);
    const reservation = { tables, date: this.tomorrowDate() }

    return this.http.post(url, reservation);
  }

  createFavorite(restaurantId: string) {
    let url = this.favorites_path.replace(':restaurantId', restaurantId);
    return this.http.post(url, {});
  }

  deleteFavorite(restaurantId: string) {
    let url = this.favorites_path.replace(':restaurantId', restaurantId);
    return this.http.delete(url, {});
  }

  listFavorites(): Observable<any[]> {
    return this.http.get<any[]>(this.list_favorites_path);
  }

  getMyRestaurant(): Observable<any[]> {
    return this.http.get<any[]>(this.user_path + 'owner');
  }

  hireEmployee(restaurantId: string, employees: any) {
    let url = this.employee_path.replace(':restaurantId', restaurantId);
    return this.http.post(url, employees);
  }

  tomorrowDate() {
    const today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow;
  }


}
