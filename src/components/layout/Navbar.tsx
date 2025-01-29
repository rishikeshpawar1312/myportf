import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaGithub } from 'react-icons/fa'; // GitHub icon from react-icons
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'About' },
    { name: 'Projects', to: 'ProjectSection' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
    { name: 'GitHub', to: 'https://github.com/rishikeshpawar1312', isExternal: true } // GitHub link (external)
  ];

  return (
    <nav id="Nav" className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="YourLogo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-gray-700 hover:text-blue-600 flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <FaGithub className="text-lg" />
                  <span>GitHub</span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70} // Adjusts the position to account for fixed navbar
                  className="cursor-pointer text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? 'X' : '≡'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) =>
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium items-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaGithub className="text-lg" />
                  <span>GitHub</span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  className="cursor-pointer text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
