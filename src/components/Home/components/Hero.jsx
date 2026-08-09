import React from 'react';
import { useState } from 'react';
import useTheme from '../../../Contexts/ThemeContext';

export default function Hero({ searchValue, setSearchValue }) {
  const { themeState } = useTheme();

  return (
    <section className={` ${themeState === "dark" ? "bg-[#191c1f]" : "bg-[#E8E4D9]"}  py-20 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center font-sans transition-colors duration-500`}>
      
      {/* Boxed Hero Container */}
      <div className="w-full max-w-[1360px] relative flex flex-col items-center">
        
        {/* Main Image Wrapper - Reduced Heights */}
        <div className="relative w-full h-[60vh] min-h-[450px] max-h-[650px] rounded-[32px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-gray-200/20 group">
          
          {/* Cinematic High-Res Image */}
          <img 
            src="/src/assets/hero_1.jpg"
            alt="Amalfi Coast, Italy" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[25000ms] group-hover:scale-110"
          />
          
          {/* Subtle Overlays for Readability & Deep Mood */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 mt-[-30px]">
             
            {/* Improved Layered Typography */}
            <div className="flex flex-col items-center drop-shadow-2xl">
              
              <span className="text-sm md:text-base text-gray-200 uppercase tracking-[0.4em] font-semibold mb-2 md:mb-3">
                Your Next Escape
              </span>
              
              {/* Scaled down text size to fit smaller height */}
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif italic text-[#ede7d8] mb-4 leading-[1.1] tracking-tight">
                To The North,
              </h1>
              
              <p className="text-xs md:text-sm text-gray-300 uppercase tracking-[0.3em] font-medium mt-1">
                Is closer than you think
              </p>
              
            </div>
          </div>

          {/* Floating Search Bar - Adjusted Bottom Spacing */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-3xl px-4 z-20">
            <div className="bg-[#ede7d8]/95 backdrop-blur-2xl p-2.5 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.4)] flex items-center border border-white/60 transition-all hover:bg-[#f5efe3] hover:shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
              <div className="flex items-center flex-1 px-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 w-5 h-5 mr-4 flex-shrink-0">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                </svg>

                <input
                  onChange={(e) => setSearchValue(e.target.value)}
                  type="text"
                  value={searchValue}
                  placeholder="Search destinations, trips or categories..."
                  className="w-full bg-transparent text-gray-900 placeholder-gray-400 text-[15px] font-medium tracking-wide focus:outline-none"
                />

              </div>
              <button className="bg-[#1A1A1A] hover:bg-black text-white px-8 py-3.5 rounded-full font-semibold tracking-wide transition-all shadow-lg flex-shrink-0 text-sm">
                Explore Now
              </button>
            </div>
          </div>

          {/* Creative Element: Floating Destination Tag */}
          <div className="absolute top-6 right-6 hidden lg:flex items-center gap-4 transition-transform">
            <div className="bg-white/10 p-2.5 rounded-full backdrop-blur-md border border-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#ede7d8]">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-white/70 text-[9px] font-bold uppercase tracking-[0.2em] mb-0.5"></p>
              <p className="text-[#ede7d8] text-[15px] font-serif italic tracking-wide">Gilgit, Pakistan</p>
            </div>
          </div>
          
        </div>

        

      </div>
    </section>
  );
}