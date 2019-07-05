import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StarterCourseListPage } from './starter-course-list.page';

import { RestaurantsService } from '../../restaurants/restaurants.service';
import { TokenService } from '../../guard/token.service';

const routes: Routes = [
	{
		path: '',
		component: StarterCourseListPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [StarterCourseListPage],
	providers: [RestaurantsService, TokenService]
})
export class StarterCourseListPageModule { }
