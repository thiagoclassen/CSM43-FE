import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { RestaurantRatingsPage } from './restaurant-ratings.page';

import { IonicRatingModule } from 'ionic4-rating';
const routes: Routes = [
	{
		path: '',
		component: RestaurantRatingsPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		IonicRatingModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [RestaurantRatingsPage]
})
export class RestaurantRatingsPageModule { }
