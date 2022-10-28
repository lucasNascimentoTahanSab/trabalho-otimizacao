import React from "react";

function ButtonDelete(props) {
  const onClick = event => {
    if (typeof props.onClick !== 'function') { return; }

    props.onClick(event);
  }

  return (
    <button onClick={onClick}>-</button>
  );
}

export default ButtonDelete;