interface InputCheckbox {
  id: string;
  label: string;
}

function Switch({ id, label }: InputCheckbox) {
  return (
    <>
      <div lang="en" className="ui-switch">
        <label className="sr-only" htmlFor={id}>{label}</label>
        <input type="checkbox" role="switch" id={id} aria-checked />
        <span className="sr-only" aria-hidden={true}>On</span>
        <span className="sr-only" aria-hidden={true}>Off</span>
      </div>
    </>
  );
}

export default Switch;
