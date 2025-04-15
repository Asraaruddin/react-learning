import { useEffect, useState } from "react";


function LiveClock(){

    const [time,setTime] = useState(new Date().toLocaleDateString());
    const[isRunning,setIsRunning]=useState(false);

    useEffect(()=>{
        let timer;
        if(isRunning){
            timer=setInterval(()=>{
                setTime(new Date().toLocaleTimeString());
            },1000);
        }
         // Cleanup: stop the timer on unmount or when isRunning becomes false
        return()=> clearInterval(timer);[isRunning]    })
    return(
        <div style={{textAlign:'center',marginTop:'50px'}} className="container-fluid bg-black text-white">
     <h2> 🕒 Live Clock</h2>
     <h1>{time}</h1>
     <button onClick={()=>setIsRunning(true)} disabled={isRunning} style={{marginRight:'10px'}}>Start</button>
     <button onClick={()=>setIsRunning(false)} disabled={!isRunning}>Stop</button>

        </div>
    )
}
export default LiveClock;