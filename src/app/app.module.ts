import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShoppinglistComponent} from './shopping-list/shoppinglist.component';
import {ShoppinglisteditComponent} from './shopping-list/shopping-edit/shoppinglistedit.component';
import {RecipelistComponent} from './recipess/recipe-list/recipelist.component';
import {RecipeitemComponent} from './recipess/recipe-list/recipe-item/recipeitem.component';
import {RecipedetailComponent} from './recipess/recipe-detail/recipedetail.component';
import {RecipessComponent} from './recipess/recipess.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailComponent,
    RecipessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
