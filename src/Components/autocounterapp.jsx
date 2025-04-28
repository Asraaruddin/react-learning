import { useAutoCounter } from "./useautocounter";

export function AutoCounterApp() {
  const count = useAutoCounter(0, 1000); // start at 0, update every 1 second

  return (
    <div className="container text-center mt-5">
      <h1>Auto Counter</h1>
      <h2>{count}</h2>
    </div>
  );
}
