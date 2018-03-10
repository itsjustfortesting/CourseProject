import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipessComponent} from './recipess.component';
import {AuthGuardService} from '../auth/auth-guard.service';
import {RecipedetailComponent} from './recipe-detail/recipedetail.component';
import {EditRecipeComponent} from './edit-recipe/edit-recipe.component';
import {RecipeSelectComponent} from './recipe-select/recipe-select.component';

const recipesRoutes: Routes = [
  {
    path: 'recipes', component: RecipessComponent, children: [
      {path: '', component: RecipeSelectComponent, pathMatch: 'full'},
      {path: 'new', component: EditRecipeComponent, canActivate: [AuthGuardService]},
      {path: ':id', component: RecipedetailComponent},
      {path: ':id/edit', component: EditRecipeComponent, canActivate: [AuthGuardService]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {
}
