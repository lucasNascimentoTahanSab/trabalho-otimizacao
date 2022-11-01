import Constraints from "../Constraints/Constraints";

export default class OptimizationRequest {
  constructor(optimizationRequest) {
    this.optimize = optimizationRequest?.optimize ?? '';
    this.opType = optimizationRequest?.opType ?? '';
    this.constraints = optimizationRequest?.constraints ?? new Constraints();
    this.variables = optimizationRequest?.variables ?? {};
    this.ints = optimizationRequest?.ints ?? {};
  }
}