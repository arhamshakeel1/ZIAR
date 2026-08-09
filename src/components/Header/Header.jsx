import { useState } from 'react'; // Add useState
import { Link, NavLink } from 'react-router-dom';
import useTheme from '../../Contexts/ThemeContext';
import ThemeBtn from './components/ThemeBtn.jsx';

export default function Header() {
  const { themeState } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const navLinkStyles = ({ isActive }) => 
    isActive
      ? "font-extrabold text-amber-700 dark:text-[#FBE9D0] block px-3 py-2 rounded-md text-base" // Added block layout for mobile
      : "transition-colors duration-100 hover:text-gray-400 dark:hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"; 

  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur-lg border-b shadow-sm transition-colors duration-500 ${themeState === "dark" ? "bg-[#29201e]/95 border-gray-800 text-gray-200" : "bg-[#968b81]/95 border-gray-300 text-[#544037]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className={`flex-shrink-0 font-extrabold text-2xl tracking-[0.08em] ${themeState === "dark" ? "text-[#FBE9D0]" : "text-[#503d38]"}`}>
            <Link to="/">ZIAR.</Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={navLinkStyles}>Home</NavLink>
            <NavLink to="/about" className={navLinkStyles}>About ZIAR</NavLink>
            <NavLink to="/destinations" className={navLinkStyles}>Destinations</NavLink>
            <NavLink to="/flights-tracker" className={navLinkStyles}>Flights Tracker</NavLink>
            <NavLink to="/wishlist" className={navLinkStyles}>Wishlist</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeBtn/>
            {/* Hamburger Button for Mobile */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-full left-0 top-16 shadow-lg bg-inherit">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-inner">
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyles}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyles}>About ZIAR</NavLink>
            <NavLink to="/destinations" onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyles}>Destinations</NavLink>
            <NavLink to="/flights-tracker" onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyles}>Flights Tracker</NavLink>
            <NavLink to="/wishlist" onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyles}>Wishlist</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}