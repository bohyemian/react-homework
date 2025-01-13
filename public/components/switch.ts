import React from '../lib/react.js';

const { createElement: h } = React;

interface InputCheckbox {
  id: string;
  label: string;
}

function Switch({ id, label }: InputCheckbox) {
  return h(React.Fragment, null, h('div', { lang: 'en', className: 'ui-switch' }, h('label', { className: 'sr-only', htmlFor: id }, label), h('input', { role: 'switch', type: 'checkbox', id }), h('span', { ['aria-hidden']: true, className: 'sr-only' }, 'On'), h('span', { ['aria-hidden']: true, className: 'sr-only' }, 'Off')));
}

export default Switch;
