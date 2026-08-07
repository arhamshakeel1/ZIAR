import { ThemeContext } from "./ThemeContext";
import { useState,useEffect } from "react";

export default function ThemeProvider({children}){

    const [themeState, setThemeState] = useState("")

    const lightTheme = ()=>
    {
        setThemeState("light")
         
    }
    const darkTheme = ()=>
    {
        setThemeState("dark")
       
        
    }


    return(

        <ThemeContext.Provider value = {{lightTheme,darkTheme,themeState}}>
            {children}
        </ThemeContext.Provider>
    )
}