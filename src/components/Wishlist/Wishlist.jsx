import React from 'react'
import Card from '../Card/Card'
import Destinations from '../../Data/Destinations'
import useWishlistContext from '../../hooks/useWishlistContext'
import useTheme from '../../Contexts/ThemeContext'


function Wishlist() {

  const {wishlist} = useWishlistContext();
  const filteredDestinations =  Destinations.filter((des)=> wishlist.includes(des.id));
  const { themeState } = useTheme();

  return (
    <div className={`min-h-screen  ${themeState === "dark" ? "bg-[#191c1f]" : "bg-[#ECE8E1]"} py-16 sm:py-24 font-sans`}>
      <div>
      
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 w-full">
          
          {/* ---  HEADING SECTION --- */}
        <div className="mb-10">
          <p className="mb-3 text-lg font-medium text-[#c7af8f]">
            -Wishlist 
          </p>
          <h1 className={`text-4xl font-medium ${themeState==='dark' ? "text-[#eae6e0]" : "text-[#121110]" } md:text-5xl lg:text-6xl`}>
            Saved <span className="font-serif font-medium italic text-gray-500">Destinations</span>
          </h1>
        </div>
        <div className="h-[1px] w-full bg-[#8b8273] mb-25"></div>
          {/* --------------------------- */}

          {
            wishlist.length === 0 ? (
              <div className={` ${themeState === "dark" ? "text-[#ECE8E1]" : "text-[#151719]"} text-center text-xl mt-12 `}>
                <h1>Your wishlist is empty</h1>
              </div>  
            ) : (    
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 w-full">
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
            )
          }
       
        </div>
      </div>
    </div>
  )
}

export default Wishlist