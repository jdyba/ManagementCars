import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AuthService } from '../auth-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) {
    this.authService.clearError();
    this.authService.clearPosMessage();
   }

  ngOnInit() { }

  login(formData: NgForm) {
    this.authService.login(formData.value.email, formData.value.password);
  }

  signInGoogle() {
    this.authService.signInGoogle();
  }

  forgotPass(formData: NgForm) {
    this.authService.resetPassword(formData.value.email);
  }
}

