import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CompleteCourseFormPage } from './complete-course-form.page';
import { NgxCurrencyModule } from "ngx-currency";

const routes: Routes = [
  {
    path: '',
    component: CompleteCourseFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	IonicModule,
	NgxCurrencyModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CompleteCourseFormPage]
})
export class CompleteCourseFormPageModule {}
