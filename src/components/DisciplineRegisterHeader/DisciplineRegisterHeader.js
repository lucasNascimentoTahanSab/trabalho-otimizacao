import React, { useContext } from "react";
import Discipline from "../../classes/Discipline/Discipline";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import { OptimizationRequestGlobal } from "../OptimizationRequestContext/OptimizationRequestContext";

function DisciplineRegisterHeader(props) {
  const optimizationRequest = useContext(OptimizationRequestGlobal);

  const addDiscipline = () => {
    const discipline = new Discipline();

    addDisciplineToOptimizationRequest(discipline);
    props.setDisciplines([...props.disciplines, discipline]);
  }

  function addDisciplineToOptimizationRequest(discipline) {
    optimizationRequest.variables[discipline.id] = discipline;
  }

  return (
    <header className="to-register__header">
      <h2>Cadastrar disciplinas</h2>
      <ButtonAdd onClick={addDiscipline} />
    </header>
  )
}

export default DisciplineRegisterHeader;