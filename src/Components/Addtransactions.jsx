import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = e => {
    e.preventDefault();
  
    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount  // <-- convert to number
    };
  
    addTransaction(newTransaction);
  };
  

  return (
    <div className="w-64 bg-white p-4 rounded-lg shadow-md mx-auto">
      <h3 className="text-xl font-semibold mb-2">Add New Transaction</h3>
      <form onSubmit={onSubmit} className="flex flex-col space-y-3">
        <input
          type="text"
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Enter amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}
