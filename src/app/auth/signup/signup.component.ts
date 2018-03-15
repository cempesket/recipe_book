import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  showPassword = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(f) {
    const email = f.value.email;
    const password = f.value.password;
    this.authService.signUpUser(email, password);
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

}
