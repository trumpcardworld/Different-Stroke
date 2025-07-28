"use client"
import Link from 'next/link';
import React from 'react';
import { ArrowRight, Palette, Zap, Users, Award } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 overflow-hidden mt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Creative Design Solutions
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Transform Your
                <span className="block text-orange-500 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Brand Vision
                </span>
                Into Reality
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                We craft stunning visual identities, memorable logos, and captivating designs that make your brand stand out in today's competitive market.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href='/graphicdesigning/contact' className="group bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href='/graphicdesigning/portfolio' className="border-2 text-center border-orange-500 text-orange-500 px-8 py-4 rounded-full hover:bg-orange-50 transition-all">
                View Our Work
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-gray-600 text-sm">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">5+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-800">Graphic Design</div>
                    <div className="text-gray-700 text-xl font-bold">Services</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-orange-500 rounded"></div>
                    </div>
                    <span className="text-gray-700">Logo Design & Identity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-orange-500 rounded"></div>
                    </div>
                    <span className="text-gray-700">Marketing Materials</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-orange-500 rounded"></div>
                    </div>
                    <span className="text-gray-700">Digital & Print Design</span>
                  </div>
                </div>
                
                <div className="pt-4">
                   <Link href='/graphicdesigning/services' className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full hover:bg-orange-50 transition-all">
                Explore more
              </Link>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-10 -right-4 w-20 h-20 bg-orange-500 rounded-2xl shadow-lg flex items-center justify-center animate-bounce">
              <Award className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -bottom-8 -left-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
              <Users className="w-8 h-8 text-orange-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f97316" fillOpacity="0.1"/>
        </svg>
      </div>
    </div>
  );
}