import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER } from '../env/server';
import { Restaurant } from './restaurant';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { DatePipe } from '@angular/common';

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


  constructor(private http: HttpClient, private localNotification: LocalNotifications, private datePipe: DatePipe) { }

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
    const reservation = { tables, date: this.tomorrowDate() };

    this.setNotification();
    console.log(reservation);

    return this.http.post(url, reservation);
  }

  getReservationList(restaurantId: string): Observable<any[]> {
    let url = this.reservations_path.replace(':restaurantId', restaurantId);
    return this.http.get<any[]>(url);
  }

  setNotification() {
    console.log('called');
    this.localNotification.schedule([{
      id: 1,
      title: 'Reserva',
      text: 'Vocë criou uma reserva!',
      // icon: 'http://example.com/icon.png'
    }]);
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
