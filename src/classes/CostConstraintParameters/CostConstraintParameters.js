import ConstraintParameters from "../ConstraintParameters/ConstraintParameters";

export default class CostConstraintParameters extends ConstraintParameters {
  constructor(constraints) {
    super(constraints);

    this.minimumCourses = constraints?.minimumCourses ?? 0;
  }
}