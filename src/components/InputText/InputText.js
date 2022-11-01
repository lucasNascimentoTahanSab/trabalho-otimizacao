import React from "react";

function InputText(props) {
  const onInput = event => {
    if (typeof props.onInput !== 'function') { return; }

    props.onInput(event);
  }

  function getLabel() {
    return props.label ? (<label htmlFor={props.id + props.name}>{props.label}</label>) : null;
  }

  return (
    <div className="to-input__container">
      {getLabel()}
      <input
        className="to-input"
        id={props.id + props.name}
        value={props.value}
        data-id={props.id}
        data-name={props.name}
        onInput={onInput} >
      </input>
    </div>
  );
}

export default InputText;