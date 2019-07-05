import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { Restaurant } from "../restaurant";

@Component({
  selector: 'app-my-restaurant',
  templateUrl: './my-restaurant.page.html',
  styleUrls: ['./my-restaurant.page.scss'],
})
export class MyRestaurantPage implements OnInit {

  private restaurants: any[];

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.getMyRestaurant().subscribe(response => {
      this.restaurants = response;
    });
  } 

}
