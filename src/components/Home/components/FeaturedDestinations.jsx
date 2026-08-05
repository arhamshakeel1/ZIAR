import React, { useState } from "react";
import Card from "../../Card/Card";
import Destinations from "../../../Data/Destinations";

// Define your categories here
const CATEGORIES = ["All", "Mountains", "Valleys", "Historical", "Desert", "Urban"];

function FeaturedDestinations() {
  // State to track which category is currently selected
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter destinations based on both the 'featured' flag and the active category
  const filteredDestinations = Destinations.filter((dest) => {
    const isFeatured = dest.featured;
    const matchesCategory = activeCategory === "All" || dest.category === activeCategory;
    return isFeatured && matchesCategory;
  });

  return (
    <section className="bg-[#e3ded3] py-24 sm:py-20 font-sans">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
        
        {/* Heading Area */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          
          <div className="max-w-2xl">
            {/* Subtitle with decorative line */}
            <div className="mb-5 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#8B8175]/60"></div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#8B8175]">
                Explore Pakistan
              </p>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl font-light tracking-tight text-[#1A1A1A] md:text-5xl lg:text-6xl">
              Featured <span className="font-serif font-medium italic text-gray-500">Destinations</span>
            </h2>
          </div>

          {/* View All Button */}
          <div className="pb-2">
            <button className="group flex items-center gap-2 text-sm font-semibold tracking-wide text-[#1A1A1A] transition-colors hover:text-gray-500">
              View All Locations
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
          </div>
          
        </div>

        {/* Categories Row */}
        <div className="mb-12 flex flex-wrap items-center gap-3">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#EBE6DD] text-black border-[#1A1A1A] shadow-md"
                  : "bg-[#efe9dd] text-gray-500 border-gray-200 hover:border-gray-400 hover:text-[#1A1A1A]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {filteredDestinations.map((dest) => (
            <Card
              key={dest.id}
              image={dest.image}
              title={dest.title}
              reviews={dest.reviews}
              bestTime={dest.bestTime}
              duration={dest.duration}
              country={dest.country}
              rating={dest.rating}
              stay={dest.stay}
              airport={dest.airport}
              price={dest.price}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedDestinations;