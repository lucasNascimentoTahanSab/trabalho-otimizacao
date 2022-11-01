import React, { useContext } from "react";
import { OptimizationRequestGlobal } from "../OptimizationRequestContext/OptimizationRequestContext";

function Solver(props) {
  const optimizationRequest = useContext(OptimizationRequestGlobal);

  const solve = () => {
    console.log(optimizationRequest);

    fetch('/optimize', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(optimizationRequest)
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