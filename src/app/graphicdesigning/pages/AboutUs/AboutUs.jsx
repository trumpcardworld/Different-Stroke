"use client"
import { motion } from 'framer-motion';
import { Star, GitBranch } from 'lucide-react';
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
                src="/images/graphic-about.jpg"
                alt="Team at work"
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
                Different Strokes is a ceaselessly thriving, multi-capability, creative communications agency with deep specialization in graphic design and high-quality printing solutions.
              </p><br />
              <p className="text-gray-700 leading-relaxed">
                <span className="text-xl font-bold text-orange-500">We are headquartered in Ahmedabad (Gujarat, India)</span><br />
                a city that continues to inspire with its rich culture and fast-growing business environment. We began our journey as a humble design studio. Over the years, our story evolved, our capabilities grew stronger, and Different Strokes transformed into a fully-functional Advertising Agency delivering innovative ideas for Marketing Communication (Marcom).
              </p><br />
              <p className="text-gray-700 leading-relaxed">

                Fast forward to today, Different Strokes has extended its creative footprint into the world of graphic design and print production, serving clients across industries. Whether it's branding, corporate identity, marketing collateral, packaging design, or customized print solutions – we bring ideas to life with precision, creativity, and impact.
              </p><br />
              <p className="text-gray-700 leading-relaxed">
                <span className="text-xl font-bold text-orange-500">We often like to put it like this</span><br />
                we are a heady mix of unconventional thinking and unrestrained creative zeal that don’t let us settle for anything usual or common. Naturally, excellence is embedded in all the services we offer our clients. And speaking of clients, we take great pride in the trust and reputation we’ve built – regionally, nationally, and internationally.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        {/* <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className={`p-3 ${card.color} rounded-lg w-fit mb-4`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div> */}

      </div>
    </section>
  );
};

export default AboutSection;