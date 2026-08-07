import React from 'react';
import useWishlistContext from '../../hooks/useWishlistContext';


export default function Card({
  id="unknown",
  title = "unknown",
  location = "unknown",
  category = "unknown",
  price = 999,
  rating = 999,
  description = "unknown",
  duration = "unknown",
  temperature = "unknown",
  elevation = "unknown",
  image = "https://images.unsplash.com/photo-1698754516345-d3c26027581d?q=80&w=800&auto=format&fit=crop"
}) {


const { wishlist, toggleWishlist } = useWishlistContext();
console.log("inside card",wishlist)
//const isWishlisted = wishlist.includes(id);

  return (
    <div className="group flex w-full max-w-[380px] flex-col rounded-[2rem] bg-[#f6f2ea] p-2.5 border border-[#EFEAE1] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(0,0,0,0.06)]">
      
      {/* Top Section: Framed Image Wrapper */}
      <div className="relative h-60 w-full overflow-hidden rounded-[1.5rem] bg-gray-200">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-[10000ms] group-hover:scale-105"
        />

        {/* Category Badge with Good Charcoal Color Background */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center rounded-4xl bg-gray-800 px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase text-white border border-[#D8D4C7]/90">
              {category}
          </span>
           
        </div>
        
        {/* Soft Heart Button */}
        <button 
        onClick = {()=>toggleWishlist(id)}
        className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-all hover:bg-white hover:text-red-500 hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
        </button>

        {/* Rating Relocated */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-amber-500">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <span className="text-[12px] font-bold text-gray-900">{rating}</span>
        </div>
      </div>

      {/* Bottom Content Section */}
      <div className="flex flex-col px-3 pt-5 pb-3">
        
        {/* Location Tag */}
        <span className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          {location}
        </span>

        {/* Title */}
        <h2 className="mb-2.5 text-[22px] font-bold tracking-tight text-[#1A1A1A] line-clamp-1">
          {title}
        </h2>

        {/* Description */}
        <p className="mb-5 text-[13px] font-medium leading-relaxed text-gray-500 line-clamp-2">
          {description}
        </p>

        {/* SVG Details Row (Duration, Temperature, Elevation) */}
        <div className="mb-6 flex items-center gap-4 text-[12px] font-semibold text-gray-600">
          
          {/* Duration */}
          <div className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8B8175]">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>{duration}</span>
          </div>

          {/* Temperature */}
          <div className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8B8175]">
              <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/><path d="M12 7v4"/>
            </svg>
            <span>{temperature}</span>
          </div>

          {/* Elevation */}
          <div className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8B8175]">
              <path d="M12 2v20"/><path d="m8 6 4-4 4 4"/><path d="M4 22h16"/>
            </svg>
            <span>{elevation}</span>
          </div>

        </div>

        {/* Thin Divider Line */}
        <div className="h-[1px] w-full bg-[#d3c9b6] mb-5"></div>

        {/* Footer: Prominent Price & Advanced Book Button */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="mb-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
              Total Price
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-[#1A1A1A]">${price}</span>
              <span className="text-sm font-medium text-gray-500">/ Night</span>
            </div>
          </div>

          {/* Upgraded Button with hover arrow effect */}
          <button className="group/btn flex items-center gap-2 rounded-full bg-[#E3DDD3] px-5 py-3 text-[13px] font-bold tracking-wide text-amber-950 transition-all hover:bg-[E3DDD3] hover:shadow-lg">
            Book Now
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/btn:translate-x-1">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </div>
        
      </div>
    </div>
  );
}