import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export function History() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="w-64 bg-white p-4 rounded-lg shadow-md mx-auto mb-4">
      <h3 className="text-xl font-semibold border-b pb-2 mb-2">History</h3>
      <ul className="space-y-2">
        {transactions.map((tx) => (
          <li
            key={tx.id}
            className={`flex justify-between items-center p-2 border-l-4 ${
              tx.amount > 0 ? "border-green-500" : "border-red-500"
            }`}
          >
            <span>{tx.text}</span>
            <span
              className={`font-semibold ${
                tx.amount > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              ${tx.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
