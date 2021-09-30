import { trigger, transition, style, animate, state } from "@angular/animations";

export const fadeAnimation = trigger('fade',[
    state('void',style({opacity: 0})),
    transition(':enter, :leave',[
        animate('150ms ease')
    ])
])