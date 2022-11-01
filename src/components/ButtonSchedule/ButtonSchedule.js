import React from "react";

function ButtonSchedule(props) {
  const onClick = event => {
    if (typeof props.onClick !== 'function') { return; }

    props.onClick(event);
  }

  return (
    <button className="to-button to-button--add" onClick={onClick}>H</button>
  );
}

export default ButtonSchedule;