import React from 'react';
import Image from 'next/image';

const SetUp = () => {
  // Sample images array - replace with your actual images
  const images = [
    {
      src: "/images/setup/set-big-1.jpg",
      alt: "First image description",
    
    },
    {
      src: "/images/setup/set-big-2.jpg",
      alt: "Second image description",
   
    },
    {
      src: "/images/setup/set-big-3.jpg",
      alt: "Third image description",
    
    },
    {
      src: "/images/setup/set-big-4.jpg",
      alt: "Fourth image description",
  
    }
  ];

  return (
    <div className='bg-gradient-to-br from-gray-50 to-gray-100 w-full'>
    <div className="max-w-6xl mx-auto px-4 py-12  ">
      {/* Content Section */}
      <div className="mb-12 space-y-6">
        <h1 className="text-4xl font-bold text-orange-500 inline-block relative pb-4">
          Our Journey Through Innovation
        </h1>
        
        <p className="text-gray-700 leading-relaxed">
        Different Strokes is a troupe of ingenious professionals who dig the whole earth out until they find the gem of a concept. Every project is unique to us.  It is our approach to create outstanding deliverable that bring quantifiable results for the clients.
        </p>

        <p className="text-gray-700 leading-relaxed">
        Supporting our great team in delivering their best is the Strong Professional Infrastructure. That is embedded in an In-house Design Studio with advanced resources and Rich Reference Library to explore world class creativity.
        </p>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={250}
              height={250}
              className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent">
              <h3 className="text-white text-sm font-medium">
                {/* {image.title} */}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SetUp;