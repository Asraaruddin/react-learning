import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Head } from "./head";
import { Balance } from "./balance";
import { IncomeExpensive } from "./Incomeexpensive";
import { History } from "./history";
import { AddTransaction } from "./Addtransactions";

export function ExpenseTracker() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { transactions, addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  const balance = transactions.reduce((acc, item) => acc + item.amount, 0);
  const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);
  const expense = transactions
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg space-y-6">
        {Head}
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Expense Tracker
        </h2>

        {Balance}
        <div className="text-center">
          <h4 className="text-gray-600">Your Balance</h4>
          <h1 className="text-3xl font-semibold text-blue-600">
            ${balance.toFixed(2)}
          </h1>
        </div>

        {IncomeExpensive}
        <div className="flex justify-between border p-4 rounded">
          <div className="text-center">
            <h4 className="text-green-600 font-semibold">INCOME</h4>
            <p className="text-green-600 font-bold">${income.toFixed(2)}</p>
          </div>
          <div className="text-center">
            <h4 className="text-red-600 font-semibold">EXPENSE</h4>
            <p className="text-red-600 font-bold">${Math.abs(expense).toFixed(2)}</p>
          </div>
        </div>

        {History}
        <div>
          <h3 className="text-xl font-semibold mb-2">History</h3>
          <ul className="space-y-2">
            {transactions.map((transaction) => (
              <li
                key={transaction.id}
                className={`flex justify-between items-center p-2 border-l-4 ${
                  transaction.amount < 0 ? "border-red-500" : "border-green-500"
                }`}
              >
                <span>{transaction.text}</span>
                <span
                  className={`font-semibold ${
                    transaction.amount < 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {AddTransaction}
        <div>
          <h3 className="text-xl font-semibold mb-2">Add New Transaction</h3>
          <form onSubmit={onSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Enter text..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="number"
              placeholder="Enter amount..."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Add Transaction
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
