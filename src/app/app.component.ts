import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
//import { slider, transform ,fader,stepper } from "./route-animations";
import { fader } from "./route-animations";
import { 
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
  stagger
} from "@angular/animations";

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


  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData  && outlet.activatedRouteData['animation'];
 
  }
}
