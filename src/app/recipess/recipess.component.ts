import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipess',
  templateUrl: './recipess.component.html',
  styleUrls: ['./recipess.component.css'],
  providers: [RecipeService]
})
export class RecipessComponent implements OnInit {
  recipePassed: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipePassed = recipe;
      }
    );
  }
}
