import React from '../lib/react.js';

const { createElement: h } = React;

function Switch() {
  return h(React.Fragment, null, h('span', { className: 'ui-switch' }, h('input', { type: 'checkbox' })));
}

export default Switch;
