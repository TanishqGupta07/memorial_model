import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold tracking-widest">
          Memorial Model H.S. School
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="hover:text-yellow-200 transition-colors font-medium text-lg"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-yellow-200 transition-colors font-medium text-lg"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-yellow-200 transition-colors font-medium text-lg"
            >
              Contact
            </Link>
            <Link
              to="/gallery"
              className="hover:text-yellow-200 transition-colors font-medium text-lg"
            >
              Gallery
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white text-gray-800 rounded-lg shadow-lg mt-3`}
        >
          <div className="flex flex-col space-y-4 p-4">
            <Link
              to="/"
              className="hover:bg-blue-100 px-3 py-2 rounded font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:bg-blue-100 px-3 py-2 rounded font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:bg-blue-100 px-3 py-2 rounded font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/gallery"
              className="hover:bg-blue-100 px-3 py-2 rounded font-medium"
              onClick={toggleMenu}
            >
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
