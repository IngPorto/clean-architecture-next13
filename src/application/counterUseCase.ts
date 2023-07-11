import { Counter } from "src/domain/counterEntity";
import { decrement, increment } from "src/domain/counterModel";
import { CounterRepository } from "src/domain/counterRepository";

export class CounterUseCase {
  constructor(private readonly counterRepository: CounterRepository) {}

  public getCounter = async () => {
    return await this.counterRepository.loadInitialCounter();
  };

  public increase = async (counter: Counter) => {
    const increasedCounter = increment(counter);
    this.counterRepository.setCounter(increasedCounter);
    return await this.counterRepository.updateCounter(increasedCounter);
  };
  public decrement = async (counter: Counter) => {
    const decrementedCounter = decrement(counter);
    this.counterRepository.setCounter(decrementedCounter);
    return await this.counterRepository.updateCounter(decrementedCounter);
  };
}
