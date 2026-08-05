import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  // Function to handle active link styling using the #D8D3C8 color
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-[#7E6A52] font-bold"
      : "text-[#2B2B2B] hover:text-[#D8D3C8] transition-colors duration-300";

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5F1E8]/80 backdrop-blur-lg border-b border-gray-700/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Title / Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold text-xl  tracking-wide text-[#3A2B20]">
              SAFAR.
            </Link>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={navLinkStyles}>Home</NavLink>
            <NavLink to="/destinations" className={navLinkStyles}>Destinations</NavLink>
            <NavLink to="/flights-tracker" className={navLinkStyles}>Flights Tracker</NavLink>
            <NavLink to="/wishlist" className={navLinkStyles}>Wishlist</NavLink>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-6">
            
            {/* Dark Mode Toggle Button */}
            <button 
              className="text-gray-400 hover:text-[#D8D3C8] transition-colors duration-300"
              aria-label="Toggle Dark Mode"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            {/* Login Button */}
            <Link
              to="/login"
              className="px-5 py-2 rounded-md bg-[#D8D3C8] text-[#2B2B2E] font-medium hover:bg-[#F5F1E8] transition-colors duration-300"
            >
              Login
            </Link>
            
          </div>
        </div>
      </div>
    </header>
  );
}