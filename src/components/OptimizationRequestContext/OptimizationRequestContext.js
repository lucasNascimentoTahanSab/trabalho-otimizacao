import React from "react";
import OptimizationRequest from "../../classes/OptimizationRequest/OptimizationRequest";

const optimizationRequest = new OptimizationRequest();
const OptimizationRequestGlobal = React.createContext(optimizationRequest);

function OptimizationRequestContext(props) {
  return (
    <OptimizationRequestGlobal.Provider value={optimizationRequest}>
      {props.children}
    </OptimizationRequestGlobal.Provider>
  );
}

export { OptimizationRequestContext, OptimizationRequestGlobal };