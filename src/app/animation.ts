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
        transform: 'scale(1)', // Estado inicial com tamanho normal
        filter: 'brightness(100%)', // Sem alteração de brilho
      })
    ),
    state(
      'highlighted',
      style({
        border: '4px solid #B2B6FF',
        filter: 'brightness(92%)', // Um brilho levemente reduzido
        transform: 'scale(1.05)', // Aumenta o tamanho do elemento
      })
    ),
    transition('default => highlighted', [
      animate(
        '300ms cubic-bezier(0.25, 0.8, 0.25, 1)', // Usando cubic-bezier para suavizar a transição
        style({
          transform: 'scale(1.1)', // Expande um pouco mais quando destacado
        })
      ),
      animate('200ms ease-out'), // Suaviza a finalização da animação
    ]),
    transition('highlighted => default', [
      animate(
        '200ms ease-out',
        style({
          transform: 'scale(1)', // Retorna ao tamanho original suavemente
        })
      ),
    ]),
  ]),
];

export const shownStateTrigger = trigger('shownState', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(20px)', // Desloca o elemento para baixo no início
    }),
    animate(
      '400ms cubic-bezier(0.25, 0.8, 0.25, 1)', // Usando cubic-bezier para suavizar o movimento
      style({
        opacity: 1,
        transform: 'translateY(0)', // Volta para a posição original
      })
    ),
  ]),
  transition(':leave', [
    animate(
      '300ms ease-in',
      style({
        opacity: 0,
        transform: 'translateY(20px)', // Desloca o elemento para baixo ao sair
      })
    ),
  ]),
]);

export const checkButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate(
      '400ms ease-in-out',
      style({
        transform: 'scale(1.2)', // Aumenta o tamanho do botão ao ser clicado
        backgroundColor: '#4CAF50', // Mudança de cor para verde
      })
    ),
    animate(
      '100ms ease-out',
      style({
        transform: 'scale(1)', // Retorna ao tamanho normal após a pulsação
      })
    ),
  ]),
]);
