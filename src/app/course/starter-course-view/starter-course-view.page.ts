import { Component, OnInit } from '@angular/core';

import { StarterCourseService } from '../starter.service';
import { TokenService } from '../../guard/token.service';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OverlayService } from 'src/app/common/services/overlay.service';
import { Location } from '@angular/common';

@Component({
	selector: 'app-starter-course-view',
	templateUrl: './starter-course-view.page.html',
	styleUrls: ['./starter-course-view.page.scss'],
})
export class StarterCourseViewPage {
	private starterCourseId = null;
	private restaurantId = null;
	private starterCourse = null;
	private isEmployee = false;
	private restaurant = null;
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private starterCourseService: StarterCourseService,
		private tokenService: TokenService,
		private location: Location,
		private restaurantService: RestaurantsService,
		private overlayService: OverlayService) { }

	async ionViewWillEnter() {
		let loading = await this.overlayService.loading();
		this.restaurantId = this.route.snapshot.paramMap.get('restaurantId');
		this.starterCourseId = this.route.snapshot.paramMap.get('id');
		this.restaurantService.getRestautant(this.restaurantId)
			.subscribe(restaurantResponse => {
				this.restaurant = restaurantResponse;
				if (this.restaurant) {
					this.verifyEmployeeUser();
				}
			});
		this.starterCourseService.getStarterCourse(this.restaurantId, this.starterCourseId)
			.subscribe(starterCourseResponse => {
				this.starterCourse = starterCourseResponse;
				loading.dismiss();
			});
	}

	async deleteStarterCourse(starterCourseId) {
		let loading = await this.overlayService.loading();
		this.starterCourseService.removeStarterCourse(this.restaurantId, starterCourseId).subscribe(() => {
			this.router.navigateByUrl(`restaurant/${this.restaurantId}/starter-courses`);
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
