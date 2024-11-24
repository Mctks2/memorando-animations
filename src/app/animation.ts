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
