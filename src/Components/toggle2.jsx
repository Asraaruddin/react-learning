import { useState } from "react"; 

export function useToggle2(){

    const [theme, setTheme] = useState('border-dark');
    const [btnTheme, setbtnTheme] = useState('btn-dark');

    function handleThemeChange(e){
        if(e.target.checked){
            setTheme('border-secondary bg-dark text-light');
            setbtnTheme('btn-light');
        } else {
            setTheme('border-dark');
            setbtnTheme('btn-dark');
        }
    }
    return {theme , btnTheme, handleThemeChange} 
}
