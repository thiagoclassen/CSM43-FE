import { Component, OnInit } from '@angular/core';

import { StarterCourseService } from '../starter.service';
import { TokenService } from '../../guard/token.service';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-starter-course-view',
	templateUrl: './starter-course-view.page.html',
	styleUrls: ['./starter-course-view.page.scss'],
})
export class StarterCourseViewPage implements OnInit {
	private starterCourseId = null;
	private restaurantId = null;
	private starterCourse = null;
	private isEmployee = false;
	private restaurant = null;
	constructor(
		private route: ActivatedRoute,
		private starterCourseService: StarterCourseService,
		private tokenService: TokenService,
		private restaurantService: RestaurantsService) { }

	ngOnInit() {
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
			});
	}

	deleteStarterCourse(starterCourseId) {
		this.starterCourseService.removeStarterCourse(this.restaurantId, starterCourseId).subscribe(response => console.log(response));
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
