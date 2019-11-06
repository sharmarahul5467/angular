import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.modal';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static:false}) nameInputref: ElementRef;
  @ViewChild('amountInput', {static:false}) amountInputref: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  AddItem(){

    const ingName = this.nameInputref.nativeElement.value;
    const ingAmount = this.amountInputref.nativeElement.value;
    const newIngredient = new Ingredient(ingName , ingAmount);
    this.ingredientAdded.emit(newIngredient);

    // console.log(ingName);
    // console.log(ingAmount);
  }
}
