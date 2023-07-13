"use client"
import React from "react";
import { Counter } from "src/domain/counterEntity";
import { CounterRepository } from "src/domain/counterRepository";
/*
export const Context = React.createContext({}); // falta el initial state

export default function ContextProvider({ children }) {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}
*/

export const Context = React.createContext({}); // falta el initial state
export function ContextProvider({ children }) {
  const store = new Store();
  return (
    <Context.Provider
      value={{
        counter: store.counter,
        isLoading: store.isLoading,
        isUpdating: store.isUpdating,
        loadInitialCounter: store.loadInitialCounter,
        setCounter: store.setCounter,
        updateCounter: store.updateCounter,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export class Store implements CounterRepository {
  counter = { value: 1000 };
  isLoading = false;
  isUpdating = false;

  loadInitialCounter = (): Promise<Counter> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.counter);
      }, 500);
    });
  };

  setCounter = (counter: Counter): void => {
    this.counter = { value: counter.value };
  };

  updateCounter = (counter: Counter): Promise<Counter> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.counter = { value: counter.value };
        resolve(counter);
      }, 500);
    });
  };
}
