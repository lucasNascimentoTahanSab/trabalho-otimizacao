import React from "react";

function InputNumber(props) {
  const onInput = event => {
    if (typeof props.onInput !== 'function') { return; }

    props.onInput(event);
  }

  return (
    <div className="to-input__container">
      <input className="to-input__item" value={props.value} onInput={onInput} data-id={props.id} data-name={props.name}></input>
    </div>
  );
}

export default InputNumber;