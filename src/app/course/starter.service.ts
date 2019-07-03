import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarterCourseService {

  constructor(private http: HttpClient) { }

  listStarterCourses() {

    let url = '/users/:userId/restaurants/:restaurantId/starterCourses';

    return this.http.get(url);

  }

  getStarterCourse() {

    let url = 'users/:userId/restaurants/:restaurantId/starterCourses/:starterCourseId';

    return this.http.get(url);

  }

  createStarterCourse(course) {

    let url = '/users/:userId/restaurants/:restaurantId/starterCourses';

    return this.http.post(url, course);

  }

  removeStarterCourse(courseId) {

    let url = '/users/:userId/restaurants/:restaurantId/starterCourses/:starterCourseId';

    return this.http.delete(url);

  }

}
