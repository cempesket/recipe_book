import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {NoRecipeComponent} from './recipes/recipe-detail/no-recipe/no-recipe.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {HomeComponent} from './core/home/home.component';
import {AuthGuard} from './auth/auth-guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'recipes', loadChildren: './recipes/recipe.module#RecipeModule', canLoad: [AuthGuard]},
  {path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoute {
}
