import React from 'react';
import Card from '../Card/Card';
import Destinations from '../../Data/Destinations'; 

export default function Destination() {
  return (
    <div className="min-h-screen bg-[#ede7d8] py-16 sm:py-24 font-sans">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-12 w-full">
        
        {/* Page Header */}
        <div className="mb-14">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#8B8175]">
            All Locations
          </p>
          <h1 className="text-4xl font-light tracking-tight text-[#1A1A1A] md:text-5xl lg:text-6xl">
            Explore <span className="font-serif font-medium italic text-gray-500">Destinations</span>
          </h1>
        </div>

        {/* Responsive Grid Layout matching your working component */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 w-full">
          {Destinations.map((dest) => (
            <div key={dest.id} className="w-full">
              <Card
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

      </div>
    </div>
  );
}