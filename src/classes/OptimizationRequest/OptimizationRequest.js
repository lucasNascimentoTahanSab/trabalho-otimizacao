export default class OptimizationRequest {
  constructor(optimizationRequest) {
    this.optimize = optimizationRequest?.optimize ?? '';
    this.opType = optimizationRequest?.opType ?? '';
    this.constraints = optimizationRequest?.constraints ?? {};
    this.variables = optimizationRequest?.variables ?? {};
  }
}