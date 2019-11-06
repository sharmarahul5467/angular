import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipeDetails: any ;

  constructor() { }

  ngOnInit() {
  }

  UpdateRecipeDetails(event){
    this.recipeDetails = event;
    console.log('data fetch sucessfully to main component');
    // console.log(this.recipeDetails);
  }
}
