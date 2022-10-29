import Constrains from "../Constrains/Constrains";

export default class CostConstrains extends Constrains {
  constructor(constrains) {
    super(constrains);

    this.minimumCourses = constrains?.minimumCourses ?? 0;
  }
}