import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const images = [
  'slideimg1.jpg',
  'slideimg1.jpg',
  'slideimg3.jpg',
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    },
    onSwipedRight: () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    },
    trackMouse: true, // Allows mouse dragging as well
    delta: 10, // Minimum swipe distance
  });

  return (
    <div className="relative  w-full max-w-2xl md:max-w-3xl lg:max-w-3xl  mx-auto overflow-hidden  shadow-lg ">
      <div {...handlers} className="w-full h-full">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-300"
        />
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;