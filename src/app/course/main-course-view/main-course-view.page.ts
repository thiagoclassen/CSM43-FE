import { Component, OnInit } from '@angular/core';

import { MainCourseService } from '../main.service';
import { TokenService } from '../../guard/token.service';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { OverlayService } from 'src/app/common/services/overlay.service';

@Component({
	selector: 'app-main-course-view',
	templateUrl: './main-course-view.page.html',
	styleUrls: ['./main-course-view.page.scss'],
})
export class MainCourseViewPage {
	private mainCourseId = null;
	private restaurantId = null;
	private mainCourse = null;
	private isEmployee = false;
	private restaurant = null;
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private location: Location,
		private mainCourseService: MainCourseService,
		private tokenService: TokenService,
		private restaurantService: RestaurantsService,
		private overlayService: OverlayService) { }

	async ionViewWillEnter() {
		let loading = await this.overlayService.loading();
		this.restaurantId = this.route.snapshot.paramMap.get('restaurantId');
		this.mainCourseId = this.route.snapshot.paramMap.get('id');
		this.restaurantService.getRestautant(this.restaurantId)
			.subscribe(restaurantResponse => {
				this.restaurant = restaurantResponse;
				if (this.restaurant) {
					this.verifyEmployeeUser();
				}
			});
		this.mainCourseService.getMainCourse(this.restaurantId, this.mainCourseId)
			.subscribe(mainCourseResponse => {
				this.mainCourse = mainCourseResponse;
				console.log(this.mainCourse);
				loading.dismiss();
			});
	}

	async deleteMainCourse(mainCourseId) {
		let loading = await this.overlayService.loading();
		this.mainCourseService.removeMainCourse(this.restaurantId, mainCourseId).subscribe(() => {
			this.router.navigateByUrl(`restaurant/${this.restaurantId}/main-courses`);
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
