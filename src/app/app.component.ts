import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
//import { slider, transform ,fader,stepper } from "./route-animations";
import { fader } from "./route-animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fader,
    // slider,
    // transform,
    // stepper
  ] 
})
export class AppComponent {
  title = 'train';

  items = [];

  constructor(){
    this.items = ['Isuri','Geethma','Liyange'];
  }

  pushItem(){
    this.items.push('Oh yeah that is awesome');
  }

  removeItem(){
    this.items.pop();
  }
  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData  && outlet.activatedRouteData['animation'];
 
  }
}
