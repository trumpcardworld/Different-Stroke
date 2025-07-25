"use client"
import { useState, useEffect} from 'react'
import {  Calendar } from 'lucide-react';

const ProvenProcess = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const processSteps = [
        { 
          title: "Consultation", 
          desc: "In-depth discussion of your brand vision and exhibition goals" 
        },
        { 
          title: "Concept Design", 
          desc: "Creative blueprints and 3D renderings of your custom booth" 
        },
        { 
          title: "Production", 
          desc: "Expert fabrication using premium materials and cutting-edge tech" 
        },
        { 
          title: "Installation", 
          desc: "Professional on-site assembly and technical setup" 
        },
        { 
          title: "Event Support", 
          desc: "Dedicated team ensures everything runs perfectly during your event" 
        }
      ];


        // Auto-advance process step
        useEffect(() => {
          const timer = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % 5);
          }, 3000);
          return () => clearInterval(timer);
        }, []);
      
    
  return (
      
      
      <section id="process" className="py-20 bg-gradient-to-br from-orange-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We've refined our approach over hundreds of successful exhibitions to ensure flawless results every time.
            </p>
          </div>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block h-1 bg-orange-200 absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${currentStep === index ? 'bg-orange-600 text-white scale-110' : 'bg-white text-orange-600 border-2 border-orange-200'}`}>
                    <span className="font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className={`mt-4 text-center transition-all duration-300 ${currentStep === index ? 'scale-105' : ''}`}>
                    <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-medium transition-all inline-flex items-center">
              <Calendar size={20} className="mr-2" />
              <a href='/contact'>Schedule Your Consultation</a>
            </button>
          </div>
        </div>
      </section>
      
  )
}

export default ProvenProcess