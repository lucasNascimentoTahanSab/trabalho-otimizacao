import React from "react";
import HeaderBasic from "../HeaderBasic/HeaderBasic";

function Solution(props) {
  const showSolution = () => {
    return props.solution?.feasible
      ? `As disciplinas selecionadas foram: ${getSelectedDisciplines()}.`
      : 'Não foi possível obter uma solução para as condições indicadas.';
  }

  function getSelectedDisciplines() {
    return Object.keys(props.solution)?.reduce((response, attribute) => {
      const discipline = getDisciplineById(attribute);

      if (!discipline) { return response; }

      return response ? response + `, ${discipline.name}` : discipline.name;
    }, '');
  }

  function getDisciplineById(disciplineId) {
    return props.disciplines?.find(discipline => discipline.id === disciplineId);
  }

  return (
    <section>
      <HeaderBasic title="Solução"></HeaderBasic>
      <div className="to-disciplines__section">
        {showSolution()}
      </div>
    </section>
  );
}

export default Solution;