// "use client"
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { ChevronDown } from 'lucide-react';
// import ImageModal from './ImageModal';

// const ImageCard = ({ company }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <>
//       <div 
//         className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onClick={() => setIsModalOpen(true)}
//       >
//         <div className="relative w-full pt-[70%] overflow-hidden">
//           <Image 
//             src={company.images[0]} 
//             alt={company.name} 
//             fill
//             className="object-cover transition-all duration-500 ease-out group-hover:scale-110"
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           />
//         </div>
//         <div 
//           className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent
//             transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}
//             flex flex-col justify-end items-center text-white text-center p-6`}
//         >
//           <h3 className="text-lg md:text-xl font-bold transform transition-all duration-300 translate-y-4 group-hover:translate-y-0">
//             {company.name}
//           </h3>
//           <p className="text-sm md:text-base opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
//             {company.location}
//           </p>
//           <ChevronDown className="mt-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 animate-bounce" />
//         </div>
//       </div>
      
//       <ImageModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         company={company}
//       />
//     </>
//   );
// };

// export default ImageCard;

















"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import ImageModal from './ImageModal';

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

const ImageCard = ({ company }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative w-full pt-[70%] overflow-hidden">
          <ImageWithFallback
            src={company.images[0]} 
            alt={company.name} 
            fill
            className="object-cover transition-all duration-500 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent
            transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}
            flex flex-col justify-end items-center text-white text-center p-6`}
        >
          <h3 className="text-lg md:text-xl font-bold transform transition-all duration-300 translate-y-4 group-hover:translate-y-0">
            {company.name}
          </h3>
          <p className="text-sm md:text-base opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
            {company.location}
          </p>
          <ChevronDown className="mt-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 animate-bounce" />
        </div>
      </div>
      
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        company={company}
      />
    </>
  );
};

export default ImageCard;