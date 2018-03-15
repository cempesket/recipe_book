import {NgModule} from '@angular/core';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {AuthRoute} from './auth.route';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    AuthRoute,
    CommonModule,
    FormsModule,

  ]
})
export class AuthModule {
}
