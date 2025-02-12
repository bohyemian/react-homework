import Switch from './switch';
import ChipButton from './button';
import '@/styles/components/switch-chip-button.css'
import { useState } from 'react';

interface ChipButtonsProps {
  name: string;
}
const chipButtons = [{name: '공개 예정'}, {name: '모두의 인기 콘텐츠'}, {name: 'TOP 10'}];

function ButtonWrap({buttons}: {buttons: ChipButtonsProps[]}) {
  const [activeButton, setActiveButton] = useState(0);

  const handleActiveButton = (index: number | undefined) => {
    setActiveButton(index!);
  }

  return (
    <div className="button-wrap">
      {buttons.map(({name}, index) => {
        return <ChipButton key={name} index={index} active={index === activeButton} onClick={handleActiveButton}>{name}</ChipButton>;
      })}
    </div>
  )
}

function Homework() {
  return (
    <div className="wrap">
      <div className="ui-homework">
        <h2>UI Components</h2>
        <Switch id="switch" label="레이블명"></Switch>
        <ButtonWrap buttons={chipButtons} />
      </div>
    </div>
  );
}

export default Homework;
