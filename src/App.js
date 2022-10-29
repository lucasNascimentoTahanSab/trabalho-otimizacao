import { useState } from 'react';
import './App.css';
import TimeConstrains from './classes/TimeConstrains/TimeConstrains';
import CostConstrains from './classes/CostConstrains/CostConstrains';
import DisciplineRegister from './components/DisciplineRegister/DisciplineRegister';
import OptimizationConditions from './components/OptimizationConditions/OptimizationConditions';

function App() {
  const [disciplines, setDisciplines] = useState([]);
  const [timeConstrains, setTimeConstrains] = useState(new TimeConstrains());
  const [costConstrains, setCostConstrains] = useState(new CostConstrains());

  const updateDiscipline = event => {
    const discipline = getDisciplineById(event.target.dataset.id);

    discipline[event.target.dataset.name] = event.target.value;
  }

  const updateDisciplineSchedule = (disciplineId, schedule) => {
    const discipline = getDisciplineById(disciplineId);

    discipline.schedule = schedule;
  }

  function getDisciplineById(disciplineId) {
    return disciplines.find(discipline => discipline.id === disciplineId);
  }

  return (
    <div className="App">
      <DisciplineRegister
        disciplines={disciplines}
        setDisciplines={setDisciplines}
        updateDiscipline={updateDiscipline}
        updateDisciplineSchedule={updateDisciplineSchedule} />
      <OptimizationConditions
        timeConstrains={timeConstrains}
        setTimeConstrains={setTimeConstrains}
        costConstrains={costConstrains}
        setCostConstrains={setCostConstrains} />
    </div>
  );
}

export default App;
