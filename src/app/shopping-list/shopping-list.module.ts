import {NgModule} from '@angular/core';
import {ShoppinglisteditComponent} from './shopping-edit/shoppinglistedit.component';
import {ShoppinglistComponent} from './shoppinglist.component';
import {FormsModule} from '@angular/forms';
import {ShoppingListRoutingModule} from './shopping-list-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ShoppinglistComponent,
    ShoppinglisteditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingListRoutingModule
  ]
})
export class ShoppingListModule {
}
