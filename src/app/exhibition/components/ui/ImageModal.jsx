

// "use client"
// import React, { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// const ImageModal = ({ isOpen, onClose, company }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
  
//   // Check if it's mobile view
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     // Set initial value
//     checkIfMobile();
    
//     // Add event listener
//     window.addEventListener('resize', checkIfMobile);
    
//     // Clean up
//     return () => window.removeEventListener('resize', checkIfMobile);
//   }, []);
  
//   // Auto-rotate carousel
//   useEffect(() => {
//     if (!isOpen) return;
    
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
//     }, 3000);
    
//     return () => clearInterval(interval);
//   }, [isOpen]);
  
//   const goToNext = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
//   }, []);
  
//   const goToPrev = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
//   }, []);
  
//   if (!isOpen || !company) return null;

//   return (
//     <div 
//       className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 ease-in-out"
//       style={{
//         animation: isOpen ? 'fadeIn 0.3s ease forwards' : 'none',
//       }}
//     >
//       <div 
//         className="relative w-full max-w-5xl mx-4 transform transition-all duration-500 ease-out"
//         style={{
//           animation: isOpen ? 'slideUp 0.5s ease forwards' : 'none'
//         }}
//       >
//         <button
//           onClick={onClose}
//           className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors duration-200 p-2 rounded-full hover:bg-white/20"
//         >
//           <X className="w-6 h-6 font-bold" />
//         </button>
//         <div className="bg-white/5 backdrop-blur-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.01] shadow-2xl">
//           {/* Carousel Container */}
//           <div 
//             className={`relative w-full ${isMobile ? 'aspect-square' : ''}`} 
//             style={{ height: isMobile ? 'auto' : '70vh' }}
//           >
//             {/* Carousel Images */}
//             {company.images.map((img, index) => (
//               <div 
//                 key={index}
//                 className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
//                   index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
//                 }`}
//               >
//                 <Image
//                   src={img}
//                   alt={`${company.name} ${index + 1}`}
//                   fill
//                   className={`${isMobile ? 'object-contain' : 'object-contain'}`}
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
//                   priority={index === 0}
//                 />
//               </div>
//             ))}
            
//             {/* Carousel Navigation Buttons */}
//             <button 
//               onClick={goToPrev} 
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 rounded-full p-2 md:p-3 transition-all duration-300"
//               aria-label="Previous image"
//             >
//               <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
//             </button>
//             <button 
//               onClick={goToNext} 
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 rounded-full p-2 md:p-3 transition-all duration-300"
//               aria-label="Next image"
//             >
//               <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
//             </button>
            
//             {/* Carousel Indicators */}
//             <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-20">
//               {[0, 1, 2, 3].map((index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
//                     currentIndex === index 
//                       ? 'bg-white w-6 md:w-8' 
//                       : 'bg-white/50 hover:bg-white/80 w-2 md:w-3'
//                   }`}
//                   aria-label={`Go to image ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
          
//           <div className="p-4 md:p-6 bg-gradient-to-t from-black/90 to-transparent">
//             <h3 className="text-2xl md:text-4xl font-bold text-center text-white mb-1 md:mb-2">{company.name}</h3>
//             <p className="text-base md:text-lg text-center text-gray-200">{company.location}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageModal;













"use client"
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Image component with fallback handling
const ImageWithFallback = ({ 
  src, 
  alt, 
  fill = false, 
  className = "", 
  sizes,
  priority = false,
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasTriedFallback, setHasTriedFallback] = useState(false);

  // Reset when src changes
  useEffect(() => {
    setImgSrc(src);
    setHasTriedFallback(false);
  }, [src]);

  const handleError = () => {
    if (!hasTriedFallback) {
      // Try with opposite case extension
      let fallbackSrc;
      if (src.endsWith('.jpg')) {
        fallbackSrc = src.replace(/\.jpg$/, '.JPG');
      } else if (src.endsWith('.JPG')) {
        fallbackSrc = src.replace(/\.JPG$/, '.jpg');
      } else if (src.endsWith('.jpeg')) {
        fallbackSrc = src.replace(/\.jpeg$/, '.JPEG');
      } else if (src.endsWith('.JPEG')) {
        fallbackSrc = src.replace(/\.JPEG$/, '.jpeg');
      }
      
      if (fallbackSrc && fallbackSrc !== src) {
        setImgSrc(fallbackSrc);
        setHasTriedFallback(true);
        return;
      }
    }
    
    console.warn(`Failed to load image: ${src}`);
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={handleError}
      {...props}
    />
  );
};

const ImageModal = ({ isOpen, onClose, company }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if it's mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Auto-rotate carousel
  useEffect(() => {
    if (!isOpen) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isOpen]);
  
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
  }, []);
  
  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
  }, []);
  
  if (!isOpen || !company) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 ease-in-out"
      style={{
        animation: isOpen ? 'fadeIn 0.3s ease forwards' : 'none',
      }}
    >
      <div 
        className="relative w-full max-w-5xl mx-4 transform transition-all duration-500 ease-out"
        style={{
          animation: isOpen ? 'slideUp 0.5s ease forwards' : 'none'
        }}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors duration-200 p-2 rounded-full hover:bg-white/20"
        >
          <X className="w-6 h-6 font-bold" />
        </button>
        <div className="bg-white/5 backdrop-blur-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.01] shadow-2xl">
          {/* Carousel Container */}
          <div 
            className={`relative w-full ${isMobile ? 'aspect-square' : ''}`} 
            style={{ height: isMobile ? 'auto' : '70vh' }}
          >
            {/* Carousel Images */}
            {company.images.map((img, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <ImageWithFallback
                  src={img}
                  alt={`${company.name} ${index + 1}`}
                  fill
                  className={`${isMobile ? 'object-contain' : 'object-contain'}`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  priority={index === 0}
                />
              </div>
            ))}
            
            {/* Carousel Navigation Buttons */}
            <button 
              onClick={goToPrev} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 rounded-full p-2 md:p-3 transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </button>
            <button 
              onClick={goToNext} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 rounded-full p-2 md:p-3 transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </button>
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-20">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'bg-white w-6 md:w-8' 
                      : 'bg-white/50 hover:bg-white/80 w-2 md:w-3'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="p-4 md:p-6 bg-gradient-to-t from-black/90 to-transparent">
            <h3 className="text-2xl md:text-4xl font-bold text-center text-white mb-1 md:mb-2">{company.name}</h3>
            <p className="text-base md:text-lg text-center text-gray-200">{company.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;