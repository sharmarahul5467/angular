import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hasFoucs = false;
  input2 = false;
  // currentMenu = 'recipe';
  // currentMenu = 'shopping';
  currentMenu = 'other';



  onNavigate(feature: string){
    // console.log(this.currentMenu);

    this.currentMenu = feature;
  }
  test(event){
    this.hasFoucs = true ;
  }

}
