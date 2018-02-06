import { Component, AfterContentChecked } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
  	private auth: AngularFireAuth,
  	private router: Router,
  	private location: Location
  ) { }

  email: string = '';
  password: string = '';

  login() {
    let { email, password } = this;
    console.log({email, password})
    if (email && password) {
      this.auth.auth.signInWithEmailAndPassword(email, password).then(response => {
      	console.log({response})
      	this.router.navigate(['dashboard'])
      })
    }
  }
}
