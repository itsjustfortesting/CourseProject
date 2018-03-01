import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';
import index from "@angular/cli/lib/cli";

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input() recipeId;
  recipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipe(this.recipeId);
  }

}
