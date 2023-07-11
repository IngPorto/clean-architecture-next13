/**
 * Aquí se puede implementar el store de Redux o se puede
 * usar una librería diferente que permita manipular el estado.
 *
 * Aquí también se puede hacer el llamado a la Base de Datos.
 *
 * Esta clase conoce exáctamente las librerías y dependencias
 * concretas.
 */
import { Counter } from "src/domain/counterEntity";
import { CounterRepository } from "src/domain/counterRepository";

export class Store implements CounterRepository {
  counter = undefined;
  isLoading = false;
  isUpdating = false;

  loadInitialCounter = (): Promise<Counter> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // realizar un llamado a la BD donde se traiga el value
        // o traerlo desde Redux
        const databaseResult = 1
        resolve({
          value: databaseResult,
        });
      }, 500);
    });
  };
  setCounter = (counter: Counter): void => {
    // asignar directamente en el store el valor
    const mockStore = {
      value: counter.value,
    }
  };
  updateCounter = (counter: Counter): Promise<Counter> => {
    throw new Error("Method not implemented.");
  };
}
