import Schedule from "../Schedule/Schedule";

export default class Discipline {
  static ID = 0;

  constructor(discipline) {
    this.id = discipline?.id ?? (Discipline.ID++).toString();
    this.name = discipline?.name ?? '';
    this.courseLoad = discipline?.courseLoad ?? 0.0;
    this.price = discipline?.price ?? 0.0;
    this.schedule = discipline?.schedule ?? new Schedule();
  }
}