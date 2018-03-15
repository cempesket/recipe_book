import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipesComponent} from './recipes.component';
import {NoRecipeComponent} from './recipe-detail/no-recipe/no-recipe.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RecipeRoute} from './recipe.route';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RecipeRoute,
    SharedModule

  ],
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    NoRecipeComponent,
    RecipeEditComponent
  ]
})
export class RecipeModule {
}
