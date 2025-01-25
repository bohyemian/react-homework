interface ChipButtonType {
  children?: React.ReactNode;
  active?: boolean
}

function ChipButton({ children, active }: ChipButtonType) {
  return (
    <button type="button" className="chip-button" aria-pressed={!!active}>{children}</button>
  );
}

export default ChipButton;
