import React, { useContext, useState } from "react";
import Constraints from "../../classes/Constraints/Constraints";
import TimeConstraintParameters from '../../classes/TimeConstraintParameters/TimeConstraintParameters';
import InputCurrency from "../InputCurrency/InputCurrency";
import InputNumber from "../InputNumber/InputNumber";
import { OptimizationRequestGlobal } from "../OptimizationRequestContext/OptimizationRequestContext";

function OptimizeTimeBody(props) {
  const optimizationRequest = useContext(OptimizationRequestGlobal);
  const [timeConstraints, setTimeConstraints] = useState(new TimeConstraintParameters(props.timeConstraints));

  const onMaximumCourseLoadInput = event => {
    if (typeof props.setTimeConstraints !== 'function') { return; }

    const timeConstraintsUpdated = new TimeConstraintParameters({ ...timeConstraints, maximumCourseLoad: event.target.value });

    setOptimizationRequest(timeConstraintsUpdated);
    setTimeConstraints(timeConstraintsUpdated);
    props.setTimeConstraints(timeConstraintsUpdated);
  }

  const onMaximumCostInput = event => {
    if (typeof props.setTimeConstraints !== 'function') { return; }

    const timeConstraintsUpdated = new TimeConstraintParameters({ ...timeConstraints, maximumCost: event.target.value });

    setOptimizationRequest(timeConstraintsUpdated);
    setTimeConstraints(timeConstraintsUpdated);
    props.setTimeConstraints(timeConstraintsUpdated);
  }

  function setOptimizationRequest(constraints) {
    optimizationRequest.optimize = 'quantity';
    optimizationRequest.opType = 'max';
    optimizationRequest.constraints = getOptimizationConstraints(constraints);

    generateVariableInts();
  }

  function generateVariableInts() {
    Object.keys(optimizationRequest.variables)?.forEach(variable => optimizationRequest.ints[variable] = 1);
  }

  function getOptimizationConstraints(constraints) {
    const newConstraints = new Constraints(optimizationRequest.constraints);
    newConstraints.price = { max: constraints.maximumCost };
    newConstraints.courseLoad = { max: constraints.maximumCourseLoad };

    generateVariableConstraints(newConstraints);

    return newConstraints;
  }

  function generateVariableConstraints(constraints) {
    Object.keys(optimizationRequest.variables)?.forEach(variable => constraints[variable] = { max: 1 });
  }

  return (
    <section>
      {
        props.show ?
          <div>
            <header className="to-header">
              <h3>Restrições</h3>
            </header>
            <div className="to-constraints__section">
              <InputNumber
                label="Carga horária máxima por semestre"
                name="maximumCourseLoad"
                value={timeConstraints.maximumCourseLoad}
                onInput={onMaximumCourseLoadInput} />
              <InputCurrency
                label="Custo máximo por semestre"
                name="maximumCost"
                value={timeConstraints.maximumCost}
                onInput={onMaximumCostInput} />
            </div>
          </div>
          : null
      }
    </section>
  );
}

export default OptimizeTimeBody;