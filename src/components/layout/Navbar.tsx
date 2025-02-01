import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'About' },
    { name: 'Projects', to: 'project'},
    { name: 'Skills', to: 'skills' },   
    { name: 'Contact', to: 'contact' },
    { name: 'GitHub', to: 'https://github.com/rishikeshpawar1312', isExternal: true }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans
      ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-white/60'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) =>
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative cursor-pointer px-4 py-2 rounded-lg font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <FaGithub className="text-xl" />
                    <span className="font-semibold tracking-wide">GitHub</span>
                  </div>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  className="group relative cursor-pointer px-4 py-2 rounded-lg font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <span className="font-semibold tracking-wide">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 py-3 space-y-2 bg-white/80 backdrop-blur-md">
          {navItems.map((item) =>
            item.isExternal ? (
              <a
                key={item.name}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-3 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaGithub className="text-xl" />
                <span className="font-semibold tracking-wide">GitHub</span>
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className="block px-4 py-3 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-semibold tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;