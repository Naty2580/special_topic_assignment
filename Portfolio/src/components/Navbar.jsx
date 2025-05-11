// --- FILENAME: src/components/Navbar.jsx ---
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaLaptopCode } from 'react-icons/fa';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects-skills', label: 'Projects & Skills' },
  { path: '/hobbies', label: 'Hobbies' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-secondary-dark/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-accent-cyan flex items-center gap-2" onClick={closeMenu}>
            <FaLaptopCode /> <span className="hover:text-text-primary transition-colors">Natnael</span>
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu" className="text-text-primary hover:text-accent-cyan focus:outline-none">
              {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary-dark/95 backdrop-blur-md absolute w-full left-0 top-20 flex flex-col items-center py-4 shadow-xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) => `block py-3 px-4 text-lg w-full text-center ${isActive ? 'text-accent-cyan font-semibold bg-primary-dark/50' : 'text-text-secondary hover:text-accent-cyan hover:bg-primary-dark/30'}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;