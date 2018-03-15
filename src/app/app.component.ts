import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import * as firebase from 'firebase';
import {LoadingService} from './shared/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent implements OnInit {

  loading = false;

  constructor(private loadingService: LoadingService) {

  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAQYHC8hS1xdYzHGas_lNKEmqzknOBabas',
      authDomain: 'recipe-book-c0c07.firebaseapp.com'
    });
    this.loadingService.loadingEvent.subscribe(isLoading => this.loading = isLoading);
  }
}
