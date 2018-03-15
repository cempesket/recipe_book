import {Recipe} from './recipe.model';
import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpRequest} from '@angular/common/http';
@Injectable()
export class RecipeService {
  recipeEvent = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  constructor(private http: HttpClient, private authService: AuthService) {
  }


  getRecipes() {
    return this.recipes.slice();
  }

  setRecipes(recipes) {
    this.recipes = recipes;
    this.recipeEvent.next(recipes);

  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://recipe-book-c0c07.firebaseio.com/data.json')
      .map((response) => {
        if (response) {
          console.log(response);
          for (const recipe of response) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
        }
        return response;
      });
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeEvent.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeEvent.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeEvent.next(this.recipes.slice());

  }

  saveRecipeData(recipes) {
    const req = new HttpRequest('PUT', 'https://recipe-book-c0c07.firebaseio.com/data.json', recipes, {reportProgress: true});
    this.http.request(req)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
