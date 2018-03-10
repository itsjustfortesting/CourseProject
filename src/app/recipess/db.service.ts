import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {RecipeService} from './recipe.service';
import {Recipe} from './recipe.model';
import {AuthService} from '../auth/auth.service';


@Injectable()
export class DbService {
  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {
  }

  saveData() {
    const token = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-71e19.firebaseio.com/data.json?auth=' + token, this.recipeService.getRecipes());
  }

  loadData() {
    const token = this.authService.getToken();
    this.http.get('https://ng-recipe-book-71e19.firebaseio.com/data.json?auth=' + token)
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
