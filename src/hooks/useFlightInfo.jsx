import React from 'react'
import { useLoaderData } from 'react-router-dom'



function useFlightInfo() {

   const data = useLoaderData()
   
  return (
   data.followers
  )
}

export default useFlightInfo

export const flightInfoLoader = async () => {

    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json()
}
