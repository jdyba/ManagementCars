import { LoginComponent } from './auth/login/login.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app.router.module';


import { HomeComponent } from './home/home.component';
import { BusesComponent } from './buses/buses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { AuthGuardsService } from './auth/auth-services/auth-guards.service';
import { AppService } from './services/app.service';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthService } from './auth/auth-services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { ButMidDirective } from './shared/but-mid.directive';
import { ButLogDirective } from './shared/but-log.directive';
import { MyFormDirective } from './shared/my-form.directive';
import { UserAddBusComponent } from './user-add-bus/user-add-bus.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BusesComponent,
    NotFoundComponent,
    AddBusComponent,
    SignUpComponent,
    AuthComponent,
    ButMidDirective,
    ButLogDirective,
    MyFormDirective,
    UserAddBusComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, AuthGuardsService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
