
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, X, ChevronLeft, ChevronRight } from 'lucide-react';
import data from '../../db/international-data.json';

const ImageModal = ({ isOpen, onClose, image, name }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-gray-50/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 ease-in-out"
      style={{
        animation: isOpen ? 'fadeIn 0.3s ease forwards' : 'none',
      }}
    >
      <div 
        className="relative w-full max-w-4xl mx-4 transform transition-all duration-500 ease-out"
        style={{
          animation: isOpen ? 'slideUp 0.5s ease forwards' : 'none'
        }}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-gray-600 hover:text-orange-500 transition-colors duration-200 p-2 rounded-full hover:bg-white/20"
        >
          <X className="w-6 h-6 text-black font-bold" />
        </button>
        <div className="bg-gray/50 backdrop-blur-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
          <div className="relative w-full" style={{ height: '70vh' }}>
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transform transition-all duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              style={{
                animation: 'zoomIn 0.7s ease forwards'
              }}
            />
          </div>
          <div className="">
            <h3 className="text-4xl font-bold text-center text-gray-700 mb-10">{name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageCard = ({ image, name, location }) => {
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
            src={image} 
            alt={name} 
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
            {name}
          </h3>
          <p className="text-sm md:text-base opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
            {location}
          </p>
          <ChevronDown className="mt-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 animate-bounce" />
        </div>
      </div>
      
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        image={image}
        name={name}
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
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
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
        {currentItems.map((item, index) => (
          <ImageCard 
            key={index} 
            image={item.image} 
            name={item.name} 
            location={item.location} 
          />
        ))}
      </div>
      
      <div className="flex justify-center space-x-2 md:space-x-4 mt-10">

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

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button 
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 md:px-4 md:py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm md:text-base ${
              currentPage === page 
                ? 'bg-orange-500 text-white shadow-lg' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {page}
          </button>
          
        ))}
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




















































[
  {
    "name": "Atul",
    "image": "/images/international/Atul1.jpg"
  },
  {
    "name": "Meghmani Organics",
    "image": "/images/international/Meghmani_Organics1.jpg"
  },
  {
    "name": "Image Gravures",
    "image": "/images/international/Image_Gravures.jpg"
  },
  {
    "name": "Gantrade",
    "image": "/images/international/Gantrade.jpg"
  },
  {
    "name": "Gharda Chemicals ",
    "image": "/images/international/Gharda_Chemicals.jpg"
  },
  {
    "name": "Lona Industries",
    "image": "/images/international/Lona_Industries.jpg"
  },
  {
    "name": "Joyfix",
    "image": "/images/international/Joyfix.jpg"
  },
  {
    "name": "Mazda Colours",
    "image": "/images/international/Mazda_Colours.jpg"
  },
  {
    "name": "Meghmani Organics",
    "image": "/images/international/Meghmani_Organics3.jpg"
  },
  {
    "name": "Nirbhay Rasayan Pvt. Ltd.",
    "image": "/images/international/Nirbhay_Rasayan.jpg"
  },
  {
    "name": "Phthalo",
    "image": "/images/international/Phthalo.jpg"
  },
  {
    "name": "Ramdev Chemical Industries",
    "image": "/images/international/Ramdev_Industries.jpg"
  },
  {
    "name": "Redox Industries Limited",
    "image": "/images/international/Redox_Industries.jpg"
  },
  {
    "name": "Resil",
    "image": "/images/international/Resil.jpg"
  },
  {
    "name": "Sachin Industries Limited",
    "image": "/images/international/Sachin_Industries.jpg"
  },
  {
    "name": "Steefo Engineering Corporation",
    "image": "/images/international/Steefo.jpg"
  },
  {
    "name": "Sumangal Group Of Companies",
    "image": "/images/international/Sumangal.jpg"
  },
  {
    "name": "Subhasri Pigments Pvt Ltd",
    "image": "/images/international/Subhasri.jpg"
  },
  {
    "name": "Atul Lapox",
    "image": "/images/international/Lapox.jpg"
  },
  {
    "name": "Transpek Creative Chemistry",
    "image": "/images/international/Transpek.jpg"
  },
  {
    "name": "Ramdev Chemical Industries",
    "image": "/images/international/Ramdev_Chemical_Industries.jpg"
  },
  {
    "name": "Technichem",
    "image": "/images/international/Technichem.jpg"
  },
  {
    "name": "Laxmi Industries",
    "image": "/images/international/Laxmi_Organics.jpg"
  },
  {
    "name": "Ramdev Chemical Industries",
    "image": "/images/international/Ramdev_Industries1.jpeg"
  },
  {
    "name": "Transpek Creative Chemistry",
    "image": "/images/international/Transpek1.jpg"
  },
  {
    "name": "Chemexcil",
    "image": "/images/international/Chemexcil.jpg"
  },
  {
    "name": "Chmexcil",
    "image": "/images/international/Chemexcil1.jpg"
  },
  {
    "name": "C.trivedi",
    "image": "/images/international/C.trivedi1.jpg"
  },
  {
    "name": "Transpek Creative Chemistry",
    "image": "/images/international/Transpek3.jpg"
  },
  {
    "name": "Meghmani Organics",
    "image": "/images/international/Meghmani_Organics2.jpg"
  },
  {
    "name": "Satindia",
    "image": "/images/international/Satindia.jpg"
  },
  {
    "name": "Tatva Chintan",
    "image": "/images/international/Tatva_Chintan.jpg"
  },
  {
    "name": "Ramdev Chemical",
    "image": "/images/international/Ramdev_Chemicals.jpg"
  },
  {
    "name": "Meghmani Organics",
    "image": "/images/international/Meghmani_Organics.jpg"
  },
  {
    "name": "Vimal Crop Care",
    "image": "/images/international/Vimal_crop.jpg"
  },
  {
    "name": "CPCL Group",
    "image": "/images/international/CPCL.jpg"
  }
]