import React from "react";
import DisciplineInsertion from "../DisciplineInsertion/DisciplineInsertion";

function DisciplineRegisterBody(props) {
  const loadDisciplines = () => {
    return props.disciplines.map(discipline => {
      return <DisciplineInsertion
        key={discipline.id}
        discipline={discipline}
        disciplines={props.disciplines}
        setDisciplines={props.setDisciplines} />
    });
  }

  return (
    <div>
      {loadDisciplines()}
    </div>
  );
}

export default DisciplineRegisterBody;