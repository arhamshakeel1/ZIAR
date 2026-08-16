import React from "react";
import useTheme from "../../Contexts/ThemeContext";

export default function AboutPage() {
  const { themeState } = useTheme();
  const isDark = themeState === "dark";

  return (
    <main 
      className={`min-h-screen transition-colors duration-700 font-sans px-4 py-16 sm:px-6 lg:px-12 ${
        isDark ? "bg-[#191c1f] text-gray-100" : "bg-[#E8E4D9] text-gray-900"
      }`}
    >
      <div className="mx-auto max-w-5xl">
        
        {/* Your Custom Heading Structure */}
        <div className="mb-10 mt-8">
          <p className="mb-3 text-lg font-medium text-[#c7af8f]">
            -Our Story
          </p>
          <h1 className={`text-4xl font-medium ${isDark ? "text-[#dfd9d1]" : "text-[#0c0c0b]"} md:text-5xl lg:text-6xl`}>
            About <span className="font-serif font-medium italic text-gray-500">ZIAR</span>
          </h1>
        </div>
        
        {/* Divider */}
        
        <div className="h-[2px] w-full bg-[#8b8273]  mb-24"></div>

        {/* Main Content Layout */}
        <div className="max-w-3xl">
          
          <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed">
            <p>
              ZIAR comes from the Arabic word <span className="font-serif italic font-medium tracking-wide">“Ziyārah” (زيارة)</span> , a journey made to see a place, or something worth reaching.
            </p>
            
            <p>
             Because there is something different about a visit. You don't simply pass through a place. You give it your time. You notice its streets, its landscapes, the people you meet, and the small things that would be easy to miss from a distance.
            </p>
            
            <p>
              ZIAR takes that idea and gives it a shorter, modern form.
            </p>
            
            <p>
              From Ziyārah came ZIAR, a name shaped by the language of the region and by the simple thought behind every journey:
            </p>
          </div>

          {/* Featured Quote Section */}
          <div className="mt-20 border-l-[3px] border-[#8B8175] pl-6 md:pl-10 py-2">
            <p className={`text-2xl md:text-2xl italic font-medium   ${
              isDark ? "text-[#d6c8b2]" : "text-[#483226]"
            }`}>
              Welcome to ZIAR. Good Luck searching for a journey.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}