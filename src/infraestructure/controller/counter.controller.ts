/**
 * Controller o Presenters o Gateways
 */
import { CounterUseCase } from "src/application/counterUseCase";

export class CounterController {
  counterUseCase: CounterUseCase;

  constructor(private readonly counterUseCaseDep: CounterUseCase) {
    this.counterUseCase = counterUseCaseDep;
  }

  public getCounter() {
    return this.counterUseCase.getCounter();
  }
  public increase() {
    console.log(this);
    //this.counterUseCase.increase({ value: 1 });
  }

  public decrement() {
    this.counterUseCase.decrement({ value: -1 });
  }
}
