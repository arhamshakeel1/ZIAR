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
              <button  className="hover:text-gray-400 transition-colors">Privacy Policy</button><br></br>
              <li> <Link  to="/about" className="hover:text-gray-400 transition-colors">About ZIAR</Link></li>
            </ul>
            
          </div>
          
        </div>
         <div className="h-[1px] w-full bg-[#8b8273] mb-3"></div>
        {/* Developer Credit Added Here */}
        <div className="mt-1 pt-3 border-t border-current/10 flex justify-center items-center">
        
         <a href="https://www.linkedin.com/in/arham-shakeel/">
          <p className={`text-sm font-medium ${themeState ==="dark" ? "text-[#FBE9D0]": "text-[#12110f]"} `} >
            Developed by Arham Shakeel
          </p>
           </a>
        </div>
        
      </div>
    </footer>
  );
}