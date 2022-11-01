import { useContext, useState } from 'react';
import './App.css';
import TimeConstraintParameters from './classes/TimeConstraintParameters/TimeConstraintParameters';
import CostConstraintParameters from './classes/CostConstraintParameters/CostConstraintParameters';
import DisciplineRegister from './components/DisciplineRegister/DisciplineRegister';
import OptimizationConditions from './components/OptimizationConditions/OptimizationConditions';
import Solver from './components/Solver/Solver';
import { OptimizationRequestContext, OptimizationRequestGlobal } from './components/OptimizationRequestContext/OptimizationRequestContext';
import Discipline from './classes/Discipline/Discipline';

function App() {
  const optimizationRequest = useContext(OptimizationRequestGlobal);

  const discipline = new Discipline();

  optimizationRequest.variables[discipline.id] = discipline;

  const [disciplines, setDisciplines] = useState([discipline]);
  const [timeConstraints, setTimeConstraints] = useState(new TimeConstraintParameters());
  const [costConstraints, setCostConstraints] = useState(new CostConstraintParameters());

  return (
    <div className="App">
      <OptimizationRequestContext>
        <section className='to-body'>
          <DisciplineRegister disciplines={disciplines} setDisciplines={setDisciplines} />
          <OptimizationConditions
            disciplines={disciplines}
            timeConstraints={timeConstraints}
            setTimeConstraints={setTimeConstraints}
            costConstraints={costConstraints}
            setCostConstraints={setCostConstraints} />
        </section>
        <Solver />
      </OptimizationRequestContext>
    </div>
  );
}

export default App;
