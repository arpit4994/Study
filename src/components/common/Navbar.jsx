import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <span className="mr-2">📚</span>
          <span className="text-blue-400">Class</span> 
          <span className="text-yellow-400">Xth</span>
        </Link>
        <div className="space-x-6 flex">
          <Link 
            to="/" 
            className={`hover:text-blue-400 transition-all duration-300 relative py-2 ${
              isActive('/') 
                ? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400' 
                : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/udaan" 
            className={`hover:text-blue-400 transition-all duration-300 relative py-2 ${
              isActive('/udaan') || location.pathname.includes('/udaan') 
                ? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400' 
                : ''
            }`}
          >
            Udaan
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;