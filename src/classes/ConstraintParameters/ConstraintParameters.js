export default class ConstraintParameters {
  constructor(constraints) {
    this.maximumCourseLoad = constraints?.maximumCourseLoad ?? 0;
  }
}