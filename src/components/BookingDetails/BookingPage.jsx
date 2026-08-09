import React from "react";
import { useParams } from "react-router-dom";
import BookingCard from "./components/BookingCard";
import Destinations from "../../Data/Destinations";
import useTheme from "../../Contexts/ThemeContext";

function BookingPage() {
  const { themeState } = useTheme();
  const { userId } = useParams();

  const bookedCard = Destinations.find( //returns the first element matched
    (des) => des.id === Number(userId)
  );

  const isDark = themeState === "dark";

  // Prevent errors if the destination doesn't exist
  if (!bookedCard) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? "bg-[#191c1f] text-white" : "bg-[#E8E4D9] text-black"}`}>
        <h1 className="text-2xl font-bold">
          Destination not found
        </h1>
      </div>
    );
  }

  return (
    <main 
      className={`min-h-screen transition-colors duration-500 font-sans px-4 py-12 sm:px-6 lg:px-10 ${
        isDark ? "bg-[#191c1f] text-gray-100" : "bg-[#E8E4D9] text-gray-900"
      }`}
    >
      {/* Page Container */}
      <div className="mx-auto max-w-7xl">

        {/* Destination Header */}
        <header className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className={`mb-2 text-sm uppercase tracking-wider font-bold ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              {bookedCard.location}
            </p>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              {bookedCard.title}
            </h1>

            <div className={`mt-3 flex items-center gap-2 text-sm sm:text-base ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              <span className="text-yellow-400 text-lg">★</span>
              <span className="font-bold">{bookedCard.rating}</span>
              <span className="opacity-50">•</span>
              <span>Highly rated destination</span>
            </div>
          </div>
        </header>

        {/* Main Image */}
        <div className="mb-12 overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/5">
          <img
            src={bookedCard.image}
            alt={bookedCard.title}
            className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[550px]"
          />
        </div>

        {/* Main Content */}
        {/* Changed this line to start showing on the right side on medium screens too */}
        <div className="grid gap-12 md:grid-cols-[1fr_350px] lg:grid-cols-[1fr_400px]">

          {/* Left Side Details */}
          <section className="flex flex-col gap-10">

            {/* About */}
            <div>
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold">
                About this place
              </h2>

              <p className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Discover the beauty of <strong>{bookedCard.title}</strong>, a destination
                surrounded by breathtaking landscapes and peaceful scenery. 
                Whether you want adventure, relaxation, or beautiful places to explore,
                this spot has something for everyone.
              </p>
            </div>

          </section>

          {/* Right Side Booking Card */}
          <aside>
            <div className="sticky top-8">
              <BookingCard
                title={bookedCard.title}
                image={bookedCard.image}
                rating={bookedCard.rating}
                price={bookedCard.price}
                isDark={isDark} 
              />
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}

export default BookingPage;