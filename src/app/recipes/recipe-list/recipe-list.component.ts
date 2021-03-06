import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipes.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService, private router: Router) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipeEvent.subscribe((recipes) => {
      this.recipes = recipes;
    });

  }

  goToNew() {
    this.router.navigate(['/recipes/new']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
