import {NgModule} from '@angular/core';
import {RecipessComponent} from './recipess.component';
import {RecipeSelectComponent} from './recipe-select/recipe-select.component';
import {RecipelistComponent} from './recipe-list/recipelist.component';
import {RecipedetailComponent} from './recipe-detail/recipedetail.component';
import {EditRecipeComponent} from './edit-recipe/edit-recipe.component';
import {RecipeitemComponent} from './recipe-list/recipe-item/recipeitem.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipessComponent,
    RecipeSelectComponent,
    RecipelistComponent,
    RecipedetailComponent,
    RecipeitemComponent,
    EditRecipeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {
}
