import { useId } from "react";


 export function NameInput(){
    const id = useId;
    return(
        <div>
            <label htmlFor="{id}">Name</label>
            <input id={id} type="text" />
        </div>
    )
 }