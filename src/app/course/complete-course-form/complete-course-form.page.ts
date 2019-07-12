import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompleteCourseService } from '../complete.service';
import { StarterCourseService } from '../starter.service';
import { MainCourseService } from '../main.service';
import { DessertService } from '../dessert.service';
import { OverlayService } from 'src/app/common/services/overlay.service';
import { Location } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
	selector: 'app-complete-course-form',
	templateUrl: './complete-course-form.page.html',
	styleUrls: ['./complete-course-form.page.scss'],
})
export class CompleteCourseFormPage {
	private completeCourse;
	private restaurantId;
	private completeCourseIdEdit = null;
	private completeCourseEdit = null;

	private starterCourseList = [{ id: '' }];
	private mainCourseList = [];
	private dessertList = [];

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private completeCourseService: CompleteCourseService,
		private starterCourseService: StarterCourseService,
		private mainCourseService: MainCourseService,
		private dessertService: DessertService,
		private overlayService: OverlayService) {
		this.completeCourseEdit = {
			name: '',
			description: '',
			photo: '',
			price: 0,
			starterCourse: '',
			mainCourse: '',
			dessert: '',
		};
		this.completeCourse = {
			name: '',
			description: '',
			photo: '',
			price: 0,
			starterCourse: '',
			mainCourse: '',
			dessert: '',
		};
	}
	async ionViewWillEnter() {
		let loading = await this.overlayService.loading();
		this.restaurantId = this.route.snapshot.paramMap.get('restaurantId');
		this.completeCourseIdEdit = this.route.snapshot.queryParamMap.get('editId');
		if (this.completeCourseIdEdit) {
			this.completeCourseService
				.getCompleteCourse(this.restaurantId, this.completeCourseIdEdit)
				.subscribe(dessertResponse => {
					this.completeCourseEdit = dessertResponse;
					console.log('UEEEPAAA', this.completeCourseEdit);
					this.completeCourseEdit.starterCourse = this.completeCourseEdit.starterCourse.id;
					this.completeCourseEdit.mainCourse = this.completeCourseEdit.mainCourse.id;
					this.completeCourseEdit.dessert = this.completeCourseEdit.dessert.id;
					this.completeCourseEdit.restaurant = this.completeCourseEdit.restaurantId;
					loading.dismiss();
				});
		}
		await this.loadAllCourses(this.restaurantId);
		loading.dismiss();
	}

	async registerCompleteCourse(completeCourse: any) {
		let loading = await this.overlayService.loading();
		this.completeCourseService
			.createCompleteCourse(this.restaurantId, this.completeCourse)
			.subscribe(() => {
				this.location.back();
				loading.dismiss();
			}
			);
	}

	async editCompleteCourse() {
		this.completeCourseEdit.dessert = this.completeCourseEdit.dessertId;
		this.completeCourseEdit.mainCourse = this.completeCourseEdit.mainCourseId;
		this.completeCourseEdit.starterCourse = this.completeCourseEdit.starterCourseId;
		let loading = await this.overlayService.loading();
		this.completeCourseService
			.patchCompleteCourse(this.restaurantId, this.completeCourseEdit)
			.subscribe(response => {
				this.location.back();
				loading.dismiss();
			});
	}

	async loadAllCourses(restaurantId) {
		console.log('Teste');
		forkJoin(
			this.starterCourseService.listStarterCourses(restaurantId),
			this.mainCourseService.listMainCourses(restaurantId),
			this.dessertService.listDesserts(restaurantId)
		).subscribe(test => {
			this.starterCourseList = test[0];
			this.mainCourseList = test[1];
			this.dessertList = test[2];
		});
	}

	
	formatCurrency($event) {
		var aux = $event.target.value;
		aux = aux.replace(/\./g, "");
		aux = aux.replace(/\s/g, "");
		aux = aux.replace(/\$/g, "");
		aux = aux.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
		if (aux.length > 1) aux = aux.replace(/^0+/, ''); /* Replace leading zeros */
		$event.target.value = "$" + aux;
	}

}
