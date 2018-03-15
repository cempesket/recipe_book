import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {LoadingService} from '../shared/loading.service';
@Injectable()
export class AuthService {

  isAuth = false;
  token;

  constructor(private router: Router, private loadingService: LoadingService) {
    this.token = localStorage.getItem('token');
  }

  signUpUser(email, password) {
    this.loadingService.setLoading(true);
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['/login']);
      this.loadingService.setLoading(false);
    }).catch(error => {
      console.log(error);
      alert(error);
      this.loadingService.setLoading(false);
    });
  }

  signInUser(email, password) {
    this.loadingService.setLoading(true);
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      firebase.auth().currentUser.getIdToken().then(token => {
        localStorage.setItem('token', token);
        this.token = token;
        localStorage.removeItem('firebase:authUser:AIzaSyAQYHC8hS1xdYzHGas_lNKEmqzknOBabas:[DEFAULT]');
        this.router.navigate(['']);
        this.loadingService.setLoading(false);


      });
    }).catch(error => {
      console.log(error);
      alert(error);
      this.loadingService.setLoading(false);
    });
  }

  logout() {
    this.loadingService.setLoading(true);
    localStorage.removeItem('token');
    this.token = null;
    this.isAuth = false;
    this.router.navigate(['/home']);
    this.loadingService.setLoading(false);

  }

  getToken() {
    console.log('getToken called');
    if (this.token) {
      return this.token;
    }
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    return !!this.token;
  }

}
