import React, { useState } from "react";
import OptimizeHeader from "../OptimizeHeader/OptimizeHeader";
import OptimizeTimeBody from "../OptimizeTimeBody/OptimizeTimeBody";
import OptimizeCostBody from "../OptimizeCostBody/OptimizeCostBody";
import OptimizationRequest from '../../classes/OptimizationRequest/OptimizationRequest';

function OptimizationConditionsBody(props) {
  const [displayingOptimizeTime, setOptimizeTimeDisplay] = useState(true);
  const [displayingOptimizeCost, setOptimizeCostDisplay] = useState(false);
  const [optimizationRequest, setOptimizationRequest] = useState(props.optimizationRequest);

  const displayOptimizeTime = () => {
    setOptimizeTimeDisplay(true);
    setOptimizeCostDisplay(false);
    updateOptimizationRequest();
  }

  const displayOptimizeCost = () => {
    setOptimizeTimeDisplay(false);
    setOptimizeCostDisplay(true);
    updateOptimizationRequest();
  }

  const updateOptimizationRequest = (constrains) => {
    const newOptimizationRequest = new OptimizationRequest({
      ...optimizationRequest,
      optimize: displayingOptimizeTime ? 'quantity' : 'price',
      opType: displayingOptimizeTime ? 'max' : 'min',
      constraints: displayingOptimizeTime ? getTimeOptimizationConstraints(constrains) : getCostOptimizationConstraints(constrains)
    });

    setOptimizationRequest(newOptimizationRequest);
    props.setOptimizationRequest(newOptimizationRequest);
  }

  function getTimeOptimizationConstraints(constrains) {
    return {
      price: { max: constrains.maximumCost },
      courseLoad: { max: constrains.maximumCourseLoad }
    };
  }

  function getCostOptimizationConstraints(constrains) {
    return {
      quantity: { min: constrains.minimumCourses },
      courseLoad: { max: constrains.maximumCourseLoad }
    };
  }

  return (
    <div>
      <div>
        <OptimizeHeader onClick={displayOptimizeTime} title="Minimizar o tempo para conclusão do curso" />
        <OptimizeHeader onClick={displayOptimizeCost} title="Minimizar o valor total gasto por semestre" />
      </div>
      <div>
        <OptimizeTimeBody
          show={displayingOptimizeTime}
          timeConstraints={props.timeConstraints}
          setTimeConstraints={props.setTimeConstraints}
          updateOptimizationRequest={updateOptimizationRequest} />
        <OptimizeCostBody
          show={displayingOptimizeCost}
          costConstraints={props.costConstraints}
          setCostConstraints={props.setCostConstraints}
          updateOptimizationRequest={updateOptimizationRequest} />
      </div>
    </div>
  );
}

export default OptimizationConditionsBody;