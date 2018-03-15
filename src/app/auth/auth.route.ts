import {NgModule} from '@angular/core';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
const authRoutes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
];
@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoute {
}
