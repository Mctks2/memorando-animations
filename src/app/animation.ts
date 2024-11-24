import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const highlightedStateTrigger = [
  trigger('highlightState', [
    state(
      'default',
      style({
        border: '2px solid #B2B6FF',
      })
    ),
    state(
      'highlighted',
      style({
        border: '4px solid #B2B6FF',
        filter: 'brightness(92%)',
      })
    ),
    transition('default => highlighted', [
      animate(
        '200ms ease-in',
        style({
          transform: 'scale(1.1)', // transição de default para highlighted e aumento de escala 10%
        })
      ),
      animate('200ms'),
    ]),
  ]),
];

export const shownStateTrigger = trigger('shownState', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(300,
      style({
        opacity: 1,
      })
    ),
  ]),
  transition(':leave', [
    animate(
      300,
      style({
        opacity: 0,
      })
    ),
  ]),
]);
