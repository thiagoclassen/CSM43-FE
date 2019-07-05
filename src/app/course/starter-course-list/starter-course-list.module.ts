import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StarterCourseListPage } from './starter-course-list.page';

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
  declarations: [StarterCourseListPage]
})
export class StarterCourseListPageModule {}
