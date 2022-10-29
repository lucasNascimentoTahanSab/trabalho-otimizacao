import React from "react";
import OptimizationRequest from "../../classes/OptimizationRequest/OptimizationRequest";

function Solver(props) {
  const solve = () => {
    fetch('/optimize', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(new OptimizationRequest({
        variables: props.variables,
        params: props.params
      }))
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