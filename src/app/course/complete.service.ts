import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../guard/token.service';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CompleteCourseService {

	path = 'https://csm43-be.herokuapp.com';

	constructor(private http: HttpClient, private tokenService: TokenService) { }

	listCompleteCourses(restaurantId): Observable<any[]> {
		let url = this.path + `/restaurants/${restaurantId}/completeCourses`;
		return this.http.get<any>(url);
	}

	getCompleteCourse(restaurantId, completeCourseId): Observable<any[]> {
		let url = this.path + `/restaurants/${restaurantId}/completeCourses/${completeCourseId}`;
		return this.http.get<any>(url);
	}

	createCompleteCourse(restaurantId, completeCourse): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `/users/${userId}/restaurants/${restaurantId}/completeCourses`;
		return this.http.post<any>(url, completeCourse);
	}

	patchCompleteCourse(restaurantId, completeCourse): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `/users/${userId}/restaurants/${restaurantId}/completeCourses/${completeCourse.id}`;
		return this.http.patch<any>(url, completeCourse);
	}

	removeCompleteCourse(restaurantId, completeCourseId): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `/users/${userId}/restaurants/${restaurantId}/completeCourses/${completeCourseId}`;
		return this.http.delete<any>(url);
	}

}
