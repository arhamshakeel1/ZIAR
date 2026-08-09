import React from 'react';
import useWishlistContext from '../../hooks/useWishlistContext';
import { Link } from 'react-router-dom';

export default function Card({
  id = "unknown",
  title = "unknown",
  location = "unknown",
  category = "unknown",
  price = 999,
  rating = 999,
  description = "unknown",
  duration = "unknown",
  temperature = "unknown",
  elevation = "unknown",
  image = ""
}) {

  const { wishlist, toggleWishlist } = useWishlistContext();
  

  const isWishlisted = wishlist.includes(id);

  return (
    <div className="group flex w-full max-w-[340px] flex-col rounded-[1.5rem] bg-[#c9c2b1] p-2 border border-[#EFEAE1] shadow-sm transition-all duration-100 hover:-translate-y-0.5 hover:shadow-md">
      
      {/* Top Section: Framed Image Wrapper */}
      <div className="mb-3 relative h-54 w-full overflow-hidden rounded-[1.2rem] bg-gray-200">
        <img
          src={image}
          alt={title}
         loading="lazy"
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center rounded-full bg-gray-800 px-2.5 py-1 text-[9px] font-medium tracking-[0.2em] uppercase text-white border border-[#D8D4C7]/90">
              {category}
          </span>
        </div>
        
        {/* Soft Heart Button */}
        {/* 2. Update className to apply different colors based on isWishlisted */}
        <button 
          onClick={() => toggleWishlist(id)}
          className={`absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-md transition-all hover:scale-105 ${
            isWishlisted 
              ? 'bg-white text-[#212122] shadow-sm' 
              : 'bg-black/20 text-white hover:bg-white hover:text-black'
          }`}
        >
          {/* 3. Change fill="none" to fill dynamically based on state */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill={isWishlisted ? "currentColor" : "none"} 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
        </button>

        {/* Rating Relocated */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 rounded-full bg-[#F4EFC1]/80 px-2.5 py-1 shadow-md backdrop-blur-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-amber-500">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <span className="text-[11px] font-bold text-gray-900">{rating}</span>
        </div>
      </div>

      {/* Bottom Content Section */}
      <div className="flex flex-col px-2 pt-3 pb-2">
        
        {/* Location Tag */}
        <span className="mb-1 text-[11px] font-black text-[#7a7474]">
         {description}, {location}
        </span>

        {/* Title */}
        <h2 className="mb-1.5 text-[23px] font-black tracking-tight text-[#51301F] line-clamp-1">
          {title}
        </h2>

        {/* Description */}
        <p className="mb-3 text-[12px] font-medium leading-relaxed text-gray-600 line-clamp-2">
          <br></br>
        </p>

        {/* SVG Details Row (Duration, Temperature, Elevation) */}
        <div className="mb-4 flex items-center gap-4 text-[11px] font-semibold text-gray-600">
          
          {/* Duration */}
          <div className="flex items-center gap-1 text-[12px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7e7264]">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>{duration}</span>
          </div>

          {/* Temperature */}
          <div className="flex items-center gap-1 text-[12px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7e7264]">
              <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/><path d="M12 7v4"/>
            </svg>
            <span>{temperature}</span>
          </div>

          {/* Elevation */}
          <div className="flex items-center gap-1 text-[12px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7e7264]">
              <path d="M12 2v20"/><path d="m8 6 4-4 4 4"/><path d="M4 22h16"/>
            </svg>
            <span>{elevation}</span>
          </div>

        </div>

        {/* Thin Divider Line */}
        <div className="h-[2px] w-full bg-[#5a5141] mb-3"></div>

        {/* Footer: Prominent Price & Advanced Book Button */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-[#1A1A1A]">${price}</span>
              <span className="text-xs font-medium text-gray-600">/ Night</span>
            </div>
          </div>

          {/* Upgraded Button with hover arrow effect */}
          <Link to={`/book-now/${id}`}>
            <button className="group/btn flex items-center gap-1.5 rounded-3xl bg-[#51301F] px-4 py-2.5 text-[12px] font-bold tracking-wide text-[#eee7e7] transition-all hover:bg-[#402417] hover:shadow-md">
              Book Now <span>→</span>
            </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
}