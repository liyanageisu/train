import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate,query,stagger } from "@angular/animations";

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
  animations: [
    trigger('photosAnimation', [
      transition('* => *', [
        query('img', style({ transform: 'tranlateX(-100%)'})),
        query('img',
        stagger('600ms',[
            animate('900ms', style({ transform: 'tranlateX(0%)'}))
        ]))
      ])
    ])
  ]

  
})
export class LeftComponent implements OnInit {
  
  photos=['../../assets/mobile-app.jpg',
  '../../assets/last.png',
  '../../assets/bg-2.jpg'];


  constructor() {
    //this.photos=['../../assets/mobile-app.jpg','../../assets/last.png','../../assets/bg-2.jpg'];
  
   }



  ngOnInit() {
  }

}
