import { useState } from "react";


export function useCounter(initialValue = 0){
    const [count,setcount] = useState(initialValue);
    const increment = () => setcount((c)=>c + 1);
    const decrement = () => setcount((c)=>c - 1);
    const reset = () => setcount(initialValue);

    return {count,increment,decrement,reset    }


}