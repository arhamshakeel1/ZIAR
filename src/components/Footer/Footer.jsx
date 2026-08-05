import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#F5F1E8] text-gray-400 border-t border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Info */}
          <div>
            <span className="text-lg text-xl font-bold text-[#3A2B20] tracking-wide ">SAFAR.</span>
            <p className="text-[#2B2B2B] mt-3 text-sm leading-relaxed">
              Plan your journeys, track flights, and manage your wishlist with a sleek and modern experience.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-[#2B2B2B] uppercase tracking-wider">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/destinations" className="text-[#2B2B2B] hover:text-[#D8D3C8] transition-colors">Destinations</Link></li>
              <li><Link to="/flights-tracker" className="text-[#2B2B2B] hover:text-[#D8D3C8] transition-colors">Flights Tracker</Link></li>
              <li><Link to="/wishlist" className="text-[#2B2B2B] hover:text-[#D8D3C8] transition-colors">Wishlist</Link></li>
            </ul>
          </div>

          {/* Legal / Account */}
          <div>
            <h3 className="text-sm font-semibold text-[#2B2B2B] uppercase tracking-wider">Account</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/login" className="text-[#2B2B2B] hover:text-[#D8D3C8] transition-colors">Login</Link></li>
              <li><Link to="/privacy" className="text-[#2B2B2B] hover:text-[#D8D3C8] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
        </div>
        
        {/* Bottom Copyright */}
        <div className="mt-10 pt-6 border-t text-[#2B2B2B]  border-gray-800/60 text-sm text-center">
          &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}