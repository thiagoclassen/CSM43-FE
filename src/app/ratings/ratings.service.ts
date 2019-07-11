import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../guard/token.service';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RatingsService {

	path = 'https://csm43-be.herokuapp.com/';

	constructor(private http: HttpClient, private tokenService: TokenService) { }

	listRatingsByRestaurantId(restaurantId): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `users/${userId}/restaurants/${restaurantId}/ratings`;
		return this.http.get<any>(url);
	}

	avgRatings(ratings) {
		console.log('AVGRATINGS');
		let sumRatings = 0;
		ratings.forEach(rating => {
			sumRatings += rating.value;
		});
		return (sumRatings / ratings.lenght);
	}

	getUserRatingByRestaurantId(restaurantId): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `users/${userId}/restaurants/${restaurantId}/rating`;
		return this.http.get<any>(url);
	}

	createRating(restaurantId, rating): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `users/${userId}/restaurants/${restaurantId}/ratings`;
		return this.http.post<any>(url, rating);
	}

	updateRating(restaurantId, ratingId, ratingValue): Observable<any[]> {
		let userId = this.tokenService.getUserId();
		let url = this.path + `users/${userId}/restaurants/${restaurantId}/ratings/${ratingId}`;
		return this.http.put<any>(url, ratingValue);
	}
}
