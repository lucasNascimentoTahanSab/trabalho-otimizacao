import React, { useState } from "react";
import TimeConstrains from '../../classes/TimeConstrains/TimeConstrains';
import InputCurrency from "../InputCurrency/InputCurrency";
import InputNumber from "../InputNumber/InputNumber";

function OptimizeTimeBody(props) {
  const [timeConstrains, setTimeConstrains] = useState(new TimeConstrains(props.timeConstrains));

  const onMaximumCourseLoadInput = event => {
    if (typeof props.setTimeConstrains !== 'function') { return; }

    const timeConstrainsUpdated = new TimeConstrains({ ...timeConstrains, maximumCourseLoad: event.target.value });

    setTimeConstrains(timeConstrainsUpdated);
    props.setTimeConstrains(timeConstrainsUpdated);
  }

  const onMaximumCostInput = event => {
    if (typeof props.setTimeConstrains !== 'function') { return; }

    const timeConstrainsUpdated = new TimeConstrains({ ...timeConstrains, maximumCost: event.target.value });

    setTimeConstrains(timeConstrainsUpdated);
    props.setTimeConstrains(timeConstrainsUpdated);
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
              value={timeConstrains.maximumCourseLoad}
              onInput={onMaximumCourseLoadInput} />
            <InputCurrency
              label="Custo máximo por semestre"
              name="maximumCost"
              value={timeConstrains.maximumCost}
              onInput={onMaximumCostInput} />
          </div>
          : null
      }
    </section>
  );
}

export default OptimizeTimeBody;