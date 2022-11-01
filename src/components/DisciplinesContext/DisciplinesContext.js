import React, { useState } from "react";

const DisciplinesGlobal = React.createContext([]);

function DisciplinesContext(props) {
  const [disciplines, setDisciplines] = useState([]);

  return (
    <DisciplinesGlobal.Provider value={[disciplines, setDisciplines]}>
      {props.children}
    </DisciplinesGlobal.Provider>
  );
}

export { DisciplinesContext, DisciplinesGlobal };