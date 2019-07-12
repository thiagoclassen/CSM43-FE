import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CompleteCourseViewPage } from './complete-course-view.page';

const routes: Routes = [
  {
    path: '',
    component: CompleteCourseViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CompleteCourseViewPage]
})
export class CompleteCourseViewPageModule {}
