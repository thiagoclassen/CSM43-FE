import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../restaurants.service';
import { Restaurant } from '../restaurant';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { TokenService } from '../../guard/token.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

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
    private tokenService: TokenService,
    private callNumber: CallNumber,
    private emailComposer: EmailComposer
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
  }

  loadTableOptions() {
    for (let idx = 1; idx <= this.restaurant.tomorrowAvailableTables; idx++) {
      this.tableOptions.push(idx);
    }
  }

  verifyEmployeeUser() {
    const userIdLogin = this.tokenService.getUserId();
    this.restaurant.employees.forEach(employee => {
      if (userIdLogin === employee.id) {
        this.isEmployee = true;
        this.restaurantsService.getReservationList(this.restaurantId)
          .subscribe(response => this.reservationsList = response);
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

  contactNumber() {
    this.callNumber.callNumber('18001010101', true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  contactEmail() {
    const email = {
      to: 'restaurante@gmail.com',
      subject: 'Contato',
      body: 'teste',
      isHtml: true
    };

    // Send a text message using default options
    this.emailComposer.open(email);


  }

}
