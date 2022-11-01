import React from "react";
import OptimizationConditionsBody from "../OptimizationConditionsBody/OptimizationConditionsBody";
import OptimizationHeader from "../OptimizationHeader/OptimizationHeader";

function OptimizationConditions(props) {
  return (
    <div>
      <OptimizationHeader title="Otimizar matrícula" />
      <OptimizationConditionsBody
        disciplines={props.disciplines}
        timeConstraints={props.timeConstraints}
        setTimeConstraints={props.setTimeConstraints}
        costConstraints={props.costConstraints}
        setCostConstraints={props.setCostConstraints}
        setOptimizationRequest={props.setOptimizationRequest} />
    </div>
  );
}

export default OptimizationConditions;