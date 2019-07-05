import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-view',
  templateUrl: './reservation-view.page.html',
  styleUrls: ['./reservation-view.page.scss'],
})
export class ReservationViewPage implements OnInit {

  private reservation: any;
  private reservationId: string;
  private restaurantId: string;

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService
  ) { }

  ngOnInit() {
    this.reservationId = this.route.snapshot.paramMap.get('reservationId');
    this.restaurantId = this.route.snapshot.paramMap.get('restaurantId');
    this.reservationService.getReservation(this.restaurantId, this.reservationId).subscribe(response => {
      this.reservation = response;
    });
  }

}
