import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '../sign-up/shared/credentials.service';
import { User } from '../sign-up/shared/User';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  private login = {};

  constructor(
    private credentialService: CredentialsService,
    private storage: Storage,
    private navCtrl: NavController) { }

  ngOnInit() { }

  loginUser() {
    this.credentialService.login(this.login).subscribe(response =>
      this.storage.ready().then((stuff) => {
        this.storage.set('token', response.token);
        this.storage.set('userId', response.userId);
        console.log('service Done');
        this.navCtrl.navigateForward('/home');
      }).catch(err => { console.log('errr', err) }));
  }

}
