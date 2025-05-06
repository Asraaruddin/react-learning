import { useCallback, useState } from "react"

 export const Parent = () =>{
    const [count,setCount] = useState(0);
    const handleClick = useCallback( () =>{
        console.log("Clicked")
    },[]);
    return <Child onClick={handleClick }/>
}