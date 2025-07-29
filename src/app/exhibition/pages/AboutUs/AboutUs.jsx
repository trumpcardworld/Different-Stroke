"use client"
import { motion } from 'framer-motion';
import { Star,  GitBranch } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
 
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden mt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-50/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 mb-4">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Our Legacy of Innovation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Crafting Excellence Since 1997
          </h1>
          <p className="text-lg text-gray-600">
            Where innovation meets expertise, and possibilities become realities.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image 
                src="/ourwork/international/2019/China coat -2019/Meghmani/1.jpg" 
                alt="stall"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Achievement Card */}
            <div className="absolute -bottom-12 -right-8 bg-white rounded-xl shadow-lg p-4 max-w-xs">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-50 rounded-lg">
                  <GitBranch className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Our Vision</h3>
                  <p className="text-sm text-gray-600">
                  To create innovative solutions that exceed expectations and drive success.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="prose prose-lg">
              <h2 className="text-2xl font-bold text-gray-600 mb-6">PURSUING THE IDEA OF BEING CREATIVELY DIFFERENT SINCE 1997…</h2>
              <p className="text-gray-700 leading-relaxed">
               Different Strokes is a ceaselessly thriving, multi-capability, creative communications agency with super specialization in exhibition and trade show booth design.
              </p><br/>
              <p className="text-gray-700 leading-relaxed">
                <span className="text-xl font-bold text-orange-500">We are headquartered in Ahmedabad (Gujarat, India)</span><br/>
              a city easily accessible to major exhibition centers of India. We started off as a humble design studio. Eventually, as the story moved ahead and the capabilities fortified, Different Strokes took the shape of a fully-functional Advertising Agency delivering innovative ideas for Marketing Communication (Marcom). Talking about today, Different Strokes has stretched its limits beyond advertising to cater to the exquisite exhibition design needs of the clients worldwide. Since we entered the exhibition business, we have been giving a tough competition to the domestic as well as overseas players in designing and building spectacular booth designs.
              </p><br/>
              <p className="text-gray-700 leading-relaxed">
              <span className="text-xl font-bold text-orange-500">We often like to put it like this</span><br/>
              we are a heady mix of unconventional thinking and unrestrained creative zeal that don’t let us settle for anything usual and common. As a natural consequence, excellence comes as a part and parcel of all the services that we offer to our clients. Now that we have mentioned about the clients, let us take the opportunity to take pride in having earned a great deal of market repute – regionally, nationally and internationally.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;