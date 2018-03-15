import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit {
  recipeSelected: Recipe;

  constructor(private recipeService: RecipeService) {
  }

ngOnInit() {
    console.log('ngOnInit called');
  this.recipeService.fetchRecipes().subscribe((data) => {
    this.recipeService.setRecipes(data);
  });
}
}
