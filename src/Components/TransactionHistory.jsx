
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export function TransactionHistory(){
    const {transactions} = useContext(GlobalContext)



    return(
      <div className="mt-4 w-64">
      <h3 className="text-xl font-semibold mb-2">Transaction History</h3>
      <ul className="space-y-2">
        {transactions.map((transaction) => {
          const sign = transaction.amount < 0 ? '-' : '+';
          const amountStyle = transaction.amount < 0 ? 'text-red-500' : 'text-green-500';

          return (
            <li
              key={transaction.id}
              className={`flex justify-between bg-white p-2 rounded shadow-md ${amountStyle}`}
            >
              <span>{transaction.text}</span>
              <span>{sign}${Math.abs(transaction.amount)}</span>
            </li>
          );
        })}
      </ul>
    </div>
    )


}