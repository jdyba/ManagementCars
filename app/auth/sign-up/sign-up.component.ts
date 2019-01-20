import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth-services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  protect: boolean;

  constructor(private authService: AuthService) {
    this.authService.clearError();
    if (this.authService.user) {
      this.protect = true;
    }
  }

  ngOnInit() {

  }

  signUp(formData: NgForm) {
    this.authService.signUp(formData.value.email, formData.value.password);
  }

}
