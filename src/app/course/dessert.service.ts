import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../guard/token.service';

@Injectable({
	providedIn: 'root'
})
export class DessertService {

	path = 'https://csm43-be.herokuapp.com';

	constructor(private http: HttpClient, private tokenService: TokenService) { }

	listDesserts(retaurantId): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `/users/${userId}/restaurants/${retaurantId}/desserts`;
		return this.http.get<any>(url);
	}

	getDessert(restaurantId, dessertId): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `/users/${userId}/restaurants/${restaurantId}/desserts/${dessertId}`;
		return this.http.get<any>(url);
	}

	createDessert(restaurantId, dessert): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `/users/${userId}/restaurants/${restaurantId}/desserts`;
		return this.http.post<any>(url, dessert);
	}

	patchDessert(restaurantId, dessert): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `/users/${userId}/restaurants/${restaurantId}/desserts/${dessert.id}`;
		return this.http.patch<any>(url, dessert);
	}

	removeDessert(restaurantId, dessertId): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `/users/${userId}/restaurants/${restaurantId}/desserts/${dessertId}`;
		return this.http.delete<any>(url);
	}

}
