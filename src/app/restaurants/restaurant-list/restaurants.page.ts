import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service'

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  restaurants: any[];
  favorites: any[];

  constructor(private restaurantService: RestaurantsService) { }

  ngOnInit() {

    this.restaurantService
      .listRestaurants()
      .subscribe(response => this.restaurants = response);

    this.restaurantService
      .listFavorites()
      .subscribe(response => this.favorites = response);
  }

  setFavorite(restaurantId: string) {
    this.restaurantService.createFavorite(restaurantId).subscribe(() => {
      this.favorites.push(this.restaurants.filter(r => r.id === restaurantId)[0]);
    });
  }

  removeFavorite(restaurantId: string) {
    this.restaurantService.deleteFavorite(restaurantId).subscribe(() => {
      this.favorites.splice(this.favorites.findIndex(({id}) => id == restaurantId), 1);
    });
  }

  isFavorite(restaurantId: string): Boolean {

    let result: Boolean = false;

    this.favorites.some(i => {
      if (i.id === restaurantId) {
        result = true;
        return true;
      }
      return false;
    });

    return result;
  }

}
