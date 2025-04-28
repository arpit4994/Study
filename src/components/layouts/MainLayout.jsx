import React from 'react';
import Navbar from '../common/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Class Xth Udaan. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Developed by Arpit Agarwal</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;