"use client"
import React, { useState } from 'react';
import ImageCard from '../ui/ImageCard';
import Pagination from '../ui/Pagination';
import '../../styles/animations.css';

// Modified to accept data as a prop instead of importing directly
const ImageGallery = ({ data, title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto px-4 py-4 mt-36">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">{title}</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 mx-auto max-w-7xl">
        {currentItems.map((company, index) => (
          <ImageCard 
            key={index} 
            company={company}
          />
        ))}
      </div>
      
      {totalPages > 1 && (
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      )}
    </div>
  );
};

export default ImageGallery;