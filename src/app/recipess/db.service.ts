import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {RecipeService} from './recipe.service';
import {Recipe} from './recipe.model';


@Injectable()
export class DbService {
  constructor(private http: Http, private recipeService: RecipeService) {
  }

  saveData() {
    return this.http.put('https://ng-recipe-book-71e19.firebaseio.com/data.json', this.recipeService.getRecipes());
  }

  loadData() {
    this.http.get('https://ng-recipe-book-71e19.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.saveDataFromDb(recipes);
        }
      );
  }
}
