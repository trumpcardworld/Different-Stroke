
"use client"
import { ArrowRightCircle, CheckCircle, Calendar } from 'lucide-react';

export default function ExhibitionBoothService() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-10 font-sans mt-12 overflow-hidden">
      {/* Hero Section */}
      <div className="relative pt-20 lg:pt-0">
        {/* Background Elements - Contained within viewport */}
        <div className="absolute right-0 top-20 w-1/3 h-64 bg-orange-100 rounded-l-full opacity-50 max-w-full"></div>
        <div className="absolute left-0 bottom-20 w-1/4 h-48 bg-orange-100 rounded-r-full opacity-50 max-w-full"></div>
        
        <div className="container mx-auto px-3 lg:min-h-screen flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10 py-12 lg:py-0">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Exhibition Presence
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              From captivating 3D designs to flawless execution, we craft unforgettable exhibition booths that turn visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all flex items-center justify-center">
                <a href="/exhibition/ourworks/exclusive" className="flex items-center">
                  See Our Portfolio
                  <ArrowRightCircle className="ml-2" size={20} />
                </a>
              </button>
              <button className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-full font-medium transition-all">
                <a href='/exhibition/contact'>Book Consultation</a>
              </button>
            </div>
            
            <div className="mt-12 flex items-center">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white overflow-hidden -ml-2 first:ml-0`} style={{ zIndex: 4-i }}>
                    <div className={`w-full h-full bg-orange-${300 + (i * 100)}`}></div>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="font-semibold">Trusted by 200+ companies</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-slate-600">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative px-2 md:px-4">
            <div className="relative z-10">
              <div className="w-full h-80 sm:h-96 lg:h-[500px] rounded-xl shadow-lg overflow-hidden">
                {/* Direct image with proper attributes for mobile visibility */}
                <img 
                  src="/images/service_booth.jpg"
                  alt="Exhibition Booth Design"
                  className="w-full h-full object-cover rounded-xl"
                  loading="eager"
                />
              </div>
              
              {/* Floating elements - Positioned to prevent overflow */}
              <div className="absolute -top-4 sm:-top-6 lg:-top-8 right-0 sm:-right-4 lg:-right-8 bg-white p-3 sm:p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={18} />
                  <span className="font-medium text-sm sm:text-base">Design Approved</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 left-0 sm:-left-4 lg:-left-8 bg-white p-3 sm:p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Calendar className="text-orange-500 mr-2" size={18} />
                  <span className="font-medium text-sm sm:text-base">Ready in 3 weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}