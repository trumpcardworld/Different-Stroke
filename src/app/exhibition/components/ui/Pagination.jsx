
"use client"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Function to determine which page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 3; // Show 3 page numbers at a time
    
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    // Adjust if we're near the end
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    return pageNumbers;
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center items-center space-x-2 mt-12 mb-10">
      {/* First page (double arrow) */}
      <button 
        onClick={() => {
          onPageChange(1);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        disabled={currentPage === 1}
        className={`flex items-center justify-center w-10 h-10 border rounded transition-all duration-300 ${
          currentPage === 1 
            ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
            : 'border-gray-300 text-gray-700 hover:bg-gray-100'
        }`}
        aria-label="First page"
      >
        <ChevronsLeft className="w-5 h-5" />
      </button>
      
      {/* Previous page arrow */}
      <button 
        onClick={goToPrevPage}
        disabled={currentPage === 1}
        className={`flex items-center justify-center w-10 h-10 border rounded transition-all duration-300 ${
          currentPage === 1 
            ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
            : 'border-gray-300 text-gray-700 hover:bg-gray-100'
        }`}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Page numbers */}
      {pageNumbers.map((page) => (
        <button 
          key={page}
          onClick={() => {
            onPageChange(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex items-center justify-center w-10 h-10 border rounded transition-all duration-300 ${
            currentPage === page 
              ? 'bg-orange-500 border-orange-500 text-white' 
              : 'border-gray-300 text-gray-700 hover:bg-gray-100'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next page arrow */}
      <button 
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center w-10 h-10 border rounded transition-all duration-300 ${
          currentPage === totalPages 
            ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
            : 'border-gray-300 text-gray-700 hover:bg-gray-100'
        }`}
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      
      {/* Last page (double arrow) */}
      <button 
        onClick={() => {
          onPageChange(totalPages);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center w-10 h-10 border rounded transition-all duration-300 ${
          currentPage === totalPages 
            ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
            : 'border-gray-300 text-gray-700 hover:bg-gray-100'
        }`}
        aria-label="Last page"
      >
        <ChevronsRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;