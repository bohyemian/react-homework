import Switch from './switch';
import ChipButton from './button';
import '@/styles/components/switch-chip-button.css'

function ButtonWrap() {
  return (
    <div className="button-wrap">
      <ChipButton active>공개 예정</ChipButton>
      <ChipButton>모두의 인기 콘텐츠</ChipButton>
      <ChipButton>TOP 10</ChipButton>
    </div>
  )
}

function Homework() {
  return (
    <div className="ui-homework">
      <h2>UI Components</h2>
      <Switch id="switch" label="레이블명"></Switch>
      <ButtonWrap />
    </div>
  );
}

export default Homework;
