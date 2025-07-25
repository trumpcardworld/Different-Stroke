"use client"
import { useState } from 'react';
import {  MousePointer, Layers, PenTool, CheckCircle } from 'lucide-react';

const Services = () => {
      const [hoveredService, setHoveredService] = useState(null);

    const services = [
        {
          title: "3D Design",
          icon: <Layers className="text-orange-500 mb-4" size={36} />,
          description: "Cutting-edge 3D modeling to visualize your perfect booth before production begins"
        },
        {
          title: "Custom Fabrication",
          icon: <PenTool className="text-orange-500 mb-4" size={36} />,
          description: "Premium materials crafted by expert fabricators for stunning, durable structures"
        },
        {
          title: "Interactive Elements",
          icon: <MousePointer className="text-orange-500 mb-4" size={36} />,
          description: "Engage visitors with AR displays, touch screens, and immersive digital experiences"
        },
        {
          title: "On-site Assembly",
          icon: <CheckCircle className="text-orange-500 mb-4" size={36} />,
          description: "Professional installation team ensures flawless setup and teardown"
        }
      ];
    
  return (
    
    
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Comprehensive Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We handle every aspect of your exhibition booth, ensuring a seamless experience from initial concept to final execution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-slate-100 hover:border-orange-200 group"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`transition-transform ${hoveredService === index ? 'scale-110' : ''}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
                {/* <div className="mt-4 pt-4 border-t border-slate-100">
                  <a href="#" className="text-orange-600 font-medium flex items-center group-hover:underline">
                    Learn more <ArrowRightCircle size={16} className="ml-2 group-hover:ml-3 transition-all" />
                  </a>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Services