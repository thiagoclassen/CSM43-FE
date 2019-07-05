import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../restaurants.service';
import { Restaurant } from '../restaurant';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-restaurant-view',
  templateUrl: './restaurant-view.page.html',
  styleUrls: ['./restaurant-view.page.scss'],
})
export class RestaurantViewPage implements OnInit {

  private restaurant: Restaurant;
  private restaurantId: string;
  private tableOptions: number[];
  private tableReservation: number;

  constructor(
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService,
    private localNotifications: LocalNotifications
  ) { }

  ngOnInit() {
    this.restaurant = new Restaurant();
    this.tableOptions = [];
    this.restaurantId = this.route.snapshot.paramMap.get('id');
    this.restaurantsService.getRestautant(this.restaurantId).subscribe(response => {
      this.restaurant = response;
      this.loadTableOptions();
    });
    this.setNotification();
  }

  loadTableOptions() {
    for (let idx = 1; idx <= this.restaurant.tomorrowAvailableTables; idx++) {
      this.tableOptions.push(idx);
    }
  }

  createReservation() {
    this.restaurantsService.createReservation(this.restaurantId, this.tableReservation).subscribe(response => console.log(response));
  }

  setNotification() {
    console.log('called');
    this.localNotifications.schedule([{
      id: 1,
      title: 'Local ILocalNotification Example',
      text: 'Multi ILocalNotification 2',
      icon: 'http://example.com/icon.png'
    }]);
  }

}
