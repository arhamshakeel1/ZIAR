import React, { useState, useEffect } from "react";
import Card from "../../Card/Card";
import Destinations from "../../../Data/Destinations";
import { Link } from "react-router-dom";
import useTheme from '../../../Contexts/ThemeContext';
import useFlightInfo from "../../../hooks/useFlightInfo";
import FlightCard from "../../Card/FlightCard";

function FeaturedDestinations({ searchValue }) {
  const flights = useFlightInfo();

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
    <section className={`py-24 sm:py-8 font-sans transition-colors duration-500 ${themeState === "dark" ? "bg-[#191c1f]" : "bg-[#E8E4D9]"}`}>
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-4">
              <div className={`h-[1px] w-12 ${themeState === "dark" ? "bg-gray-600" : "bg-[#8B8175]/60"}`}></div>
              <p className={`text-[11px] font-bold uppercase tracking-[0.3em] ${themeState === "dark" ? "text-gray-400" : "text-[#8B8175]"}`}>
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

        <div className="mb-12 flex flex-wrap items-center gap-3">
           {categories.map((category) => (
            <button 
              key={category} 
              onClick={() => setActiveCategory(category)} 
              className={`rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? themeState === "dark" ? "bg-[#E8E4D9] text-black border-white shadow-md" : "bg-[#EBE6DD] text-black border-[#1A1A1A] shadow-md" 
                  : themeState === "dark" ? "bg-transparent text-gray-400 border-gray-700 hover:border-gray-400 hover:text-white" : "bg-[#efe9dd] text-gray-500 border-gray-200 hover:border-gray-400 hover:text-[#1A1A1A]"
              }`}
            >
              {category}
            </button>
           ))}
        </div>

        <div className="mb-29 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
           {filteredDestinations.map((dest) => (
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
                location={dest.location}
                description={dest.description}
                temperature={dest.temperature}
                elevation={dest.elevation}
              />
            </div>
          ))}

          
        </div>
        <div className="h-[1px] w-full bg-[#8b8273] mb-15"></div>

      </div>

      
    </section>
    

          {/* flight card section */}

     <section className={`py-24 sm:py-8 font-sans transition-colors duration-500 ${themeState === "dark" ? "bg-[#191c1f]" : "bg-[#E8E4D9]"}`}>
     <div className="mx-auto max-w-[1600px] px-6 lg:px-12" >
      <div className="mb-18 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-4">
             <div className={`h-[1px] w-12 ${themeState === "dark" ? "bg-gray-600" : "bg-[#8B8175]/60"}`}></div>
              <p className={`text-[14px] font-bold uppercase  ${themeState === "dark" ? "text-gray-400" : "text-[#8B8175]"}`}>
                Tracking live Flights From LHR
              </p>  
            </div>
             
            <h2 className={` text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl ${themeState === "dark" ? "text-[#ede7d8]" : "text-[#1A1A1A]"}`}>
              LIVE <span className="font-serif font-medium italic text-gray-500">Departures</span>
            </h2>
            
          </div>

          <div className="pb-2">
            <Link to="/Destinations">
              <button className={`group flex items-center gap-2 text-sm font-semibold tracking-wide transition-colors ${themeState === "dark" ? "text-[#E8E4D9] hover:text-white" : "text-[#1A1A1A] hover:text-gray-500"}`}>
                View All Flights
                <span >→</span>
              </button>
            </Link>
          </div>

          </div>


       <div className="mb-30 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

        {flights.slice(0,4).map((flight, index) => (
       <FlightCard
            key={index}
            flight={flight}
          />
        ))}

     </div>

    
     </div>
    </section>
</>
   
  );
}

export default FeaturedDestinations;