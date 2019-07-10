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
  {
    path: 'reservations-list',
    loadChildren: './reservations/reservations-list/reservations-list.module#ReservationsListPageModule'
  },
  {
    path: 'reservation/:restaurantId/:reservationId',
    loadChildren: './reservations/reservation-view/reservation-view.module#ReservationViewPageModule'
  },
  {
    path: 'restaurant/:restaurantId/starter-course/:id',
    loadChildren: './course/starter-course-view/starter-course-view.module#StarterCourseViewPageModule'
  },
  {
    path: 'restaurant/:restaurantId/starter-courses',
    loadChildren: './course/starter-course-list/starter-course-list.module#StarterCourseListPageModule'
  },
  {
    path: 'restaurant/:restaurantId/starter-course-form',
    loadChildren: './course/starter-course-form/starter-course-form.module#StarterCourseFormPageModule'
  }, 
  {
    path: 'restaurant/:restaurantId/main-course/:id',
    loadChildren: './course/main-course-view/main-course-view.module#MainCourseViewPageModule'
  },
  {
    path: 'restaurant/:restaurantId/main-courses',
    loadChildren: './course/main-course-list/main-course-list.module#MainCourseListPageModule'
  },
  {
    path: 'restaurant/:restaurantId/main-course-form',
    loadChildren: './course/main-course-form/main-course-form.module#MainCourseFormPageModule'
  },
  {
    path: 'my-restaurant',
    loadChildren: './restaurants/my-restaurant/my-restaurant.module#MyRestaurantPageModule'
  },
  {
    path: 'employee/:restaurantId',
    loadChildren: './restaurants/employee/employee.module#EmployeePageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
