import React from "react";

function MenuItem(props) {
  const onClick = event => {
    if (typeof props.onClick !== 'function') { return; }

    props.onClick(event);
  }

  return (
    <li className="to-menu__item">
      <button className="to-button" onClick={onClick}>{props.title}</button>
    </li>
  );
}

export default MenuItem;