import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-12">
      <div className="w-full md:w-1/2 flex flex-col items-start space-y-8 pr-0 md:pr-8 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          <span className="text-blue-400">For Class 10th</span> Students
        </h1>
        <p className="text-gray-300 text-lg">
          Developed by <span className="text-yellow-400 font-semibold">Arpit Agarwal</span>
        </p>
        <Link 
          to="/udaan"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50 transform hover:-translate-y-1"
        >
          Visit Udaan
        </Link>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src="https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/50118566-00d9-4507-b514-7b86a226caf8.png"
          alt="Class 10th Education" 
          className="w-full max-w-md rounded-xl shadow-2xl transform hover:rotate-2 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default HeroSection;