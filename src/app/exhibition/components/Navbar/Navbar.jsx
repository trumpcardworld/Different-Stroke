"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = (itemName) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  const navigationItems = [
    {
      name: 'Home',
      path: '/exhibition',
      children: []  
    },
    {
      name: 'About Us',
      path: '/exhibition/about-us',
      children: []
    },
    {
      name: 'Services',
      path: '',
      children: [
        { name: 'Exhibition Booth/Stall', path: '/exhibition/services' },
        // { name: 'Graphic Designing', path: '/graphicdesigning' }
        // { name: 'Set Up', path: '/setup' }
      ]
    },
    {
      name: 'Our Work',
      path: '',
      children: [
        { name: 'Exclusive', path: '/exhibition/ourworks/exclusive' },
        { name: 'International', path: '/exhibition/ourworks/international' },
        { name: 'Domestic', path: '/exhibition/ourworks/national' },
      ]
    },
    {
      name: 'Testimonials',
      path: '/exhibition/testimonials',
      children: []
    },
    {
      name: 'Contact',
      path: '/exhibition/contact',
      children: []
    }
  ];

  return (
    <header className={`w-full bg-[#110f0b] ${isSticky ? 'fixed top-0 left-0 animate-slideDown shadow-lg' : 'absolute left-0 top-0'} z-50`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-8">
          {/* Logo */}
          <div className="flex-shrink">
            <Link href="/" className="inline-block w-[260px] h-[70px]">
              <Image 
                src="/images/logo.png"
                alt="Company Logo"
                width={260}
                height={70}
                className="h-auto w-full"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navigationItems.map((item) => (
              <div key={item.name} className="group relative">
                <Link 
                  href={item.path}
                  className="block py-2 text-[#84827c] hover:text-orange-400 text-base font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {item.name}
                </Link>
                
                {item.children.length > 0 && (
                  <ul className="absolute left-0 top-full w-[270px] bg-white shadow-lg invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {item.children.map((child) => (
                      <li key={child.name} className="px-5">
                        <Link
                          href={child.path}
                          className="block py-3 text-[#333029] text-sm font-semibold border-b border-gray-100 last:border-0 hover:pl-8 hover:text-orange-600 transition-all duration-300"
                        >
                          {child.name}
                        </Link> 
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info and CTA */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
             
              </div>
              <Link
                href="/exhibition/request-design-proposal"
                className="inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors font-semibold"
              >
                Request Design Proposal
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
        <div className="lg:hidden py-4 border-t border-gray-800">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.name}>
                {item.children.length > 0 ? (
                  <div>
                    <div 
                      onClick={() => toggleDropdown(item.name)}
                      className="flex justify-between items-center py-2 text-[#84827c] hover:text-orange-400 font-semibold"
                    >
                      {item.name}
                      {openDropdowns[item.name] ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                    
                    {openDropdowns[item.name] && item.children.length > 0 && (
                      <ul className="pl-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <Link
                              href={child.path}
                              className="block py-2 text-[#84827c] hover:text-orange-500 text-sm"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="block py-2 text-[#84827c] hover:text-orange-600 font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
              
              <li>
                <Link
                  href="/exhibition/request-design-proposal"
                  className="block w-full text-center bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors mt-4"
                >
                  Request Design Proposal
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;