import React from "react";
import OptimizeCostBody from "../OptimizeCostBody/OptimizeCostBody";
import OptimizeHeader from "../OptimizeHeader/OptimizeHeader";

function OptimizeCost(props) {
  return (
    <div>
      <OptimizeHeader title="Minimizar o valor total gasto por semestre" />
      <OptimizeCostBody costConstrains={props.costConstrains} setCostConstrains={props.setCostConstrains} />
    </div>
  );
}

export default OptimizeCost;