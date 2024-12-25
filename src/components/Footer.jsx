import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-12">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
            <p className="mb-2">53, Shikshak Nagar, Airport Road, Indore</p>
            <p className="mb-2">
              Phone: <a href="tel:9644019898" className="text-blue-400 hover:text-blue-500">0731-2414171</a>
            </p>
            <p>
              Email: <a href="mailto:info@gsvnschool.com" className="text-blue-400 hover:text-blue-500">memorialmodelhss@gmail.com</a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Admission Process</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">School Timings</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Facilities</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Academic Calendar</a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-400 transition-colors text-2xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Memorial Model H.S. School. All rights reserved. | Designed by <a href="#" className="text-blue-400 hover:text-blue-500">SGC</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
