import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainCourseService {

  constructor(private http: HttpClient) { }

  listMainCourses() {

    let url = '/users/:userId/restaurants/:restaurantId/mainCourses';

    return this.http.get(url);

  }

  getMainCourse() {

    let url = '/users/:userId/restaurants/:restaurantId/mainCourses/:mainCourseId';

    return this.http.get(url);

  }

  createMainCourse(course) {

    let url = '/users/:userId/restaurants/:restaurantId/mainCourses';

    return this.http.post(url, course);

  }

  removeMainCourse(courseId) {

    let url = '/users/:userId/restaurants/:restaurantId/mainCourses/:mainCourseId';

    return this.http.delete(url);

  }

}
