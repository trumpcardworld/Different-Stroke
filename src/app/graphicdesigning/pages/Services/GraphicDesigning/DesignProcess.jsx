"use client"
import { useState } from "react"
import {
    PenTool,
    MousePointer,
    CheckCircle,
    Download,
    Coffee,
    ArrowRightCircle
  } from "lucide-react"

const DesignProcess = () => {

     const [animateElements, setAnimateElements] = useState(false)
    
  const processSteps = [
    {
      icon: <Coffee size={32} className="text-orange-500" />,
      title: "Discovery",
      description: "We learn about your brand, goals, target audience, and specific project requirements.",
    },
    {
      icon: <PenTool size={32} className="text-orange-500" />,
      title: "Concept Development",
      description: "Our designers create initial concepts based on your brief and brand guidelines.",
    },
    {
      icon: <MousePointer size={32} className="text-orange-500" />,
      title: "Refinement",
      description: "We refine the selected concept through collaborative feedback and iterations.",
    },
    {
      icon: <CheckCircle size={32} className="text-orange-500" />,
      title: "Finalization",
      description: "Designs are finalized and prepared for all required formats and platforms.",
    },
    {
      icon: <Download size={32} className="text-orange-500" />,
      title: "Delivery",
      description: "Final files are delivered along with any guidelines for implementation.",
    },
  ]

  return (
        <section className="py-20 bg-gradient-to-br from-orange-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Design Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We follow a streamlined approach to deliver exceptional results that exceed expectations.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block h-1 bg-orange-200 absolute top-24 left-0 right-0 z-0"></div>

              <div className="grid md:grid-cols-5 gap-8">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col items-center text-center ${animateElements ? "transform transition-all duration-700" : ""}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center z-10 mb-4 border-2 border-orange-100">
                      {step.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
          <div className="mt-20 text-center">
          <a
            href="/graphicdesigning/portfolio"
            className="text-orange-600 font-medium text-lg hover:underline inline-flex items-center"
          >
            View All Projects <ArrowRightCircle size={20} className="ml-2" />
          </a>
        </div>
      </section>
  )
}

export default DesignProcess