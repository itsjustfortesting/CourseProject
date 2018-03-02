import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from "rxjs/Subject";

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Super burger', 'This is the best burger', 'http://jugaad.org.in/wp-content/uploads/2017/12/i-1-sonic-burger.jpg',
      [new Ingredient('meat', 1),
        new Ingredient('bun', 1),
        new Ingredient('tomato', 1)]),
    new Recipe('Salad', 'Tasty salad', 'http://recipes.heart.org/-/media/aha/recipe/recipe-images/mediterranean-salad.jpg',
      [new Ingredient('Tomato', 2),
        new Ingredient('salad', 1),
        new Ingredient('cucumber', 2)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
