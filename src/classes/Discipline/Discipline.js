export default class Discipline {
  static ID = 0;

  constructor(discipline) {
    this.quantity = 1;
    this.id = discipline?.id ?? (Discipline.ID++).toString();
    this.name = discipline?.name ?? '';
    this.courseLoad = discipline?.courseLoad ?? 0.0;
    this.price = discipline?.price ?? 0.0;
    this.mondayFirst = discipline?.mondayFirst ?? 0;
    this.mondaySecond = discipline?.mondaySecond ?? 0;
    this.mondayThird = discipline?.mondayThird ?? 0;
    this.tuesdayFirst = discipline?.tuesdayFirst ?? 0;
    this.tuesdaySecond = discipline?.tuesdaySecond ?? 0;
    this.tuesdayThird = discipline?.tuesdayThird ?? 0;
    this.wednesdayFirst = discipline?.wednesdayFirst ?? 0;
    this.wednesdaySecond = discipline?.wednesdaySecond ?? 0;
    this.wednesdayThird = discipline?.wednesdayThird ?? 0;
    this.thursdayFirst = discipline?.thursdayFirst ?? 0;
    this.thursdaySecond = discipline?.thursdaySecond ?? 0;
    this.thursdayThird = discipline?.thursdayThird ?? 0;
    this.fridayFirst = discipline?.fridayFirst ?? 0;
    this.fridaySecond = discipline?.fridaySecond ?? 0;
    this.fridayThird = discipline?.fridayThird ?? 0;
  }
}