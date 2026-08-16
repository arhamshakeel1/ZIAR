import React from 'react';
import Card from '../Card/Card';
import Destinations from '../../Data/Destinations'; 
import useTheme from '../../Contexts/ThemeContext';

export default function Destination() {

   const { themeState } = useTheme();


  return (
    <div className={`min-h-screen  ${themeState === "dark" ? "bg-[#191c1f]" : "bg-[#ECE8E1]"} py-16 sm:py-24 font-sans`}>
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 w-full">
        
        {/* Page Header */}
        <div className="mb-10">
          <p className="mb-3 text-lg font-medium   text-[#c7af8f]">
            -All Locations
          </p>
          <h1 className={`text-4xl font-medium ${themeState==="dark"? "text-[#eae5de]" : "text-[#0c0c0b]"} md:text-5xl lg:text-6xl`}>
            Explore <span className="font-serif font-medium italic text-gray-500">Destinations</span>
          </h1>
        </div>
        <div className="h-[1px] w-full bg-[#8b8273] mb-25"></div>

         

        {/* Responsive Grid Layout matching your working component */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 w-full">
          {Destinations.map((dest) => (
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
                location={dest.location}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}