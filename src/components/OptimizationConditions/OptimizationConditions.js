import React from "react";
import OptimizationConditionsBody from "../OptimizationConditionsBody/OptimizationConditionsBody";
import OptimizationHeader from "../OptimizationHeader/OptimizationHeader";

function OptimizationConditions(props) {
  return (
    <div>
      <OptimizationHeader title="Otimizar matrícula" />
      <OptimizationConditionsBody
        timeConstrains={props.timeConstrains}
        setTimeConstrains={props.setTimeConstrains}
        costConstrains={props.costConstrains}
        setCostConstrains={props.setCostConstrains} />
    </div>
  );
}

export default OptimizationConditions;