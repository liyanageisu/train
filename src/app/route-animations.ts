import { 
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes
} from "@angular/animations";
import { Optional, Query } from '@angular/core';

export const fader = 
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':enter, :leave',[
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity:0,
                    transform: 'scale(0) translateY(100%)',

                })
            ],{optional : true}),
            query(':enter',[
                animate('600ms',
                    style({ opacity:1, transform: 'scale(1) translateY(0)'})
              )
            ],{optional : true})
        ]),
    ]);

    // export const slider =
    // trigger('routeAnimations',[
    //     transition('* => isLeft', slideTo('left')),
    //     transition('* => isRight', slideTo('right')),
    //     transition('isRight => * ', slideTo('left')),

    // ]);

    // function slideTo(direction){
    //     const optional = {optional: true};
    //     return [
    //         query(':enter, :leave',[
    //             style({
    //                 position: 'absolute',
    //                 top: 0,
    //                 direction: 0,
    //                 width: '100%',
                   

    //             }) 
    //         ],optional),
    //         query(':enter',[
    //             style({[direction]: '-100%'})
    //         ]),
    //         group([
    //             query(':leave',[
    //                 animate('600ms ease', style({ direction: '100%'}))
    //             ],optional), 
    //             query(':enter',[
    //                 animate('600ms ease', style({ direction: '0%'}))
    //         ])
    //         ]),
    //     ];
    // }

    // export const transform = 
    // trigger('routeAnimations',[
    //     transition('* => isLeft', translateTo({x: -100, y: -100, rotate: -720})),
    //     transition('* => isRight', translateTo({x: 100, y: -100, rotate: 90})),
    //     transition('isRight => *', translateTo({x: -100, y: -100, rotate: 360})),
    //     transition('isLeft => *', translateTo({x:  100, y: -100, rotate: -360})),
    // ]);

    // function translateTo({x = 100, y = 0, rotate = 0}){
    //     const optional = {optional: true};
    //     return [
    //         query(':enter, :leave',[
    //             style({
    //                 position: 'absolute',
    //                 top: 0,
    //                 left: 0,
    //                 width: '100%',
                   

    //             }) 
    //         ],optional),
    //         query(':enter',[
    //            style({ transform: 'translate(${x}%, ${y}%) rotate(${rotate}deg)'})
    //         ]),
    //         group([
    //             query(':leave',[
    //                 animate('600ms ease out', 
    //                 style({transform: 'translate(${x}%, ${y}%) rotate(${rotate}deg)'})
    //             )
    //         ],optional),
    //         query(':enter',[
    //             animate('600ms ease out',
    //             style({transform: 'translate(0, 0) rotate(0)'})
    //             )
    //         ])
    //     ]
    //     )
    //     ]
     
    // }

    // export const stepper = 
    // trigger('routeAnimations', [
    //     transition('* <=> *', [
    //         query(':enter, :leave',[
    //             style({
    //                 position: 'absolute',
    //                 left: 0,
    //                 width: '100%',
                   

    //             })
    //         ]),
    //         group([
    //             query(':enter', [
    //                 animate('2000ms ease ', keyframes([
    //                     style({ transform: 'scale(0) translateX(100%)',offset: 0}),
    //                     style({ transform: 'scale(0.5) translateX(25%)',offset: 0.3}),
    //                     style({ transform: 'scale(1) translateX(25%)',offset: 1}),
    //                 ])),
    //             ]),
    //             group([
    //                 query(':enter', [
    //                     animate('2000ms ease ', keyframes([
    //                         style({ transform: 'scale(0) ',offset: 0}),
    //                         style({ transform: 'scale(0.5) translateX(-25%) rotate(0)',offset: 0.35}),
    //                         style({ opacity: 0, transform: 'scale(6) translateX-50%) rotate(-180deg)',offset: 1}),
    //                     ]))
    //                 ])
    //             ])
    //        ]) 
    //     ])
    
    // ]); 
