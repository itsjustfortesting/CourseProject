import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {RecipeService} from '../recipess/recipe.service';
import {Recipe} from '../recipess/recipe.model';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpRequest} from '@angular/common/http';


@Injectable()
export class DbService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {
  }

  saveData() {
    // const token = this.authService.getToken();

    // Standard way
    // return this.httpClient.put('https://ng-recipe-book-71e19.firebaseio.com/data.json?auth=' + token, this.recipeService.getRecipes());

    // const headers = new HttpHeaders().set('Authorization', 'Bearer');
    // return this.httpClient.put('https://ng-recipe-book-71e19.firebaseio.com/data.json?auth=' + token, this.recipeService.getRecipes(), {observe: 'body', headers: headers});
    //
    // return this.httpClient.put('https://ng-recipe-book-71e19.firebaseio.com/data.json', this.recipeService.getRecipes(), {params: params});

    // const params = new HttpParams().set('auth', token);

    // const req = new HttpRequest('PUT', 'https://ng-recipe-book-71e19.firebaseio.com/data.json', this.recipeService.getRecipes(), {
    //   reportProgress: true,
    //   params: params
    // });

    const req = new HttpRequest('PUT', 'https://ng-recipe-book-71e19.firebaseio.com/data.json', this.recipeService.getRecipes());
    return this.httpClient.request(req);
  }

  loadData() {
    const token = this.authService.getToken();
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-71e19.firebaseio.com/data.json?auth=' + token)
      .map(
        (recipes) => {
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
