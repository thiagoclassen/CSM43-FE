import { Component, OnInit } from '@angular/core';

import { DessertService } from '../dessert.service';
import { TokenService } from '../../guard/token.service';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dessert-view',
  templateUrl: './dessert-view.page.html',
  styleUrls: ['./dessert-view.page.scss'],
})
export class DessertViewPage implements OnInit {
	private dessertId = null;
	private restaurantId = null;
	private dessert = null;
	private isEmployee = false;
	private restaurant = null;
	constructor(
		private route: ActivatedRoute,
		private dessertService: DessertService,
		private tokenService: TokenService,
		private restaurantService: RestaurantsService) { }

	ngOnInit() {
		this.restaurantId = this.route.snapshot.paramMap.get('restaurantId');
		this.dessertId = this.route.snapshot.paramMap.get('id');
		this.restaurantService.getRestautant(this.restaurantId)
			.subscribe(restaurantResponse => {
				this.restaurant = restaurantResponse;
				if (this.restaurant) {
					this.verifyEmployeeUser();
				}
			});
		this.dessertService.getDessert(this.restaurantId, this.dessertId)
			.subscribe(dessertResponse => {
				this.dessert = dessertResponse;
				console.log(this.dessert);

			});
	}

	deleteDessert(dessertId) {
		this.dessertService.removeDessert(this.restaurantId, dessertId).subscribe(response => console.log(response));
	}
	verifyEmployeeUser() {
		let userIdLogin = this.tokenService.getUserId();
		this.restaurant.employees.forEach(employee => {
			if (userIdLogin === employee.id) {
				this.isEmployee = true;
			}
		});
	}


}
