import { useEffect, useRef, useState } from "react";

 export function  TimerComponent(){
    const [count,setCount]= useState(0);
    const intervalRef = useRef();
    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            setCount((prev)=>prev +1);
        },1000);
        return() => clearInterval(intervalRef.current)
    },[]);
    return <h2>Timer:{count}</h2>
 }