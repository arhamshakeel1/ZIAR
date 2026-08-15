import React,{useState,useEffect, createContext, useContext} from 'react'

const WeatherContext = createContext();



export function WeatherProvider({ children }) {

  
  const [weatherDatabyName, setWeatherDatabyName] = useState({})
  const [loading, setLoading] = useState(true)
  const [search,setSearch] = useState('')
  
  const fetchWeatherData = async () => {  

   if (!search) return;

    setLoading(true);
    
    const url = `https://open-weather13.p.rapidapi.com/city?city=${search}&lang=EN`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
        'Content-Type': 'application/json'
      }
    };
 

    try {
     
      const response = await fetch(url, options)
      const data = await response.json();

     
      setWeatherDatabyName(data || [])
      setLoading(false)
    }
    catch (e) {
      console.log(e);
    }

    
  }

  useEffect(()=>{  if (!search) return; fetchWeatherData()},[search])
  
  return (

    <WeatherContext.Provider value={{setWeatherDatabyName,weatherDatabyName,search,setSearch,loading}} >
      {children}
    </WeatherContext.Provider>

  );
}

export default function useWeatherData() {

  return useContext(WeatherContext);
}
