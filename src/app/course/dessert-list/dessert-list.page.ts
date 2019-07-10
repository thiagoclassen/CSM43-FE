import { Component, OnInit } from '@angular/core';
import { DessertService } from '../dessert.service';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { TokenService } from '../../guard/token.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-dessert-list',
	templateUrl: './dessert-list.page.html',
	styleUrls: ['./dessert-list.page.scss'],
})
export class DessertListPage implements OnInit {
	private restaurantId = null;
	private restaurant = null;
	private dessertList = [];
	private isEmployee = false;
	constructor(
		private route: ActivatedRoute,
		private dessertService: DessertService,
		private restaurantService: RestaurantsService,
		private tokenService: TokenService) { }

	ngOnInit() {
		this.restaurantId = this.route.snapshot.paramMap.get('restaurantId');
		this.restaurantService.getRestautant(this.restaurantId)
			.subscribe(restaurantResponse => {
				this.restaurant = restaurantResponse;
				if (this.restaurant) {
					this.verifyEmployeeUser();
				}
			});
		this.dessertService.listDesserts(this.restaurantId)
			.subscribe(dessertListResponse => {
				this.dessertList = dessertListResponse;
			});
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
