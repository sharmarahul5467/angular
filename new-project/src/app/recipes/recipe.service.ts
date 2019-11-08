import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.modal';

export class RecipeService {
  private recipes: Recipe[]  = [
    new Recipe('pasta' ,  'pasta description',   'https://static.food2fork.com/pestoa0e7.jpg'),
    new Recipe('burger' , 'burger description', 'https://static.food2fork.com/CheddarJalapenoChickenBurgerswithGuacamole4fdb.jpg'),
    new Recipe('pizza' ,  'pizza description',   'https://static.food2fork.com/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg'),
  ];

  recipeSelected = new EventEmitter<Recipe>();

   getRecipe(){
      return this.recipes.slice();
   }

}
