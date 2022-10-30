import React, { useState } from "react";
import TimeConstraints from '../../classes/TimeConstraints/TimeConstraints';
import InputCurrency from "../InputCurrency/InputCurrency";
import InputNumber from "../InputNumber/InputNumber";

function OptimizeTimeBody(props) {
  const [timeConstraints, setTimeConstraints] = useState(new TimeConstraints(props.timeConstraints));

  const onMaximumCourseLoadInput = event => {
    if (typeof props.setTimeConstraints !== 'function') { return; }

    const timeConstraintsUpdated = new TimeConstraints({ ...timeConstraints, maximumCourseLoad: event.target.value });

    setTimeConstraints(timeConstraintsUpdated);
    props.setTimeConstraints(timeConstraintsUpdated);
    props.updateOptimizationRequest(timeConstraintsUpdated);
  }

  const onMaximumCostInput = event => {
    if (typeof props.setTimeConstraints !== 'function') { return; }

    const timeConstraintsUpdated = new TimeConstraints({ ...timeConstraints, maximumCost: event.target.value });

    setTimeConstraints(timeConstraintsUpdated);
    props.setTimeConstraints(timeConstraintsUpdated);
    props.updateOptimizationRequest(timeConstraintsUpdated);
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
              value={timeConstraints.maximumCourseLoad}
              onInput={onMaximumCourseLoadInput} />
            <InputCurrency
              label="Custo máximo por semestre"
              name="maximumCost"
              value={timeConstraints.maximumCost}
              onInput={onMaximumCostInput} />
          </div>
          : null
      }
    </section>
  );
}

export default OptimizeTimeBody;