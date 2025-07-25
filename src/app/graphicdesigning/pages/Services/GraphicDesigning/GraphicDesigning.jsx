// "use client"
// import Link from "next/link";
// import Image from "next/image";
// const Expertise = () => {
//   const stats = [
//     {
//       number: "30+",
//       label: "Years of Experience"
//     },
//     {
//       number: "200",
//       label: "Global Clients"
//     },
//     {
//       number: "15",
//       label: "Industries Served"
//     }
//   ];

//   return (
//     <section className="py-24 mt-40 relative overflow-hidden">
//       {/* Subtle background pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: "radial-gradient(#F59E0B 1px, transparent 1px)",
//           backgroundSize: "30px 30px"
//         }}></div>
//       </div>
      
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex flex-col lg:flex-row gap-16 items-stretch">
//           {/* Left side - Image & Stats */}
//           <div className="lg:w-7/12">
//             <div className="sticky top-24 space-y-8">
//               {/* Main image with frame */}
//               <div className="relative">
//                 <div className="absolute -top-3 -left-3 right-8 bottom-8 border-2 border-amber-400 rounded-lg"></div>
//                 <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
//                   <Image 
//                     src="/images/Home/2.1.jpg" 
//                     alt="Exhibition Design Expertise" 
//                     width={250}
//                     height={250}
//                     className="w-full aspect-[6/] object-cover object-center"
//                   />
//                 </div>
//               </div>
//               <p>
//                   Our brilliant designers excel in stall design, fabrication, poster design, and signage creation. We &apos ve designed award-winning stalls worldwide—in China, Germany, Canada, Dubai, and beyond—with meticulous attention to detail.
//                 </p>
                
//                 <blockquote className="border-l-4 border-amber-300 pl-4 italic">
//                   We work in such a way that ensures our customers' complete satisfaction and happiness.
//                 </blockquote>
              
//               {/* Stats cards */}
//               <div className="grid grid-cols-3 gap-4">
//                 {stats.map((stat, index) => (
//                   <div 
//                     key={index} 
//                     className="bg-white rounded-lg p-4 shadow-md border border-gray-100 hover:border-amber-200 transition-all duration-300"
//                   >
//                     <div className="text-2xl lg:text-3xl font-bold text-amber-500 mb-1">
//                       {stat.number}
//                     </div>
//                     <div className="text-xs text-gray-600">
//                       {stat.label}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//           {/* Right side - Content */}
//           <div className="lg:w-7/12">
//             <div className="space-y-10">
//               {/* Section header */}
//               <div>
//                 <h3 className="text-amber-500 font-medium uppercase tracking-wider mb-3">Our Expertise</h3>
//                 <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
//                   Strategic Business Innovation
//                 </h2>
//                 <div className="w-16 h-1 bg-amber-500"></div>
//               </div>
              
//               {/* Main content */}
//               <div className="prose prose-lg max-w-none text-gray-600">
//                 <p className="text-xl font-light leading-relaxed">
//                   <span className="font-medium text-gray-800">Over 30 years</span> of exploring has established us as experts in creative design. Different Strokes has emerged as a leader in trade show booths and exhibition stall designing.
//                 </p>
                
//                 <p>
//                   We understand the impression your business needs at national and international exhibitions. Our motto is creating exceptional designs that capture attention and engage audiences meaningfully.
//                 </p>
                
//                 {/* Process */}
//                 <div className="my-10 bg-gray-50 rounded-lg p-6">
//                   <h4 className="text-gray-800 font-semibold mb-6">Our Process:</h4>
//                   <div className="flex flex-wrap justify-between gap-y-6">
//                     {[
//                       { name: 'Concept', desc: 'Understanding your needs' },
//                       { name: 'Design', desc: 'Creating visual solutions' },
//                       { name: 'Execute', desc: 'Bringing designs to life' },
//                       { name: 'Deliver', desc: 'Timely, flawless implementation' }
//                     ].map((step, index) => (
//                       <div key={index} className="flex items-start space-x-3">
//                         <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-400 text-white flex items-center justify-center font-bold">
//                           {index + 1}
//                         </div>
//                         <div>
//                           <h5 className="font-medium text-gray-800">{step.name}</h5>
//                           <p className="text-sm text-gray-500">{step.desc}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
              
//               {/* Call to action */}
//               <div className="pt-4">
//                 <Link 
//                 href="/ourworks/exclusive"
//                  className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow transition-colors duration-300"
//                  onClick={(e) => {
//                   e.stopPropagation();
//                 }}>
//                   Explore Our Projects
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Expertise;











































