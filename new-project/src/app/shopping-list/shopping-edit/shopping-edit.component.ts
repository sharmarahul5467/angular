import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.modal';
import { LoggingService } from 'src/app/shared/Service/logging.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
  providers: [LoggingService]
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static:false}) nameInputref: ElementRef;
  @ViewChild('amountInput', {static:false}) amountInputref: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

  AddItem(){

    const ingName = this.nameInputref.nativeElement.value;
    const ingAmount = this.amountInputref.nativeElement.value;
    const newIngredient = new Ingredient(ingName , ingAmount);
    this.ingredientAdded.emit(newIngredient);

    // this.loggingService.logStatusChange(ingName, ingAmount);

    // console.log(ingName);
    // console.log(ingAmount);
  }
}
