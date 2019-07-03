import { Component, OnInit } from '@angular/core';
import { CredentialsService } from './shared/credentials.service';
import { User } from './shared/User';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  private user: User = new User();

  constructor(private credentialService: CredentialsService,
              public navCtrl: NavController) { }

  ngOnInit() {
  }

  registerUser() {
    this.user.permissionLevel = 4;
    this.credentialService
    .registerUser(this.user)
    .subscribe( response => {
      console.log(response);
      this.navCtrl.navigateForward('/home');
    });
  }

}
