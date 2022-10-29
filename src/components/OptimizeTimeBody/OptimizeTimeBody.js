import React, { useState } from "react";
import CostConstrains from '../../classes/CostConstrains/CostConstrains';
import InputCurrency from "../InputCurrency/InputCurrency";
import InputNumber from "../InputNumber/InputNumber";

function OptimizeTimeBody(props) {
  const [timeConstrains, setTimeConstrains] = useState(new CostConstrains(props.timeConstrains));

  const onMaximumCourseLoadInput = event => {
    if (typeof props.setTimeConstrains !== 'function') { return; }

    const timeConstrainsUpdated = new CostConstrains({ ...timeConstrains, maximumCourseLoad: event.target.value });

    setTimeConstrains(timeConstrainsUpdated);
    props.setTimeConstrains(timeConstrainsUpdated);
  }

  const onMaximumCostInput = event => {
    if (typeof props.setTimeConstrains !== 'function') { return; }

    const timeConstrainsUpdated = new CostConstrains({ ...timeConstrains, maximumCost: event.target.value });

    setTimeConstrains(timeConstrainsUpdated);
    props.setTimeConstrains(timeConstrainsUpdated);
  }

  return (
    <section>
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
    </section>
  );
}

export default OptimizeTimeBody;