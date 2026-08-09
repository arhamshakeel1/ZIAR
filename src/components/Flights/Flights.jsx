import React from 'react';
import useFlightInfo from '../../hooks/useFlightInfo';
import useTheme from '../../Contexts/ThemeContext';
import FlightCard from '../Card/FlightCard';

export default function Flights() {

  const flights = useFlightInfo();
  const { themeState } = useTheme();

  return (

    <div
      className={`${
        themeState === "dark"
          ? "bg-[#191c1f]"
          : "bg-[#ECE8E1]"
      } min-h-screen px-6 pb-14 pt-24 md:px-10 md:pt-32` }
    >

      {/* PAGE HEADER */}
      <div className="mx-auto mb-10 max-w-6xl">

        <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#8B8175]">
          All Flights Departing From LHR
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

        {flights.map((flight, index) => (
       <FlightCard
            key={index}
            flight={flight}
          />
        ))}

       </div>

    </div>
  );
}