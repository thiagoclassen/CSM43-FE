import { Component, OnInit } from '@angular/core';
import { OverlayService } from 'src/app/common/services/overlay.service';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { RatingsService } from '../ratings.service';
import { Location } from '@angular/common';

@Component({
	selector: 'app-restaurant-ratings',
	templateUrl: './restaurant-ratings.page.html',
	styleUrls: ['./restaurant-ratings.page.scss'],
})
export class RestaurantRatingsPage {
	private restaurantId = null;
	private restaurant = null;
	private ratingList = null;
	private updateRating = false;
	private rating = { value: 0 };
	private globalAvg = 0;
	private userRating = null;

	constructor(
		private overlayService: OverlayService,
		private location: Location,
		private restaurantService: RestaurantsService,
		private ratingService: RatingsService,
		private route: ActivatedRoute) { }

	async ionViewWillEnter() {
		let loading = await this.overlayService.loading();
		this.restaurantId = this.route.snapshot.paramMap.get('restaurantId');
		this.restaurantService.getRestautant(this.restaurantId)
			.subscribe(restaurantResponse => {
				this.restaurant = restaurantResponse;
			});
		this.ratingService.listRatingsByRestaurantId(this.restaurantId)
			.subscribe(ratingResponse => {
				this.ratingList = ratingResponse;
				this.globalAvg = this.ratingService.avgRatings(this.ratingList);
			});
		this.ratingService.getUserRatingByRestaurantId(this.restaurantId)
			.subscribe(userRating => {
				if (userRating) {
					this.updateRating = true;
				}
				this.userRating = userRating;
				this.rating.value = userRating['value'];
				loading.dismiss();
			});
	}

	async registerRating(rating: any) {
		let loading = await this.overlayService.loading();
		if (this.updateRating) {
			this.ratingService
				.updateRating(this.restaurantId, this.userRating.id, this.rating)
				.subscribe(() => {
					this.location.back();
					loading.dismiss();
				}
				);
		} else {
			this.ratingService
				.createRating(this.restaurantId, this.rating)
				.subscribe(() => {
					this.location.back();
					loading.dismiss();
				}
				);
		}
	}
}
