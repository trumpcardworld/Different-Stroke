import { desc } from 'framer-motion/client';
import { ArrowRightCircle } from 'lucide-react';

const OurPortfolio = () => {
  const projects = [
    {
      name: "Epic Elevator",
      image:  "/ourwork/domestic/2024/Epic_ISSE_2024/1.jpg",
      desc:  "ISSE 2024",
    },
    {
      name: "Meghmani Organics Ltd",
      image: "/ourwork/international/2023/China Coat 2023/Meghmani Organics Ltd/1.jpg",
      desc:  "China Coat 2023",         
    },
    {
      name: "Trimble",
      image: "/ourwork/domestic/2023/Trimble_Geosmart_India_2023/1.jpg",
      desc:  "Geosmart India 2023",
    },
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
            <div key={index} className="group relative h-98 rounded-xl overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="opacity-90 mb-2">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/exhibition/ourworks/international"
            className="text-orange-600 font-medium text-lg hover:underline inline-flex items-center"
          >
            View All Projects <ArrowRightCircle size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;
