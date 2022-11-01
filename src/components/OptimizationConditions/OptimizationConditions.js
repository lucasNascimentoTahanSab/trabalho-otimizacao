import React from "react";
import OptimizationConditionsBody from "../OptimizationConditionsBody/OptimizationConditionsBody";
import HeaderBasic from "../HeaderBasic/HeaderBasic";

function OptimizationConditions(props) {
  return (
    <section>
      <HeaderBasic title="Otimizar matrícula" />
      <OptimizationConditionsBody
        disciplines={props.disciplines}
        timeConstraints={props.timeConstraints}
        setTimeConstraints={props.setTimeConstraints}
        costConstraints={props.costConstraints}
        setCostConstraints={props.setCostConstraints}
        setOptimizationRequest={props.setOptimizationRequest} />
    </section>
  );
}

export default OptimizationConditions;