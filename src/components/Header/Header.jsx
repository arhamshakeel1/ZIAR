import { Link, NavLink } from 'react-router-dom';
import useTheme from '../../Contexts/ThemeContext';
import ThemeBtn from './components/ThemeBtn.jsx';

export default function Header() {
  const { themeState } = useTheme();
  
  const navLinkStyles = ({ isActive }) => 
    isActive
      ? "font-extrabold text-amber-700 dark:text-[#FBE9D0] "
      : "transition-colors duration-100 hover:text-[gray-400] dark:hover:text-[gray-300]";

  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur-lg border-b shadow-sm transition-colors duration-500 ${themeState === "dark" ? "bg-[#29201e]/97 border-gray-800 text-gray-200" : "bg-[#968b81] border-gray-300 text-[#544037]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Title / Logo */}
          <div className={`flex-shrink-0 font-extrabold text-2xl tracking-[0.08em]  ${themeState === "dark" ? "text-[#FBE9D0]" : "text-[#503d38]"}`}>
            <Link to="/">ZIAR.</Link>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={navLinkStyles}>Home</NavLink>
            <NavLink to="/about" className={navLinkStyles}>About ZIAR</NavLink>
            <NavLink to="/destinations" className={navLinkStyles}>Destinations</NavLink>
            <NavLink to="/flights-tracker" className={navLinkStyles}>Flights Tracker</NavLink>
            <NavLink to="/wishlist" className={navLinkStyles}>Wishlist</NavLink>
            
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-6">
            <ThemeBtn/>
          </div>
        </div>
      </div>
    </header>
  );
}