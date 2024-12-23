import React from 'react';

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 md:mb-8">Our Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {[...Array(6)].map((_, index) => (
          <div 
            key={index} 
            className="aspect-video bg-gray-200 rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src="/api/placeholder/400/300"
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;