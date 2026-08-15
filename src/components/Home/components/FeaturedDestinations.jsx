import React, { useState, useEffect } from "react";
import Card from "../../Card/Card";
import Destinations from "../../../Data/Destinations";
import { Link } from "react-router-dom";
import useTheme from '../../../Contexts/ThemeContext';
import FlightCard from "../../Card/FlightCard";
import useFlightContext from "../../../Contexts/FlightContext";

function FeaturedDestinations({ searchValue }) {

  const { flights, loading, error } = useFlightContext();
  const { themeState } = useTheme();
  const categories = ["All", "Mountain", "Valley", "Alpine", "Desert"];
  const [activeCategory, setActiveCategory] = useState("All");

  const selectedDestinations = Destinations.filter((dest) => dest.title.toLowerCase().includes(searchValue.toLowerCase()));
    
  const filteredDestinations =
      searchValue.trim() !== "" ?
        selectedDestinations
      : activeCategory === "All" 
      ? selectedDestinations
      : selectedDestinations.filter(
          (dest) => dest.category === activeCategory
        );

  useEffect(() => {
    if (searchValue.trim() !== "") {
      setActiveCategory("All");
    }
  }, [searchValue]);

  return (
    <>
    {/* 1. Fixed padding: smaller on mobile (py-12), larger on desktop (md:py-24) */}
    <section className={`py-12 md:py-24 font-sans transition-colors duration-500 ${themeState === "dark" ? "bg-[#191c1f]" : "bg-[#E8E4D9]"}`}>
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        
        {/* 2. Adjusted gaps for the header */}
        <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <div className="max-w-2xl">
            <div className="mb-3 md:mb-5 flex items-center gap-4">
              <div className={`h-[1px] w-8 md:w-12 ${themeState === "dark" ? "bg-gray-600" : "bg-[#8B8175]/60"}`}></div>
              <p className={`text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] ${themeState === "dark" ? "text-gray-400" : "text-[#8B8175]"}`}>
                Explore Pakistan
              </p>
            </div>
            <h2 className={`text-4xl font-light tracking-tight md:text-5xl lg:text-6xl ${themeState === "dark" ? "text-[#ede7d8]" : "text-[#1A1A1A]"}`}>
              Featured <span className="font-serif font-medium italic text-gray-500">Destinations</span>
            </h2>
          </div>

          <div className="pb-2">
            <Link to="/Destinations">
              <button className={`group flex items-center gap-2 text-sm font-semibold tracking-wide transition-colors ${themeState === "dark" ? "text-[#E8E4D9] hover:text-white" : "text-[#1A1A1A] hover:text-gray-500"}`}>
                View All Locations
                <span >→</span>
              </button>
            </Link>
          </div>
        </div>

        {/* 3. Scaled down category buttons for smaller screens */}
        <div className="mb-8 md:mb-12 flex flex-wrap items-center gap-2 md:gap-3">
           {categories.map((category) => (
            <button 
              key={category} 
              onClick={() => setActiveCategory(category)} 
              className={`rounded-full border px-4 py-1.5 text-xs md:px-6 md:py-2.5 md:text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? themeState === "dark" ? "bg-[#E8E4D9] text-black border-white shadow-md" : "bg-[#EBE6DD] text-black border-[#1A1A1A] shadow-md" 
                  : themeState === "dark" ? "bg-transparent text-gray-400 border-gray-700 hover:border-gray-400 hover:text-white" : "bg-[#efe9dd] text-gray-500 border-gray-200 hover:border-gray-400 hover:text-[#1A1A1A]"
              }`}
            >
              {category}
            </button>
           ))}
        </div>

        {/* 4. Scaled margin-bottom for mobile (mb-16) */}
        <div className="mb-16 md:mb-28 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 place-items-center sm:place-items-stretch">
           {filteredDestinations.map((dest) => (
            <div key={dest.id} className="w-full max-w-[380px] sm:max-w-none">
              <Card
                id={dest.id}
                image={dest.image}
                title={dest.title}
                country={dest.country}
                rating={dest.rating}
                price={dest.price}
                duration={dest.duration}
                category={dest.category}
                location={dest.location}
                description={dest.description}
                temperature={dest.temperature}
                elevation={dest.elevation}
              />
            </div>
          ))}

          
        </div>
        <div className="h-[1px] w-full bg-[#8b8273] mb-4 md:mb-4"></div>

      </div>

      
    </section>
    

    {/* FLIGHT CARD SECTION */}
    <section className={`py-12 md:py-24 font-sans transition-colors duration-500 ${themeState === "dark" ? "bg-[#191c1f]" : "bg-[#E8E4D9]"}`}>
     <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12" >
      
      {/* Reduced bottom margin for mobile */}
      <div className="mb-10 md:mb-18 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <div className="max-w-2xl">
            <div className="mb-3 md:mb-5 flex items-center gap-4">
             <div className={`h-[1px] w-8 md:w-12 ${themeState === "dark" ? "bg-gray-600" : "bg-[#8B8175]/60"}`}></div>
              <p className={`text-[12px] md:text-[14px] font-bold uppercase  ${themeState === "dark" ? "text-gray-400" : "text-[#8B8175]"}`}>
                Tracking live Flights From LHR
              </p>  
            </div>
             
            <h2 className={` text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl ${themeState === "dark" ? "text-[#ede7d8]" : "text-[#1A1A1A]"}`}>
              LIVE <span className="font-serif font-medium italic text-gray-500">Departures</span>
            </h2>
            
          </div>

          <div className="pb-2">
            <Link to="/flights-tracker">
              <button className={`group flex items-center gap-2 text-sm font-semibold tracking-wide transition-colors ${themeState === "dark" ? "text-[#E8E4D9] hover:text-white" : "text-[#1A1A1A] hover:text-gray-500"}`}>
                View All Flights
                <span >→</span>
              </button>
            </Link>
          </div>

      </div>


     <div className="mb-16 md:mb-30 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 place-items-center sm:place-items-stretch">

        {loading ? (
          
          <div className={`col-span-full flex w-full flex-col items-center justify-center py-12 md:py-16 rounded-[1.5rem] border-2 border-dashed transition-all duration-300 ${themeState === "dark" ? "border-gray-700 bg-[#1e2125] text-gray-400" : "border-[#8b8273]/40 bg-[#EBE6DD] text-[#51301F]"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4 animate-bounce">
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l7 4-3.2 3.2-3.6-.9-.8.8 2.9 3.6 3.6 2.9.8-.8-.9-3.6L12 14l4 7 .8-.7z"/>
            </svg>
            <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-center">
              Fetching Live Flights...
            </p>
          </div>

        ) : error ? (
          <p className="col-span-full text-center text-gray-500">
            Unable to load live flights.
          </p>
        ) : (
          flights.slice(0, 4).map((flight, index) => (
            <div key={index} className="w-full max-w-[380px] sm:max-w-none">
              <FlightCard
                flight={flight}
              />
            </div>
          ))
        )}

      </div>
    
     </div>
    </section>
</>
   
  );
}

export default FeaturedDestinations;