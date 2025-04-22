import { useEffect, useState } from "react";

export function Debouncedemo(){
const [now,setNow] = useState();

function timer(){
    var d = new Date();
    setNow(d.toLocaleDateString());
}
useEffect(()=>{
    setInterval(timer,1000)
},[])
return(
    <div className="container-fluid">
        <h1 className="text-cent
        er">{now}</h1>
    </div>
)

}