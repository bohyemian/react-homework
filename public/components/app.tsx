import React from '../lib/react.js';
import Switch from './switch';
import ChipButton from './button.tsx';

const { createElement: h } = React;

function ButtonWrap() {
  return (
    <div className="button-wrap">
      <ChipButton active>공개 예정</ChipButton>
      <ChipButton>모두의 인기 콘텐츠</ChipButton>
      <ChipButton>TOP 10</ChipButton>
    </div>
  )
}

function App() {
  return (
    <>
      <Switch id="switch" label="레이블명"></Switch>
      <ButtonWrap />
    </>
  );
}

export default App;
