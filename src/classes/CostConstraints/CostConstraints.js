import Constraints from "../Constraints/Constraints";

export default class CostConstraints extends Constraints {
  constructor(constraints) {
    super(constraints);

    this.minimumCourses = constraints?.minimumCourses ?? 0;
  }
}