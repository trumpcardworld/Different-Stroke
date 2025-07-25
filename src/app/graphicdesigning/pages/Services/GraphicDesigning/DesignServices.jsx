// "use client"
// import { useState, useEffect } from "react"
// import {
//     Instagram,
//     Layout,
//     BookOpen,
//     CreditCard,
//     Award,
//   } from "lucide-react"

// const DesignServices = () => {
//     const [hoveredService, setHoveredService] = useState(null)
//     const [animateElements, setAnimateElements] = useState(false)


//     const services = [
//         {
//           id: "brochure",
//           title: "Brochure Design",
//           icon: <BookOpen className="text-orange-500" size={32} />,
//           description: "Compelling brochures that communicate your brand story and convert prospects into customers",
//           details: ["Tri-fold brochures", "Bi-fold brochures", "Z-fold designs", "Booklet style", "Digital & print-ready"],
//         },
//         {
//           id: "cards",
//           title: "Business Cards",
//           icon: <CreditCard className="text-orange-500" size={32} />,
//           description: "Memorable business cards that make lasting impressions and showcase your professional identity",
//           details: ["Standard cards", "Folded cards", "Die-cut designs", "Spot UV finish", "Premium materials"],
//         },
       
//         {
//           id: "social",
//           title: "Social Media",
//           icon: <Instagram className="text-orange-500" size={32} />,
//           description: "Scroll-stopping social media graphics that boost engagement and strengthen your online presence",
//           details: ["Platform-specific sizes", "Post templates", "Story designs", "Profile graphics", "Ad creatives"],
//         },
//         {
//           id: "catalogue",
//           title: "Catalogue Design",
//           icon: <Layout className="text-orange-500" size={32} />,
//           description: "Stunning product catalogues that showcase your offerings with beautiful layouts and typography",
//           details: [
//             "Product catalogues",
//             "Service brochures",
//             "Digital catalogues",
//             "Interactive PDFs",
//             "E-commerce ready",
//           ],
//         },
//         {
//           id: "logo",
//           title: "Logo Design",
//           icon: <Award className="text-orange-500" size={32} />,
//           description: "Distinctive logos and brand identities that capture your essence and build recognition",
//           details: ["Logo concepts", "Brand guidelines", "Icon designs", "Logo variations", "Brand identity systems"],
//         },
//       ]

//   return (
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Design Services</h2>
//             <p className="text-slate-600 max-w-2xl mx-auto">
//               We offer comprehensive graphic design solutions to elevate your brand across all touchpoints.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={service.id}
//                 className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-slate-100 hover:border-orange-200 group ${animateElements ? "transform transition-all duration-700 hover:-translate-y-2" : ""}`}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//                 onMouseEnter={() => setHoveredService(index)}
//                 onMouseLeave={() => setHoveredService(null)}
//               >
//                 <div
//                   className={`w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6 transition-transform ${hoveredService === index ? "scale-110" : ""}`}
//                 >
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{service.title}</h3>
//                 <p className="text-slate-600 mb-4">{service.description}</p>

//                 <ul className="space-y-2 mb-6">
//                   {service.details.map((detail, i) => (
//                     <li key={i} className="flex items-start">
//                       <div className="text-orange-500 mr-2">
//                         <svg
//                           className="w-4 h-4 mt-1"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                         </svg>
//                       </div>
//                       <span className="text-sm text-slate-600">{detail}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* <div className="pt-4 border-t border-slate-100">
//                   <a
//                     href={`#${service.id}`}
//                     className="text-orange-600 font-medium flex items-center group-hover:underline"
//                   >
//                     Learn more <ArrowRightCircle size={16} className="ml-2 group-hover:ml-3 transition-all" />
//                   </a>
//                 </div> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//   )
// }

// export default DesignServices























// "use client"
// import { useState, useEffect } from "react"
// import {
//   Instagram,
//   Layout,
//   BookOpen,
//   CreditCard,
//   Award,
//   Sparkles
// } from "lucide-react"

