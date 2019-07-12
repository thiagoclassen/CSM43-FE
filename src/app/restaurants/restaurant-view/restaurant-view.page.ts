import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../restaurants.service';
import { Restaurant } from '../restaurant';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { TokenService } from '../../guard/token.service';

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
  private reservationsList: any[] = [];
  private isEmployee = false;

  constructor(
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService,
    private localNotifications: LocalNotifications,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.restaurant = new Restaurant();
    this.tableOptions = [];
    this.restaurantId = this.route.snapshot.paramMap.get('id');
    this.restaurantsService.getRestautant(this.restaurantId).subscribe(response => {
      this.restaurant = response;
      this.loadTableOptions();
      this.verifyEmployeeUser();
    });
    

    //this.restaurantsService.getReservationList(this.restaurantId).subscribe(response => this.reservationsList = response);

    //this.setNotification();

  }

  loadTableOptions() {
    for (let idx = 1; idx <= this.restaurant.tomorrowAvailableTables; idx++) {
      this.tableOptions.push(idx);
    }
  }

  verifyEmployeeUser() {
		let userIdLogin = this.tokenService.getUserId();
		this.restaurant.employees.forEach(employee => {
			if (userIdLogin === employee.id) {
        this.isEmployee = true;
        this.restaurantsService.getReservationList(this.restaurantId).subscribe(response => {this.reservationsList = response; console.log(this.reservationsList)});
			}
		});
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
