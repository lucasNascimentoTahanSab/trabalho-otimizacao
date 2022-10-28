import React from "react";

function ButtonAdd(props) {
  const onClick = event => {
    if (typeof props.onClick !== 'function') { return; }

    props.onClick(event);
  }

  return (
    <button onClick={onClick}>+</button>
  );
}

export default ButtonAdd;