import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RecipessComponent} from './recipess/recipess.component';
import {ShoppinglistComponent} from './shopping-list/shoppinglist.component';
import {RecipedetailComponent} from './recipess/recipe-detail/recipedetail.component';
import {RecipeSelectComponent} from './recipess/recipe-select/recipe-select.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipessComponent, children: [
      {path: '', component: RecipeSelectComponent, pathMatch: 'full'},
      {path: ':id', component: RecipedetailComponent}
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
