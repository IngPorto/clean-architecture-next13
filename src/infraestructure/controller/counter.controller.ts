/**
 * Controller o Presenters o Gateways
 */
import { CounterUseCase } from "src/application/counterUseCase";

export class CounterController {
  constructor(private readonly counterUseCase: CounterUseCase) {}

  public getCounter(req: any, res: any) {
    res.send(this.counterUseCase.getCounter());
  }
  public increase(req: any, res: any) {
    this.counterUseCase.increase(req.query.counter);
  }

  public decrement(req: any, res: any) {
    this.counterUseCase.decrement(req.query.counter);
  }

}
