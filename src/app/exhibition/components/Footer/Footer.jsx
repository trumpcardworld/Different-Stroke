"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="relative bg-[#333029] z-10">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Company Info */}
            <div className="wow fadeInUp">
              <div className="mb-8">
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    alt="Footer Logo"
                    width={260}
                    height={70}
                    className="mb-10"
                  />
                </Link>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-[#a4a097] w-5 h-5" />
                    <Link href="tel:+91 83208 00556" className="text-[#a4a097] hover:text-white transition-colors">
                      +91 83208 00556
                    </Link>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="text-[#a4a097]  w-5 h-5" />
                    <Link href="mailto:anush@differentstrokes.in" className="text-[#a4a097] hover:text-white transition-colors">
                      anush@differentstrokes.in
                    </Link>
                  </div>

                  <div className="flex space-x-3">
                    <MapPin className="text-[#a4a097] w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-[#a4a097] hover:text-white transition-colors">
                      304-305, Sursarthi Complex,<br />
                      Nr. Ambawadi Circle,<br />
                      Ahmedabad, Gujarat,<br />
                      India - 380006
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-5 md:mt-0 md:ml-12">
              <h3 className="text-white text-xl font-bold mb-6 pb-2 relative border-b-2 border-primary inline-block">
                Links
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/exhibition" className="text-[#a4a097] hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/exhibition/about-us" className="text-[#a4a097] hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/exhibition/testimonials"
                    className="text-[#a4a097] hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/exhibition/contact" className="text-[#a4a097] hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="mt-5 md:mt-0 md:ml-4">
              <h3 className="text-white text-xl font-bold mb-6 pb-2 relative border-b-2 border-primary inline-block">
                Services
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/exhibition/services" className="text-[#a4a097] hover:text-white transition-colors">
                    Exhibition Booth/Stall
                  </Link>
                </li>
                <li>
                  <Link href="/exhibition/ourworks/exclusive" className="text-[#a4a097] hover:text-white transition-colors">
                    View Portfolio
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="mt-5 md:mt-0">
              <h3 className="text-white text-xl font-bold mb-6 pb-2 relative border-b-2 border-primary inline-block">
                Follow Us
              </h3>
              <div className="max-w-md">
                <div className="flex space-x-4">
                  <Link href="#" className="w-10 h-10 bg-[#23211b] rounded-full flex items-center justify-center text-[#a4a097] hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="w-10 h-10 bg-[#23211b] rounded-full flex items-center justify-center text-[#a4a097] hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="w-10 h-10 bg-[#23211b] rounded-full flex items-center justify-center text-[#a4a097] hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="w-10 h-10 bg-[#23211b] rounded-full flex items-center justify-center text-[#a4a097] hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#23211b] border-t border-white/20 py-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-[#a4a097]">
              &copy; Copyright 2020 by <Link href="/" className="font-semibold hover:text-white transition-colors">Different Strokes</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;