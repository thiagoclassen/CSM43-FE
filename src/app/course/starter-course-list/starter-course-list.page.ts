import { Component, OnInit } from '@angular/core';
import { StarterCourseService } from '../starter.service';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { TokenService } from '../../guard/token.service';
import { ActivatedRoute } from '@angular/router';
import { OverlayService } from 'src/app/common/services/overlay.service';

@Component({
	selector: 'app-starter-course-list',
	templateUrl: './starter-course-list.page.html',
	styleUrls: ['./starter-course-list.page.scss'],
})
export class StarterCourseListPage{
	private restaurantId = null;
	private restaurant = null;
	private starterCourseList = [];
	private isEmployee = false;
	constructor(
		private route: ActivatedRoute,
		private starterCourseService: StarterCourseService,
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
		this.starterCourseService.listStarterCourses(this.restaurantId)
			.subscribe(starterCourseListResponse => {
				this.starterCourseList = starterCourseListResponse;
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
