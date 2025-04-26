import { useMemo, useState } from "react";

  export function ExpensiveComponent(){
    const [count,setCount] =useState(0);
    const [dark,setDark] = useState(false);

    const expensiveResult= useMemo(()=>{
        console.log("calculating...");
        let total = 0 ;
        for (let i=0;i<100000000;i++){
            total += i ;
        }
        return total;
    },[]);

    const themeStyle = {
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#000"
    }


    return (
        <div style={themeStyle}>
          <h2>Expensive Result: {expensiveResult}</h2>
          <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Add</button>
          <button  className="btn btn-danger"    onClick={() => setDark(!dark)}>Toggle Theme</button>
          <p>Count: {count}</p>
        </div>
      );

}