import {Component, OnInit} from '@angular/core';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipess',
  templateUrl: './recipess.component.html',
  styleUrls: ['./recipess.component.css'],
  providers: [RecipeService]
})
export class RecipessComponent implements OnInit {

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {

  }
}
