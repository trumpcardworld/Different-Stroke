"use client"
import Image from "next/image";


const ServiceSection = () => {
  const services = [
    {
      id: 1,
      image: "/images/Home/biocon.jpg",
      title: "Biocon CPHI Worldwide",
      location: "Madrid, Spain 2018",
      href:"/exhibition/ourworks/exclusive"
    },
    {
      id: 2,
      image: "/images/Home/gharda.jpg",
      title: "Gharda Chemicals Limited",
      location: "Shangai, China 2017",
      href:"/exhibition/ourworks/international"
    },
    {
      id: 3,
      image: "/images/Home/meghmani.jpg",
      title: "Meghmani Finchem Chemspec",
      location: "Mumbai, India 2015",
      href:"/exhibition/ourworks/national"
    },
  ];

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Top gray background */}
      <div className="absolute top-0 left-0 right-0 h-[370px] bg-[#f6f2eb] z-0" />
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section title */}
        <div className="text-center mb-20">
          <h3 className="text-2xl font-semibold mb-2">Our Works</h3>
          <h2 className="text-3xl font-bold">Services We're Providing</h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-[#ebe5db] rounded-lg p-5 transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Image container */}
              <div className="relative -mt-5 mb-6 overflow-hidden rounded-lg">
                <div className="aspect-w-16 aspect-h-12">
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
                <h3 className="text-2xl font-bold mb-2">
                  <a href="#" className="text-[#333029] hover:text-[#666] transition-colors duration-200">
                    {service.title}
                  </a>
                </h3>
                <p className="text-gray-600 mb-4">{service.location}</p>

                {/* Read more button */}
                <div className="relative -mb-[45px]">
                  <a
                    href={service.href}
                    className="inline-block w-12 h-12 rounded-full  bg-orange-100 hover:bg-orange-500 hover:text-white transition-colors duration-200"
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

export default ServiceSection;