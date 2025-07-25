import { ArrowRightCircle } from 'lucide-react';

const OurPortfolio = () => {

  const projects = [
    {
      name: "TechVision Expo",
      desc: "Futuristic booth with interactive holographic displays",
      color: "bg-gray-600"
    },
    {
      name: "GreenEarth Summit",
      desc: "Sustainable design using recycled materials and living walls",
      color: "bg-gray-600"
    },
    {
      name: "Luxury Brand Showcase",
      desc: "Elegant minimalist design with premium materials",
      color: "bg-gray-600"
    }
  ];
  return (
    
      
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Browse our award-winning exhibition designs that have helped brands stand out and engage attendees.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative h-96 rounded-xl overflow-hidden shadow-lg">
                <div className={`absolute inset-0 ${project.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                <div className="absolute inset-0 bg-[url('/images/service_booth.jpg')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="opacity-90 mb-4">{project.desc}</p>
                  <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-white text-slate-800 px-4 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all">
                      View Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="/ourworks/international" className="text-orange-600 font-medium text-lg hover:underline inline-flex items-center">
              View All Projects <ArrowRightCircle size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

  )
}

export default OurPortfolio