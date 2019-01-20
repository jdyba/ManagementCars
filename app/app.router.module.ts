import { UserAddBusComponent } from './user-add-bus/user-add-bus.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BusesComponent } from './buses/buses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthGuardsService } from './auth/auth-services/auth-guards.service';
import { AuthComponent } from './auth/auth.component';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'buses',
    component: BusesComponent
  },
  {
    path: 'addBus',
    component: UserAddBusComponent,
    canActivate: [AuthGuardsService]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'sign',
        component: SignUpComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})

export class AppRouterModule { }
