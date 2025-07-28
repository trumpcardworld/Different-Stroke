
"use client"
import { useState, useEffect } from "react"
import {
    Instagram,
    Layout,
    BookOpen,
    CreditCard,
    Megaphone,
    Monitor,
    Award,
    Image,
    MessageCircle,
    FileText,
    FileBarChart,
    Building,
    FolderOpen,
    Newspaper,
    FileCheck,
    Briefcase
} from "lucide-react"
import portfolioData from "../../../db/portfolio.json"

const GraphicPortfolio = () => {
    const [activeTab, setActiveTab] = useState("all")
    const [animateElements, setAnimateElements] = useState(false)
    const [selectedDesign, setSelectedDesign] = useState(null)

    // Get portfolio items from imported JSON
    const portfolioItems = portfolioData.portfolioItems

    // Define services based on the types in your JSON data
const services = [
    {
        id: "annual-reports",
        title: "Annual Reports",
        icon: <FileBarChart className="w-4 h-4" />
    },
    {
        id: "brochures-catalogues",
        title: "Brochures/Catalogues",
        icon: <FileText className="w-4 h-4" />
    },
    {
        id: "business-directories",
        title: "Business Directories",
        icon: <Building className="w-4 h-4" />
    },
    {
        id: "corporate-identity",
        title: "Corporate Identity",
        icon: <Award className="w-4 h-4" />
    },
    {
        id: "corporate-folders",
        title: "Corporate Folders",
        icon: <FolderOpen className="w-4 h-4" />
    },
    {
        id: "invitation-greeting-cards",
        title: "Invitation/Greeting Cards",
        icon: <MessageCircle className="w-4 h-4" />
    },
    {
        id: "news-magazine",
        title: "News Magazine",
        icon: <Newspaper className="w-4 h-4" />
    },
    {
        id: "speech-books",
        title: "Speech Books",
        icon: <BookOpen className="w-4 h-4" />
    },
    {
        id: "letter-head",
        title: "Letter Head",
        icon: <FileCheck className="w-4 h-4" />
    },
    {
        id: "advertisement-campaigns",
        title: "Advertisement Campaigns",
        icon: <Megaphone className="w-4 h-4" />
    },
    {
        id: "display-panels-signages",
        title: "Display Panels & Signages",
        icon: <Monitor className="w-4 h-4" />
    }
]

    useEffect(() => {
        setAnimateElements(true)

        // Simple animation for projects
        const interval = setInterval(() => {
            const randomProject = Math.floor(Math.random() * portfolioItems.length)
            setSelectedDesign(randomProject)
            setTimeout(() => setSelectedDesign(null), 2000)
        }, 3000)

        return () => clearInterval(interval)
    }, [portfolioItems])

    const filterPortfolio = (category) => {
        setActiveTab(category)
    }

    const filteredPortfolio = activeTab === "all" 
        ? portfolioItems 
        : portfolioItems.filter((item) => item.type === activeTab)

    if (portfolioItems.length === 0) {
        return (
            <section className="pt-16">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Portfolio</h1>
                            <p className="text-gray-600">No portfolio items available.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

  

    const getCategoryName = (type) => {
        const service = services.find(s => s.id === type)
        return service ? service.title : type.charAt(0).toUpperCase() + type.slice(1)
    }

    return (
        <main className="pt-16 mt-28">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-8">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800 leading-tight">
                            Our  <span className="text-orange-600">Portfolio</span>
                        </h2>
                        <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
                            Explore our diverse collection of creative work that has helped brands stand out, 
                            connect with their audience, and achieve remarkable results.
                        </p>

                        {/* Filter Tabs */}
                        <div className="flex flex-wrap justify-center gap-3 mt-12 mb-8">
                            <button
                                onClick={() => filterPortfolio("all")}
                                className={`group px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                                    activeTab === "all" 
                                        ? "bg-orange-600 text-white shadow-lg shadow-orange-600/30 scale-105" 
                                        : "bg-white text-slate-700 hover:bg-orange-50 hover:text-orange-600 shadow-md hover:shadow-lg border border-slate-200"
                                }`}
                            >
                                <Layout className="w-4 h-4" />
                                All Projects
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                    activeTab === "all" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-orange-100 group-hover:text-orange-600"
                                }`}>
                                    {portfolioItems.length}
                                </span>
                            </button>
                            {services.map((service) => {
                                const count = portfolioItems.filter(item => item.type === service.id).length
                                return (
                                    <button
                                        key={service.id}
                                        onClick={() => filterPortfolio(service.id)}
                                        className={`group px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                                            activeTab === service.id 
                                                ? "bg-orange-600 text-white shadow-lg shadow-orange-600/30 scale-105" 
                                                : "bg-white text-slate-700 hover:bg-orange-50 hover:text-orange-600 shadow-md hover:shadow-lg border border-slate-200"
                                        }`}
                                    >
                                        {service.icon}
                                        {service.title}
                                        <span className={`text-xs px-2 py-1 rounded-full ${
                                            activeTab === service.id ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-orange-100 group-hover:text-orange-600"
                                        }`}>
                                            {count}
                                        </span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredPortfolio.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="text-gray-400 text-6xl mb-4">📁</div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Projects Found</h3>
                            <p className="text-gray-600">Try selecting a different category to view projects.</p>
                        </div>
                    ) : (
                        <>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    {activeTab === "all" ? "All Projects" : `${getCategoryName(activeTab)} Projects`}
                                </h2>
                                <p className="text-gray-600">
                                    Showing {filteredPortfolio.length} project{filteredPortfolio.length !== 1 ? "s" : ""}
                                    {activeTab !== "all" && ` in ${getCategoryName(activeTab)}`}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredPortfolio.map((project, index) => (
                                    <div
                                        key={project.id || index}
                                        className={`group overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                                            selectedDesign === index ? "ring-2 ring-[#17688C] shadow-xl" : ""
                                        }`}
                                    >
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={project.image || "/api/placeholder/400/300"}
                                                alt={project.title}
                                                className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-300"
                                                onError={(e) => {
                                                    e.target.src = "/api/placeholder/400/300"
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"></div>
                                            
                                        </div>
                                        
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 flex-1">
                                                    {project.title}
                                                </h3>
                                            </div>
                                            
                                            {/* Client name */}
                                            {/* {project.client && (
                                                <p className="text-gray-600 text-sm mb-2">
                                                    Client: {project.client}
                                                </p>
                                            )} */}
                                            
                                            {/* Description if available */}
                                            {project.description && (
                                                <p className="text-gray-600 text-sm line-clamp-2">
                                                    {project.description}
                                                </p>
                                            )}
                                            
                                            {/* Year if available */}
                                            {project.year && (
                                                <div className="flex items-center text-sm text-gray-500 mt-2">
                                                    <span>{project.year}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>
        </main>
    )
}

export default GraphicPortfolio