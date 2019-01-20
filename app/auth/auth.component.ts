import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './auth-services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  info: string;

  constructor(public authService: AuthService, private route: ActivatedRoute) {
    this.authService.clearError();
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['name']) {
        this.info = `Log in to ${params['name']}`;
      } else {
        this.info = null;
      }
    });
  }

}
