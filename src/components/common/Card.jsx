import React from 'react';

const Card = ({ children, className, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-blue-500/30 hover:scale-105 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;