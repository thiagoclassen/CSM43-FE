import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'src/app/restaurants/restaurants.service';
import { TokenService } from 'src/app/guard/token.service';
import { OverlayService } from 'src/app/common/services/overlay.service';
import { CompleteCourseService } from '../complete.service';

@Component({
	selector: 'app-complete-course-list',
	templateUrl: './complete-course-list.page.html',
	styleUrls: ['./complete-course-list.page.scss'],
})
export class CompleteCourseListPage {

	private restaurantId = null;
	private restaurant = null;
	private completeCourseList = [];
	private isEmployee = false;
	constructor(
		private route: ActivatedRoute,
		private completeCourseService: CompleteCourseService,
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
		this.completeCourseService.listCompleteCourses(this.restaurantId)
			.subscribe(completeListResponse => {
				this.completeCourseList = completeListResponse;
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
