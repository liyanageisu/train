import { Component, OnInit, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate,query,stagger } from "@angular/animations";

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css'],
  animations:[
    trigger('photoState',[
      state('move',style({
        transform: 'translateX(-100%)  translateY(50px)',
      })),
      state('enlarge',style({
        transform: 'scale(1.5)',
      })),
      state('spin',style({
        transform: 'rotateY(180deg) rotateZ(90deg) ',
      })),
      transition('spin => move', animate('200ms easw-out')),
      transition('* => *', animate('500ms ease')),
    ])
  ]
  // animations: [
  //   trigger('photosAnimations',[
  //     transition('* => *',[
  //       query('img', style({ transform: 'translateX(-100%)'}), {optional: true}),
  //       query('img', 
  //         stagger('600ms', [
  //           animate('900ms',style({transform: 'translateX(0)' }))
  //         ]),{optional: true})
  //     ])
  //   ])
  // ]
})
export class BackgroundComponent implements OnInit {

  

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
 }

  position: string;
  photoUrl="../../assets/last.png"

  changePosition(newPosition: string){
      this.position = newPosition
  }
 
  
  // photo="../../assets/bg.jpg,"
  

  ngOnInit() {
  }

}
