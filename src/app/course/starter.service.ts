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

	listStarterCourses(restaurantId): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `users/${userId}/restaurants/${restaurantId}/starterCourses`;
		return this.http.get<any>(url);

	}

	getStarterCourse(restaurantId, starterCourseId): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `users/${userId}/restaurants/${restaurantId}/starterCourses/${starterCourseId}`;
		return this.http.get<any>(url);

	}

	createStarterCourse(restaurantId, course): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `users/${userId}/restaurants/${restaurantId}/starterCourses`;
		return this.http.post<any>(url, course);
	}

	patchStarterCourse(restaurantId, course): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `users/${userId}/restaurants/${restaurantId}/starterCourses/${course.id}`;
		return this.http.patch<any>(url, course);
	}

	removeStarterCourse(restaurantId, courseId): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `users/${userId}/restaurants/${restaurantId}/starterCourses/${courseId}`;
		return this.http.delete<any>(url);
	}

}
