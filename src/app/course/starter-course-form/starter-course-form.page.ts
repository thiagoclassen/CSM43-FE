import { Component, OnInit } from '@angular/core';
import { StarterCourseService } from '../starter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-starter-course-form',
	templateUrl: './starter-course-form.page.html',
	styleUrls: ['./starter-course-form.page.scss'],
})
export class StarterCourseFormPage implements OnInit {
	private starterCourse;
	private restaurantId;
	private startCourseIdEdit = null;
	private startCourseEdit = null;

	constructor(
		private route: ActivatedRoute,
		private starterCourseService: StarterCourseService) {
		this.starterCourse = {
			name: '',
			description: '',
			photo: ''
		};
		console.log(this.starterCourse);
	}
	ngOnInit() {
		this.restaurantId = this.route.snapshot.paramMap.get('restaurantId');
		this.startCourseIdEdit = this.route.snapshot.queryParamMap.get('editId');
		if (this.startCourseIdEdit) {
			this.starterCourseService
				.getStarterCourse(this.restaurantId, this.startCourseIdEdit)
				.subscribe(startCourseResponse => {
					this.startCourseEdit = startCourseResponse;
				});

		}
	}

	registerStarterCourse(starterCourse: any) {
		this.starterCourseService
			.createStarterCourse(this.restaurantId, this.starterCourse)
			.subscribe(response => console.log(response));
	}

	editStarterCourse() {
		this.starterCourseService
			.patchStarterCourse(this.restaurantId, this.startCourseEdit)
			.subscribe(response => console.log(response));
	}

}
