import { useContext } from "react";
import { ThemeContext } from "../App";


export  function Toolbar(){
    return (
        <div>
            <ThemeButton/>
        </div>
    );
}

function ThemeButton(){
    const {theme,setTheme} = useContext(ThemeContext);
    
    return (
        <button
        onClick={()=> setTheme(theme ==='light' ? 'dark' : 'light')}
        style={{background: theme === "light" ? '#eee' : '#333', color:theme === 'light' ? '#000' : '#fff'}}
        >
           Current Theme : {theme}
        </button>
    )
}