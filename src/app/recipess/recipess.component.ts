import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipess',
  templateUrl: './recipess.component.html',
  styleUrls: ['./recipess.component.css']
})
export class RecipessComponent implements OnInit {
  recipePassed: Recipe;

  constructor() {
  }

  ngOnInit() {
  }

  onShowDetails(recipe: Recipe) {
    this.recipePassed = recipe;
  }
}
