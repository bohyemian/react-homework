import React from '../lib/react.js';

function ChipButton({ children }) {
  return React.createElement(
    'button',
    {
      type: 'button',
      className: 'chip-button',
      onClick: (e: MouseEvent) => {
        const target = e.currentTarget as HTMLButtonElement;
        const buttonWrap = target.closest('.button-wrap') as HTMLDivElement;
        const buttonAll = buttonWrap.querySelectorAll('.chip-button');

        if (buttonAll) {
          [...buttonAll].map((button) => button.classList.remove('is-active'));
        }

        target.classList.toggle('is-active');
      },
    },
    children
  );
}

export default ChipButton;
