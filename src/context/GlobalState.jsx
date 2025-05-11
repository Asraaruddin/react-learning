import { createContext, useReducer } from "react";

const initialState = {
 transactions : [
    {id:1,text:'salary',amount:500},
    {id:2,text:'Grocery',amount:-50},
    {id:3,text:'Book',amount:-30}
 ]
};

//Create context 
export const GlobalContext = createContext(initialState);

const AppReducer = (state,action)=>{
    switch(action.type){
        case 'Add_TRANSACTION':
            return {
                ...state,
                transactions:[action.payload, ...state.transactions]
            };
            default :
            return state;
    }
};

//Provider Component 
export const GlobalProvider = ({ children } )=> {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    //Actions
    function addTransaction(transaction) {
        dispatch ({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }

    return (
        <GlobalContext.Provider
        value={{
            transactions:state.transactions,
            addTransaction
        }}
        >
            {children}
            </GlobalContext.Provider>
    )
}