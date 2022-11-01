import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import OptimizeTimeBody from "../OptimizeTimeBody/OptimizeTimeBody";
import OptimizeCostBody from "../OptimizeCostBody/OptimizeCostBody";

function OptimizationConditionsBody(props) {
  const [displayingOptimizeTime, setOptimizeTimeDisplay] = useState(true);
  const [displayingOptimizeCost, setOptimizeCostDisplay] = useState(false);

  const displayOptimizeTime = () => {
    setOptimizeTimeDisplay(true);
    setOptimizeCostDisplay(false);
  }

  const displayOptimizeCost = () => {
    setOptimizeTimeDisplay(false);
    setOptimizeCostDisplay(true);
  }

  return (
    <section>
      <menu className="to-menu">
        <MenuItem onClick={displayOptimizeTime} title="Minimizar o tempo para conclusão do curso" />
        <MenuItem onClick={displayOptimizeCost} title="Minimizar o valor total gasto por semestre" />
      </menu>
      <section className="to-menu__section">
        <OptimizeTimeBody
          show={displayingOptimizeTime}
          disciplines={props.disciplines}
          timeConstraints={props.timeConstraints}
          setTimeConstraints={props.setTimeConstraints} />
        <OptimizeCostBody
          show={displayingOptimizeCost}
          disciplines={props.disciplines}
          costConstraints={props.costConstraints}
          setCostConstraints={props.setCostConstraints} />
      </section>
    </section>
  );
}

export default OptimizationConditionsBody;