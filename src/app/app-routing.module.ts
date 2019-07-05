import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'sign-up',
    loadChildren: './sign-up/sign-up.module#SignUpPageModule'
  },
  {
    path: 'restaurants',
    loadChildren: './restaurants/restaurant-list/restaurants.module#RestaurantsPageModule'
  },
  {
    path: 'sign-in',
    loadChildren: './sign-in/sign-in.module#SignInPageModule'
  },
  {
    path: 'restaurant-form',
    //canActivate: [AuthGuard],
    loadChildren: './restaurants/restaurant-form/restaurant-form.module#RestaurantFormPageModule'
  },
  {
    path: 'restaurant/:id',
    loadChildren: './restaurants/restaurant-view/restaurant-view.module#RestaurantViewPageModule'
  },
  { path: 'starter-course/:id', loadChildren: './course/starter-course-view/starter-course-view.module#StarterCourseViewPageModule' },
  { path: 'starter-courses', loadChildren: './course/starter-course-list/starter-course-list.module#StarterCourseListPageModule' },
  { path: 'starter-course-form', loadChildren: './course/starter-course-form/starter-course-form.module#StarterCourseFormPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
