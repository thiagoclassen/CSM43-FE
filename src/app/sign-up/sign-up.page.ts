import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '../user/credentials.service';
import { User } from '../user/User';
import { NavController } from '@ionic/angular';
import { TokenService } from '../guard/token.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  private user: User = new User();

  constructor(private credentialService: CredentialsService,
    public navCtrl: NavController,
    private tokenService: TokenService) { }

  ngOnInit() {
  }

  registerUser() {
    this.user.permissionLevel = 4;
    this.credentialService.registerUser(this.user).subscribe(response => {
      this.tokenService.setToken(response.token);
      this.tokenService.setUserId(response.userId);
      this.navCtrl.navigateForward('/reservations-list');
    });
  }

}
