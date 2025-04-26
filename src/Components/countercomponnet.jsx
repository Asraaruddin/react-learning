import { useCounter } from "./usecounter";

export function CounterComponent(){
    const {count,increment,decrement,reset} = useCounter(5);
    return (
        <div>
       <h2>{count}</h2>
      <button onClick={increment}>➕</button>
      <button onClick={decrement}>➖</button>
      <button onClick={reset}>🔄</button>
        </div>
    )
}