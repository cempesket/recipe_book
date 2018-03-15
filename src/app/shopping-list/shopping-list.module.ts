import {NgModule} from '@angular/core';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {ShoppingListComponent} from './shopping-list.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ShoppingListRoute} from './shopping-list.route';
@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ShoppingListRoute
  ]
})
export class ShoppingListModule {
}
