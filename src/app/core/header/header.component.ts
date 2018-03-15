import {Component, DoCheck, EventEmitter, OnChanges, Output} from '@angular/core';
import {RecipeService} from '../../recipes/recipes.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements DoCheck {
  @Output() tabButtonClicked = new EventEmitter<string>();
  isAuthenticated;

  constructor(private recipeService: RecipeService, private authService: AuthService) {
  }

  ngDoCheck() {
    this.isAuthenticated = this.authService.isAuthenticated();

  }


  saveData() {
    this.recipeService.saveRecipeData(this.recipeService.getRecipes());
  }

  onLogOut() {
    this.authService.logout();
  }
}
