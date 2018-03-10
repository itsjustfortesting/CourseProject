import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './core/home/home.component';

const appRoutes: Routes = [
  // {path: '', redirectTo: '/recipes', pathMatch: 'full'}
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'recipes', loadChildren: './recipess/recipes.module#RecipesModule'},
  {path: 'shopping', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
