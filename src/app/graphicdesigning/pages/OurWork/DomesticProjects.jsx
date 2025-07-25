"use client"
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronDown, X, ChevronLeft, ChevronRight } from 'lucide-react';
import data from '../../db/domestic-data.json';

const ImageModal = ({ isOpen, onClose, company }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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
          <div className="relative w-full" style={{ height: '75vh' }}>
            {/* Carousel Images */}
            {company.images.map((img, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <Image
                  src={img}
                  alt={`${company.name} ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  priority={index === 0}
                />
              </div>
            ))}
            
            {/* Carousel Navigation Buttons */}
            <button 
              onClick={goToPrev} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 rounded-full p-3 transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            <button 
              onClick={goToNext} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 rounded-full p-3 transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-20">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 hover:bg-white/80 w-3'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-4xl font-bold text-center text-white mb-2">{company.name}</h3>
            <p className="text-lg text-center text-gray-200">{company.location}</p>
          </div>
        </div>
      </div>
    </div>
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
        <div className="relative w-full pt-[75%] overflow-hidden">
          <Image 
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

const ImageGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-4 mt-48">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes zoomIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 mx-auto max-w-7xl">
        {currentItems.map((company, index) => (
          <ImageCard 
            key={index} 
            company={company}
          />
        ))}
      </div>
      
      <div className="flex justify-center items-center space-x-2 md:space-x-4 mt-10">
        {/* Previous page arrow */}
        <button 
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 transform ${
            currentPage === 1 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-gray-200 text-gray-800 hover:bg-orange-500 hover:text-white hover:scale-105'
          }`}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Page numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button 
            key={page}
            onClick={() => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`px-3 py-1 md:px-4 md:py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm md:text-base ${
              currentPage === page 
                ? 'bg-orange-500 text-white shadow-lg' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next page arrow */}
        <button 
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 transform ${
            currentPage === totalPages 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-gray-200 text-gray-800 hover:bg-orange-500 hover:text-white hover:scale-105'
          }`}
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;















// [
//     {
//       "name": "22/7 Enterprise",
//       "image": "/images/domestic/227_Enterprise.jpg"
//     },
//     {
//       "name": "Atul Polygrip", 
//       "image": "/images/domestic/Polygrip.jpg"
//     },
 
//     {
//       "name": "C.Trivedi",
//       "image": "/images/domestic/C.trivedi2.jpg"
//     },
//     {
//         "name": "Epic",
//         "image": "/images/domestic/Epic.jpg"
//       },
//       { 
//         "name": "Matangi",
//         "image": "/images/domestic/Matangi1.jpg"
//       },
   
//       {
//         "name": "Prom Industries",
//         "image": "/images/domestic/Prom.jpg"
//       },
//       {
//         "name": "Trimble",
//         "image": "/images/domestic/Trimble.jpg"
//       },
//       {
//         "name": "Universal Masterbatch",
//         "image": "/images/domestic/Universal_Masterbatch.jpg"
//       },
   
//       {
//         "name": "Vihan Engineering",
//         "image": "/images/domestic/Vihan_Engineering.jpg"
//       },
//       {
//         "name": "Hemani Global",
//         "image": "/images/domestic/Hemani_Global.jpg"
//       },
//       {
//         "name": "Universal Masterbatch",
//         "image": "/images/domestic/Universal_Masterbatch1.jpg"
//       },
   
//       {
//         "name": "Nu-Vu Conair",
//         "image": "/images/domestic/Nu-Vu_Conair.jpg"
//       },
//       {
//           "name": "Deep Pneumatics",
//           "image": "/images/domestic/Deep_Pneumatics1.jpg"
//         },
//         {
//           "name": "Apollo Screens",
//           "image": "/images/domestic/Apollo_Screens.jpg"
//         },
     
//         {
//           "name": "Multispan",
//           "image": "/images/domestic/Multispan.jpg"
//         },
//         {
//           "name": "Sachin Industries",
//           "image": "/images/domestic/Sachin_Industries.jpg"
//         },
//         {
//           "name": "Ramdev Chemical Industries",
//           "image": "/images/domestic/Ramdev_Chemical.jpg"
//         },
     
//         {
//           "name": "Meghmani Finchem",
//           "image": "/images/domestic/Meghmani_Finchem.jpg"
//         }, {
//           "name": "Apollo Screens",
//           "image": "/images/domestic/Apollo_Screens1.jpg"
//         },
     
//         {
//           "name": "Epic",
//           "image": "/images/domestic/Epic3.jpg"
//         },
//         {
//             "name": "Meghmani Organics",
//             "image": "/images/domestic/Meghmani_Organics.jpg"
//           },
//           {
//             "name": "Trimble",
//             "image": "/images/domestic/Trimble2.jpg"
//           },
       
//           {
//             "name": "Meghmani",
//             "image": "/images/domestic/Meghmani.jpg"
//           },
//           {
//             "name": "Nu-Vu Conair",
//             "image": "/images/domestic/Nu-Vu_Conair1.jpg"
//           },
//           {
//             "name": "Matangi", 
//             "image": "/images/domestic/Matangi.jpg"
//           },
       
//           {
//             "name": "Trimble",
//             "image": "/images/domestic/Trimble3.jpg"
//           },
//           {
//             "name": "Phthalo",
//             "image": "/images/domestic/Phthalo.jpg"
//           }
//       ]