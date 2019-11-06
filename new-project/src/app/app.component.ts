import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // currentMenu = 'recipe';
  currentMenu = 'shopping';



  onNavigate(feature: string){
    // console.log(this.currentMenu);

    this.currentMenu = feature;
  }
}
