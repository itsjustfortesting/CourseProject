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
import {RecipeService} from './recipess/recipe.service';
import {DbService} from './recipess/db.service';
import {HttpModule} from '@angular/http';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthService} from './auth/auth.service';
import {AuthGuardService} from './auth/auth-guard.service';


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
    EditRecipeComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ShoppingListService, RecipeService, DbService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
