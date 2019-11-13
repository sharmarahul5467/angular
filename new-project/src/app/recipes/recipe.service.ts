import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.modal';
import { Ingredient } from '../shared/ingredient.modal';

export class RecipeService {
  private recipes: Recipe[]  = [
    new Recipe(
      'pasta'  ,
      'this is pasta description',
      'https://static.food2fork.com/pestoa0e7.jpg',
      [
        new Ingredient('pasta', 1),
        new Ingredient('meat', 2)
      ]
      ),
    new Recipe(
      'burger' ,
      'this is burger description',
      'https://static.food2fork.com/CheddarJalapenoChickenBurgerswithGuacamole4fdb.jpg',
      [
        new Ingredient('bun', 2),
        new Ingredient('pasta', 1)
      ]
      ),
    new Recipe(
      'pizza'  ,
      'this is pizza description',
      'https://static.food2fork.com/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg',
      [
        new Ingredient('pizza', 2),
        new Ingredient ('meat', 1)
      ]
      ),
  ];

  recipeSelected = new EventEmitter<Recipe>();

   getRecipe(){
      return this.recipes.slice();
   }



}
