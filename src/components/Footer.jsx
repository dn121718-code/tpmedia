import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, MessageCircle, Truck, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-white/5 py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img src="/src/assests/logo.png" alt="Tamil Pasanga Media" className="h-10 w-10 object-contain group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-2xl font-outfit font-extrabold tracking-tighter text-white uppercase italic">
                Tamil <span className="text-racing-red">Pasanga</span> Media
              </span>
            </Link>
            <p className="text-brand-gray-600 max-w-sm leading-relaxed mb-6">
              A premium creative agency specializing in cinematic video production, 
              TruckersMP community coverage, and brand storytelling. Proud team of Tamil Pasanga VTC.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://discord.com/invite/FtYBxZxTBF" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-gray-900 rounded-sm hover:bg-racing-red hover:text-white transition-all duration-300 text-brand-gray-600">
                <MessageCircle size={20} />
              </a>
              <a href="https://truckersmp.com/vtc/73933-tamil_pasanga" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-gray-900 rounded-sm hover:bg-racing-red hover:text-white transition-all duration-300 text-brand-gray-600">
                <Truck size={20} />
              </a>
              <a href="https://www.youtube.com/@TamilPasangaVTC" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-gray-900 rounded-sm hover:bg-racing-red hover:text-white transition-all duration-300 text-brand-gray-600">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Gallery', 'Contact', 'Recruitment'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-brand-gray-600 hover:text-racing-red transition-colors duration-300 uppercase text-sm font-bold tracking-wider"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/privacy" className="text-brand-gray-600 hover:text-racing-red transition-colors duration-300 uppercase text-sm font-bold tracking-wider">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-brand-gray-600 hover:text-racing-red transition-colors duration-300 uppercase text-sm font-bold tracking-wider">Terms & Conditions</Link>
              </li>
              <li>
                <a href="https://truckersmp.com/rules" target="_blank" rel="noopener noreferrer" className="text-brand-gray-600 hover:text-racing-red transition-colors duration-300 uppercase text-sm font-bold tracking-wider flex items-center gap-2 group/link">
                  TruckersMP Rules <ExternalLink size={12} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-bold text-brand-gray-600 uppercase tracking-widest">
            © {currentYear} TAMIL PASANGA MEDIA. ALL RIGHTS RESERVED.
          </p>
          <p className="text-sm font-bold text-brand-gray-600 uppercase tracking-widest">
            MADE WITH <span className="text-racing-red">❤</span> FOR THE COMMUNITY
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
