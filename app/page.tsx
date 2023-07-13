import React from "react";
import CounterLayout from "src/infraestructure/components/layout/CounterLayout";

export default function Home() {
  return (
    <div>
      <div className="text-3xl font-bold underline"> Home </div>
      <CounterLayout />
    </div>
  );
}
