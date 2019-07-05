import { Component, OnInit } from '@angular/core';
import { ReservationService } from "../reservation.service";
import { Reservation } from "../reservation";

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.page.html',
  styleUrls: ['./reservations-list.page.scss'],
})
export class ReservationsListPage implements OnInit {

  reservations: Reservation[];

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {

    this.reservationService
      .listReservations()
      .subscribe(response => this.reservations = response);
  }

}
