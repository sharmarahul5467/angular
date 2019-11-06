import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeView = new EventEmitter<any>();

  recipes: Recipe[]  = [
    new Recipe('pasta' , 'pasta description', 'https://static.food2fork.com/pestoa0e7.jpg'),
    new Recipe('burger' , 'burger description', 'https://static.food2fork.com/CheddarJalapenoChickenBurgerswithGuacamole4fdb.jpg'),
    new Recipe('pizza' , 'pizza description', 'https://static.food2fork.com/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  viewRecipeList(data){
    this.recipeView.emit(data)
  }

}
