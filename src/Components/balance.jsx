import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


export function Balance() {
    const { transactions } = useContext(GlobalContext);
    const total = transactions.reduce((acc, item) => acc + item.amount, 0).toFixed(2);
  
    return (
      <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md w-64 flex flex-col items-center">
        <p className="text-lg font-semibold">Your Balance</p>
        <p className="text-2xl font-bold mt-2">${total}</p>
      </div>
    );
  }
  