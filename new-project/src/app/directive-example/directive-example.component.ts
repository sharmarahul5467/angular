import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.scss']
})
export class DirectiveExampleComponent implements OnInit {

  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  values = [5, 10, 15, 20, 25];
  value = 5;
  onlyOdd = false;

  constructor() { }

  ngOnInit() {
  }

}
