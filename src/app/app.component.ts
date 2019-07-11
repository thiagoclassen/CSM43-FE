import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	public appPages = [
		{
			title: 'Minhas Reservas',
			url: '/reservations-list',
			icon: 'list'
		},
		{
			title: 'Restaurantes',
			url: '/restaurants',
			icon: 'list'
		},
		{
			title: 'Meu Restaurantes',
			url: '/my-restaurant',
			icon: 'list'
		},
		{
			title: 'Cadastro Restaurantes',
			url: '/restaurant-form',
			icon: 'list'
		},
		{
			title: 'Sair',
			url: '/sign-in',
			icon: 'logout'
		},
	];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			if (this.platform.is('mobile')) {
				this.statusBar.overlaysWebView(false);
				this.splashScreen.hide();
			}
		});
	}
}
