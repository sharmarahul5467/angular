import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.modal';

import { ShoppingListService } from 'src/app/shopping-list/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe : Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  showIngredient(ingredients){
    this.shoppingListService.showIngredient(ingredients);
  }
}