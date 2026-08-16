import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useWeatherData from '../../Contexts/WeatherAPIContext';
import { Loader2,MapPin,CloudSun,Droplet,Gauge,  Waves,
    Mountain,
    Globe,
    ArrowUp,
    Eye,
} from 'lucide-react';

function WeatherPage() {
  
  const { weatherDatabyName, search, setSearch, loading } = useWeatherData();
  
  
  const { city } = useParams();

  
 
  useEffect(() => {
    if (city && city !== search) {
      setSearch(city);
    }
  }, [city, search]);

  return (
    <main className="min-h-screen bg-[#191c1f] p-0.5">
      {/* Conditionally renders a loading spinner while data is being fetched */}
      {loading ? (
        <div className="flex min-h-screen flex-col items-center justify-center text-[#d6c8b2]">
          <Loader2 size={50} strokeWidth={1.5} className="animate-spin" />
          <p className="mt-5 text-sm uppercase tracking-[0.3em] text-[#d6c8b2]/60">
            Loading Weather
          </p>
        </div>
      ) : (
        <div className="mx-auto max-w-[1500px]">
          {/* Header Section: Displays City and Country */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:mt-11">
            <MapPin size={22} color="#bfae93" strokeWidth={1.5} />

            <h1 className="text-center text-2xl font-semibold text-[#fffcf7] sm:text-3xl">
              {weatherDatabyName?.name || 'Null'},
            </h1>

            <span className="text-2xl font-semibold text-[#f3efea] sm:text-3xl">
              {weatherDatabyName?.sys?.country || 'Null'}
            </span>
          </div>

          {/* Main Weather Card: Shows current temperature, highs/lows, and general condition */}
          <div className="mx-2 mt-5 flex flex-row items-center justify-center gap-4 rounded-2xl border-2 border-[#9a8a6f] bg-[#1e1a1a] px-6 py-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-white/5 sm:mx-8 sm:gap-16 sm:p-10 md:mx-20 md:gap-24 md:px-16 md:py-14 lg:mx-36 lg:gap-40 lg:px-24">
            {/* Left Column: Temperature Details */}
            <div className="flex w-1/2 flex-col items-start text-left md:w-auto">
              <p className="mb-1 text-lg text-[#fffcf7] sm:mb-3 sm:text-sm md:ml-8 md:text-2xl">
                Today
              </p>

              <div className="mb-2 mt-1 flex items-start sm:mb-5 sm:mt-2">
                <span className="text-6xl font-bold leading-none tracking-tighter text-[#e3dfd9] sm:text-7xl md:text-[138px]">
                  {/* Round the current temperature to the nearest whole number */}
                  {weatherDatabyName?.main?.temp
                    ? Math.round(weatherDatabyName.main.temp)
                    : 'NaN'}
                </span>

                <span className="ml-1 mt-1 text-xl font-medium text-[#e7e2d9] sm:ml-2 sm:text-4xl">
                  °F
                </span>
              </div>

              {/* High / Low Temperatures */}
              <div className="mt-2 flex items-center justify-start gap-3 text-sm sm:mt-6 sm:gap-5 sm:text-lg md:gap-8 md:text-xl">
                <span className="whitespace-nowrap font-medium text-[#fffcf7]">
                  ↑{' '}
                  {weatherDatabyName?.main?.temp
                    ? weatherDatabyName.main.temp_max.toFixed(1)
                    : 'NaN'}
                  °
                </span>

                <span className="whitespace-nowrap font-medium text-[#d6c8b2]/60">
                  ↓{' '}
                  {weatherDatabyName?.main?.temp_min
                    ? weatherDatabyName.main.temp_min.toFixed(1)
                    : 'NaN'}
                  °
                </span>
              </div>
            </div>

            {/* Right Column: Weather Icon & Text Condition */}
            <div className="flex w-1/2 flex-col items-center text-right md:w-auto">
              <CloudSun
                className="h-28 w-28 drop-shadow-xl sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64"
                color="#FFD05B"
                strokeWidth={1}
              />

              <div className="mt-1 flex flex-col items-center justify-center sm:mt-2">
                <h2 className="text-lg font-bold text-[#fffcf7] sm:text-lg md:text-xl capitalize">
                  {weatherDatabyName?.weather?.[0]?.description || 'Clear Sky'}
                </h2>

                <p className="mt-0.5 text-xs font-semibold text-[#fffcf7] sm:mt-2 sm:text-sm md:text-base">
                  Feels Like{' '}
                  {weatherDatabyName?.main?.feels_like
                    ? Math.round(weatherDatabyName.main.feels_like)
                    : 'NaN'}
                  °
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Stats Grid: Humidity, Pressure, Sea Level, Ground Level */}
          <div className="mx-4 mt-8 rounded-xl border-2 border-[#9a8a6f] bg-[#1e1a1a] px-4 py-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-white/5 sm:mx-8 sm:mt-12 sm:px-6 sm:py-8 md:mx-20 lg:mx-36 lg:px-10">
            <div className="grid grid-cols-2 divide-x divide-[#9a8a6f]/40 md:grid-cols-4">
              {/* Humidity */}
              <div className="flex items-center justify-center gap-2 px-2 py-4 sm:gap-4 sm:px-6 md:py-0">
                <Droplet size={32} color="#d6c8b2" strokeWidth={1.5} className="shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase text-[#d6c8b2] sm:text-sm">
                    Humidity
                  </p>
                  <p className="text-xl font-semibold text-[#fffcf7] sm:text-2xl">
                    {weatherDatabyName?.main?.humidity || 'NaN'}%
                  </p>
                </div>
              </div>

              {/* Pressure */}
              <div className="flex items-center justify-center gap-2 px-2 py-4 sm:gap-4 sm:px-6 md:py-0">
                <Gauge size={32} color="#d6c8b2" strokeWidth={1.5} className="shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase text-[#d6c8b2] sm:text-sm">
                    Pressure
                  </p>
                  <p className="text-xl font-semibold text-[#fffcf7] sm:text-2xl">
                    {weatherDatabyName?.main?.pressure || 'NaN'}
                    <span className="ml-1 text-xs sm:text-sm">hPa</span>
                  </p>
                </div>
              </div>

              {/* Sea Level */}
              <div className="flex items-center justify-center gap-2 px-2 py-4 sm:gap-4 sm:px-6 md:py-0">
                <Waves size={32} color="#d6c8b2" strokeWidth={1.5} className="shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase text-[#d6c8b2] sm:text-sm">
                    Sea Level
                  </p>
                  <p className="text-xl font-semibold text-[#fffcf7] sm:text-2xl">
                    {weatherDatabyName?.main?.sea_level || 'NaN'}
                    <span className="ml-1 text-xs sm:text-sm">ft</span>
                  </p>
                </div>
              </div>

              {/* Ground Level */}
              <div className="flex items-center justify-center gap-2 px-2 py-4 sm:gap-4 sm:px-6 md:py-0">
                <Mountain size={32} color="#d6c8b2" strokeWidth={1.5} className="shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase text-[#d6c8b2] sm:text-sm">
                    Ground Level
                  </p>
                  <p className="text-xl font-semibold text-[#fffcf7] sm:text-2xl">
                    {weatherDatabyName?.main?.grnd_level || 'NaN'}
                    <span className="ml-1 text-xs sm:text-sm">ft</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coordinates Grid: Longitude & Latitude */}
          <div className="mx-4 mt-8 grid grid-cols-1 gap-4 sm:mx-8 sm:gap-6 md:mx-20 md:grid-cols-2 lg:mx-36">
            {/* Longitude */}
            <div className="flex items-center justify-center gap-4 rounded-xl border-2 border-[#9a8a6f] bg-[#1e1a1a] p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-white/5 sm:gap-5 sm:p-8">
              <Globe size={38} color="#d6c8b2" strokeWidth={1.5} className="shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase text-[#d6c8b2] sm:text-sm">
                  Longitude
                </p>
                <p className="text-xl font-semibold text-[#fffcf7] sm:text-2xl">
                  {weatherDatabyName?.coord?.lon || 'NaN'}°
                </p>
              </div>
            </div>

            {/* Latitude */}
            <div className="flex items-center justify-center gap-4 rounded-xl border-2 border-[#9a8a6f] bg-[#1e1a1a] p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-white/5 sm:gap-5 sm:p-8">
              <Globe size={38} color="#d6c8b2" strokeWidth={1.5} className="shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase text-[#d6c8b2] sm:text-sm">
                  Latitude
                </p>
                <p className="text-xl font-semibold text-[#fffcf7] sm:text-2xl">
                  {weatherDatabyName?.coord?.lat || 'NaN'}°
                </p>
              </div>
            </div>
          </div>

          {/* Wind & Visibility Card */}
          <div className="mx-4 mb-24 mt-12 max-w-[1220px] text-[#dcd7cf] shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-white/5 sm:mx-8 sm:mb-60 sm:mt-20 md:mx-20 lg:mx-auto">
            <div className="rounded-xl border-2 border-[#9a8a6f] bg-[#1e1a1a] p-6 sm:p-10 lg:p-16">
              <div className="grid grid-cols-1 items-center gap-0 sm:grid-cols-3 sm:gap-4">
                {/* Wind Direction */}
                <div className="flex items-center justify-center gap-4 pb-8 sm:pb-0">
                  <ArrowUp size={38} color="#d6c8b2" strokeWidth={1.5} className="shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase text-[#d6c8b2] sm:text-sm">
                      Direction
                    </p>
                    <p className="text-xl font-semibold sm:text-2xl">
                      {weatherDatabyName?.wind?.deg || 'NaN'}°
                    </p>
                  </div>
                </div>

                {/* Wind Speed */}
                <div className="flex flex-col items-center border-y border-[#9a8a6f]/40 px-4 py-8 sm:border-x sm:border-y-0 sm:py-0">
                  <p className="text-xs font-bold uppercase text-[#d6c8b2] sm:text-sm">
                    Wind Speed
                  </p>
                  <p className="mt-2 text-5xl font-semibold sm:text-7xl lg:text-8xl">
                    {weatherDatabyName?.wind?.speed
                      ? weatherDatabyName.wind.speed.toFixed(1)
                      : 'NaN'}
                    <span className="ml-2 text-sm text-[#d6c8b2]">m/s</span>
                  </p>
                </div>

                {/* Visibility */}
                <div className="flex items-center justify-center gap-4 pt-8 sm:pt-0">
                  <Eye size={38} color="#d6c8b2" strokeWidth={1.5} className="shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase text-[#d6c8b2] sm:text-sm">
                      Visibility
                    </p>
                    <p className="text-xl font-semibold sm:text-2xl">
                      {/* Convert raw visibility from meters to kilometers */}
                      {weatherDatabyName?.visibility
                        ? (weatherDatabyName.visibility / 1000).toFixed(1)
                        : 'NaN'}
                      <span className="ml-2 text-sm text-[#d6c8b2]">km</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-24 h-[1px] w-full bg-[#8b8273] md:mb-24"></div>
        </div>
      )}
    </main>
  );
}

export default WeatherPage;