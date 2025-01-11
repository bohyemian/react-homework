import React from '../lib/react.js';
import Switch from './switch';
import ChipButton from './button';

const { createElement: h } = React;

function ButtonWrap() {
  return h('div', { className: 'button-wrap' }, h(ChipButton, { active: true }, '공개 예정'), h(ChipButton, null, '모두의 인기 콘텐츠'), h(ChipButton, null, 'TOP 10'));
}

function App() {
  return h(React.Fragment, { className: 'app' }, h(Switch), h(ButtonWrap));
}

export default App;
