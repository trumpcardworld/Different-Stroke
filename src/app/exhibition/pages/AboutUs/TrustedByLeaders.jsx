
"use client"

import React, { useState, useEffect } from 'react';

const TrustedByLeaders = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      image: "/images/client-logo/1_ClientLogo.png" 
    },
    {
      image: "/images/client-logo/2_ClientLogo.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 ">
      <div className="max-w-[90%] sm:max-w-[85%] md:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto px-2 sm:px-4">
            Join the ranks of industry leaders who have transformed their businesses through our innovative solutions.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Main Carousel Container */}
          <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`
                  absolute inset-0 w-full h-full transition-all duration-700 ease-in-out
                  ${index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
                `}
              >
                <div className="h-full w-full">
                  {/* Content Grid */}
                  <div className="relative h-full w-full flex items-center justify-center p-4 sm:p-6 md:p-8">
                    {/* Image Container */}
                    <div className="relative w-full max-w-[85%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[70%] flex items-center justify-center">
                      <img
                        src={testimonial.image}
                        alt={`Client logo ${index + 1}`}
                        className="w-full h-auto object-contain max-h-[150px] sm:max-h-[250px] md:max-h-[350px] lg:max-h-[450px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons - Hidden on mobile, visible on tablet and up */}
          <div className="hidden sm:block">
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Previous slide"
            >
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" 
                fill="none" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Next slide"
            >
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" 
                fill="none" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  index === currentIndex 
                    ? 'bg-amber-500 w-4 sm:w-5 md:w-6 h-2 sm:h-2 md:h-2' 
                    : 'bg-gray-300 hover:bg-gray-400 w-2 sm:w-2 md:w-2 h-2 sm:h-2 md:h-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByLeaders;