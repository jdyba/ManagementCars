import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { AuthService } from './auth/auth-services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public authService: AuthService, private router: Router ) { }

  logout() {
    this.authService.logOut();
    this.router.navigate(['/home']);
  }
}
