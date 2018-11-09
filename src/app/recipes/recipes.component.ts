import { Component, OnInit, DoCheck } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, DoCheck {
  recipeCaught: Recipe;

  onRecipeEmitted(recipe: Recipe) {
    this.recipeCaught = recipe;
  }

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log(this.recipeCaught);
  }
}
