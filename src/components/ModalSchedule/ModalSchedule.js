import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Discipline from '../../classes/Discipline/Discipline';

function ModalSchedule(props) {
  const [discipline, setDiscipline] = useState(props.discipline);

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  const selectSchedule = event => {
    const schedule = { ...discipline.schedule };

    schedule.matrix[event.target.dataset.row][event.target.dataset.col] = event.target.checked;

    setDiscipline(new Discipline({ ...discipline, schedule }));

    props.updateDisciplineSchedule(discipline.id, schedule);
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}>
      <section>
        <header>
          <h2>Horários</h2>
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
                <td>
                  <input type="checkbox" checked={discipline.schedule.matrix[0][0]} data-col="0" data-row="0" onChange={selectSchedule} />
                </td>
                <td>
                  <input type="checkbox" checked={discipline.schedule.matrix[0][1]} data-col="1" data-row="0" onChange={selectSchedule} />
                </td>
                <td>
                  <input type="checkbox" checked={discipline.schedule.matrix[0][2]} data-col="2" data-row="0" onChange={selectSchedule} />
                </td>
                <td>
                  <input type="checkbox" checked={discipline.schedule.matrix[0][3]} data-col="3" data-row="0" onChange={selectSchedule} />
                </td>
                <td>
                  <input type="checkbox" checked={discipline.schedule.matrix[0][4]} data-col="4" data-row="0" onChange={selectSchedule} />
                </td>
              </tr>
              <tr>
                <td>08:50 - 10:30</td>
                <td>
                  <input type="checkbox" checked={discipline.schedule.matrix[1][0]} data-col="0" data-row="1" onChange={selectSchedule} />
                </td>
                <td>
                  <input type="checkbox" checked={discipline.schedule.matrix[1][1]} data-col="1" data-row="1" onChange={selectSchedule} />
                </td>
                <td>
                  <input type="checkbox" checked={discipline.schedule.matrix[1][2]} data-col="2" data-row="1" onChange={selectSchedule} />
                </td>
                <td>
                  <input type="checkbox" checked={discipline.schedule.matrix[1][3]} data-col="3" data-row="1" onChange={selectSchedule} />
                </td>
                <td>
                  <input type="checkbox" checked={discipline.schedule.matrix[1][4]} data-col="4" data-row="1" onChange={selectSchedule} />
                </td>
              </tr>
              <tr>
                <td>10:40 - 12:20</td>
                <td>
                  <input type="checkbox" checked={discipline.schedule.matrix[2][0]} data-col="0" data-row="2" onChange={selectSchedule} />
                </td>
                <td>
                  <input type="checkbox" checked={discipline.schedule.matrix[2][1]} data-col="1" data-row="2" onChange={selectSchedule} />
                </td>
                <td>
                  <input type="checkbox" checked={discipline.schedule.matrix[2][2]} data-col="2" data-row="2" onChange={selectSchedule} />
                </td>
                <td>
                  <input type="checkbox" checked={discipline.schedule.matrix[2][3]} data-col="3" data-row="2" onChange={selectSchedule} />
                </td>
                <td>
                  <input type="checkbox" checked={discipline.schedule.matrix[2][4]} data-col="4" data-row="2" onChange={selectSchedule} />
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