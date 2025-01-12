import React from '../lib/react.js';

function ChipButton({ children, active }) {
  const className = active ? `chip-button is-active` : `chip-button`;

  return React.createElement(
    'button',
    {
      type: 'button',
      className,
      ['aria-pressed']: !!active,
      onClick: (e: MouseEvent) => {
        const target = e.currentTarget as HTMLButtonElement;
        const buttonWrap = target.closest('.button-wrap') as HTMLDivElement;
        const buttonAll = buttonWrap?.querySelectorAll('.chip-button');

        if (buttonAll) {
          [...buttonAll].forEach((button) => {
            button.classList.remove('is-active');
            button.setAttribute('aria-pressed', 'false');
          });
        }

        target.classList.toggle('is-active');
        target.setAttribute('aria-pressed', 'true');
      },
    },
    children
  );
}

export default ChipButton;
