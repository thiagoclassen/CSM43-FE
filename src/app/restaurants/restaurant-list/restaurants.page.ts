import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service'

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  restaurants : any[];
  
  constructor(private restaurantService:RestaurantsService) {  }

  ngOnInit() {

    this.restaurantService
      .listRestaurants()
      .subscribe(response => this.restaurants = response);
  }

}
