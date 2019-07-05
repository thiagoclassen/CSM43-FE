import { Component, OnInit } from '@angular/core';
import { StarterCourseService } from '../starter.service';

@Component({
	selector: 'app-starter-course-form',
	templateUrl: './starter-course-form.page.html',
	styleUrls: ['./starter-course-form.page.scss'],
})
export class StarterCourseFormPage implements OnInit {
	private starterCourse;
	constructor(private starterCourseService: StarterCourseService) {
		this.starterCourse = {
			name: '',
			description: '',
			photo: ''
		};
		console.log(this.starterCourse);
	}
	ngOnInit() {
	}

	registerStarterCourse(starterCourse: any) {
		this.starterCourseService
			.createStarterCourse(this.starterCourse)
			.subscribe(response => console.log(response));
	}

}
