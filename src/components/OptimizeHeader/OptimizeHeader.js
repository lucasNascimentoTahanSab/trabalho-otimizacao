import React from "react";

function OptimizeHeader(props) {
  const onClick = event => {
    if (typeof props.onClick !== 'function') { return; }

    props.onClick(event);
  }

  return (
    <header className="to-optimization__header" onClick={onClick}>
      <h2>{props.title}</h2>
    </header>
  );
}

export default OptimizeHeader;