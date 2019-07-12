import { Component, OnInit } from '@angular/core';
import { DessertService } from '../dessert.service';
import { ActivatedRoute } from '@angular/router';
import { OverlayService } from '../../common/services/overlay.service';
import { Location } from '@angular/common';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
	selector: 'app-dessert-form',
	templateUrl: './dessert-form.page.html',
	styleUrls: ['./dessert-form.page.scss'],
})
export class DessertFormPage implements OnInit {
	private dessert;
	private restaurantId;
	private dessertIdEdit = null;
	private dessertEdit = null;

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private dessertService: DessertService,
		private overlayService: OverlayService,
		private camera: Camera) {
		this.dessert = {
			name: '',
			description: '',
			photo: ''
		};
	}
	async ngOnInit() {
		let loading = await this.overlayService.loading();
		this.restaurantId = this.route.snapshot.paramMap.get('restaurantId');
		this.dessertIdEdit = this.route.snapshot.queryParamMap.get('editId');
		if (this.dessertIdEdit) {
			this.dessertService
				.getDessert(this.restaurantId, this.dessertIdEdit)
				.subscribe(dessertResponse => {
					this.dessertEdit = dessertResponse;
					loading.dismiss();
				});
		}

		loading.dismiss();
	}

	async registerDessert(dessert: any) {
		let loading = await this.overlayService.loading();
		this.dessertService
			.createDessert(this.restaurantId, this.dessert)
			.subscribe(() => {
				this.location.back();
				loading.dismiss();
			}
			);
	}

	async editDessert() {
		let loading = await this.overlayService.loading();
		this.dessertService
			.patchDessert(this.restaurantId, this.dessertEdit)
			.subscribe(response => {
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
			this.dessert.photo = base64Image;
		}, (err) => {
			// Handle error
		});
	}
}
