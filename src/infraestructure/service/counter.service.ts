import { CounterUseCase } from "src/application/counterUseCase";
import { CounterController } from "../controller/counter.controller";
import { Store } from "../repository/store.repository";

// Iniciar el repositorio deseado (el cual es cambiable)
const counterRepo = new Store();

// Iniciamos los casos de uso
const useCase = new CounterUseCase(counterRepo);

// Iniciar controller
const controller = new CounterController(useCase);

export { controller };
// Iniciar ruta (como ejemplo)
/*
  route.get("/counter", controller.getCounter);
  route.post("/counter", controller.increase);
  route.post("/counter", controller.decrement);
*/