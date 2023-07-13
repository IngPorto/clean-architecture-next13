"use client";
import Counter from "../ui/Counter";
// import { controller } from "src/infraestructure/service/counter.service";
import { useEffect, useState } from "react";
import { Store } from "src/infraestructure/repository/context.repository";
import { CounterUseCase } from "src/application/counterUseCase";
import { CounterController } from "src/infraestructure/controller/counter.controller";

export default function CounterLayout() {
  const [counterValue, setCounterValue] = useState(0);

  const counterRepo = new Store();
  const useCase = new CounterUseCase(counterRepo);
  const controller = new CounterController(useCase);

  useEffect(() => {
    controller.getCounter().then((counter) => setCounterValue(counter.value));
    controller.getCounter().then((counter) => console.log(counter));
  });

  return (
    <div>
      <Counter
        value={counterValue}
        increse={controller.increase}
        decrement={controller.decrement}
      />
    </div>
  );
}
