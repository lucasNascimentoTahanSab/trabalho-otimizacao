import React from "react";

function Solver(props) {
  const solve = () => {
    fetch('/optimize', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(props.body)
    })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }

  return (
    <footer>
      <button onClick={solve}>Solucionar</button>
    </footer>
  );
}

export default Solver;