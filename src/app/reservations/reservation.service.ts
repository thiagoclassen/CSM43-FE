import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER } from '../env/server';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  list_reservation_path = SERVER + '/users/:userId/reservations/';
  reservation_path = SERVER + '/users/:userId/restaurants/:restaurantId/reservations/:reservationId';

  constructor(private http: HttpClient) { }

  listReservations(): Observable<any[]> {
    return this.http.get<any[]>(this.list_reservation_path);
  }

  getReservation(restaurantId: string, reservationId: string) {
    let url = this.reservation_path.replace(':restaurantId', restaurantId).replace(':reservationId', reservationId);
    url = url.replace(':reservationId', reservationId);

    return this.http.get<any[]>(url);
  }
}
