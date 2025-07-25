"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight,  Lightbulb, Building, Palette } from 'lucide-react';

const CreativeLandingPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Floating Elements */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            top: '10%',
            left: '5%',
            animationDuration: '4s',
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/25 to-purple-500/25 rounded-full blur-3xl animate-pulse"
          style={{
            top: '40%',
            right: '10%',
            animationDelay: '2s',
            animationDuration: '5s',
            transform: `translateY(${scrollY * -0.1}px)`
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            bottom: '20%',
            left: '30%',
            animationDelay: '1s',
            animationDuration: '6s'
          }}
        ></div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(45deg, rgba(251,146,60,0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(251,146,60,0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(251,146,60,0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(251,146,60,0.1) 75%)',
              backgroundSize: '60px 60px',
              backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
            }}
          />
        </div>

      </div>

      {/* Header */}
      <header className="relative z-20 pt-4 sm:pt-6 lg:pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Link href="/" className="block w-48 sm:w-56 md:w-64 lg:w-72 h-auto">
              <Image
                src="/images/logo.png"
                alt="Different Strokes Logo"
                width={280}
                height={90}
                className="w-full h-auto object-cover"
                priority
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto text-center w-full">
          {/* Creative Badge */}
          <div className={`mb-8 sm:mb-12 transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mt-12 inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-orange-400/30 shadow-2xl">
              <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 mr-2 animate-pulse" />
              <span className="text-orange-300 font-medium text-sm sm:text-base">Where Ideas Come to Life</span>
            </div>
          </div>


          {/* Service Cards Grid */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto transform transition-all duration-1000 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            {/* Exhibition Services Card */}
            <div className="group relative mt-8">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-2xl sm:rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-orange-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25">

                <div className="mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <Building className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Exhibitions</h3>
                  {/* <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    Immersive experiences that captivate and inspire
                  </p> */}
                </div>

                <Link
                  href='/exhibition'
                  className="group/btn inline-flex items-center bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-orange-600 hover:to-amber-600 transition-all transform hover:scale-105 w-full justify-center shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Explore More
                  <ChevronRight className="ml-2 group-hover/btn:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>

            {/* Graphic Design Card */}
            <div className="group relative mt-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl sm:rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">

                <div className="mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <Palette className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Graphic Design & Print</h3>
                  {/* <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    Visual stories that elevate your brand presence
                  </p> */}
                </div>

                <Link
                  href='/graphicdesigning'
                  className="group/btn inline-flex items-center bg-gradient-to-r from-blue-700 to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 w-full justify-center shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Explore More
                  <ChevronRight className="ml-2 group-hover/btn:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          </div>  
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 relative z-10 bg-black/20 backdrop-blur-sm border-t border-white/10 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm sm:text-base">
              &copy; Copyright 2025{' '}
              <Link href="/" className="font-semibold text-orange-400 hover:text-orange-300 transition-colors">
                Different Strokes
              </Link>
              {' '}• All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreativeLandingPage;




