import React from 'react'
import Card from '../Card/Card'
import Destinations from '../../Data/Destinations'
import useWishlistContext from '../../hooks/useWishlistContext'



function Wishlist() {

const {wishlist} = useWishlistContext();
const filteredDestinations =  Destinations.filter((des)=> wishlist.includes(des.id));




    return (
     <div className="min-h-screen bg-[#ede7d8] py-16 sm:py-24 font-sans">
      <div className="mx-auto max-w-340 px-6 lg:px-12 w-full">
        {
          
          wishlist.length===0 ? <div className="text-center text-1xl border-2 box-border border-t-2 "><h1>wishlist is empty</h1></div>  :    

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                
                 { filteredDestinations.map((dest)=> (
      
                  <div key={dest.id} className="w-full">
                    <Card
                      id={dest.id}
                      image={dest.image}
                      title={dest.title}
                      country={dest.country}
                      rating={dest.rating}
                      price={dest.price}
                      duration={dest.duration}
                      category={dest.category}
                      description={dest.description}
                      temperature={dest.temperature}
                      elevation={dest.elevation}
                    />
                  </div>
      
                ))}
        
            </div> 
            }
      
       
        </div>


    </div>
  )
}

export default Wishlist
