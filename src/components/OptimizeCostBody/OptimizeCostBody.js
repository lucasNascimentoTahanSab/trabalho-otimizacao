import React, { useState } from "react";
import CostConstraints from '../../classes/CostConstraints/CostConstraints';
import InputNumber from "../InputNumber/InputNumber";

function OptimizeCostBody(props) {
  const [costConstraints, setCostConstraints] = useState(new CostConstraints(props.costConstraints));

  const onMaximumCourseLoadInput = event => {
    if (typeof props.setCostConstraints !== 'function') { return; }

    const costConstraintsUpdated = new CostConstraints({ ...costConstraints, maximumCourseLoad: event.target.value });

    setCostConstraints(costConstraintsUpdated);
    props.setCostConstraints(costConstraintsUpdated);
    props.updateOptimizationRequest(costConstraintsUpdated);
  }

  const onMinimumCoursesInput = event => {
    if (typeof props.setCostConstraints !== 'function') { return; }

    const costConstraintsUpdated = new CostConstraints({ ...costConstraints, minimumCourses: event.target.value });

    setCostConstraints(costConstraintsUpdated);
    props.setCostConstraints(costConstraintsUpdated);
    props.updateOptimizationRequest(costConstraintsUpdated);
  }

  return (
    <section>
      {
        props.show ?
          <div>
            <header>
              <h3>Restrições</h3>
            </header>
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
          : null
      }
    </section>
  );
}

export default OptimizeCostBody;