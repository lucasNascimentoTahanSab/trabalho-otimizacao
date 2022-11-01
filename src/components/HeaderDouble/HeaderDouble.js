import React from "react";
import ButtonAdd from "../ButtonAdd/ButtonAdd";

function HeaderDouble(props) {
  const onClick = event => {
    if (typeof props.onClick !== 'function') { return; }

    props.onClick(event);
  }

  return (
    <header className="to-header to-header--space-between">
      <h2>{props.title}</h2>
      <ButtonAdd onClick={onClick} />
    </header>
  )
}

export default HeaderDouble;