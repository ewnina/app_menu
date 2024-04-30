"use client"
import React, { useState } from 'react';

type MenuItem = {
  id: number;
  label: string;
};

type MenuCarouselProps = {
  items: MenuItem[]; // Array of menu items
};

const MenuCarousel: React.FC<MenuCarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="flex items-center space-x-2 overflow-hidden relative">
      <button onClick={scrollLeft} className="absolute left-0 z-10 bg-gray-800 text-white p-2">
        &#10094; {/* Left Arrow */}
      </button>
      <div className="flex transition-transform transform-gpu" style={{ transform: `translateX(-${currentIndex * 100}px)` }}>
        {items.map((item) => (
          <div key={item.id} className="min-w-max px-4 py-2 bg-gray-200 text-gray-800">
            {item.label}
          </div>
        ))}
      </div>
      <button onClick={scrollRight} className="absolute right-0 z-10 bg-gray-800 text-white p-2">
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default MenuCarousel;