// "use client"

// import { useState, useEffect } from "react"
// import {
//   ArrowRightCircle,
//   CheckCircle,
//   ThumbsUp,
//   Zap,
//   Star,
// } from "lucide-react"

// export default function GraphicDesignServices() {
//   const [activeTab, setActiveTab] = useState("all")
//   const [animateElements, setAnimateElements] = useState(false)
//   const [selectedDesign, setSelectedDesign] = useState(null)

//   return (
//     <div className="bg-slate-50 min-h-screen mt-40">
//       {/* Hero Section */}
//       <section className="relative pt-8 pb-20 overflow-hidden">
//         {/* Background design elements */}
//         <div className="absolute right-0 top-20 w-1/3 h-64 bg-orange-100 rounded-l-full opacity-50"></div>
//         <div className="absolute left-0 bottom-20 w-1/4 h-48 bg-orange-100 rounded-r-full opacity-50"></div>

//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row items-center">
//             <div className="lg:w-1/2 z-10">
//               <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
//                 Elevate Your Brand With <span className="text-orange-500">Stunning Graphics</span>
//               </h1>
//               <p className="text-lg text-slate-600 mb-8 max-w-lg">
//                 From eye-catching logos to comprehensive brand collateral, our design services transform your vision
//                 into visual excellence.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="bg-orange-500 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-medium transition-all flex items-center justify-center">
//                   Explore Our Services
//                   <ArrowRightCircle className="ml-2" size={20} />
//                 </button>
//                 <button className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-full font-medium transition-all">
//                   View Portfolio
//                 </button>
//               </div>

//               <div className="mt-12 flex items-center">
//                 <div className="flex">
//                   {[...Array(3)].map((_, i) => (
//                     <div
//                       key={i}
//                       className="w-8 h-8 rounded-full border-2 border-white overflow-hidden -ml-2 first:ml-0"
//                       style={{ zIndex: 3 - i }}
//                     >
//                       <div className={`w-full h-full bg-orange-${300 + i * 100}`}></div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="ml-4">
//                   <p className="font-semibold">Trusted by 500+ brands</p>
//                   <div className="flex items-center">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
//                     ))}
//                     <span className="ml-1 text-sm text-slate-600">4.9/5</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
//               <div className="grid grid-cols-2 gap-4">
//                 <div
//                   className={`h-72 rounded-lg bg-gradient-to-br from-orange-400 to-purple-500 relative overflow-hidden shadow-xl ${animateElements ? "transform transition-all duration-700 hover:scale-105" : ""}`}
//                 >
//                   <div className="absolute inset-0 opacity-20">
//                     <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center">
//                       <img src="/api/placeholder/400/600" alt="Logo Design" className="w-full h-full object-cover" />
//                     </div>
//                   </div>
//                   <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
//                     <h3 className="text-white font-bold">Logo Design</h3>
//                     <p className="text-white/80 text-sm">Brand identity systems</p>
//                   </div>
//                   {selectedDesign === 5 && (
//                     <div className="absolute inset-0 bg-orange-600/80 flex items-center justify-center animate-pulse">
//                       <div className="text-white text-center">
//                         <CheckCircle size={40} className="mx-auto mb-2" />
//                         <p className="font-bold">Featured Work</p>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 <div
//                   className={`h-72 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 relative overflow-hidden shadow-xl ${animateElements ? "transform transition-all duration-700 delay-100 hover:scale-105" : ""}`}
//                 >
//                   <div className="absolute inset-0 opacity-20">
//                     <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center">
//                       <img
//                         src="/api/placeholder/400/600"
//                         alt="Brochure Design"
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>
//                   <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
//                     <h3 className="text-white font-bold">Brochure Design</h3>
//                     <p className="text-white/80 text-sm">Print & digital materials</p>
//                   </div>
//                   {selectedDesign === 0 && (
//                     <div className="absolute inset-0 bg-emerald-600/80 flex items-center justify-center animate-pulse">
//                       <div className="text-white text-center">
//                         <CheckCircle size={40} className="mx-auto mb-2" />
//                         <p className="font-bold">Featured Work</p>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 <div
//                   className={`h-72 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 relative overflow-hidden shadow-xl ${animateElements ? "transform transition-all duration-700 delay-200 hover:scale-105" : ""}`}
//                 >
//                   <div className="absolute inset-0 opacity-20">
//                     <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center">
//                       <img src="/api/placeholder/400/600" alt="Social Media" className="w-full h-full object-cover" />
//                     </div>
//                   </div>
//                   <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
//                     <h3 className="text-white font-bold">Social Media</h3>
//                     <p className="text-white/80 text-sm">Engaging content design</p>
//                   </div>
//                   {selectedDesign === 3 && (
//                     <div className="absolute inset-0 bg-amber-600/80 flex items-center justify-center animate-pulse">
//                       <div className="text-white text-center">
//                         <CheckCircle size={40} className="mx-auto mb-2" />
//                         <p className="font-bold">Featured Work</p>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 <div
//                   className={`h-72 rounded-lg bg-gradient-to-br from-blue-400 to-sky-500 relative overflow-hidden shadow-xl ${animateElements ? "transform transition-all duration-700 delay-300 hover:scale-105" : ""}`}
//                 >
//                   <div className="absolute inset-0 opacity-20">
//                     <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center">
//                       <img src="/api/placeholder/400/600" alt="Business Cards" className="w-full h-full object-cover" />
//                     </div>
//                   </div>
//                   <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
//                     <h3 className="text-white font-bold">Business Cards</h3>
//                     <p className="text-white/80 text-sm">Professional impressions</p>
//                   </div>
//                   {selectedDesign === 1 && (
//                     <div className="absolute inset-0 bg-blue-600/80 flex items-center justify-center animate-pulse">
//                       <div className="text-white text-center">
//                         <CheckCircle size={40} className="mx-auto mb-2" />
//                         <p className="font-bold">Featured Work</p>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Floating elements */}
//               <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
//                 <div className="flex items-center">
//                   <Zap className="text-yellow-500 mr-2" size={20} />
//                   <span className="font-medium">Quick turnaround</span>
//                 </div>
//               </div>

