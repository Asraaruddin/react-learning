import { useCallback, useState } from "react";


export function Component(){
    const [count,setcount] = useState(0);

    const increment  = useCallback(()=>{
        setcount  ((prev)=>prev + 1);
    },[]);
    const decrement  = useCallback(()=>{
        setcount  ((prev)=>prev - 1 );
    },[]);


    return (
        

    <div>
      <h2>{count}</h2>
      <button className="btn  btn-primary"  onClick={increment}>Increment</button>
      <button className="btn btn-danger" onClick={decrement}>Decrement</button>
    </div>

    );


}