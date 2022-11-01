import React, { useContext } from "react";
import Discipline from "../../classes/Discipline/Discipline";
import DisciplineRegisterBody from "../DisciplineRegisterBody/DisciplineRegisterBody";
import HeaderDouble from "../HeaderDouble/HeaderDouble";
import { OptimizationRequestGlobal } from "../OptimizationRequestContext/OptimizationRequestContext";

function DisciplineRegister(props) {
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
    <section>
      <HeaderDouble title="Cadastrar disciplinas" disciplines={props.disciplines} setDisciplines={props.setDisciplines} onClick={addDiscipline} />
      <DisciplineRegisterBody disciplines={props.disciplines} setDisciplines={props.setDisciplines} />
    </section>
  );
}

export default DisciplineRegister;