import React from '../lib/react.js';
import ChipButton from './button';

const { createElement: h } = React;

function ButtonWrap() {
  return h('div', { className: 'button-wrap' }, h(ChipButton, null, '공개 예정'), h(ChipButton, null, '모두의 인기 콘텐츠'), h(ChipButton, null, 'TOP 10'));
}

function App() {
  return h('div', { className: 'app' }, h(ButtonWrap));
}

export default App;
