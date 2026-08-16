import React, { useEffect } from 'react';
import useWeatherData from '../../Contexts/WeatherAPIContext';
import { useParams } from "react-router-dom";

function WeatherPage() {
    const { setWeatherDatabyName, weatherDatabyName, search, setSearch, loading } = useWeatherData();
    const { city } = useParams();

    console.log(weatherDatabyName);

    useEffect(() => {
        if (city && city !== search) {
            setSearch(city);
        }
    }, [city, search]);

    return (

        <main className="min-h-screen bg-[#191c1f] p-0.5">

            {loading ?

                <div className="min-h-screen flex flex-col items-center justify-center text-[#d6c8b2]">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="animate-spin"
                    >
                        <path d="M12 3a9 9 0 1 0 9 9" />
                    </svg>

                    <p className="mt-5 text-sm uppercase tracking-[0.3em] text-[#d6c8b2]/60">
                        Loading Weather
                    </p>

                </div>

                : <div className="max-w-[1500px] mx-auto">



                    {/* City */}
                    <div className="flex items-center justify-center gap-2 mt-8 sm:mt-11">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#bfae93"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>

                        <h1 className="text-2xl sm:text-3xl font-semibold text-[#fffcf7] text-center">
                            {weatherDatabyName?.name || "Null"},
                        </h1>

                        <span className="text-2xl sm:text-3xl font-semibold text-[#f3efea]">
                            {weatherDatabyName?.sys?.country || "Null"}
                        </span>
                    </div>


                    {/* Main Weather */}
{/* Main Weather */}
<div className="
    border-2 border-[#9a8a6f]
    rounded-2xl bg-[#1e1a1a] shadow-lg
    mt-5 mx-2 sm:mx-8 md:mx-20 lg:mx-36
    px-6 py-8 sm:p-10 md:py-14 md:px-16 lg:px-24
    flex flex-row items-center justify-center
    gap-4 sm:gap-16 md:gap-24 lg:gap-40
    transition-all duration-300 hover:shadow-xl hover:shadow-white/5
">

    {/* Left Column: Temperature Details */}
    <div className="flex flex-col items-start text-left w-1/2 md:w-auto">

        <p className="text-xs sm:text-sm md:text-xl md:ml-20 tracking-[0.3em] text-[#fffcf7] mb-1 sm:mb-3">
            TODAY
        </p>

        <div className="flex items-start mb-2 sm:mb-5 mt-1 sm:mt-2">
            <span className="text-6xl sm:text-7xl md:text-[138px] text-[#e3dfd9] font-bold leading-none tracking-tighter">
                {weatherDatabyName?.main?.temp
                    ? Math.round(weatherDatabyName.main.temp)
                    : "NaN"}
            </span>

            <span className="text-xl sm:text-4xl font-medium text-[#d6c8b2] ml-1 sm:ml-2 mt-1">
                °C
            </span>
        </div>

        {/* High / Low */}
        <div className="flex items-center justify-start gap-3 sm:gap-5 md:gap-8 mt-2 sm:mt-6 md:ml-10 text-sm sm:text-lg md:text-xl">
            <span className="text-[#fffcf7] font-medium whitespace-nowrap">
                ↑ {weatherDatabyName?.main?.temp
                    ? weatherDatabyName.main.temp_max.toFixed(1)
                    : "NaN"}°
            </span>

            <span className="text-[#d6c8b2]/60 font-medium whitespace-nowrap">
                ↓ {weatherDatabyName?.main?.temp_min
                    ? weatherDatabyName.main.temp_min.toFixed(1)
                    : "NaN"}°
            </span>
        </div>

    </div>

    {/* Right Column: Weather Icon & Condition */}
    <div className="flex flex-col items-end text-right w-1/2 md:w-auto">

        <svg
            viewBox="0 0 200 200"
            className="w-28 h-28 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 drop-shadow-xl"
        >
            <defs>
                <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="40%" stopColor="#FFA033" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FFA033" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="sunBody" x1="20%" y1="0%" x2="80%" y2="100%">
                    <stop offset="0%" stopColor="#FFD05B" />
                    <stop offset="60%" stopColor="#FF8B15" />
                    <stop offset="100%" stopColor="#E35500" />
                </linearGradient>

                <linearGradient id="cloudBody" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8A95A5" />
                    <stop offset="50%" stopColor="#5E6879" />
                    <stop offset="100%" stopColor="#3C4453" />
                </linearGradient>
            </defs>

            <circle cx="130" cy="70" r="65" fill="url(#sunGlow)" />
            <circle cx="130" cy="70" r="42" fill="url(#sunBody)" />
            <path
                d="M60 145C40 145 25 130 25 110C25 90 40 78 55 78C65 55 95 45 115 65C135 55 165 65 165 90C185 90 195 105 195 120C195 140 175 145 160 145Z"
                fill="url(#cloudBody)"
            />
        </svg>

        <div className="flex flex-col items-center md:mr-10 justify-center mt-1 sm:mt-2">
            <h2 className="text-xs sm:text-base md:text-lg text-[#fffcf7] font-bold uppercase tracking-[0.05em] sm:tracking-[0.25em]">
                {weatherDatabyName?.weather?.[0]?.description || "Clear Sky"}
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#d6c8b2]/60 font-semibold mt-0.5 sm:mt-2">
                Feels Like{" "}
                {weatherDatabyName?.main?.feels_like
                    ? Math.round(weatherDatabyName.main.feels_like)
                    : "NaN"}°
            </p>
        </div>

    </div>

</div>

                    {/* humidty ,sea level etc */}
          <div className="
    border-2 border-[#9a8a6f]
    rounded-xl
    bg-[#1e1a1a]
    mt-8 sm:mt-12
    mx-4 sm:mx-8 md:mx-20 lg:mx-36
    px-4 sm:px-6 lg:px-10
    py-6 sm:py-8
    shadow-lg
    transition-all duration-300
    hover:shadow-xl hover:shadow-white/5
">

    <div className="
        grid
        grid-cols-2 md:grid-cols-4
        divide-x divide-[#9a8a6f]/40
    ">

        {/* Humidity */}
        <div className="
            flex items-center justify-center
            gap-2 sm:gap-4
            px-2 sm:px-6
            py-4 md:py-0
        ">

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d6c8b2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
            >
                <path d="M12 2.7s6 6.2 6 11a6 6 0 0 1-12 0c0-4.8 6-11 6-11Z" />
            </svg>

            <div>
                <p className="text-xs sm:text-sm text-[#d6c8b2]/60 uppercase tracking-widest">
                    Humidity
                </p>

                <p className="text-xl sm:text-2xl text-[#fffcf7] font-semibold">
                    {weatherDatabyName?.main?.humidity || "NaN"}%
                </p>
            </div>

        </div>


        {/* Pressure */}
        <div className="
            flex items-center justify-center
            gap-2 sm:gap-4
            px-2 sm:px-6
            py-4 md:py-0
        ">

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d6c8b2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
            >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
            </svg>

            <div>
                <p className="text-xs sm:text-sm text-[#d6c8b2]/60 uppercase tracking-widest">
                    Pressure
                </p>

                <p className="text-xl sm:text-2xl text-[#fffcf7] font-semibold">
                    {weatherDatabyName?.main?.pressure || "NaN"}
                    <span className="text-xs sm:text-sm ml-1">hPa</span>
                </p>
            </div>

        </div>


        {/* Sea Level */}
        <div className="
            flex items-center justify-center
            gap-2 sm:gap-4
            px-2 sm:px-6
            py-4 md:py-0
        ">

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d6c8b2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
            >
                <path d="M3 18c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
                <path d="M3 13c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
                <path d="M12 3v6" />
                <path d="m9 6 3-3 3 3" />
            </svg>

            <div>
                <p className="text-xs sm:text-sm text-[#d6c8b2]/60 uppercase tracking-widest">
                    Sea Level
                </p>

                <p className="text-xl sm:text-2xl text-[#fffcf7] font-semibold">
                    {weatherDatabyName?.main?.sea_level || "NaN"}
                    <span className="text-xs sm:text-sm ml-1">hPa</span>
                </p>
            </div>

        </div>


        {/* Ground Level */}
        <div className="
            flex items-center justify-center
            gap-2 sm:gap-4
            px-2 sm:px-6
            py-4 md:py-0
        ">

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d6c8b2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
            >
                <path d="M3 20h18" />
                <path d="m5 20 3-9 3 5 3-8 5 12" />
            </svg>

            <div>
                <p className="text-xs sm:text-sm text-[#d6c8b2]/60 uppercase tracking-widest">
                    Ground Level
                </p>

                <p className="text-xl sm:text-2xl text-[#fffcf7] font-semibold">
                    {weatherDatabyName?.main?.grnd_level || "NaN"}
                    <span className="text-xs sm:text-sm ml-1">hPa</span>
                </p>
            </div>

        </div>

    </div>

</div>

                    {/* Longitude / Latitude */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 mx-4 sm:mx-8 md:mx-20 lg:mx-36">

                        {/* Longitude */}
                        <div className="
        border-2 border-[#9a8a6f]
        rounded-xl
        bg-[#1e1a1a]
        p-6 sm:p-8
        flex items-center justify-center
        gap-4 sm:gap-5
        shadow-lg
        transition-all duration-300
        hover:shadow-xl hover:shadow-white/5
    ">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="38"
                                height="38"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#d6c8b2"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="shrink-0"
                            >
                                <circle cx="12" cy="12" r="9" />
                                <path d="M12 3c3 3 4 6 4 9s-1 6-4 9" />
                                <path d="M12 3c-3 3-4 6-4 9s1 6 4 9" />
                                <path d="M3 12h18" />
                            </svg>

                            <div>
                                <p className="text-xs sm:text-sm text-[#d6c8b2]/60 uppercase tracking-widest">
                                    Longitude
                                </p>

                                <p className="text-xl sm:text-2xl text-[#fffcf7] font-semibold">
                                    {weatherDatabyName?.coord?.lon || "NaN"}°
                                </p>
                            </div>

                        </div>


                        {/* Latitude */}
                        <div className="
        border-2 border-[#9a8a6f]
        rounded-xl
        bg-[#1e1a1a]
        p-6 sm:p-8
        flex items-center justify-center
        gap-4 sm:gap-5
        shadow-lg
        transition-all duration-300
        hover:shadow-xl hover:shadow-white/5
    ">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="38"
                                height="38"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#d6c8b2"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="shrink-0"
                            >
                                <circle cx="12" cy="12" r="9" />
                                <path d="M3 12h18" />
                                <path d="M12 3v18" />
                                <path d="M7 5c2 2 3 4 3 7s-1 5-3 7" />
                                <path d="M17 5c-2-2-3-4-3-7s1-5 3-7" />
                            </svg>

                            <div>
                                <p className="text-xs sm:text-sm text-[#d6c8b2]/60 uppercase tracking-widest">
                                    Latitude
                                </p>

                                <p className="text-xl sm:text-2xl text-[#fffcf7] font-semibold">
                                    {weatherDatabyName?.coord?.lat || "NaN"}°
                                </p>
                            </div>

                        </div>

                    </div>



                    {/* wind */}
                    <div className="
    max-w-[1220px]
    mx-4 sm:mx-8 md:mx-20 lg:mx-auto
    mt-12 sm:mt-20
    mb-24 sm:mb-60
    text-[#dcd7cf]
    shadow-lg
    transition-all duration-300
    hover:shadow-xl hover:shadow-white/5
">

                        <div className="
        border-2 border-[#9a8a6f]
        rounded-xl
        bg-[#1e1a1a]
        p-6 sm:p-10 lg:p-16
    ">

                            <div className="
            grid
            grid-cols-1 sm:grid-cols-3
            items-center
            gap-0 sm:gap-4
        ">

                                {/* Direction */}
                                <div className="flex items-center justify-center gap-4 pb-8 sm:pb-0">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="38"
                                        height="38"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#d6c8b2"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="shrink-0"
                                    >
                                        <path d="M12 19V5" />
                                        <path d="m5 12 7-7 7 7" />
                                    </svg>

                                    <div>
                                        <p className="text-xs sm:text-sm uppercase tracking-widest text-[#d6c8b2]/60">
                                            Direction
                                        </p>

                                        <p className="text-xl sm:text-2xl font-semibold">
                                            {weatherDatabyName?.wind?.deg || "NaN"}°
                                        </p>
                                    </div>

                                </div>


                                {/* Wind Speed */}
                                <div className="
                flex flex-col items-center
                border-y sm:border-y-0 sm:border-x border-[#9a8a6f]/40
                py-8 sm:py-0
                px-4
            ">

                                    <p className="text-xs sm:text-sm uppercase tracking-widest text-[#d6c8b2]/60">
                                        Wind Speed
                                    </p>

                                    <p className="text-5xl sm:text-7xl lg:text-8xl font-semibold mt-2">
                                        {weatherDatabyName?.wind?.speed
                                            ? weatherDatabyName.wind.speed.toFixed(1)
                                            : "NaN"}

                                        <span className="text-sm ml-2 text-[#d6c8b2]">
                                            m/s
                                        </span>
                                    </p>

                                </div>


                                {/* Visibility */}
                                <div className="flex items-center justify-center gap-4 pt-8 sm:pt-0">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="38"
                                        height="38"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#d6c8b2"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="shrink-0"
                                    >
                                        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>

                                    <div>
                                        <p className="text-xs sm:text-sm uppercase tracking-widest text-[#d6c8b2]/60">
                                            Visibility
                                        </p>

                                        <p className="text-xl sm:text-2xl font-semibold">
                                            {weatherDatabyName?.visibility
                                                ? (weatherDatabyName.visibility / 1000).toFixed(1)
                                                : "NaN"}

                                            <span className="text-sm ml-2 text-[#d6c8b2]">
                                                km
                                            </span>
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="h-[1px] w-full bg-[#8b8273] mb-24 md:mb-24"></div>



                </div>
            }
        </main>

    )
}
export default WeatherPage;


//  <p className="mt-1 text-sm text-[#d6c8b2]/70 tracking-wider">
//           Atmospheric conditions are stable
//         </p>