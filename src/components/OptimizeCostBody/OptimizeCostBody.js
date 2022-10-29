import React, { useState } from "react";
import CostConstrains from '../../classes/CostConstrains/CostConstrains';
import InputNumber from "../InputNumber/InputNumber";

function OptimizeCostBody(props) {
  const [costConstrains, setCostConstrains] = useState(new CostConstrains(props.costConstrains));

  const onMaximumCourseLoadInput = event => {
    if (typeof props.setCostConstrains !== 'function') { return; }

    const costConstrainsUpdated = new CostConstrains({ ...costConstrains, maximumCourseLoad: event.target.value });

    setCostConstrains(costConstrainsUpdated);
    props.setCostConstrains(costConstrainsUpdated);
  }

  const onMinimumCoursesInput = event => {
    if (typeof props.setCostConstrains !== 'function') { return; }

    const costConstrainsUpdated = new CostConstrains({ ...costConstrains, minimumCourses: event.target.value });

    setCostConstrains(costConstrainsUpdated);
    props.setCostConstrains(costConstrainsUpdated);
  }

  return (
    <section>
      <header>
        <h3>Restrições</h3>
      </header>
      <InputNumber
        label="Carga horária máxima por semestre"
        name="maximumCourseLoad"
        value={costConstrains.maximumCourseLoad}
        onInput={onMaximumCourseLoadInput} />
      <InputNumber
        label="Quantidade mínima de disciplinas"
        name="minimumCourses"
        value={costConstrains.minimumCourses}
        onInput={onMinimumCoursesInput} />
    </section>
  );
}

export default OptimizeCostBody;