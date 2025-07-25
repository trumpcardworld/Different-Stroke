"use client"

import React, { useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "It was great to have Different Strokes on board for our stall designing. They did a fantastic job despite of many complications that emerged during the process. Appreciate their professionalism.",
    author: "Suhas Baradi",
    title: "Executive Director, Chemexcil"
  },
  {
    quote: "We are an Export House interacting with extremely quality conscious Associates in over 30 countries globally. Our image is very important for us. This is where Different Strokes adds value to us Venkat and his team are simply Brilliant. Besides being highly creative, Different Strokes understands the naunces of International markets and trade shows very well which is a great requisite for a world-class exhibition solutions provider. We wish them all Success.",
    author: "V V Iyer",
    title: "Director, Apan Imex Private Limited"
  },
  {
    quote: "Stall Design and Execution is a tricky job. Glad that we tied up with the one who knows it really good. Different Strokes helped us put up a great show with their end-to-end support.",
    author: "Neeraj Sharma",
    title: "Manager, Ferromatic Milacron (India) Pvt. Ltd."
  },
  {
    quote: "Great team, impeccable results. Different Strokes has been handling all our exhibition stall design and execution needs since last few years and it has never delivered anything less than top notch.",
    author: "Sunil Dsilva",
    title: "General Manager, Meghmani Organics Ltd"
  },
  {
    quote: "Venkat and his team is simply brilliant. Besides being highly creative, they understand the nuances of international markets and trade shows very well which is a great requisite for a world-class stall-solutions provider.",
    author: "Name",
    title: "Vice President, Ratnamnai Metals & Tubes Ltd"
  }
];

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-gradient-to-b from-white-50 to-amber-50 pt-20 mt-20 perspective-1000">
      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-orange-500 inline-block relative pb-4">
            Voices of Success
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-300"></span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`flex ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                <div 
                  className={`
                    relative
                    bg-white rounded-xl p-8 w-full lg:w-[60%] 
                    border border-amber-100/20
                    transition-all duration-700 ease-out
                    transform-gpu
                    origin-bottom
                    hover:z-10
                  `}
                  style={{
                    transform: hoveredIndex === index 
                      ? `
                          translateY(-30px) 
                          translateZ(60px) 
                          rotateX(8deg)
                          ${index % 2 === 0 ? 'rotateY(-4deg)' : 'rotateY(4deg)'}
                        `
                      : 'translateY(0) translateZ(0) rotateX(0) rotateY(0)',
                    boxShadow: hoveredIndex === index 
                      ? `
                          0 40px 60px -20px rgba(251, 191, 36, 0.4),
                          0 25px 40px -15px rgba(0, 0, 0, 0.2),
                          0 0 20px rgba(251, 191, 36, 0.1)
                        `
                      : '0 10px 30px -10px rgba(251, 191, 36, 0.2)'
                  }}
                >
                  {/* 3D lighting effect overlay */}
                  <div 
                    className={`
                      absolute inset-0 rounded-xl transition-opacity duration-700
                      bg-gradient-to-br from-white/80 via-transparent to-amber-500/10
                      opacity-0 group-hover:opacity-100
                      pointer-events-none
                      ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                    `}
                  />

                  <div className="relative">
                    <Quote 
                      className={`
                        absolute -left-2 -top-2 w-8 h-8 text-amber-500
                        transition-all duration-700
                        ${hoveredIndex === index ? 'opacity-60 scale-125 rotate-12' : 'opacity-20'}
                      `}
                    />
                    <p className={`
                      text-gray-700 italic text-lg pl-8 mb-6 relative
                      transition-transform duration-700
                      ${hoveredIndex === index ? 'transform translate-y-1' : ''}
                    `}>
                      {testimonial.quote}
                    </p>  
                  </div>
                  <div className={`
                    flex items-center 
                    ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'} 
                    justify-center
                    relative
                    transition-all duration-700
                    ${hoveredIndex === index ? 'transform translate-y-1' : ''}
                  `}>
                    <div className="text-center lg:text-left">
                      <div className={`
                        font-semibold text-orange-500 mb-1
                        transition-all duration-700
                        ${hoveredIndex === index ? 'transform translate-x-2 translate-y-1' : ''}
                      `}>
                        {testimonial.author}
                      </div>
                      <div className={`
                        text-sm text-gray-600
                        transition-all duration-700 delay-100
                        ${hoveredIndex === index ? 'transform translate-x-2 translate-y-1' : ''}
                      `}>
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;