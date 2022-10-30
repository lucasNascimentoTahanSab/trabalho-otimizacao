import Constraints from "../Constraints/Constraints";

export default class TimeConstraints extends Constraints {
  constructor(constraints) {
    super(constraints);

    this.maximumCost = constraints?.maximumCost ?? 0.0;
  }
}