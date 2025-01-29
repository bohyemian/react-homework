interface ChipButtonType {
  children?: React.ReactNode;
  active?: boolean;
  index?: number;
  onClick?: (index: number | undefined) => void;
}

function ChipButton({ children, active, index, onClick }: ChipButtonType) {
  const handleClick = () =>{
    onClick?.(index);
  }

  return (
    <button type="button" className="chip-button" onClick={handleClick} aria-pressed={active}>{children}</button>
  );
}

export default ChipButton;
