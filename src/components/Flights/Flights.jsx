import React from 'react'
import useFlightInfo from '../../hooks/useFlightInfo'

export default function Flights() {

  const flightData = useFlightInfo()

  return (
    <div >

     <h1> {flightData} </h1>
    </div>
  )
}
