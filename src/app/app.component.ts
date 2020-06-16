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

    trigger('listAnimation',[
      transition('* => *',[
        query(':enter', style({opacity:0}), {optional:true}),
        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75px)',offset: 0}),
            style({opacity: 0.5, transform: 'translateY(35px)',offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',offset: 1}),
          
            
          ]))
        ]))

      ])
    ])
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
