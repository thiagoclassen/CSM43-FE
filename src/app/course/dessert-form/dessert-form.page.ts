import { Component, OnInit } from '@angular/core';
import { DessertService } from '../dessert.service';
import { ActivatedRoute } from '@angular/router';

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
		private dessertService: DessertService) {
		this.dessert = {
			name: '',
			description: '',
			photo: ''
		};
	}
	ngOnInit() {
		this.restaurantId = this.route.snapshot.paramMap.get('restaurantId');
		this.dessertIdEdit = this.route.snapshot.queryParamMap.get('editId');
		if (this.dessertIdEdit) {
			this.dessertService
				.getDessert(this.restaurantId, this.dessertIdEdit)
				.subscribe(dessertResponse => {
					this.dessertEdit = dessertResponse;
				});

		}
	}

	registerDessert(dessert: any) {
		this.dessertService
			.createDessert(this.restaurantId, this.dessert)
			.subscribe(response => console.log(response));
	}

	editDessert() {
		this.dessertService
			.patchDessert(this.restaurantId, this.dessertEdit)
			.subscribe(response => console.log(response));
	}


}
