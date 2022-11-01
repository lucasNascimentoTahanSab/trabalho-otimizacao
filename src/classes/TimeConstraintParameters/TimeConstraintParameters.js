import ConstraintParameters from "../ConstraintParameters/ConstraintParameters";

export default class TimeConstraintParameters extends ConstraintParameters {
  constructor(constraints) {
    super(constraints);

    this.maximumCost = constraints?.maximumCost ?? 0.0;
  }
}