import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../restaurants.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-view',
  templateUrl: './restaurant-view.page.html',
  styleUrls: ['./restaurant-view.page.scss'],
})
export class RestaurantViewPage implements OnInit {

  private restaurant: Restaurant;
  private tableOptions: number[];
  private tableReservation: number;
  private restaurantId: string;

  constructor(
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService
  ) { }

  ngOnInit() {
    this.restaurant = new Restaurant();
    this.tableOptions = [];
    this.restaurantId = this.route.snapshot.paramMap.get('id');
    this.restaurantsService.getRestautant(this.restaurantId).subscribe(response => {
      this.restaurant = response;
      this.loadTableOptions();
    });
  }

  loadTableOptions() {
    for (let idx = 1; idx <= this.restaurant.tomorrowAvailableTables; idx++) {
      this.tableOptions.push(idx);
    }
  }

  createReservation() {
    this.restaurantsService.createReservation(this.restaurantId, this.tableReservation).subscribe(response => console.log(response));
  }

}
