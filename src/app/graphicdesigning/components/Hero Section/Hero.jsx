"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Users, Palette, ArrowUp} from 'lucide-react';



const Hero = () => {
  const [activeSection, setActiveSection] = useState();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">

      {/* Hero Section */}
      <section id="/" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mt-32">
          <div className="text-center">
            {/* <div className="mb-8">
              <div className="text-8xl font-bold text-orange-500 italic transform -skew-x-12 mb-2">ff</div>
              <div className="text-2xl text-orange-400 font-light italic">idea</div>
            </div> */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Creative Solutions for
              <span className="block text-orange-500">Your Business</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              We bring your vision to life through stunning exhibition stalls and captivating graphic designs that make your brand stand out from the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href='/exhibition'
                className="group bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                Exhibition Booth/Stall Services 
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href='/graphicdesigning'
                className="group border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                Graphic Design Services
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition Section */}
      <section id="exhibition" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Users className="text-orange-500 mr-4" size={48} />
                <h2 className="text-4xl font-bold text-gray-900">Exhibition Stall & Booth Design</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform your exhibition presence with our innovative stall and booth designs. We create immersive experiences that attract visitors, showcase your products effectively, and leave lasting impressions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Custom Stall Design</h3>
                    <p className="text-gray-600">Tailored designs that reflect your brand identity and objectives</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">3D Visualization</h3>
                    <p className="text-gray-600">See your stall come to life before construction begins</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Complete Setup</h3>
                    <p className="text-gray-600">End-to-end service from design to installation</p>
                  </div>
                </div>
              </div>
              <Link 
                href='/exhibition'
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Explore More
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-xl p-6 shadow-xl">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="h-20 bg-orange-500 rounded-lg"></div>
                    <div className="h-20 bg-gray-200 rounded-lg"></div>
                    <div className="h-20 bg-gray-200 rounded-lg"></div>
                    <div className="h-20 bg-orange-300 rounded-lg"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graphic Design Section */}
      <section id="graphic-design" className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-xl p-6 shadow-xl">
                  <div className="flex items-center justify-center mb-4">
                    <Palette className="text-orange-500" size={48} />
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-orange-500 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/5"></div>
                    <div className="flex space-x-2 mt-4">
                      <div className="w-8 h-8 bg-orange-500 rounded"></div>
                      <div className="w-8 h-8 bg-orange-300 rounded"></div>
                      <div className="w-8 h-8 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <Palette className="text-orange-500 mr-4" size={48} />
                <h2 className="text-4xl font-bold text-gray-900">Graphic Design Services</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Elevate your brand with our comprehensive graphic design solutions. From logos to marketing materials, we create visually stunning designs that communicate your message effectively and memorably.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Brand Identity Design</h3>
                    <p className="text-gray-600">Logos, business cards, and complete brand packages</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Marketing Materials</h3>
                    <p className="text-gray-600">Brochures, flyers, banners, and promotional designs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Digital Graphics</h3>
                    <p className="text-gray-600">Social media graphics, web banners, and digital assets</p>
                  </div>
                </div>
              </div>
              <Link
                href='/graphicdesigning'
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-110 z-50"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}



export default Hero