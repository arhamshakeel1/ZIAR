import { ThemeContext } from "./ThemeContext";
import { useState,useEffect } from "react";

export default function ThemeProvider({children}){

    const [themeState, setThemeState] = useState("dark")

    const lightTheme = ()=>
    {
        setThemeState("dark")
         
    }
    const darkTheme = ()=>
    {
        setThemeState("light")
       
        
    }


    return(

        <ThemeContext.Provider value = {{lightTheme,darkTheme,themeState}}>
            {children}
        </ThemeContext.Provider>
    )
}