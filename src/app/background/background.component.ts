import { Component, OnInit, ElementRef } from '@angular/core';
  import { trigger, state, style, transition, animate,query,stagger,keyframes } from "@angular/animations";

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css'],
  animations:[
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
export class BackgroundComponent implements OnInit {

  items = [];
  constructor(private elementRef: ElementRef) {
    this.items = ['In our system we have to overcome all the above problems. So we are planning to develop both mobile and web applications. There will be three actors in our platform. They are admin, drivers and users. When we talk about users, users means passengers. They can create accounts. They can track train if they are logged in to the system. Otherwise users can only get train schedules and delay notifications','#','#'];
   }
pushItem(){
    this.items.push('#');
  }
removeItem(){
    this.items.pop();
  }

  ngOnInit() {
  }

}
