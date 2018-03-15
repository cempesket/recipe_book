import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs/Subject';
export class ShoppingListService {
  private ingredients: Ingredient[] = [];
  shoppingListEvent = new EventEmitter<Ingredient[]>();
  itemSelectEvent = new Subject<Ingredient>();
  selectedItem: Ingredient;

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    for (const ingredient of this.ingredients) {
      if (ingredient.name === newIngredient.name) {
        this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
        ingredient.amount += newIngredient.amount;
        this.ingredients.push(ingredient);
        this.shoppingListEvent.emit(this.getIngredients());
        return;
      }
    }
    this.ingredients.push(newIngredient);
    this.shoppingListEvent.emit(this.getIngredients());

  }

  updateIngredient(ingredient: Ingredient, newIngredient: Ingredient) {
    this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
    this.ingredients.push(newIngredient);
  }

  removeIngredient(ingredient: Ingredient) {

    this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
    this.shoppingListEvent.emit(this.getIngredients());
  }

  setSelectedItem(ingredient: Ingredient) {
    this.selectedItem = ingredient;
    this.itemSelectEvent.next(ingredient);
  }

}
