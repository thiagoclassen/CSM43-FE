import { Component, OnInit } from '@angular/core';

import { DessertService } from '../dessert.service';
import { TokenService } from '../../guard/token.service';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { OverlayService } from 'src/app/common/services/overlay.service';

@Component({
	selector: 'app-dessert-view',
	templateUrl: './dessert-view.page.html',
	styleUrls: ['./dessert-view.page.scss'],
})
export class DessertViewPage {
	private dessertId = null;
	private restaurantId = null;
	private dessert = null;
	private isEmployee = false;
	private restaurant = null;
	constructor(
		private activatedRoute: ActivatedRoute,
		private location: Location,
		private dessertService: DessertService,
		private tokenService: TokenService,
		private restaurantService: RestaurantsService,
		private overlayService: OverlayService) { }

	async ionViewWillEnter() {
		let loading = await this.overlayService.loading();
		this.restaurantId = this.activatedRoute.snapshot.paramMap.get('restaurantId');
		this.dessertId = this.activatedRoute.snapshot.paramMap.get('id');
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
				loading.dismiss();
			});
	}

	async deleteDessert(dessertId) {
		let loading = await this.overlayService.loading();
		this.dessertService.removeDessert(this.restaurantId, dessertId)
			.subscribe(() => {
				this.location.back();
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
