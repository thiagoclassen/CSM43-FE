import { Component, OnInit } from '@angular/core';
import { CredentialsService } from './shared/credentials.service'
import { User } from './shared/User'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private credentialService : CredentialsService) { }

  ngOnInit() {
  }

  registerUser(){    
    const user = new User(null, "teste", 4);
    console.log(user);
    this.credentialService.registerUser(user).subscribe( response => console.log(response));
  }

}
