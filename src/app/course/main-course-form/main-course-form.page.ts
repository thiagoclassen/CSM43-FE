import { Component, OnInit } from '@angular/core';
import { MainCourseService } from '../main.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OverlayService } from 'src/app/common/services/overlay.service';

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
		private location: Location,
		private mainCourseService: MainCourseService,
		private overlayService: OverlayService) {
		this.mainCourse = {
			name: '',
			description: '',
			photo: ''
		};
	}
	async ngOnInit() {
		let loading = await this.overlayService.loading();
		this.restaurantId = this.route.snapshot.paramMap.get('restaurantId');
		this.mainCourseIdEdit = this.route.snapshot.queryParamMap.get('editId');
		if (this.mainCourseIdEdit) {
			this.mainCourseService
				.getMainCourse(this.restaurantId, this.mainCourseIdEdit)
				.subscribe(mainCourseResponse => {
					this.mainCourseEdit = mainCourseResponse;
					console.log(this.mainCourseEdit);
					loading.dismiss();
				});

		}
		loading.dismiss();
	}

	async registerMainCourse(mainCourse: any) {
		let loading = await this.overlayService.loading();
		this.mainCourseService
			.createMainCourse(this.restaurantId, this.mainCourse)
			.subscribe(() => {
				this.location.back();
				loading.dismiss();
			});
	}

	async editMainCourse() {
		let loading = await this.overlayService.loading();
		this.mainCourseService
			.patchMainCourse(this.restaurantId, this.mainCourseEdit)
			.subscribe(() => {
				this.location.back();
				loading.dismiss();
			});
	}

}
