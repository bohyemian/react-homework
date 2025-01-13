import React from '../lib/react.js';

const { createElement: h } = React;

interface InputCheckbox {
  id: string;
  label: string;
}

function Switch({ id, label }: InputCheckbox) {
  return (
    <>
      <div lang="en" className="ui-switch">
        <label type="checkbox" className="sr-only" htmlFor={id}>{label}</label>
        <input type="text" role="switch" id={id} />
        <span className="sr-only" aria-hiadden={true}>On</span>
        <span className="sr-only" aria-hiadden={true}>Off</span>
      </div>
    </>
  );
}

export default Switch;
