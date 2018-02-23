import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Simple test', 'https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/exps25157_FM153592B03_18_12b.jpg'),
    new Recipe('Test recipe2', 'Double test', 'https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/exps25157_FM153592B03_18_12b.jpg')
  ];
  @Output() passRecipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeItemToPass(recipe: Recipe) {
    this.passRecipeSelected.emit(recipe);
  }
}
