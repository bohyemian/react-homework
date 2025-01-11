import React from '../lib/react.js';

const { createElement: h } = React;

interface InputCheckbox {
  id: string;
  label: string;
}

function Switch({ id, label }: InputCheckbox) {
  return h(React.Fragment, null, h('div', { className: 'ui-switch' }, h('label', { className: 'sr-only', htmlFor: id }, label), h('input', { type: 'checkbox', id })));
}

export default Switch;
