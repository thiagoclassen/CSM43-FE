import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompleteCourseService } from '../complete.service';
import { TokenService } from 'src/app/guard/token.service';
import { RestaurantsService } from 'src/app/restaurants/restaurants.service';
import { Location } from '@angular/common';
import { OverlayService } from 'src/app/common/services/overlay.service';

@Component({
	selector: 'app-complete-course-view',
	templateUrl: './complete-course-view.page.html',
	styleUrls: ['./complete-course-view.page.scss'],
})
export class CompleteCourseViewPage {
	private completeCourseId = null;
	private restaurantId = null;
	private completeCourse = null;
	private isEmployee = false;
	private restaurant = null;
	constructor(
		private activatedRoute: ActivatedRoute,
		private location: Location,
		private router: Router,
		private completeCourseService: CompleteCourseService,
		private tokenService: TokenService,
		private restaurantService: RestaurantsService,
		private overlayService: OverlayService) { }

	async ionViewWillEnter() {
		let loading = await this.overlayService.loading();
		this.restaurantId = this.activatedRoute.snapshot.paramMap.get('restaurantId');
		this.completeCourseId = this.activatedRoute.snapshot.paramMap.get('id');
		this.restaurantService.getRestautant(this.restaurantId)
			.subscribe(restaurantResponse => {
				this.restaurant = restaurantResponse;
				if (this.restaurant) {
					this.verifyEmployeeUser();
				}
			});
		this.completeCourseService.getCompleteCourse(this.restaurantId, this.completeCourseId)
			.subscribe(completeCourseResponse => {
				this.completeCourse = completeCourseResponse;
				loading.dismiss();
			});
	}

	async deleteDessert(completeCourseId) {
		let loading = await this.overlayService.loading();
		this.completeCourseService.removeCompleteCourse(this.restaurantId, this.completeCourseId)
			.subscribe(() => {
				this.router.navigateByUrl(`restaurant/${this.restaurantId}/complete-courses`);
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
