import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import Discipline from '../../classes/Discipline/Discipline';
import { OptimizationRequestGlobal } from "../OptimizationRequestContext/OptimizationRequestContext";

function ModalSchedule(props) {
  const optimizationRequest = useContext(OptimizationRequestGlobal);
  const [discipline, setDiscipline] = useState(props.discipline);

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  const selectSchedule = event => {
    const newDiscipline = new Discipline({ ...discipline, [event.target.dataset.name]: event.target.checked ? 1 : 0 });

    optimizationRequest.variables[newDiscipline.id][event.target.dataset.name] = newDiscipline[event.target.dataset.name];

    setDiscipline(newDiscipline);
    props.setDisciplines(props.disciplines);
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      portalClassName="to-modal-schedule">
      <section>
        <header>
          <h2>Horários ({discipline.name})</h2>
        </header>
        <div>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Seg</th>
                <th>Ter</th>
                <th>Qua</th>
                <th>Qui</th>
                <th>Sex</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>07:00 - 08:40</td>
                <td className='to-table__data--center'>
                  <input type="checkbox" checked={discipline.mondayFirst} data-name="mondayFirst" onChange={selectSchedule} />
                </td>
                <td className='to-table__data--center'>
                  <input type="checkbox" checked={discipline.tuesdayFirst} data-name="tuesdayFirst" onChange={selectSchedule} />
                </td>
                <td className='to-table__data--center'>
                  <input type="checkbox" checked={discipline.wednesdayFirst} data-name="wednesdayFirst" onChange={selectSchedule} />
                </td>
                <td className='to-table__data--center'>
                  <input type="checkbox" checked={discipline.thursdayFirst} data-name="thursdayFirst" onChange={selectSchedule} />
                </td>
                <td className='to-table__data--center'>
                  <input type="checkbox" checked={discipline.fridayFirst} data-name="fridayFirst" onChange={selectSchedule} />
                </td>
              </tr>
              <tr>
                <td>08:50 - 10:30</td>
                <td className='to-table__data--center'>
                  <input type="checkbox" checked={discipline.mondaySecond} data-name="mondaySecond" onChange={selectSchedule} />
                </td>
                <td className='to-table__data--center'>
                  <input type="checkbox" checked={discipline.tuesdaySecond} data-name="tuesdaySecond" onChange={selectSchedule} />
                </td>
                <td className='to-table__data--center'>
                  <input type="checkbox" checked={discipline.wednesdaySecond} data-name="wednesdaySecond" onChange={selectSchedule} />
                </td>
                <td className='to-table__data--center'>
                  <input type="checkbox" checked={discipline.thursdaySecond} data-name="thursdaySecond" onChange={selectSchedule} />
                </td>
                <td className='to-table__data--center'>
                  <input type="checkbox" checked={discipline.fridaySecond} data-name="fridaySecond" onChange={selectSchedule} />
                </td>
              </tr>
              <tr>
                <td>10:40 - 12:20</td>
                <td className='to-table__data--center'>
                  <input type="checkbox" checked={discipline.mondayThird} data-name="mondayThird" onChange={selectSchedule} />
                </td>
                <td className='to-table__data--center'>
                  <input type="checkbox" checked={discipline.tuesdayThird} data-name="tuesdayThird" onChange={selectSchedule} />
                </td>
                <td className='to-table__data--center'>
                  <input type="checkbox" checked={discipline.wednesdayThird} data-name="wednesdayThird" onChange={selectSchedule} />
                </td>
                <td className='to-table__data--center'>
                  <input type="checkbox" checked={discipline.thursdayThird} data-name="thursdayThird" onChange={selectSchedule} />
                </td>
                <td className='to-table__data--center'>
                  <input type="checkbox" checked={discipline.fridayThird} data-name="fridayThird" onChange={selectSchedule} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Modal>
  );
}

export default ModalSchedule;