"use client"
import Image from "next/image";


const GraphicDesignServices = () => {
  const services = [
    {
      id: 1,
      image: "/images/Home/brand-identity.jpg",
      title: "Brand Identity & Logo Design",
      location: "Complete Visual Identity Solutions",
      href:"/services/branding"
    },
    {
      id: 2,
      image: "/images/Home/marketing-collateral.jpg",
      title: "Marketing Collateral Design",
      location: "Print & Digital Collaterals",
      href:"/services/marketing"
    },
    {
      id: 3,
      image: "/images/Home/packaging-design.jpg",
      title: "Packaging & Product Design",
      location: "Creative Product Solutions",
      href:"/services/packaging"
    },
  ];

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Top orange background */}
      <div className="absolute top-0 left-0 right-0 h-[370px] bg-orange-50 z-0" />
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section title */}
        <div className="text-center mb-20">
          <h3 className="text-2xl font-semibold mb-2 text-orange-500">Our Works</h3>
          <h2 className="text-3xl font-bold text-gray-900">Services We're Providing</h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-orange-200 rounded-lg p-5 transition-all duration-300 hover:shadow-xl hover:border-orange-300"
            >
              {/* Image container */}
              <div className="relative -mt-5 mb-6 overflow-hidden rounded-lg">
                <div className="aspect-w-16 aspect-h-12">
                  {/* Placeholder for service images - replace with actual images */}
                  
                  
                  {/* Alternative: Uncomment when you have actual images */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="text-center px-5">
                <h3 className="text-2xl font-bold mb-4">
                  <a href="#" className="text-gray-900 hover:text-orange-500 transition-colors duration-200">
                    {service.title}
                  </a>
                </h3>
                <p className="text-gray-600 mb-6">{service.location}</p>

                {/* Read more button */}
                <div className="relative -mb-[0px]">
                  <a
                    href={service.href}
                    className="inline-block w-12 h-12 rounded-full bg-orange-100 hover:bg-orange-500 hover:text-white transition-all duration-200 transform hover:scale-105"
                  > 
                    
                    <div className="rotate-180 h-full flex items-center justify-center">
                      <span className="text-2xl">↑</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignServices;