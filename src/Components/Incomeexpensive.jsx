import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export function IncomeExpensive() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((t) => t.amount);

  const income = amounts
    .filter((amt) => amt > 0)
    .reduce((acc, amt) => acc + amt, 0)
    .toFixed(2);

  const expense = amounts
    .filter((amt) => amt < 0)
    .reduce((acc, amt) => acc + amt, 0)
    .toFixed(2);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-72">
      <div className="flex justify-between border-b pb-2">
        <div className="text-green-600 text-lg font-semibold">INCOME</div>
        <div className="text-green-600 text-xl font-bold">${income}</div>
      </div>
      <div className="flex justify-between pt-2">
        <div className="text-red-600 text-lg font-semibold">EXPENSE</div>
        <div className="text-red-600 text-xl font-bold">
          ${Math.abs(expense)}
        </div>
      </div>
    </div>
  );
}
