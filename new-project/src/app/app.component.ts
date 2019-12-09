import { Component, ViewEncapsulation } from '@angular/core';
import { ShoppingListService } from './shopping-list/shopping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  hasFoucs = false;
  input2 = false;
  // currentMenu = 'recipe';
  currentMenu = 'shopping';
  // currentMenu = 'other';

constructor(private shoppingListService: ShoppingListService){
  this.shoppingListService.menuChanged.subscribe( (menu: string) => {
    this.currentMenu = menu ;
  })
}


  onNavigate(feature: string){
    // console.log(this.currentMenu);

    this.currentMenu = feature;
  }


}
