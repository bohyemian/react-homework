import React from '../lib/react.js';

function ChipButton({ children, active }: { children: string; active?: boolean }) {
  return (
    <button type="button" className="chip-button" aria-pressed={!!active}>{children}</button>
  );
}

export default ChipButton;
