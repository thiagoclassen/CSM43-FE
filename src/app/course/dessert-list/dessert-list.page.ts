import { Component, OnInit, OnDestroy } from '@angular/core';
import { DessertService } from '../dessert.service';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { TokenService } from '../../guard/token.service';
import { ActivatedRoute } from '@angular/router';
import { OverlayService } from '../../common/services/overlay.service';

@Component({
	selector: 'app-dessert-list',
	templateUrl: './dessert-list.page.html',
	styleUrls: ['./dessert-list.page.scss'],
})
export class DessertListPage {
	private restaurantId = null;
	private restaurant = null;
	private dessertList = [];
	private isEmployee = false;
	constructor(
		private route: ActivatedRoute,
		private dessertService: DessertService,
		private restaurantService: RestaurantsService,
		private tokenService: TokenService,
		private overlayService: OverlayService) { }

	async ionViewWillEnter() {
		let loading = await this.overlayService.loading();
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
				loading.dismiss();
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
