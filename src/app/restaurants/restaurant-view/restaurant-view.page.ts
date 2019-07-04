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

  constructor(
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService
  ) { }

  ngOnInit() {
    this.restaurant = new Restaurant();
    let id = this.route.snapshot.paramMap.get('id');    
    this.restaurantsService.getRestautant(id).subscribe(response => this.restaurant = response);
  }

}
