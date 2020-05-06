import { useLocalStorage } from "../hooks/useLocalStorage";
import {useEffect} from "react";

export const useDarkMode = modeKey =>{
    const [darkMode, setDarkMode] = useLocalStorage(modeKey)
    useEffect(()=>{
        if(darkMode){
            document.body.classList.add('dark-mode')
        } else if (!darkMode){
            document.body.classList.remove('dark-mode')
        }
    },[darkMode])

    return [darkMode, setDarkMode]
}

