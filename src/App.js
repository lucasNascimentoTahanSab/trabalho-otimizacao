import { useState } from 'react';
import './App.css';
import TimeConstrains from './classes/TimeConstrains/TimeConstrains';
import CostConstrains from './classes/CostConstrains/CostConstrains';
import ApiContext from './components/ApiContext/ApiContext';
import DisciplineRegister from './components/DisciplineRegister/DisciplineRegister';
import OptimizationConditions from './components/OptimizationConditions/OptimizationConditions';
import Solver from './components/Solver/Solver';
import OptimizationRequest from './classes/OptimizationRequest/OptimizationRequest';

function App() {
  const [disciplines, setDisciplines] = useState([]);
  const [timeConstrains, setTimeConstrains] = useState(new TimeConstrains());
  const [costConstrains, setCostConstrains] = useState(new CostConstrains());
  const [optimizationRequest, setOptimizationRequest] = useState(new OptimizationRequest());

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
      <ApiContext>
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
        <Solver body={optimizationRequest} api="\optimize" />
      </ApiContext>
    </div>
  );
}

export default App;
