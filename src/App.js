import { useState } from 'react';
import './App.css';
import DisciplineRegister from './components/DisciplineRegister/DisciplineRegister';

function App() {
  const [disciplines, setDisciplines] = useState([]);

  const updateDiscipline = (event) => {
    const discipline = getDisciplineById(event.target.dataset.id);

    discipline[event.target.dataset.name] = event.target.value;
  }

  function getDisciplineById(disciplineId) {
    return disciplines.find(discipline => discipline.id === disciplineId);
  }

  return (
    <div className="App">
      <DisciplineRegister disciplines={disciplines} setDisciplines={setDisciplines} updateDiscipline={updateDiscipline} />
    </div>
  );
}

export default App;
