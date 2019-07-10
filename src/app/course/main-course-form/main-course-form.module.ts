import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainCourseFormPage } from './main-course-form.page';

const routes: Routes = [
  {
    path: '',
    component: MainCourseFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainCourseFormPage]
})
export class MainCourseFormPageModule {}
