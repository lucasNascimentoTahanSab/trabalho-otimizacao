import React, { useState, useContext } from "react";
import ButtonSchedule from "../ButtonSchedule/ButtonSchedule";
import ButtonDelete from "../ButtonDelete/ButtonDelete";
import InputNumber from "../InputNumber/InputNumber";
import InputCurrency from "../InputCurrency/InputCurrency";
import InputText from "../InputText/InputText";
import ModalSchedule from "../ModalSchedule/ModalSchedule";
import { OptimizationRequestGlobal } from "../OptimizationRequestContext/OptimizationRequestContext";
import Discipline from "../../classes/Discipline/Discipline";

function DisciplineInsertion(props) {
  const optimizationRequest = useContext(OptimizationRequestGlobal);
  const [discipline, setDiscipline] = useState(props.discipline);
  const [isModalScheduleOpen, setModalScheduleOpen] = useState(false);

  const openSchedule = () => {
    setModalScheduleOpen(true);
  }

  const closeSchedule = () => {
    setModalScheduleOpen(false);
  }

  const deleteDiscipline = () => {
    props.setDisciplines(getDisciplinesDifferentThan(discipline?.id));

    delete optimizationRequest.variables[discipline?.id];
  }

  function getDisciplinesDifferentThan(disciplineId) {
    return props.disciplines.filter(discipline => discipline.id !== disciplineId);
  }

  const onNameInput = event => {
    const newDiscipline = new Discipline({ ...discipline, name: event.target.value })

    optimizationRequest.variables[newDiscipline.id].name = event.target.value;

    setDiscipline(newDiscipline);
    props.setDisciplines(props.disciplines);
  }

  const onCourseLoadInput = event => {
    const newDiscipline = new Discipline({ ...discipline, courseLoad: parseFloat(event.target.value) })

    optimizationRequest.variables[newDiscipline.id].courseLoad = parseFloat(event.target.value);

    setDiscipline(newDiscipline);
    props.setDisciplines(props.disciplines);
  }

  const onPriceInput = event => {
    const newDiscipline = new Discipline({ ...discipline, price: parseFloat(event.target.value) })

    optimizationRequest.variables[newDiscipline.id].price = parseFloat(event.target.value);

    setDiscipline(newDiscipline);
    props.setDisciplines(props.disciplines);
  }

  return (
    <div className="to-insertion__row">
      <InputText value={discipline.name} onInput={onNameInput} id={discipline.id} name="name" />
      <InputNumber value={discipline.courseLoad} onInput={onCourseLoadInput} id={discipline.id} name="courseLoad" />
      <InputCurrency value={discipline.price} onInput={onPriceInput} id={discipline.id} name="price" />
      <ButtonSchedule onClick={openSchedule} />
      <ButtonDelete onClick={deleteDiscipline} />
      <ModalSchedule
        isOpen={isModalScheduleOpen}
        closeModal={closeSchedule}
        discipline={discipline}
        setDiscipline={setDiscipline}
        disciplines={props.disciplines}
        setDisciplines={props.setDisciplines} />
    </div>
  )
}

export default DisciplineInsertion;