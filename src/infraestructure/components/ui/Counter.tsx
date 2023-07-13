"use client"
export default function Counter({
  value = 0,
  increse,
  decrement,
}: {
  value: number;
  increse: () => void;
  decrement: () => void;
}) {
  return (
    <div>
      <button
        onClick={decrement}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        -
      </button>
      <span className="p-3">{value}</span>
      <button
        onClick={increse}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        +
      </button>
    </div>
  );
}
