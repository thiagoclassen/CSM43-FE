import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompleteCourseService {

  constructor(private http: HttpClient) { }

  listCompleteCourses() {

    let url = '/users/:userId/restaurants/:restaurantId/completeCourses';

    return this.http.get(url);

  }

  getCompleteCourse() {

    let url = '/users/:userId/restaurants/:restaurantId/completeCourses/:completeCourseId';

    return this.http.get(url);

  }

  createCompleteCourse(course) {

    let url = '/users/:userId/restaurants/:restaurantId/completeCourses';

    return this.http.post(url, course);

  }

  removeCompleteCourse(courseId) {

    let url = '/users/:userId/restaurants/:restaurantId/completeCourses/:completeCourseId';

    return this.http.delete(url);

  }

}
