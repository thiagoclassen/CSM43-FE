import { Component, OnInit } from '@angular/core';
import { MainCourseService } from '../main.service';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { TokenService } from '../../guard/token.service';
import { ActivatedRoute } from '@angular/router';
import { OverlayService } from 'src/app/common/services/overlay.service';

@Component({
	selector: 'app-main-course-list',
	templateUrl: './main-course-list.page.html',
	styleUrls: ['./main-course-list.page.scss'],
})
export class MainCourseListPage {
	private restaurantId = null;
	private restaurant = null;
	private mainCourseList = [];
	private isEmployee = false;
	constructor(
		private route: ActivatedRoute,
		private mainCourseService: MainCourseService,
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
		this.mainCourseService.listMainCourses(this.restaurantId)
			.subscribe(mainCourseListResponse => {
				this.mainCourseList = mainCourseListResponse;
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
