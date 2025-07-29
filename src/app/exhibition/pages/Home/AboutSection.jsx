"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy,Award, Check} from 'lucide-react';

const AboutSection = () => {
  const milestones = [
    { number: '30+', label: 'Years Experience' },
    { number: '250+', label: 'Expert Team' },
    { number: '1.5K+', label: 'Happy Clients' },
    { number: '125+', label: 'Active Projects' },
  ];

  return (
    <section className="relative bg-white py-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-50/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
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
            <span className="text-sm font-semibold">About Our Company</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Crafting Excellence Since 1997...
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
              <span className='text-2xl text-dark-gray font-bold'> Exhibitions Stalls…Trade Show Booths…Turnkey Solutions… </span><br/>
              Over years of exploring the field of creative designing, Different Strokes has emerged as one of the very few leaders in the field of trade show booths and exhibition stall designing.
              </p>
            </div>

            {/* Second Paragraph */}
            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed">
              We know the kind of show you need to put up for your business at the national and international trade show/exhibitions. Therefore, we have made it our motto to create exceptional and exquisite designs so that they grab attention and attract audience. And, we have been doing great at that.
              </p>
            </div>

            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed">
              Concept, design, execute and deliver; that’s how we go about it. We offer custom stall design services as well as wholesome package that include execution of the stall in India as well as overseas venues. Besides, we also offer add-on expert services related to the stalls/booths – like display panels with text and images, model prototypes, related POPs, marketing strategies for particular event/exhibition, etc. to help you enhance your reach to the potential customers at the show.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "Professional Design Team",
                "Quality Materials",
                "Modern Techniques",
                "Customer Satisfaction"
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
            <div className="relative rounded-2xl overflow-hidden aspect-[4/] bg-gray-100">
              <Image
                src="/images/Home/2.jpg" 
                width={1200}
                height={800}
                alt=" Design Showcase"
                className="w-full h-full object-cover"
              />
              {/* Experience Badge */}
              <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm p-1 rounded-lg shadow-lg">
                <div className="text-center">
                  <Trophy className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm font-medium text-gray-600">Since</p>
                  <p className="text-2xl font-bold text-gray-900">1997</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Milestones Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-900 rounded-2xl p-8 text-white"
        >
          {milestones.map((milestone, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl font-bold mb-1">{milestone.number}</h3>
              <p className="text-gray-400">{milestone.label}</p>
            </div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
};

export default AboutSection;