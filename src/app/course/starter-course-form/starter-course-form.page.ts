import { Component, OnInit } from '@angular/core';
import { StarterCourseService } from '../starter.service';
import { ActivatedRoute } from '@angular/router';
import { OverlayService } from 'src/app/common/services/overlay.service';
import { Location } from '@angular/common';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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
		private location: Location,
		private starterCourseService: StarterCourseService,
		private overlayService: OverlayService,
		private camera: Camera) {
		this.starterCourse = {
			name: '',
			description: '',
			photo: ''
		};
		console.log(this.starterCourse);
	}

	async ngOnInit() {
		let loading = await this.overlayService.loading();
		this.restaurantId = this.route.snapshot.paramMap.get('restaurantId');
		this.startCourseIdEdit = this.route.snapshot.queryParamMap.get('editId');
		if (this.startCourseIdEdit) {
			this.starterCourseService
				.getStarterCourse(this.restaurantId, this.startCourseIdEdit)
				.subscribe(startCourseResponse => {
					this.startCourseEdit = startCourseResponse;
					loading.dismiss();
				});
		}
		loading.dismiss();

	}

	async registerStarterCourse(starterCourse: any) {
		let loading = await this.overlayService.loading();
		this.starterCourseService
			.createStarterCourse(this.restaurantId, this.starterCourse)
			.subscribe(() => {
				this.location.back();
				loading.dismiss();
			});
	}

	async editStarterCourse() {
		let loading = await this.overlayService.loading();
		this.starterCourseService
			.patchStarterCourse(this.restaurantId, this.startCourseEdit)
			.subscribe(() => {
				this.location.back();
				loading.dismiss();
			});
	}

	takePicture() {
		const options: CameraOptions = {
			quality: 20,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		}

		this.camera.getPicture(options).then((imageData) => {
			let base64Image = 'data:image/jpeg;base64,' + imageData;
			this.starterCourse.photo = base64Image;
		}, (err) => {
			// Handle error
		});
	}

}
