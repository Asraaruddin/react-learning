import { useRef, useState } from "react";

export function Debounce(){
const [msg,setMsg] = useState('');

let thread = useRef(null);

function v1(){
    setMsg('Volume increased by 10%')
}

function v2(){
    setMsg('Volume increased by 40%')
}

function v3(){
    setMsg('Volume increased by 100%')
}

function handleVolumeUp(){
    setTimeout(v1,3000);
    thread.current = setTimeout(v2,6000);
    setTimeout(v3,10000);
}
function cancel140(){
    clearTimeout(thread.current);
    alert('cancelled')
}

return (
    <div className="container-fluid">
 <button onClick={handleVolumeUp} className="bi bi-volume-up btn btn-success mt-3"></button>
 <button onClick={cancel140} className="bi bi-volume-off btn btn-primary ms-2 mt-3">40%</button>
 <p className="mt-4 fs-4">{msg}</p>

    </div>
)
}