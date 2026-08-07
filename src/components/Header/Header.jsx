import { Link, NavLink } from 'react-router-dom';
import useTheme from '../../Contexts/ThemeContext';
import ThemeBtn from './components/ThemeBtn.jsx';


export default function Header() {


  const {themeState} = useTheme();
  
  // Function to handle active link styling 
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-[#7E6A52] font-bold"
      : "text-[#2B2B2B] hover:text-[#909090] transition-colors duration-300";

  return (
    <header className= {themeState === "dark" ? "bg-[#ce966d] text-white" : " sticky top-0 z-50 w-full bg-[#F0ECE3]/80 backdrop-blur-lg border-b border-gray-700/50 shadow-sm" }>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Title / Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="font-extrabold text-2xl  tracking-tight text-[#3A2B20]">
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
            
            <ThemeBtn/>

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