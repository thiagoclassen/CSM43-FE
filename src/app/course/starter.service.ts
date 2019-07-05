import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenService } from '../guard/token.service';

@Injectable({
	providedIn: 'root'
})
export class StarterCourseService {

	path = 'https://csm43-be.herokuapp.com/';

	constructor(private http: HttpClient, private tokenService: TokenService) { }

	listStarterCourses(): Observable<any[]> {

		let url = this.path + 'users/:userId/restaurants/:restaurantId/starterCourses';

		return this.http.get<any>(url);

	}

	getStarterCourse(starterCourseId): Observable<any[]> {

		let url = this.path + 'users/:userId/restaurants/:restaurantId/starterCourses/:starterCourseId';

		return this.http.get<any>(url);

	}

	createStarterCourse(course): Observable<any[]> {
		let url = this.path + 'users/:userId/restaurants/:restaurantId/starterCourses';
		return this.http.post<any>(url, course);
	}

	removeStarterCourse(courseId): Observable<any[]> {

		let url = '/users/:userId/restaurants/:restaurantId/starterCourses/:starterCourseId';

		return this.http.delete<any>(url);

	}

}
