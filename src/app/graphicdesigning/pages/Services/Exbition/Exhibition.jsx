// "use client"

// import React, { useState } from 'react';
// import { Palette, Tag, Megaphone, Printer, LightbulbIcon } from 'lucide-react';

// const Capabilities = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const services = [
//     {
//       icon: <Palette className="w-12 h-12" />,
//       title: "Design Solutions",
//       description: "When the competition is fierce and the markets have gone global, everything that goes for your business. Everything, right from business cards to brochures, handouts, e-mailers, websites and other marketing communications is an important tool for image building."
//     },
//     {
//       icon: <Tag className="w-12 h-12" />,
//       title: "Branding Solutions",
//       description: "Branding is a must and it is crucial, you know it. Different Strokes applies a balanced blend of marketing strategy and innovative ideation in establishing a brand in the market. We work with you in building a unique brand image for your business."
//     },
//     {
//       icon: <LightbulbIcon className="w-12 h-12" />,
//       title: "Consultancy",
//       description: "When in doubt, ask us. Let us know your problems and we shall put our experience, expertise and resources at work to churn out the best possible solution for your business problem."
//     },
//     {
//       icon: <Megaphone className="w-12 h-12" />,
//       title: "Advertising Campaigns",
//       description: "A lot can be sold over advertisements, if they are catchy. Different Strokes offers a complete range of advertising services to promote the product/service of domestic as well as international clients encompassing industrial as well FMCG clients."
//     },
//     {
//       icon: <Printer className="w-12 h-12" />,
//       title: "Print Solutions",
//       description: "Different Strokes possesses more than a decade of experience in delivering high-quality printing solutions that match with the international standards. We provides the Brochures, catalogs, annual reports, invitation cards, stationery or anything else."
//     }
//   ];

//   return (
//     <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 mt-36 relative overflow-hidden">
//       {/* Background 3D Grid */}
//       <div 
//         className="absolute inset-0 opacity-5"
//         style={{
//           backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(251, 191, 36, 0.3) 25%, rgba(251, 191, 36, 0.3) 26%, transparent 27%, transparent 74%, rgba(251, 191, 36, 0.3) 75%, rgba(251, 191, 36, 0.3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(251, 191, 36, 0.3) 25%, rgba(251, 191, 36, 0.3) 26%, transparent 27%, transparent 74%, rgba(251, 191, 36, 0.3) 75%, rgba(251, 191, 36, 0.3) 76%, transparent 77%, transparent)',
//           backgroundSize: '50px 50px',
//           transform: 'perspective(1000px) rotateX(60deg) scale(2)',
//           transformOrigin: '50% 0%'
//         }}
//       />

//       <div className="max-w-6xl mx-auto px-4 relative">
//         <div className="grid grid-cols-1 gap-16">
//           {services.map((service, index) => (
//             <div 
//               key={index}
//               className="relative animate-slideDown"
//               style={{
//                 animation: `slideDown 0.6s ease-out ${index * 0.2}s backwards`
//               }}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {/* Enhanced connecting lines */}
//               {index < services.length - 1 && (
//                 <div className="hidden lg:block absolute bottom-0 left-1/2 w-0.5 h-16">
//                   <div className="h-full w-full bg-gradient-to-b from-amber-500/20 to-transparent animate-pulse" />
//                   <div className="absolute top-0 left-1/2 w-2 h-2 bg-amber-500 rounded-full -translate-x-1/2 animate-bounce" />
//                 </div>
//               )}
              
