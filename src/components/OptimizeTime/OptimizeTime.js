import React from "react";
import OptimizeTimeBody from "../OptimizeTimeBody/OptimizeTimeBody";
import OptimizeHeader from "../OptimizeHeader/OptimizeHeader";

function OptimizeTime(props) {
  return (
    <div>
      <OptimizeHeader title="Minimizar o tempo para conclusão do curso" />
      <OptimizeTimeBody timeConstrains={props.timeConstrains} setTimeConstrains={props.setTimeConstrains} />
    </div>
  );
}

export default OptimizeTime;