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

            {false ?

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

                : <div className="max-w-[1650px] mx-auto">



                    {/* city name and country */}
                    <div className="flex text-[#ffffff] items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-11">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#bfae93"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mt-1"
                        >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>

                        <h1 className="text-2xl sm:text-3xl font-semibold">
                            {weatherDatabyName?.name || "Null"},
                        </h1>

                        <span className="text-2xl sm:text-3xl font-semibold text-[#f3efea]">
                            {weatherDatabyName?.sys?.country || "Null"}
                        </span>
                    </div>


                    {/* temp, svg */}
                    <div className="
    border-2 border-[#9a8a6f] rounded-xl
    py-10 sm:py-14 md:py-17
    mt-5
    mx-4 sm:mx-8 md:mx-20 lg:mx-36
    bg-[#1e1a1a]
    flex flex-col md:flex-row
    items-center justify-center
    gap-12 md:gap-32 lg:gap-45
    shadow-lg
    transition-all duration-300
    hover:shadow-xl hover:shadow-white/5
">

                        {/* Temperature */}
                        <div className="flex flex-col items-center md:items-start">

                            <p className="text-lg sm:text-xl ml-0 md:ml-11 tracking-[0.3em] text-[#fffcf7] mb-3">
                                TODAY
                            </p>

                            <div className="flex items-start mb-5 mt-2 sm:mt-4">

                                <span className="text-7xl sm:text-8xl md:text-[138px] text-[#bfae93] font-bold leading-none">
                                    {weatherDatabyName?.main?.temp
                                        ? Math.round(weatherDatabyName.main.temp)
                                        : "NaN"}
                                </span>

                                <span className="text-3xl sm:text-4xl font-medium text-[#d6c8b2] ml-1 mr-2 mt-2">
                                    °C
                                </span>

                            </div>

                            {/* High / Low */}
                            <div className="flex gap-8 sm:gap-11 mt-6 sm:mt-11 text-lg sm:text-xl">

                                <span>
                                    <strong className="text-[#fffcf7]">
                                        ↑ {weatherDatabyName?.main?.temp
                                            ? weatherDatabyName.main.temp_max.toFixed(1)
                                            : "NaN"}°
                                    </strong>
                                </span>

                                <span className="text-[#d6c8b2]/60">
                                    ↓ <strong>
                                        {weatherDatabyName?.main?.temp_min
                                            ? Math.floor(weatherDatabyName.main.temp_min)
                                            : "NaN"}°
                                    </strong>
                                </span>

                            </div>

                        </div>


                        {/* Weather */}
                        <div className="flex flex-col items-center">

                            <svg
                                viewBox="0 0 200 200"
                                className="w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64"
                            >

                                <defs>

                                    <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                                        <stop offset="40%" stopColor="#FFA033" stopOpacity="0.8" />
                                        <stop offset="100%" stopColor="#FFA033" stopOpacity="0" />
                                    </radialGradient>

                                    <linearGradient
                                        id="sunBody"
                                        x1="20%"
                                        y1="0%"
                                        x2="80%"
                                        y2="100%"
                                    >
                                        <stop offset="0%" stopColor="#FFD05B" />
                                        <stop offset="60%" stopColor="#FF8B15" />
                                        <stop offset="100%" stopColor="#E35500" />
                                    </linearGradient>

                                    <linearGradient
                                        id="cloudBody"
                                        x1="0%"
                                        y1="0%"
                                        x2="0%"
                                        y2="100%"
                                    >
                                        <stop offset="0%" stopColor="#8A95A5" />
                                        <stop offset="50%" stopColor="#5E6879" />
                                        <stop offset="100%" stopColor="#3C4453" />
                                    </linearGradient>

                                </defs>

                                <circle
                                    cx="130"
                                    cy="70"
                                    r="65"
                                    fill="url(#sunGlow)"
                                />

                                <circle
                                    cx="130"
                                    cy="70"
                                    r="42"
                                    fill="url(#sunBody)"
                                />

                                <path
                                    d="M60 145C40 145 25 130 25 110C25 90 40 78 55 78C65 55 95 45 115 65C135 55 165 65 165 90C185 90 195 105 195 120C195 140 175 145 160 145Z"
                                    fill="url(#cloudBody)"
                                />

                            </svg>


                            <div className="flex flex-col justify-center items-center text-center">

                                <h2 className="text-base sm:text-lg text-[#fffcf7] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                                    {weatherDatabyName?.weather?.[0]?.description || "Clear Sky"}
                                </h2>

                                <p className="text-base sm:text-lg text-[#d6c8b2]/60 font-semibold mt-2">
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
    max-w-[1355px]
    mx-4 sm:mx-8 md:mx-20 lg:mx-auto
    mt-12 sm:mt-20
    mb-40 sm:mb-60
    text-[#dcd7cf]
    shadow-lg
    transition-all duration-300
    hover:shadow-xl hover:shadow-white/5
">

                        <div className="
        border-2 border-[#9a8a6f]
        rounded-xl
        bg-[#1e1a1a]
        p-8 sm:p-10 lg:p-16
    ">

                            <div className="
            grid
            grid-cols-1 sm:grid-cols-3
            items-center
            gap-10 sm:gap-4
        ">

                                {/* Direction */}
                                <div className="flex items-center justify-center gap-4">

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
                sm:border-x sm:border-[#9a8a6f]/40
                px-4
            ">

                                    <p className="text-xs sm:text-sm uppercase tracking-widest text-[#d6c8b2]/60">
                                        Wind Speed
                                    </p>

                                    <p className="text-6xl sm:text-7xl lg:text-8xl font-semibold mt-2">
                                        {weatherDatabyName?.wind?.speed
                                            ? weatherDatabyName.wind.speed.toFixed(1)
                                            : "NaN"}

                                        <span className="text-sm ml-2 text-[#d6c8b2]">
                                            m/s
                                        </span>
                                    </p>

                                </div>


                                {/* Visibility */}
                                <div className="flex items-center justify-center gap-4">

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