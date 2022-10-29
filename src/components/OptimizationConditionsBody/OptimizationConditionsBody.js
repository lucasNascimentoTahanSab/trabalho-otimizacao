import React, { useState } from "react";
import OptimizeHeader from "../OptimizeHeader/OptimizeHeader";
import OptimizeTimeBody from "../OptimizeTimeBody/OptimizeTimeBody";
import OptimizeCostBody from "../OptimizeCostBody/OptimizeCostBody";

function OptimizationConditionsBody(props) {
  const [displayingOptimizeTime, setOptimizeTimeDisplay] = useState(true);
  const [displayingOptimizeCost, setOptimizeCostDisplay] = useState(false);

  const displayOptimizeTime = () => {
    setOptimizeTimeDisplay(true);
    setOptimizeCostDisplay(false);
  }

  const displayOptimizeCost = () => {
    setOptimizeTimeDisplay(false);
    setOptimizeCostDisplay(true);
  }

  return (
    <div>
      <div>
        <OptimizeHeader onClick={displayOptimizeTime} title="Minimizar o tempo para conclusão do curso" />
        <OptimizeHeader onClick={displayOptimizeCost} title="Minimizar o valor total gasto por semestre" />
      </div>
      <div>
        <OptimizeTimeBody show={displayingOptimizeTime} timeConstrains={props.timeConstrains} setTimeConstrains={props.setTimeConstrains} />
        <OptimizeCostBody show={displayingOptimizeCost} costConstrains={props.costConstrains} setCostConstrains={props.setCostConstrains} />
      </div>
    </div>
  );
}

export default OptimizationConditionsBody;