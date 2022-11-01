export default class Constraints {
  constructor(constraints) {
    this.mondayFirst = constraints?.mondayFirst ?? { max: 1 };
    this.mondaySecond = constraints?.mondaySecond ?? { max: 1 };
    this.mondayThird = constraints?.mondayThird ?? { max: 1 };
    this.tuesdayFirst = constraints?.tuesdayFirst ?? { max: 1 };
    this.tuesdaySecond = constraints?.tuesdaySecond ?? { max: 1 };
    this.tuesdayThird = constraints?.tuesdayThird ?? { max: 1 };
    this.wednesdayFirst = constraints?.wednesdayFirst ?? { max: 1 };
    this.wednesdaySecond = constraints?.wednesdaySecond ?? { max: 1 };
    this.wednesdayThird = constraints?.wednesdayThird ?? { max: 1 };
    this.thursdayFirst = constraints?.thursdayFirst ?? { max: 1 };
    this.thursdaySecond = constraints?.thursdaySecond ?? { max: 1 };
    this.thursdayThird = constraints?.thursdayThird ?? { max: 1 };
    this.fridayFirst = constraints?.fridayFirst ?? { max: 1 };
    this.fridaySecond = constraints?.fridaySecond ?? { max: 1 };
    this.fridayThird = constraints?.fridayThird ?? { max: 1 };
  }
}