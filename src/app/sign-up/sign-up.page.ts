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

  constructor(private credentialService: CredentialsService,
              public navCtrl: NavController) { }

  ngOnInit() {
  }

  registerUser() {
    const user = new User(null, 'teste', 4);
    this.credentialService
    .registerUser({id : null, name : 'teste', permissionLevel: 4})
    .subscribe( response => {
      console.log(response);
      this.navCtrl.navigateForward('/home');
    });
  }

}
