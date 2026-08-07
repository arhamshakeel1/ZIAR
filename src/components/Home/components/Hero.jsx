import React from 'react';
import { useState } from 'react';
import useSearchQuery from '../../../hooks/useWishlistContext';
import useTheme from '../../../Contexts/ThemeContext';

export default function Hero(
{  searchValue,
  setSearchValue
}
) 

{


    const {themeState} = useTheme();

  return (
    <section className={` ${ themeState ==="dark" ? "bg-[#121111]" : "bg-[#d7cfbf]"} min-h-screen py-12 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center font-sans`}>
      
      {/* Boxed Hero Container */}
      <div className="w-full max-w-[1360px] relative flex flex-col items-center">
        
        {/* Main Image Wrapper */}
        <div className="relative w-full h-[75vh] min-h-[650px] max-h-[850px] rounded-[32px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-200/50 group">
          
          {/* Cinematic High-Res Image (Amalfi Coast) */}
          <img 
            src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=2800&auto=format&fit=crop](https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=2800&auto=format&fit=crop)"
            alt="Amalfi Coast, Italy" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[25000ms] group-hover:scale-110"
          />
          
          {/* Subtle Overlays for Readability & Deep Mood */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 mt-[-60px]">
            
            {/* Premium Badge */}
            
              <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-white mb-10 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-amber-200">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                <path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>
              </svg>
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/90">Curated Luxury Stays</span> 
              </div>
            

            {/* Editorial Headline with Premium Typography */}
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] text-white mb-8 leading-[1.05] tracking-tight drop-shadow-2xl font-light">
              Redefine <br className="hidden sm:block" /> 
              <span className="font-serif italic text-white/95 font-medium tracking-normal">Your Journey</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light mb-12 leading-relaxed drop-shadow-md tracking-wide">
              Discover extraordinary destinations and exclusive retreats designed for the modern explorer. Travel beyond the expected.
            </p>
          </div>

          {/* Floating Search Bar (Centered and Enhanced) */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-3xl px-4 z-20">
            <div className="bg-white/90 backdrop-blur-2xl p-2.5 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.3)] flex items-center border border-white/60 transition-all hover:bg-white/95 hover:shadow-[0_15px_50px_rgba(0,0,0,0.4)]">
              <div className="flex items-center flex-1 px-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 w-5 h-5 mr-4 flex-shrink-0">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                </svg>



                <input
                onChange={(e)=>setSearchValue(e.target.value)}
                  type="text"
                  value = {searchValue}
                  placeholder="Search destinations, trips or categories..."
                  className="w-full bg-transparent text-gray-900 placeholder-gray-500 text-[15px] font-medium tracking-wide focus:outline-none"
                />



              </div>
              <button className="bg-[#1A1A1A] hover:bg-black text-white px-10 py-4 rounded-full font-semibold tracking-wide transition-all shadow-lg flex-shrink-0 text-sm">
                Explore Now
              </button>
            </div>
          </div>

          {/* Creative Element: Floating Destination Tag */}
          <div className="absolute top-8 right-8 hidden lg:flex items-center gap-4 bg-black/30 backdrop-blur-xl px-5 py-3.5 rounded-2xl border border-white/10 shadow-2xl transition-transform hover:-translate-y-1">
            <div className="bg-white/20 p-2.5 rounded-full backdrop-blur-md border border-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-white/70 text-[9px] font-bold uppercase tracking-[0.2em] mb-0.5">Featured Location</p>
              <p className="text-white text-[15px] font-serif italic tracking-wide">Skardu,Pakistan</p>
            </div>
          </div>
          
        </div>

        {/* Scroll Indicator outside the box for breathing room */}
        <div className="mt-14 flex flex-col items-center gap-3 text-gray-400 animate-bounce">
           <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400/80">Scroll to explore</span>
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400/80">
             <path d="m6 9 6 6 6-6"/>
           </svg>
        </div>

      </div>
    </section>
  );
}