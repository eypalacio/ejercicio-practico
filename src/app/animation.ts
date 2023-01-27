import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

export const open_close = trigger('open_close', [
    transition(':enter', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate('300ms', style({ opacity: 1, transform: 'scale(1)' })),
    ]),
    transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1 }),
        animate('300ms', style({ transform: 'scale(0)', opacity: 0 })),
    ]),
])

export const list_animation = trigger('list_animation', [
    transition('* <=> *', [
        query(':enter',
            [style({ transform: 'translateX(50%)', opacity: 0 }), stagger('100ms', animate('1000ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 })))],
            { optional: true }
        ),
        query(':leave',
            animate('200ms', style({ opacity: 0 })),
            { optional: true }
        )
    ])
]);