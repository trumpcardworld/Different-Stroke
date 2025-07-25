"use client"
import { useState, useEffect } from "react"
import {
    Instagram,
    Layout,
    BookOpen,
    CreditCard,
    Award,
  
  } from "lucide-react"

const GraphicPortfolio = () => {

    const [activeTab, setActiveTab] = useState("all")
    const [animateElements, setAnimateElements] = useState(false)
    const [selectedDesign, setSelectedDesign] = useState(null)


    useEffect(() => {
        setAnimateElements(true)

        // Simple animation for projects
        const interval = setInterval(() => {
            const randomProject = Math.floor(Math.random() * portfolioItems.length)
            setSelectedDesign(randomProject)
            setTimeout(() => setSelectedDesign(null), 2000)
        }, 3000)

        return () => clearInterval(interval)
    }, [])


    const portfolioItems = [
        {
            type: "brochure",
            title: "Eco Product Brochure",
            client: "GreenTech Solutions",
            color: "bg-emerald-500",
        },
        {
            type: "cards",
            title: "Minimalist Business Card",
            client: "Modern Architects",
            color: "bg-slate-700",
        },
        {
            type: "greetings",
            title: "Holiday Greeting Cards",
            client: "Global Enterprises",
            color: "bg-red-500",
        },
        {
            type: "social",
            title: "Instagram Campaign",
            client: "FashionForward",
            color: "bg-purple-500",
        },
        {
            type: "catalogue",
            title: "Product Catalogue",
            client: "Luxury Homeware",
            color: "bg-amber-500",
        },
        {
            type: "logo",
            title: "Tech Company Rebrand",
            client: "InnovateX",
            color: "bg-blue-500",
        },
        {
            type: "brochure",
            title: "Travel Destination Guide",
            client: "Adventure Tours",
            color: "bg-cyan-500",
        },
        {
            type: "social",
            title: "Facebook Ad Campaign",
            client: "Organic Foods",
            color: "bg-teal-500",
        },
    ]

    const services = [
        {
          id: "brochure",
          title: "Brochure Design",
          icon: <BookOpen className="text-orange-500" size={32} />,
          description: "Compelling brochures that communicate your brand story and convert prospects into customers",
          details: ["Tri-fold brochures", "Bi-fold brochures", "Z-fold designs", "Booklet style", "Digital & print-ready"],
        },
        {
          id: "cards",
          title: "Business Cards",
          icon: <CreditCard className="text-orange-500" size={32} />,
          description: "Memorable business cards that make lasting impressions and showcase your professional identity",
          details: ["Standard cards", "Folded cards", "Die-cut designs", "Spot UV finish", "Premium materials"],
        },
       
        {
          id: "social",
          title: "Social Media",
          icon: <Instagram className="text-orange-500" size={32} />,
          description: "Scroll-stopping social media graphics that boost engagement and strengthen your online presence",
          details: ["Platform-specific sizes", "Post templates", "Story designs", "Profile graphics", "Ad creatives"],
        },
        {
          id: "catalogue",
          title: "Catalogue Design",
          icon: <Layout className="text-orange-500" size={32} />,
          description: "Stunning product catalogues that showcase your offerings with beautiful layouts and typography",
          details: [
            "Product catalogues",
            "Service brochures",
            "Digital catalogues",
            "Interactive PDFs",
            "E-commerce ready",
          ],
        },
        {
          id: "logo",
          title: "Logo Design",
          icon: <Award className="text-orange-500" size={32} />,
          description: "Distinctive logos and brand identities that capture your essence and build recognition",
          details: ["Logo concepts", "Brand guidelines", "Icon designs", "Logo variations", "Brand identity systems"],
        },
      ]




    const filterPortfolio = (type) => {
        setActiveTab(type)
    }

    const filteredPortfolio =
        activeTab === "all" ? portfolioItems : portfolioItems.filter((item) => item.type === activeTab)

    return (


        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Portfolio</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Explore our creative work that has helped brands stand out and connect with their audience.
                    </p>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mt-8">
                        <button
                            onClick={() => filterPortfolio("all")}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === "all" ? "bg-orange-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                        >
                            All Projects
                        </button>
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => filterPortfolio(service.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === service.id ? "bg-orange-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                            >
                                {service.title}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredPortfolio.map((item, index) => (
                        <div
                            key={index}
                            className={`group relative h-64 rounded-xl overflow-hidden shadow-lg ${animateElements ? "transform transition-all duration-700 hover:scale-105" : ""}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div
                                className={`absolute inset-0 ${item.color} opacity-90 group-hover:opacity-100 transition-opacity`}
                            ></div>
                            <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay">
                                <img src="/api/placeholder/400/500" alt={item.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                <p className="opacity-90 text-sm mb-4">{item.client}</p>
                                <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <button className="bg-white text-slate-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">
                                        View Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="#" className="text-orange-600 font-medium text-lg hover:underline inline-flex items-center">
                        {/* View Complete Portfolio <ArrowRightCircle size={20} className="ml-2" /> */}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default GraphicPortfolio