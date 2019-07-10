import { Component, OnInit } from '@angular/core';

import { MainCourseService } from '../main.service';
import { TokenService } from '../../guard/token.service';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-main-course-view',
	templateUrl: './main-course-view.page.html',
	styleUrls: ['./main-course-view.page.scss'],
})
export class MainCourseViewPage implements OnInit {
	private mainCourseId = null;
	private restaurantId = null;
	private mainCourse = null;
	private isEmployee = false;
	private restaurant = null;
	constructor(
		private route: ActivatedRoute,
		private mainCourseService: MainCourseService,
		private tokenService: TokenService,
		private restaurantService: RestaurantsService) { }

	ngOnInit() {
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

			});
	}

	deleteMainCourse(mainCourseId) {
		this.mainCourseService.removeMainCourse(this.restaurantId, mainCourseId).subscribe(response => console.log(response));
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
