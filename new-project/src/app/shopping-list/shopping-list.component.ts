import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[] = [
  new Ingredient('apple', 5),
  new Ingredient('tomatoes', 10)
];
  constructor() { }

  ngOnInit() {
  }
  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
