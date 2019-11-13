import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.modal';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipeDetails: any ;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {

    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.recipeDetails = recipe;
      // console.log(recipe)
    });

  }


}
