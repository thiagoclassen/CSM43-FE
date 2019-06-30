import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '../sign-up/shared/credentials.service';
import { User } from '../sign-up/shared/User';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  private login:string;
  private password:string;

  constructor(private credentialService: CredentialsService,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  loginUser() {
    console.log(this.login, this.password)
    this.navCtrl.navigateForward('/home');    
  }

}
