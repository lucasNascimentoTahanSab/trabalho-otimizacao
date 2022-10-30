import React, { useState } from "react";
import DisciplineRegisterBody from "../DisciplineRegisterBody/DisciplineRegisterBody";
import DisciplineRegisterHeader from "../DisciplineRegisterHeader/DisciplineRegisterHeader";

function DisciplineRegister(props) {

  return (
    <section>
      <DisciplineRegisterHeader disciplines={props.disciplines} setDisciplines={props.setDisciplines} />
      <DisciplineRegisterBody
        disciplines={props.disciplines}
        setDisciplines={props.setDisciplines}
        updateDiscipline={props.updateDiscipline}
        updateDisciplineSchedule={props.updateDisciplineSchedule} />
    </section>
  );
}

export default DisciplineRegister;