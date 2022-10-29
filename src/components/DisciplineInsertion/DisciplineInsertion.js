import React, { useState } from "react";
import ButtonDelete from "../ButtonDelete/ButtonDelete";
import InputNumber from "../InputNumber/InputNumber";
import InputCurrency from "../InputCurrency/InputCurrency";
import InputText from "../InputText/InputText";
import Discipline from "../../classes/Discipline/Discipline";

function DisciplineInsertion(props) {
  const [discipline, setDiscipline] = useState(props.discipline);

  const deleteDiscipline = () => {
    if (typeof props.setDisciplines !== 'function') { return; }
    if (typeof props.discipline !== 'object') { return; }
    if (!Array.isArray(props.disciplines)) { return; }

    props.setDisciplines(_getDisciplinesDifferentThan(props.discipline?.id));
  }

  function _getDisciplinesDifferentThan(disciplineId) {
    return props.disciplines?.filter(discipline => discipline.id !== disciplineId);
  }

  const onNameInput = event => {
    if (typeof props.updateDiscipline !== 'function') { return; }

    setDiscipline(new Discipline({ ...discipline, name: event.target.value }));

    props.updateDiscipline(event);
  }

  const onCourseLoadInput = event => {
    if (typeof props.updateDiscipline !== 'function') { return; }

    setDiscipline(new Discipline({ ...discipline, courseLoad: event.target.value }));

    props.updateDiscipline(event);
  }

  const onPriceInput = event => {
    if (typeof props.updateDiscipline !== 'function') { return; }

    setDiscipline(new Discipline({ ...discipline, price: event.target.value }));

    props.updateDiscipline(event);
  }

  return (
    <div className="to-insertion__row">
      <InputText value={discipline.name} onInput={onNameInput} id={discipline.id} name="name" />
      <InputNumber value={discipline.courseLoad} onInput={onCourseLoadInput} id={discipline.id} name="courseLoad" />
      <InputCurrency value={discipline.price} onInput={onPriceInput} id={discipline.id} name="price" />
      <ButtonDelete onClick={deleteDiscipline} />
    </div>
  )
}

export default DisciplineInsertion;