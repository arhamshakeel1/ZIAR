
import React from 'react';
import useFlightContext from '../../Contexts/FlightContext';
import useTheme from '../../Contexts/ThemeContext';
import FlightCard from '../Card/FlightCard';

export default function Flights() {

 const { flights, loading, error } = useFlightContext();
 const { themeState } = useTheme();

  return (

    <div
      className={`${
        themeState === "dark"
          ? "bg-[#191c1f]"
          : "bg-[#ECE8E1]"
      } min-h-screen px-6 pb-14 pt-24 md:px-10 md:pt-32`}
    >

      {/* PAGE HEADER */}
      <div className="mx-auto mb-10 max-w-6xl">

        <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#8B8175]">
          All Flights Departing From LHE
        </p>

        <h1
          className={`text-4xl font-light tracking-tight ${
            themeState === "dark"
              ? "text-[#d6c8b2]"
              : "text-[#1A1A1A]"
          } md:text-6xl`}
        >
          Explore{" "}
          <span className="font-serif font-medium italic text-gray-500">
            Flights
          </span>
        </h1>

      </div>


      {/* DIVIDER */}
      <div className="mx-auto mb-12 h-[2px] max-w-6xl bg-[#7b715b]"></div>


      {/* FLIGHT GRID */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3">

        {loading ? (
    
    <div className={`col-span-full flex flex-col items-center justify-center py-16 rounded-[1.5rem] border-2 border-dashed transition-all duration-300 ${themeState === "dark" ? "border-gray-700 bg-[#1e2125] text-gray-400" : "border-[#8b8273]/40 bg-[#EBE6DD] text-[#51301F]"}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4 animate-bounce">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l7 4-3.2 3.2-3.6-.9-.8.8 2.9 3.6 3.6 2.9.8-.8-.9-3.6L12 14l4 7 .8-.7z"/>
      </svg>
      <p className="text-sm font-bold uppercase tracking-widest">
        Fetching Live Flights...
      </p>
    </div>

  ) : error ? (
          <p className="col-span-full py-10 text-center text-gray-500">
            Unable to load flights.
          </p>

        ) : (

          flights.map((flight, index) => (
            <FlightCard
              key={index}
              flight={flight}
            />
          ))

        )}

      </div>

      

    </div>

  );
}
