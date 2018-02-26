import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RecipessComponent} from './recipess/recipess.component';
import {ShoppinglistComponent} from './shopping-list/shoppinglist.component';
import {RecipedetailComponent} from './recipess/recipe-detail/recipedetail.component';
import {RecipeSelectComponent} from './recipess/recipe-select/recipe-select.component';
import {EditRecipeComponent} from './recipess/edit-recipe/edit-recipe.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipessComponent, children: [
      {path: '', component: RecipeSelectComponent, pathMatch: 'full'},
      {path: 'new', component: EditRecipeComponent},
      {path: ':id', component: RecipedetailComponent},
      {path: ':id/edit', component: EditRecipeComponent}
    ]
  },
  {path: 'shopping', component: ShoppinglistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
