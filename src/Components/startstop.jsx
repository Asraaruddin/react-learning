import { useRef, useState } from "react";

 export function Start(){

    const [time,setTime] = useState(10);
    const [isRunning,setRunning] = useState(false);
    const timerRef = useRef(null)

    function start(){
        if(!timerRef.current){
            setRunning(true);
            timerRef.current = setInterval(()=>{
                setTime((prev) => prev + 1);
            },1000);
        }
    }


  const pause = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setRunning(false);   
  }

  const resume = () => {
    if(!timerRef.current && time > 0 ){
        setRunning(true);
        timerRef.current = setInterval(()=>{
            setTime((prev) => prev + 1);
        },1000);
    }
  }



  

  return (
   
 <div className="container-fluid">
      <h1 className="mb-4">⏱ {time} sec</h1>
      <button className="btn btn-success me-2" onClick={start} disabled={isRunning}>
        Start
      </button>
      <button className="btn btn-primary me-2" onClick={pause} disabled={!isRunning}>
        Pause
      </button>
      <button className="btn btn-warning" onClick={resume} disabled={isRunning || time === 0}>
        Resume
      </button>
    </div>
  )
}