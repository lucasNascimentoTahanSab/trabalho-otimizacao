import React, { useContext } from "react";
import { OptimizationRequestGlobal } from "../OptimizationRequestContext/OptimizationRequestContext";

function Solver(props) {
  const optimizationRequest = useContext(OptimizationRequestGlobal);

  const setSolution = async () => {
    props.setSolution(await solve());
  }

  function solve() {
    return new Promise((resolve, reject) => {
      fetch('/optimize', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(optimizationRequest)
      })
        .then(result => resolve(result.json()))
        .catch(error => reject(error))
    })
  }

  return (
    <footer className="to-solver">
      <button className="to-button to-button--solve" onClick={setSolution}>Solucionar</button>
    </footer>
  );
}

export default Solver;