// const DesignServices = () => {
//   const [hoveredService, setHoveredService] = useState(null)
//   const [animateElements, setAnimateElements] = useState(false)
  
//   useEffect(() => {
//     setAnimateElements(true)
//   }, [])

//   const services = [
//     {
//       id: "brochure",
//       title: "Brochure Design",
//       icon: <BookOpen className="text-orange-500" size={32} />,
//       description: "Compelling brochures that communicate your brand story and convert prospects into customers",
//       details: ["Tri-fold brochures", "Bi-fold brochures", "Z-fold designs", "Booklet style", "Digital & print-ready"],
//     },
//     {
//       id: "cards",
//       title: "Business Cards",
//       icon: <CreditCard className="text-orange-500" size={32} />,
//       description: "Memorable business cards that make lasting impressions and showcase your professional identity",
//       details: ["Standard cards", "Folded cards", "Die-cut designs", "Spot UV finish", "Premium materials"],
//     },
//     {
//       id: "social",
//       title: "Social Media",
//       icon: <Instagram className="text-orange-500" size={32} />,
//       description: "Scroll-stopping social media graphics that boost engagement and strengthen your online presence",
//       details: ["Platform-specific sizes", "Post templates", "Story designs", "Profile graphics", "Ad creatives"],
//     },
//     {
//       id: "catalogue",
//       title: "Catalogue Design",
//       icon: <Layout className="text-orange-500" size={32} />,
//       description: "Stunning product catalogues that showcase your offerings with beautiful layouts and typography",
//       details: [
//         "Product catalogues",
//         "Service brochures",
//         "Digital catalogues",
//         "Interactive PDFs",
//         "E-commerce ready",
//       ],
//     },
//     {
//       id: "logo",
//       title: "Logo Design",
//       icon: <Award className="text-orange-500" size={32} />,
//       description: "Distinctive logos and brand identities that capture your essence and build recognition",
//       details: ["Logo concepts", "Brand guidelines", "Icon designs", "Logo variations", "Brand identity systems"],
//     },
//   ]

//   return (
//     <section className="py-20 ">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16 relative">
//           <Sparkles className="absolute -top-8 right-1/2 transform translate-x-24 text-orange-400" size={28} />
//           <h2 className="text-3xl lg:text-5xl p-2 font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">Our Design Services</h2>
//           <p className="text-slate-600 max-w-2xl mx-auto">
//             We offer comprehensive graphic design solutions to elevate your brand across all touchpoints.
//           </p>
//           <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-300 rounded-full mx-auto mt-6"></div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={service.id}
//               className={`flip-card ${animateElements ? "animate-fade-in" : ""}`}
//               style={{ animationDelay: `${index * 150}ms` }}
//             >
//               <div className="flip-card-inner">
//                 {/* Front of Card */}
//                 <div className="flip-card-front">
//                   <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
//                     {service.icon}
//                   </div>
//                   <h3 className="text-xl font-bold mb-3">{service.title}</h3>
//                   <p className="text-slate-600 mb-8">{service.description}</p>
                  
//                   <div className="absolute bottom-6 inset-x-0">
//                     <div className="flex items-center justify-center">
//                       <span className="text-sm text-orange-500 font-medium flex items-center">
//                         <span className="mr-1">Hover to see details</span>
//                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M15 15L21 21M21 21V15M21 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                           <path d="M9 9L3 3M3 3V9M3 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Back of Card */}
//                 <div className="flip-card-back">
//                   <h3 className="text-xl font-bold mb-6 text-orange-600 border-b border-orange-200 pb-2">{service.title} Details</h3>
                  
//                   <ul className="space-y-3 mb-8">
//                     {service.details.map((detail, i) => (
//                       <li key={i} className="flex items-start flip-detail-item" style={{ animationDelay: `${i * 100 + 300}ms` }}>
//                         <div className="text-orange-500 mr-2">
//                           <svg
//                             className="w-5 h-5 mt-0.5"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                           </svg>
//                         </div>
//                         <span className="text-base text-slate-700">{detail}</span>
//                       </li>
//                     ))}
//                   </ul>
                  
