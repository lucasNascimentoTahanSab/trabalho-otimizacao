import React from "react";

function HeaderBasic(props) {
  return (
    <header className="to-header">
      <h2>{props.title}</h2>
    </header>
  );
}

export default HeaderBasic;