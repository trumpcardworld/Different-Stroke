"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Award, Check, Sparkles } from 'lucide-react';

const GraphicDesignAbout = () => {
  const milestones = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Design Experts' },
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Delivered' },
  ];

  return (
    <section className="relative bg-white py-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-50/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 bg-orange-50 rounded-full text-orange-500 mb-4"
          >
            <Award className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">About Our Design Studio</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Creating Visual Stories Since Day One...
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* First Paragraph */}
            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed">
              <span className='text-2xl text-gray-900 font-bold'> Brand Identity…Logo Design…Visual Communication… </span><br/>
              Over years of exploring the creative landscape, Different Strokes has emerged as a leading force in graphic design and visual identity creation. We understand the power of compelling visuals in today's digital-first world.
              </p>
            </div>

            {/* Second Paragraph */}
            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed">
              We know the kind of visual impact your brand needs to make in today's competitive marketplace. Therefore, we've made it our mission to create exceptional and memorable designs that not only grab attention but also tell your unique story. And we've been excelling at that craft.
              </p>
            </div>

            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed">
              Conceptualize, design, refine and deliver; that's our proven process. We offer custom graphic design services as well as comprehensive branding packages that include logo design, marketing materials, digital assets, and print collaterals. Besides, we also provide specialized services like packaging design, web graphics, social media assets, and brand guidelines to help you maintain consistency across all touchpoints.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "Creative Design Team",
                "Modern Design Tools",
                "Brand Strategy Focus",
                "Client Satisfaction"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-orange-100 to-orange-200">
              {/* Placeholder for design showcase - replace with actual image */}
              {/* <div className="w-full h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Palette className="w-16 h-16 mx-auto text-orange-500" />
                  <p className="text-orange-600 font-medium">Design Showcase</p>
                  <p className="text-sm text-orange-500">Replace with your portfolio image</p>
                </div>
              </div> */}
              
              {/* Alternative: Uncomment this when you have an actual image */}
              <Image
                src="/images/graphic-design.jpg" 
                width={1200}
                height={800}
                alt="Graphic Design Showcase"
                className="w-full h-full object-cover"
              />
              
              {/* Experience Badge */}
              <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <Sparkles className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                  <p className="text-sm font-medium text-gray-600">Creative</p>
                  <p className="text-2xl font-bold text-gray-900">Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Milestones Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white"
        >
          {milestones.map((milestone, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl font-bold mb-1">{milestone.number}</h3>
              <p className="text-orange-100">{milestone.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Ready to elevate your brand with stunning visuals? Let's create something extraordinary together.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors transform hover:scale-105">
            Start Your Design Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GraphicDesignAbout;