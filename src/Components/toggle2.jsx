import { useEffect, useState } from "react"; 

export function useToggle2(){

    const [theme, setTheme] = useState(()=>{
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme : 'border-dark';
    })
    const [btnTheme, setbtnTheme] = useState(()=>{
        const savedBtnTheme = localStorage.getItem("btnTheme");
        return savedBtnTheme ? savedBtnTheme : 'btn-dark';
    })

    function handleThemeChange(e){
        if(e.target.checked){
            setTheme('border-secondary bg-dark text-light');
            setbtnTheme('btn-light');
        } else {
            setTheme('border-dark');
            setbtnTheme('btn-dark');
        }
    }
useEffect(()=>{
    localStorage.setItem("theme",theme);
    localStorage.setItem("btnTheme",btnTheme);
    },[theme,btnTheme]);

    

    return {theme , btnTheme, handleThemeChange} 
}
