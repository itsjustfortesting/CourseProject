import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(0, 'Super burger', 'This is the best burger', 'http://jugaad.org.in/wp-content/uploads/2017/12/i-1-sonic-burger.jpg',
      [new Ingredient('meat', 1),
        new Ingredient('bun', 1),
        new Ingredient('tomato', 1)]),
    new Recipe(1, 'Salad', 'Tasty salad', 'http://recipes.heart.org/-/media/aha/recipe/recipe-images/mediterranean-salad.jpg',
      [new Ingredient('Tomato', 2),
        new Ingredient('salad', 1),
        new Ingredient('cucumber', 2)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    const recipe = this.recipes.find(
      (s) => {
        return s.id === id;
      }
    );
    return recipe;
  }
}
