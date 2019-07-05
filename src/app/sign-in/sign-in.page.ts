import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '../user/credentials.service';
import { User } from '../user/User';
import { NavController } from '@ionic/angular';
import { TokenService } from '../guard/token.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  private login = {};

  constructor(
    private credentialService: CredentialsService,
    private tokenService: TokenService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.tokenService.logoutUser();
  }

  loginUser() {
    this.credentialService.login(this.login).subscribe(response => {
      this.tokenService.setToken(response.token);
      this.tokenService.setUserId(response.userId);
      this.navCtrl.navigateForward('/reservations-list');
    });
  }
}
