import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../shared/restaurants.service'

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.page.html',
  styleUrls: ['./restaurant-form.page.scss'],
})
export class RestaurantFormPage implements OnInit {

  constructor(private restaurantService: RestaurantsService) { }

  private restaurant = {};

  ngOnInit() {
  }

  registerRestaurant(restaurant:any){
    this.restaurantService
      .createRestaurant(this.restaurant)
      .subscribe(response => console.log(response));
  }

}
