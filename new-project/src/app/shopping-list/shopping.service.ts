import { Ingredient } from '../shared/ingredient.modal';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientUpdated = new EventEmitter<Ingredient[]>();
  menuChanged = new EventEmitter<string>();
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('tomatoes', 10)
  ];

  getingredients(){
    return this.ingredients.slice()
  }

  addIngredients(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientUpdated.emit(this.getingredients());
  }

  showIngredient(ingredients: Ingredient[]){
    this.ingredients = ingredients ;
    this.ingredientUpdated.emit(this.getingredients());
    this.menuChanged.emit('shopping');
  }

}
