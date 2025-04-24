import { useEffect, useRef, useState } from "react";

export function PreviousValue(){
    const [count,setCount] = useState(0);
    const prevCountRef = useRef();

    useEffect(()=>{
        prevCountRef.current = count 
    },[count])

    return(
        <div>
            <h3>Current : {count}</h3>
            <h4>Previous:{prevCountRef.current}</h4>
            <button onClick={()=>setCount(count + 1)}>Increment</button>
        </div>
    )
} 