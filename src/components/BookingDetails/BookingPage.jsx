import React from 'react'
import BookingCard from './components/BookingCard'
import Destinations from '../../Data/Destinations'
import { useParams } from 'react-router-dom'

function BookingPage() {

  const {userId} = useParams();
  const bookedCard =  Destinations.find((des)=> des.id === Number(userId) )//returns an element. otherwise use .filter(u get an array) and use .map to fill details 
  
  return (
  <>
      {        
        <BookingCard 
        title={bookedCard.title}
        image={bookedCard.image}
        rating={bookedCard.rating}
        />
      }
    </>
  )
}

export default BookingPage
