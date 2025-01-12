import React from '../lib/react.js';

function ChipButton({ children, active }) {
  return React.createElement(
    'button',
    {
      type: 'button',
      className: 'chip-button',
      ['aria-pressed']: !!active,
      onClick: (e: MouseEvent) => {
        const target = e.currentTarget as HTMLButtonElement;
        const buttonWrap = target.closest('.button-wrap') as HTMLDivElement;
        const buttonAll = buttonWrap?.querySelectorAll('.chip-button');

        if (buttonAll) {
          [...buttonAll].forEach((button) => {
            button.setAttribute('aria-pressed', 'false');
          });
        }

        target.setAttribute('aria-pressed', 'true');
      },
    },
    children
  );
}

export default ChipButton;
