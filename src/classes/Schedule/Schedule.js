export default class Schedule {
  constructor(schedule) {
    this.matrix = schedule?.matrix ?? this._getScheduleMatrix();
  }

  /**
   * Método responsável pela inicialização de uma matriz de horários semenais,
   * considerando 5 dias por semana, 3 horários por dia.
   * 
   * @returns {array}
   */
  _getScheduleMatrix() {
    return [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
  }
}