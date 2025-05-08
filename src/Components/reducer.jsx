import { useReducer } from "react";

const reducer = (state,action) =>{
    switch(action.type){
        case 'increment' : return {count:state.count + 1};
        case 'decrement' : return {count:state.count -1 };
        default:return state;
    }
};

 export function CounterReducer(){
    const [state,dispatch] = useReducer(reducer,{count:0});
    
    return(
        <>
        <button className="btn btn-primary" onClick={()=> dispatch({type:'decrement'})}>-</button>
        {state.count}
        <button className="btn btn-secondary" onClick={()=> dispatch({type:'increment'})}>+</button>
        
        </>
    )
 }
