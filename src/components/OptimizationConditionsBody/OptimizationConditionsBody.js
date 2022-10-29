import React from "react";
import OptimizeCost from "../OptimizeCost/OptimizeCost";
import OptimizeTime from "../OptimizeTime/OptimizeTime";

function OptimizationConditionsBody(props) {
  return (
    <div>
      <OptimizeTime timeConstrains={props.timeConstrains} setTimeConstrains={props.setTimeConstrains} />
      <OptimizeCost costConstrains={props.costConstrains} setCostConstrains={props.setCostConstrains} />
    </div>
  );
}

export default OptimizationConditionsBody;