//                   <div className="absolute bottom-6 inset-x-0">
//                     <div className="flex items-center justify-center">
//                       <a 
//                         href={`#${service.id}`}
//                         className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
//                       >
//                         Learn more
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <style jsx global>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes fadeSlideUp {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         .animate-fade-in {
//           animation: fadeIn 0.6s ease-out forwards;
//         }
        
//         .flip-detail-item {
//           opacity: 0;
//           animation: fadeSlideUp 0.4s ease-out forwards;
//         }
        
//         /* Flip Card Styles */
//         .flip-card {
//           background-color: transparent;
//           perspective: 1000px;
//           height: 420px;
//           cursor: pointer;
//         }
        
//         .flip-card-inner {
//           position: relative;
//           width: 100%;
//           height: 85%;
//           text-align: center;
//           transition: transform 0.8s;
//           transform-style: preserve-3d;
//           box-shadow: 0 4px 8px rgba(0,0,0,0.1);
//           border-radius: 12px;
//         }
        
//         .flip-card:hover .flip-card-inner {
//           transform: rotateY(180deg);
//         }
        
//         .flip-card-front, .flip-card-back {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           -webkit-backface-visibility: hidden; /* Safari */
//           backface-visibility: hidden;
//           border-radius: 12px;
//           padding: 1.5rem;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }
        
//         .flip-card-front {
//           background: white;
//           border: 1px solid #f1f1f1;
//         }
        
//         .flip-card-back {
//           background: linear-gradient(145deg, #fff5eb, #ffffff);
//           border: 1px solid #fed7aa;
//           transform: rotateY(180deg);
//           text-align: left;
//         }
//       `}</style>
//     </section>
//   )
// }

// export default DesignServices




































"use client"
import { useState, useEffect } from "react"
import {
  Instagram,
  Layout,
  BookOpen,
  CreditCard,
  Award,
  Sparkles,
  Palette,
  Building,
  FileText,
  Image,
  Printer,
  Video,
  Camera,
  Gift,
  TrendingUp
} from "lucide-react"

const DesignServices = () => {
  const [hoveredService, setHoveredService] = useState(null)
  const [animateElements, setAnimateElements] = useState(false)
  
  useEffect(() => {
    setAnimateElements(true)
  }, [])

  const services = [
    {
      id: "graphic",
      title: "Graphic Designing",
      icon: <Palette className="text-orange-500" size={32} />,
      description: "Complete visual design solutions including brochures, business cards, social media graphics, and catalogs",
      details: ["Brochure design", "Business cards", "Social media graphics", "Catalogue design", "Logo design"],
    },
    {
      id: "corporate-identity",
      title: "Corporate Identity",
      icon: <Building className="text-orange-500" size={32} />,
      description: "Build a strong brand identity that represents your company's values and creates lasting impressions",
      details: ["Brand identity systems", "Logo development", "Brand guidelines", "Corporate colors", "Typography standards"],
    },
    {
      id: "corporate-profile",
      title: "Corporate Profile",
      icon: <FileText className="text-orange-500" size={32} />,
      description: "Professional company profiles that effectively communicate your business story and capabilities",
      details: ["Company profiles", "Corporate brochures", "Annual reports", "Capability statements", "Executive summaries"],
    },
    {
      id: "product-catalogues",
      title: "Product Catalogues",
      icon: <Layout className="text-orange-500" size={32} />,
      description: "Stunning product catalogues that showcase your offerings with beautiful layouts and compelling visuals",
      details: [
        "Product catalogues",
        "Service brochures", 
        "Digital catalogues",
        "Interactive PDFs",
        "E-commerce ready",
      ],
    },
    {
      id: "posters",
      title: "Posters Printing",
      icon: <Image className="text-orange-500" size={32} />,
      description: "High-quality poster printing for marketing campaigns, events, and promotional activities",
      details: ["Event posters", "Promotional posters", "Marketing materials", "Campaign graphics", "Custom sizes"],
    },
    {
      id: "films",
      title: "Corporate Films & Media",
      icon: <Video className="text-orange-500" size={32} />,
      description: "Professional video production services for corporate films, documentaries, advertisements and promotional content",
      details: ["Corporate films", "Documentaries", "Ad films", "Promotional videos", "Brand storytelling"],
    },
    {
      id: "large-format",
      title: "Large Format Printing",
      icon: <Printer className="text-orange-500" size={32} />,
      description: "High-quality large format digital printing for banners, signage, and exhibition materials",
      details: ["Banner printing", "Signage solutions", "Exhibition graphics", "Vehicle wraps", "Outdoor advertising"],
    },
    {
      id: "photography",
      title: "Photography",
      icon: <Camera className="text-orange-500" size={32} />,
      description: "Professional photography services for products, corporate events, and marketing materials",
      details: ["Product photography", "Corporate headshots", "Event photography", "Architectural photography", "Commercial shoots"],
    },
    {
      id: "promotional",
      title: "Promotional",
      icon: <Gift className="text-orange-500" size={32} />,
      description: "Creative promotional materials and campaigns that drive engagement and boost brand visibility",
      details: ["Promotional campaigns", "Marketing materials", "Brand activations", "Event promotions", "Digital campaigns"],
    },
    {
      id: "brand-management",
      title: "Brand Management",
      icon: <TrendingUp className="text-orange-500" size={32} />,
      description: "Comprehensive brand management services to build, maintain and grow your brand presence",
      details: ["Brand strategy", "Brand positioning", "Brand monitoring", "Brand guidelines", "Brand consistency"],
    },
  ]

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <Sparkles className="absolute -top-8 right-1/2 transform translate-x-24 text-orange-400" size={28} />
          <h2 className="text-3xl lg:text-5xl p-2 font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">Our Design Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We offer comprehensive graphic design solutions to elevate your brand across all touchpoints.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-300 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flip-card ${animateElements ? "animate-fade-in" : ""}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flip-card-inner">
                {/* Front of Card */}
                <div className="flip-card-front">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-8">{service.description}</p>
                  
                  <div className="absolute bottom-6 inset-x-0">
                    <div className="flex items-center justify-center">
                      <span className="text-sm text-orange-500 font-medium flex items-center">
                        <span className="mr-1">Hover to see details</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 15L21 21M21 21V15M21 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9 9L3 3M3 3V9M3 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="flip-card-back">
                  <h3 className="text-xl font-bold mb-6 text-orange-600 border-b border-orange-200 pb-2">{service.title} </h3>
                  
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start flip-detail-item" style={{ animationDelay: `${i * 100 + 300}ms` }}>
                        <div className="text-orange-500 mr-2">
                          <svg
                            className="w-5 h-5 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-base text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="absolute bottom-6 inset-x-0">
                    <div className="flex items-center justify-center">
                      {/* <a 
                        href={`#${service.id}`}
                        className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
                      >
                        Learn more
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .flip-detail-item {
          opacity: 0;
          animation: fadeSlideUp 0.4s ease-out forwards;
        }
        
        /* Flip Card Styles */
        .flip-card {
          background-color: transparent;
          perspective: 1000px;
          height: 420px;
          cursor: pointer;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 85%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          border-radius: 12px;
        }
        
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden; /* Safari */
          backface-visibility: hidden;
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .flip-card-front {
          background: white;
          border: 1px solid #f1f1f1;
        }
        
        .flip-card-back {
          background: linear-gradient(145deg, #fff5eb, #ffffff);
          border: 1px solid #fed7aa;
          transform: rotateY(180deg);
          text-align: left;
        }
      `}</style>
    </section>
  )
}

export default DesignServices