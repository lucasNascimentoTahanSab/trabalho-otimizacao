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
    <table className="to-disciplines__section">
      <thead>
        <tr>
          <th className="to-table__data--left">Nome</th>
          <th className="to-table__data--left">Carga horária</th>
          <th className="to-table__data--left">Mensalidade</th>
          <th>Horários</th>
          <th className="to-table__data--right"></th>
        </tr>
      </thead>
      <tbody>
        {loadDisciplines()}
      </tbody>
    </table>
  );
}

export default DisciplineRegisterBody;