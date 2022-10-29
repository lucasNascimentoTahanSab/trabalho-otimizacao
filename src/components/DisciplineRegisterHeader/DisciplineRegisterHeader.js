import React from "react";
import Discipline from "../../classes/Discipline/Discipline";
import ButtonAdd from "../ButtonAdd/ButtonAdd";

function DisciplineRegisterHeader(props) {
  const addDiscipline = () => {
    if (typeof props.setDisciplines !== 'function') { return; }
    if (!Array.isArray(props.disciplines)) { return; }

    props.setDisciplines([...props.disciplines, new Discipline()]);
  }

  return (
    <header className="to-register__header">
      <h2>Cadastrar disciplinas</h2>
      <ButtonAdd onClick={addDiscipline} />
    </header>
  )
}

export default DisciplineRegisterHeader;