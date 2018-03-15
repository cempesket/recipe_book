import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes.component';
import {NoRecipeComponent} from './recipe-detail/no-recipe/no-recipe.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {AuthGuard} from '../auth/auth-guard.service';
import {RouterModule} from '@angular/router';
const recipeRoutes = [{
  path: '', component: RecipesComponent, children: [
    {path: '', component: NoRecipeComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent}
  ], canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule]
})
export class RecipeRoute {
}