//               <div className={`flex ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
//                 <div 
//                   className={`
//                     relative
//                     bg-white rounded-xl
//                     transition-all duration-500 ease-out
//                     p-8 w-full lg:w-[60%] 
//                     border-l-4 border-amber-500 
//                     flex flex-col 
//                     ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
//                     items-start md:items-center gap-6
//                     transform perspective-1000
//                     hover:z-10
//                   `}  
//                   style={{
//                     transform: hoveredIndex === index 
//                       ? `perspective(2000px) rotateX(${index % 2 === 0 ? '4deg' : '-4deg'}) rotateY(${index % 2 === 0 ? '2deg' : '-2deg'}) translateZ(40px) scale(1.02)`
//                       : 'perspective(2000px) rotateX(0) rotateY(0) translateZ(0) scale(1)',
//                     boxShadow: hoveredIndex === index 
//                       ? '0 30px 60px rgba(251, 191, 36, 0.1), 0 8px 24px rgba(251, 191, 36, 0.4), 0 0 0 2px rgba(251, 191, 36, 0.1)'
//                       : '0 10px 20px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.02)',
//                     transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
//                   }}
//                 > 
//                   {/* Enhanced background effect */}
//                   <div 
//                     className={`
//                       absolute inset-0 transition-all duration-500
//                       rounded-xl overflow-hidden
//                       ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
//                     `}
//                     style={{
//                       background: `
//                         radial-gradient(
//                           circle at ${index % 2 === 0 ? '30%' : '70%'} 50%,
//                           rgba(251, 191, 36, 0.12) 0%,
//                           rgba(251, 191, 36, 0.06) 35%,
//                           transparent 70%
//                         )
//                       `,
//                       backdropFilter: 'blur(4px)'
//                     }}
//                   />
                  
//                   <div className={`
//                     flex-shrink-0 text-amber-500
//                     transition-all duration-500
//                     relative z-10
//                     ${hoveredIndex === index ? 'scale-125 rotate-12' : 'scale-100 rotate-0'}
//                   `}
//                     style={{
//                       filter: hoveredIndex === index ? 'drop-shadow(0 8px 16px rgba(251, 191, 36, 0.5))' : 'none'
//                     }}
//                   >
//                     {service.icon}
//                   </div>
                  
//                   <div className={`
//                     flex-grow 
//                     ${index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'} 
//                     relative z-10
//                     transition-transform duration-500
//                     ${hoveredIndex === index ? 'translate-y-1' : ''}
//                   `}>
//                     <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
//                       {service.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       {service.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-100px) scale(0.8);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Capabilities;




























"use client"
import { ArrowRightCircle, CheckCircle, Calendar } from 'lucide-react';

export default function ExhibitionBoothService() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-10 font-sans mt-12 overflow-hidden">
      {/* Hero Section */}
      <div className="relative pt-20 lg:pt-0">
        {/* Background Elements - Contained within viewport */}
        <div className="absolute right-0 top-20 w-1/3 h-64 bg-orange-100 rounded-l-full opacity-50 max-w-full"></div>
        <div className="absolute left-0 bottom-20 w-1/4 h-48 bg-orange-100 rounded-r-full opacity-50 max-w-full"></div>
        
        <div className="container mx-auto px-3 lg:min-h-screen flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10 py-12 lg:py-0">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Exhibition Presence
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              From captivating 3D designs to flawless execution, we craft unforgettable exhibition booths that turn visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all flex items-center justify-center">
                <a href="/ourworks/national" className="flex items-center">
                  See Our Portfolio
                  <ArrowRightCircle className="ml-2" size={20} />
                </a>
              </button>
              <button className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-full font-medium transition-all">
                <a href='/contact'>Book Consultation</a>
              </button>
            </div>
            
            <div className="mt-12 flex items-center">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white overflow-hidden -ml-2 first:ml-0`} style={{ zIndex: 4-i }}>
                    <div className={`w-full h-full bg-orange-${300 + (i * 100)}`}></div>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="font-semibold">Trusted by 200+ companies</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-slate-600">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative px-2 md:px-4">
            <div className="relative z-10">
              <div className="w-full h-80 sm:h-96 lg:h-[500px] rounded-xl shadow-lg overflow-hidden">
                {/* Direct image with proper attributes for mobile visibility */}
                <img 
                  src="/images/service_booth.jpg"
                  alt="Exhibition Booth Design"
                  className="w-full h-full object-cover rounded-xl"
                  loading="eager"
                />
              </div>
              
              {/* Floating elements - Positioned to prevent overflow */}
              <div className="absolute -top-4 sm:-top-6 lg:-top-8 right-0 sm:-right-4 lg:-right-8 bg-white p-3 sm:p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={18} />
                  <span className="font-medium text-sm sm:text-base">Design Approved</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 left-0 sm:-left-4 lg:-left-8 bg-white p-3 sm:p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Calendar className="text-orange-500 mr-2" size={18} />
                  <span className="font-medium text-sm sm:text-base">Ready in 3 weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}