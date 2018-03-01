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
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingListService} from './shopping-list/shoppinglist.service';
import {AppRoutingModule} from './app-routing.module';
import {RecipeSelectComponent} from './recipess/recipe-select/recipe-select.component';
import {EditRecipeComponent} from './recipess/edit-recipe/edit-recipe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailComponent,
    RecipessComponent,
    DropdownDirective,
    RecipeSelectComponent,
    EditRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