//               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
//                 <div className="flex items-center">
//                   <ThumbsUp className="text-green-500 mr-2" size={20} />
//                   <span className="font-medium">Unlimited revisions</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

    
//     </div>
//   )
// }













"use client"

import { useState, useEffect } from "react"
import {
  ArrowRightCircle,
  CheckCircle,
  ThumbsUp,
  Zap,
  Star,
} from "lucide-react"

export default function GraphicDesignServices() {
  const [animateElements, setAnimateElements] = useState(true)
  const [selectedDesign, setSelectedDesign] = useState(null)

  // Design service images with real URLs instead of placeholders
  const designImages = {
    logoDesign: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    brochureDesign: "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?auto=format&fit=crop&w=800&q=80",
    socialMedia: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    businessCards: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=800&q=80"
  }

  // Add fallback handling for image loading issues
  const handleImageError = (e) => {
    e.target.onerror = null;
    const designType = e.target.alt.replace(" ", "+");
    const colors = {
      "Logo Design": "FF8A65/FFFFFF",
      "Brochure Design": "26A69A/FFFFFF",
      "Social Media": "FFB74D/FFFFFF",
      "Business Cards": "29B6F6/FFFFFF"
    };
    const color = colors[e.target.alt] || "CCCCCC/FFFFFF";
    e.target.src = `https://via.placeholder.com/400x600/${color}?text=${designType}`;
  };

  return (
    <div className="bg-slate-50 min-h-screen mt-40">
      {/* Hero Section */}
      <section className="relative pt-8 pb-20 overflow-hidden">
        {/* Background design elements */}
        <div className="absolute right-0 top-20 w-1/3 h-64 bg-orange-100 rounded-l-full opacity-50"></div>
        <div className="absolute left-0 bottom-20 w-1/4 h-48 bg-orange-100 rounded-r-full opacity-50"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 z-10">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Elevate Your Brand With <span className="text-orange-500">Stunning Graphics</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg">
                From eye-catching logos to comprehensive brand collateral, our design services transform your vision
                into visual excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-medium transition-all flex items-center justify-center">
                  Explore Our Services
                  <ArrowRightCircle className="ml-2" size={20} />
                </button>
                <button className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-full font-medium transition-all">
                  View Portfolio
                </button>
              </div>

              <div className="mt-12 flex items-center">
                <div className="flex">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white overflow-hidden -ml-2 first:ml-0"
                      style={{ zIndex: 3 - i }}
                    >
                      <div className={`w-full h-full bg-orange-${300 + i * 100}`}></div>
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Trusted by 500+ brands</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-1 text-sm text-slate-600">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Design services image grid - Mobile optimized */}
            <div className="lg:w-1/2 w-full mt-12 lg:mt-0 relative">
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {/* Logo Design */}
                <div
                  className={`h-40 sm:h-72 rounded-lg relative overflow-hidden shadow-xl ${
                    animateElements ? "transform transition-all duration-700 hover:scale-105" : ""
                  }`}
                >
                  <div className="absolute inset-0">
                    <img 
                      src={designImages.logoDesign} 
                      alt="Logo Design" 
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white font-bold text-sm sm:text-base">Logo Design</h3>
                    <p className="text-white/80 text-xs sm:text-sm">Brand identity systems</p>
                  </div>
                  {selectedDesign === 5 && (
                    <div className="absolute inset-0 bg-orange-600/80 flex items-center justify-center animate-pulse">
                      <div className="text-white text-center">
                        <CheckCircle size={28} className="mx-auto mb-1 sm:mb-2 sm:size-40" />
                        <p className="font-bold text-xs sm:text-base">Featured Work</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Brochure Design */}
                <div
                  className={`h-40 sm:h-72 rounded-lg relative overflow-hidden shadow-xl ${
                    animateElements ? "transform transition-all duration-700 delay-100 hover:scale-105" : ""
                  }`}
                >
                  <div className="absolute inset-0">
                    <img 
                      src={designImages.brochureDesign} 
                      alt="Brochure Design" 
                      className="w-full h-full object-cover" 
                      onError={handleImageError}
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white font-bold text-sm sm:text-base">Brochure Design</h3>
                    <p className="text-white/80 text-xs sm:text-sm">Print & digital materials</p>
                  </div>
                  {selectedDesign === 0 && (
                    <div className="absolute inset-0 bg-emerald-600/80 flex items-center justify-center animate-pulse">
                      <div className="text-white text-center">
                        <CheckCircle size={28} className="mx-auto mb-1 sm:mb-2 sm:size-40" />
                        <p className="font-bold text-xs sm:text-base">Featured Work</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Social Media */}
                <div
                  className={`h-40 sm:h-72 rounded-lg relative overflow-hidden shadow-xl ${
                    animateElements ? "transform transition-all duration-700 delay-200 hover:scale-105" : ""
                  }`}
                >
                  <div className="absolute inset-0">
                    <img 
                      src={designImages.socialMedia} 
                      alt="Social Media" 
                      className="w-full h-full object-cover" 
                      onError={handleImageError}
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white font-bold text-sm sm:text-base">Social Media</h3>
                    <p className="text-white/80 text-xs sm:text-sm">Engaging content design</p>
                  </div>
                  {selectedDesign === 3 && (
                    <div className="absolute inset-0 bg-amber-600/80 flex items-center justify-center animate-pulse">
                      <div className="text-white text-center">
                        <CheckCircle size={28} className="mx-auto mb-1 sm:mb-2 sm:size-40" />
                        <p className="font-bold text-xs sm:text-base">Featured Work</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Business Cards */}
                <div
                  className={`h-40 sm:h-72 rounded-lg  relative overflow-hidden shadow-xl ${
                    animateElements ? "transform transition-all duration-700 delay-300 hover:scale-105" : ""
                  }`}
                >
                  <div className="absolute inset-0">
                    <img 
                      src={designImages.businessCards} 
                      alt="Business Cards" 
                      className="w-full h-full object-cover" 
                      onError={handleImageError}
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white font-bold text-sm sm:text-base">Business Cards</h3>
                    <p className="text-white/80 text-xs sm:text-sm">Professional impressions</p>
                  </div>
                  {selectedDesign === 1 && (
                    <div className="absolute inset-0 bg-blue-600/80 flex items-center justify-center animate-pulse">
                      <div className="text-white text-center">
                        <CheckCircle size={28} className="mx-auto mb-1 sm:mb-2 sm:size-40" />
                        <p className="font-bold text-xs sm:text-base">Featured Work</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating elements - adjusted for mobile */}
              <div className="absolute -top-4 sm:-top-6 right-0 sm:-right-6 bg-white p-2 sm:p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Zap className="text-yellow-500 mr-1 sm:mr-2" size={16} />
                  <span className="font-medium text-xs sm:text-base">Quick turnaround</span>
                </div>
              </div>

              <div className="absolute -bottom-4 sm:-bottom-6 left-0 sm:-left-6 bg-white p-2 sm:p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <ThumbsUp className="text-green-500 mr-1 sm:mr-2" size={16} />
                  <span className="font-medium text-xs sm:text-base">Unlimited revisions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}