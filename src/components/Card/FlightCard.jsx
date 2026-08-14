
import React from 'react';

function FlightCard({ flight }) {
   const isExpected = flight.status === "Expected";
  return (
    <div
      className="
        flex
        min-h-[320px]
        flex-col
        justify-between
        rounded-2xl
        border
        border-[#C9BDAA]
        bg-[#c9c2b1]
        p-6
      "
    >

      {/* HEADER */}
      <div>

        <div className="mb-7 flex items-start justify-between gap-12">

          <div>
          

            <div className="flex items-baseline gap-2">
              <h2 className="text-4xl font-black tracking-tight text-[#51301F]">
                {flight.arrival.airport.iata}
              </h2>

              <span className="text-lg text-[#8B8175]">
                →
              </span>
            </div>
          </div>

            <div className={`
            
              rounded-full
              bg-[#2a2620]
              px-3
              py-1.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-[#eae4de]
               ${isExpected ? "bg-green-900" : "bg-[#79330f]"}
            `}>
                 <span className="animate-ping ">●</span>
          <span
            
          >
           {flight.status}
            
          </span>

          </div>
          

        </div>


        {/* AIRPORT */}
        <div className="mb-9">
          <h3 className="text-base font-bold text-[#292521]">
            {flight.arrival.airport.name}
          </h3>

          
        </div>

          <div className="h-[2px] w-full bg-[#5c5241] mb-0.5"></div>

        {/* DETAILS */}
        <div className="border-t border-[#CFC3B1] pt-5">

          <div className="space-y-4">

            {/* AIRLINE */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#706a62]">
                Airline
              </span>

              <span className="text-sm font-bold text-[#51301F]">
                {flight.airline.name}
              </span>
            </div>


            {/* DEPARTURE */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#706a62]">
                Departs
              </span>

              <span className="text-sm font-bold text-[#51301F]">
                {new Date(
                  flight.departure.scheduledTime.local
                ).toLocaleString([], {
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>


            {/* FLIGHT */}
            {flight.flight?.number && (
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B8175]">
                  Flight
                </span>

                <span className="text-sm font-bold text-[#51301F]">
                  {flight.flight.number}
                </span>
              </div>
            )}

          </div>

        </div>

      </div>


      {/* ACTION */}
      <button
        onClick={() => alert("This is only a prototype. You won't be directed to elsewhere.")}
        className="
          mt-7
          flex
          w-full
          items-center
          justify-center
          rounded-3xl
          bg-[#51301F]
          px-5
          py-3.5
          text-s
          font-extrabold
          tracking-wide
          text-[#F6F3EF]
          transition-all
          duration-200
          hover:bg-[#402417]
          active:scale-[0.98
]
        "
      >
        View Flight
        <span className="ml-2 text-base">
          →
        </span>
      </button>

    </div>
  );
}

export default FlightCard;

