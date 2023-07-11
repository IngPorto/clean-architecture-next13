/**
 * Repository también puede llamarse Store (counterStore.ts)
 * Hace referencia a los métodos que modifican el estado de
 * la entidad, al igual los valores relacionados al State,
 * que son aquellos que guardan el estado intermedio al
 * proceso de almacenamiento, carga o modificación de datos.
 * Por ejemplo, "cargando datos" o "actualización realizada"
 * 
 * No uso Redux o cualquier otra librería de Store en esta 
 * capa porque no se puede en el domain. Sin embargo, dejo
 * plantedo qué parámetros debe tener el store para manipular
 * mi entidad. Eso permite que, independietemente del la 
 * tecnología de Store usada, siempre se tendrá en cuenta lo
 * necesario para manipular mi endidad.
 */

import { Counter } from "./counterEntity";

interface CounterRepository {
  // State
  counter: Counter | undefined;
  isLoading: boolean;
  isUpdating: boolean;

  // Actions
  // Traer el dato del counter desde la BD
  loadInitialCounter(): Promise<Counter>;
  // Guardar de forma forzada en el store (no en la BD)
  setCounter(counter: Counter): void;
  // Actualizar la BD
  updateCounter(counter: Counter): Promise<Counter | undefined>;
}

export type { CounterRepository };
