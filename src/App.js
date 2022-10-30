import { useState } from 'react';
import './App.css';
import TimeConstraints from './classes/TimeConstraints/TimeConstraints';
import CostConstraints from './classes/CostConstraints/CostConstraints';
import DisciplineRegister from './components/DisciplineRegister/DisciplineRegister';
import OptimizationConditions from './components/OptimizationConditions/OptimizationConditions';
import Solver from './components/Solver/Solver';
import OptimizationRequest from './classes/OptimizationRequest/OptimizationRequest';

function App() {
  const [disciplines, setDisciplines] = useState([]);
  const [timeConstraints, setTimeConstraints] = useState(new TimeConstraints());
  const [costConstraints, setCostConstraints] = useState(new CostConstraints());
  const [optimizationRequest, setOptimizationRequest] = useState(new OptimizationRequest());

  const updateDiscipline = event => {
    const discipline = getDisciplineById(event.target.dataset.id);

    discipline[event.target.dataset.name] = event.target.value;

    updateOptimizationRequest();
  }

  const updateDisciplineSchedule = (disciplineId, schedule) => {
    const discipline = getDisciplineById(disciplineId);

    discipline.schedule = schedule;

    updateOptimizationRequest();
  }

  function getDisciplineById(disciplineId) {
    return disciplines.find(discipline => discipline.id === disciplineId);
  }

  function updateOptimizationRequest() {
    const newOptimizationRequest = new OptimizationRequest({ ...optimizationRequest });

    generateVariables(newOptimizationRequest);
    setOptimizationRequest(newOptimizationRequest);
  }

  function generateVariables(optimizationRequest) {
    optimizationRequest.variables = {};

    disciplines.forEach(discipline => (optimizationRequest.variables[discipline.id] = { ...discipline }));
  }

  const updateOptimizationRequestConditions = newOptimizationRequest => {
    setOptimizationRequest(new OptimizationRequest({ ...newOptimizationRequest, variables: optimizationRequest.variables }));
  }

  return (
    <div className="App">
      <DisciplineRegister
        disciplines={disciplines}
        setDisciplines={setDisciplines}
        updateDiscipline={updateDiscipline}
        updateDisciplineSchedule={updateDisciplineSchedule} />
      <OptimizationConditions
        timeConstraints={timeConstraints}
        setTimeConstraints={setTimeConstraints}
        costConstraints={costConstraints}
        setCostConstraints={setCostConstraints}
        optimizationRequest={optimizationRequest}
        setOptimizationRequest={updateOptimizationRequestConditions} />
      <Solver body={optimizationRequest} />
    </div>
  );
}

export default App;
