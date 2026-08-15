import { Link } from 'react-router-dom';
import useTheme from '../../Contexts/ThemeContext'; // Make sure path is correct

export default function Footer() {
  const { themeState } = useTheme();

  return (
    <footer className={`border-t transition-colors duration-500 ${themeState === "dark" ? "bg-[#29201e] border-gray-800/60 text-gray-400" : "bg-[#b6af9d] border-gray-300 text-gray-600"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-17">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <span className={`text-xl font-bold tracking-wide ${themeState === "dark" ? "text-[#FBE9D0]" : "text-[#3A2B20]"}`}>ZIAR.</span>
            <p className="mt-3 text-sm leading-relaxed">
              Plan your journeys, track flights, and manage your wishlist with a sleek and modern experience.
            </p>
          </div>

          <div>
            <h3 className={`text-sm font-semibold uppercase tracking-wider ${themeState === "dark" ? "text-[#E8E4D9]" : "text-[#2B2B2B]"}`}>Explore</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/destinations" className="hover:text-gray-400 transition-colors">Destinations</Link></li>
              <li><Link to="/flights-tracker" className="hover:text-gray-400 transition-colors">Flights Tracker</Link></li>
              <li><Link to="/wishlist" className="hover:text-gray-400 transition-colors">Wishlist</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={`text-sm font-semibold uppercase tracking-wider ${themeState === "dark" ? "text-[#E8E4D9]" : "text-[#2B2B2B]"}`}>Account</h3>
            <ul className="mt-4 space-y-3 text-sm mb-9">
              <button className="hover:text-gray-400 transition-colors">Login</button> <br></br>
              <button className="hover:text-gray-400 transition-colors">Privacy Policy</button><br></br>
              <li> <Link to="/about" className="hover:text-gray-400 transition-colors">About ZIAR</Link></li>
            </ul>

          </div>

        </div>
        <div className="h-[1px] w-full bg-[#8b8273] mb-3"></div>


        {/* Developer Credit Added Here */}
<div className="relative mt-8 sm:mt-1 pt-6 sm:pt-3 pb-4 border-t border-current/10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-0">

  {/* Center (Stacks on mobile, truly centered on desktop) */}
  <a href="https://github.com/arhamshakeel1" className="z-10">
    <p
      className={`text-sm sm:text-[16px] font-medium text-center transition-opacity hover:opacity-80 ${
        themeState === "dark" ? "text-[#a7a7b3]" : "text-[#12110f]"
      }`}
    >
      Developed and designed by Arham Shakeel
    </p>
  </a>

  {/* Right (Bottom on mobile, absolute right on desktop) */}
  <a
    href="https://www.linkedin.com/in/arham-shakeel/"
    className="sm:absolute sm:right-0 flex gap-2 items-center text-sm sm:text-base font-medium transition-opacity hover:opacity-80"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="sm:w-5 sm:h-5"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.3ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V8.99H3.56v11.46Z" />
    </svg>
    Arham Shakeel
  </a>

</div>

      </div>
    </footer>
  );
}