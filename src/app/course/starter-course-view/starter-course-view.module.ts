import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StarterCourseViewPage } from './starter-course-view.page';

const routes: Routes = [
  {
    path: '',
    component: StarterCourseViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StarterCourseViewPage]
})
export class StarterCourseViewPageModule {}
