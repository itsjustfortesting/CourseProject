import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppinglistComponent} from './shoppinglist.component';

const shoppingListRoutes: Routes = [
  {path: '', component: ShoppinglistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(shoppingListRoutes)],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule {
}
