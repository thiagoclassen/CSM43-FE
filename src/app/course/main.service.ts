import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../guard/token.service';

@Injectable({
	providedIn: 'root'
})
export class MainCourseService {

	path = 'https://csm43-be.herokuapp.com';

	constructor(private http: HttpClient, private tokenService: TokenService) { }

	listMainCourses(retaurantId): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `/users/${userId}/restaurants/${retaurantId}/mainCourses`;
		console.log('HELLOOO', url);
		return this.http.get<any>(url);

	}

	getMainCourse(restaurantId, mainCourseId): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `/users/${userId}/restaurants/${restaurantId}/mainCourses/${mainCourseId}`;
		console.log('HOOO', url)
		return this.http.get<any>(url);

	}

	createMainCourse(restaurantId, course): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `/users/${userId}/restaurants/${restaurantId}/mainCourses`;

		return this.http.post<any>(url, course);

	}

	patchMainCourse(restaurantId, course): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `/users/${userId}/restaurants/${restaurantId}/mainCourses/${course.id}`;

		return this.http.patch<any>(url, course);
	}

	removeMainCourse(restaurantId, mainCourseId): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `/users/${userId}/restaurants/${restaurantId}/mainCourses/${mainCourseId}`;

		return this.http.delete<any>(url);

	}

}
