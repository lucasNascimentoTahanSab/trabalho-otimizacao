import React, { useContext, useState } from "react";
import Constraints from "../../classes/Constraints/Constraints";
import CostConstraintParameters from '../../classes/CostConstraintParameters/CostConstraintParameters';
import InputNumber from "../InputNumber/InputNumber";
import { OptimizationRequestGlobal } from "../OptimizationRequestContext/OptimizationRequestContext";

function OptimizeCostBody(props) {
  const optimizationRequest = useContext(OptimizationRequestGlobal);
  const [costConstraints, setCostConstraints] = useState(new CostConstraintParameters(props.costConstraints));

  const onMaximumCourseLoadInput = event => {
    if (typeof props.setCostConstraints !== 'function') { return; }

    const costConstraintsUpdated = new CostConstraintParameters({ ...costConstraints, maximumCourseLoad: parseFloat(event.target.value) });

    updateOptimizationRequest(costConstraintsUpdated);
    setCostConstraints(costConstraintsUpdated);
    props.setCostConstraints(costConstraintsUpdated);
  }

  const onMinimumCoursesInput = event => {
    if (typeof props.setCostConstraints !== 'function') { return; }

    const costConstraintsUpdated = new CostConstraintParameters({ ...costConstraints, minimumCourses: parseFloat(event.target.value) });

    updateOptimizationRequest(costConstraintsUpdated);
    setCostConstraints(costConstraintsUpdated);
    props.setCostConstraints(costConstraintsUpdated);
  }

  function updateOptimizationRequest(constraints) {
    optimizationRequest.optimize = 'price';
    optimizationRequest.opType = 'min';
    optimizationRequest.constraints = getOptimizationConstraints(constraints);

    generateVariableInts();
  }

  function generateVariableInts() {
    Object.keys(optimizationRequest.variables)?.forEach(variable => optimizationRequest.ints[variable] = 1);
  }

  function getOptimizationConstraints(constraints) {
    const newConstraints = new Constraints(optimizationRequest.constraints);
    newConstraints.quantity = { min: constraints.minimumCourses };
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
                value={costConstraints.maximumCourseLoad}
                onInput={onMaximumCourseLoadInput} />
              <InputNumber
                label="Quantidade mínima de disciplinas"
                name="minimumCourses"
                value={costConstraints.minimumCourses}
                onInput={onMinimumCoursesInput} />
            </div>
          </div>
          : null
      }
    </section>
  );
}

export default OptimizeCostBody;