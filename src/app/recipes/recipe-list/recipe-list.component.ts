import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Spaghetti', 'Tasty noodles in a tomato sauce.', 'https://www.cookingclassy.com/wp-content/uploads/2012/11/spaghetti+with+meat+sauce11.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Mashed Potatoes', 'Buttery potatoes mashed into a yummy side-dish.', 'https://static01.nyt.com/images/2015/10/30/dining/30COOKING-MASHEDPOTATOES1/30COOKING-MASHEDPOTATOES1-superJumbo.jpg')
  ];

  @Output() recipeEmitter = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  sendRecipeDetails(recipe: Recipe) {
    this.recipeEmitter.emit(recipe);
  }

}
