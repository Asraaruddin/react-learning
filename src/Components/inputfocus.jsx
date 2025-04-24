import { useRef } from "react";


 export function Focusinput(){

 const inputref = useRef();

 const handlefocus = () =>{
    inputref.current.focus();
 }
 return(
    <div>
        <input ref={inputref} type="text" placeholder="Click the button to focus me" />
        <button  className="btn btn-primary" onClick={handlefocus}>Focus</button>
    </div>
 )

}