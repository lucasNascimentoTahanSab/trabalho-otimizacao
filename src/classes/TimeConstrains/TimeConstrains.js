import Constrains from "../Constrains/Constrains";

export default class TimeConstrains extends Constrains {
  constructor(constrains) {
    super(constrains);

    this.maximumCost = constrains?.maximumCost ?? 0.0;
  }
}