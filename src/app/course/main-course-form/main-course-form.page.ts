import { Component, OnInit } from '@angular/core';
import { MainCourseService } from '../main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-main-course-form',
	templateUrl: './main-course-form.page.html',
	styleUrls: ['./main-course-form.page.scss'],
})
export class MainCourseFormPage implements OnInit {
	private mainCourse;
	private restaurantId;
	private mainCourseIdEdit = null;
	private mainCourseEdit = null;

	constructor(
		private route: ActivatedRoute,
		private mainCourseService: MainCourseService) {
		this.mainCourse = {
			name: '',
			description: '',
			photo: ''
		};
	}
	ngOnInit() {
		this.restaurantId = this.route.snapshot.paramMap.get('restaurantId');
		this.mainCourseIdEdit = this.route.snapshot.queryParamMap.get('editId');
		if (this.mainCourseIdEdit) {
			this.mainCourseService
				.getMainCourse(this.restaurantId, this.mainCourseIdEdit)
				.subscribe(mainCourseResponse => {
					this.mainCourseEdit = mainCourseResponse;
					console.log(this.mainCourseEdit);
				});

		}
	}

	registerMainCourse(mainCourse: any) {
		this.mainCourseService
			.createMainCourse(this.restaurantId, this.mainCourse)
			.subscribe(response => console.log(response));
	}

	editMainCourse() {
		this.mainCourseService
			.patchMainCourse(this.restaurantId, this.mainCourseEdit)
			.subscribe(response => console.log(response));
	}

}
