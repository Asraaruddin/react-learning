
import { useEffect, useRef, useState } from "react";


export function Stopwatch(){
   
    const [time, setTime] = useState(0)
    const timeref = useRef(null)

  const start  = () => {
    if(!timeref.current){
        timeref.current = setInterval(()=>{
            setTime((prev) => prev + 1);
        },1000);
    }

  };

  const stop = ()=> {
    clearInterval(timeref.current);
    timeref.current = null ;
  };
    

useEffect(()=>{
    setInterval(timer,1000)
},[])

    

    return(
        <div className="container-fluid text-center mt-5">
        <h1 className="mb-4">⏱ {time} sec</h1>
        <button className="btn btn-success me-2" onClick={start}>Start</button>
        <button className="btn btn-primary" onClick={stop}>Stop</button>
       

      </div>
    )
}