import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {FormGroup, NgForm, NgModel} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') form: NgForm;
  subscription: Subscription;

  alert: string;
  editMode = false;

  constructor(private shoppingService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription = this.shoppingService.itemSelectEvent.subscribe((ingredient: Ingredient) => {
      this.editMode = true;
      this.form.setValue({
        name: ingredient.name,
        amount: ingredient.amount
      });

    });

  }

  add() {
    if (this.editMode) {
      this.shoppingService.updateIngredient(this.shoppingService.selectedItem,
        new Ingredient(this.form.value.name, +this.form.value.amount));
    }
    this.shoppingService.addIngredient(new Ingredient(this.form.value.name, +this.form.value.amount));
    this.clear();


  }

  remove() {
    this.shoppingService.removeIngredient(this.shoppingService.selectedItem);
    this.clear();

  }

  clear() {
    this.form.reset();
    this.editMode = false;

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
