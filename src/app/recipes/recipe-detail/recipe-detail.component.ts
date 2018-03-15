import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipes.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
   recipe: Recipe;

  constructor(private shoppingService: ShoppingListService,
              private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        if (this.recipeService.getRecipeById(+params['id'])) {
          this.recipe = this.recipeService.getRecipeById(+params['id']);
        } else {
          this.router.navigate(['/recipes']).catch(() => {
            console.log('There was an error');
          });
        }
      }
    );
  }

  addToShoppingList() {
    for (const ingredient of this.recipe.ingredients) {

      this.shoppingService.addIngredient(ingredient);


    }
    if (this.recipe.ingredients) {
      alert('Recipe added');
    }
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.route.snapshot.params['id']);
    this.router.navigate(['/recipes']);
  }


}
