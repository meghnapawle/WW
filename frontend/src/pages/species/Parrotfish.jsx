import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

// Import images (using correct species images)
import parrotfishImg from '../../Assets/clownfish.jpeg'; // Will be replaced with direct URL
import dolphinImg from '../../Assets/dolphin.png';
import turtleImg from '../../Assets/turtle.png';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

// Comprehensive Parrotfish Data
const parrotfish = {
    name: "Parrotfish",
    scientificName: "Scaridae",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Actinopterygii",
        order: "Labriformes",
        family: "Scaridae",
        genus: "Various (90+ species)",
        species: "Multiple species"
    },

    imageUrls: ["/imges/parrotfish.png", "/imges/dolphin.png", "/imges/sea_turtle.png"],
    
    conservationStatus: "vulnerable",
    population: "Population varies by species, some declining",
    
    depthOfExistence: "Surface to 30 meters (98 feet)",
    habitat: "Coral reefs in tropical and subtropical waters",
    distribution: ["Indo-Pacific", "Atlantic Ocean", "Red Sea", "Caribbean"],

    size: "30-120 cm (1-4 feet) depending on species",
    weight: "0.5-20 kg (1-44 pounds)",
    
    lifecycle: "Sequential hermaphrodites, sexual maturity at 2-4 years, lifespan of 5-20 years",
    
    sexuality: "Sequential hermaphrodites - start as females, some change to males",

    physicalCharacteristics: {
        length: "30-120 cm depending on species",
        weight: "0.5-20 kg",
        bodyType: "Elongated, laterally compressed body with strong beak-like teeth",
        eyes: "Large eyes positioned on sides of head for wide field of vision",
        description: "Vibrant colors ranging from blue, green, pink to yellow. Distinctive fused teeth forming a beak-like structure for scraping algae from coral. Pharyngeal teeth grind coral into sand."
    },

    diet: [
        "Algae scraped from coral surfaces",
        "Dead coral (calcium carbonate)",
        "Small invertebrates",
        "Seagrass in some species",
        "Zooplankton (juveniles)"
    ],

    predators: [
        "Sharks (especially reef sharks)",
        "Groupers",
        "Barracuda",
        "Moray eels",
        "Humans (fishing pressure)"
    ],

    intelligenceBehavior: "Complex social behavior with hierarchical structures. Display territorial behavior during breeding. Some species form large spawning aggregations. Known for their role as 'ecosystem engineers' by maintaining coral reef health through algae removal.",

    reproduction: {
        strategy: "Broadcast spawning in groups, sequential hermaphroditism",
        gestation: "Eggs hatch in 24-48 hours",
        development: "Larvae are planktonic for 3-4 weeks before settling on reefs"
    },

    funFacts: [
        "Parrotfish produce up to 840 pounds of sand per fish per year",
        "They sleep in mucus cocoons for protection from predators",
        "Their beak-like teeth continuously grow throughout their lives",
        "Some species can change from female to male",
        "They are essential for coral reef health",
        "The white sand on tropical beaches is largely parrotfish poop",
        "They have pharyngeal teeth that act like a mill to grind coral",
        "Can live up to 20 years in the wild"
    ],

    media: {
        images: [parrotfishImg]
    },

    conservation: {
        status: "Vulnerable",
        threats: [
            "Overfishing and targeted fishing for food",
            "Coral reef degradation",
            "Climate change and ocean acidification",
            "Pollution and sedimentation",
            "Habitat destruction",
            "Coastal development"
        ],
        researchNotes: "Parrotfish are crucial for coral reef ecosystems as they control algae growth and create sand. Many Caribbean populations have declined by over 80% due to overfishing. Protection of parrotfish is essential for coral reef recovery and resilience."
    },

    relatedSpecies: [
        "Stoplight Parrotfish (Sparisoma viride)",
        "Blue Parrotfish (Scarus coeruleus)",
        "Rainbow Parrotfish (Scarus guacamaia)",
        "Princess Parrotfish (Scarus taeniopterus)"
    ],

    about: "Parrotfish are vibrant, tropical marine fish known for their beak-like teeth and crucial role in coral reef ecosystems. These colorful fish spend their days scraping algae from coral surfaces, inadvertently ingesting coral skeleton which they grind up and excrete as sand. A single parrotfish can produce hundreds of pounds of sand annually, contributing significantly to tropical beach formation. They are sequential hermaphrodites, typically starting life as females and some individuals changing to males as they mature. Parrotfish sleep at night in protective mucus cocoons and play a vital role in maintaining coral reef health by preventing algae overgrowth that could smother corals."
};

const ColorMap = {
    "critically endangered": "bg-gradient-to-r from-red-500 to-red-600",
    "endangered": "bg-gradient-to-r from-orange-400 to-red-500",
    "vulnerable": "bg-gradient-to-r from-yellow-400 to-amber-400",
    "near threatened": "bg-gradient-to-r from-lime-400 to-green-400",
    "least concern": "bg-gradient-to-r from-emerald-400 to-teal-400",
    "extinct": "bg-gradient-to-r from-gray-600 to-gray-700",
    "data deficient": "bg-gradient-to-r from-slate-400 to-slate-500"
};

function Parrotfish() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeSection, setActiveSection] = useState('overview');
    
    const heroRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        // Hero animation
        gsap.fromTo(heroRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );

        // Content sections animation
        gsap.fromTo(".content-section",
            { opacity: 0, y: 30 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                stagger: 0.2,
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 80%"
                }
            }
        );
    }, []);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % parrotfish.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + parrotfish.imageUrls.length) % parrotfish.imageUrls.length);
    };

    const renderSection = () => {
        switch(activeSection) {
            case 'overview':
                return (
                    <div className="content-section space-y-6">
                        <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-cyan-400/30">
                            <div className="flex items-center mb-4">
                                <h3 className="text-3xl font-bold text-cyan-300">About the Parrotfish</h3>
                            </div>
                            <p className="text-cyan-100 leading-relaxed text-lg border-l-4 border-cyan-400 pl-6 bg-slate-700/30 p-4 rounded-r-lg">{parrotfish.about}</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-indigo-900/90 to-blue-800/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-blue-400/30 hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <h4 className="text-xl font-bold text-blue-300">Basic Information</h4>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-blue-400/20">
                                        <span className="font-semibold text-blue-200">Scientific Name:</span> 
                                        <span className="italic text-cyan-300">{parrotfish.scientificName}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-blue-400/20">
                                        <span className="font-semibold text-blue-200">Size:</span> 
                                        <span className="text-cyan-300">{parrotfish.size}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-blue-400/20">
                                        <span className="font-semibold text-blue-200">Weight:</span> 
                                        <span className="text-cyan-300">{parrotfish.weight}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-blue-400/20">
                                        <span className="font-semibold text-blue-200">Population:</span> 
                                        <span className="text-cyan-300">{parrotfish.population}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-blue-400/20">
                                        <span className="font-semibold text-blue-200">Habitat:</span> 
                                        <span className="text-cyan-300">{parrotfish.habitat}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-teal-900/90 to-cyan-800/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-teal-400/30 hover:shadow-teal-500/20 hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <h4 className="text-xl font-bold text-teal-300">Physical Characteristics</h4>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-teal-400/20">
                                        <span className="font-semibold text-teal-200">Length:</span> 
                                        <span className="text-cyan-300">{parrotfish.physicalCharacteristics.length}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-teal-400/20">
                                        <span className="font-semibold text-teal-200">Weight:</span> 
                                        <span className="text-cyan-300">{parrotfish.physicalCharacteristics.weight}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-teal-400/20">
                                        <span className="font-semibold text-teal-200">Body Type:</span> 
                                        <span className="text-cyan-300">{parrotfish.physicalCharacteristics.bodyType}</span>
                                    </div>
                                    <div className="p-3 bg-gradient-to-r from-teal-800/60 to-cyan-800/60 rounded-lg border-l-4 border-teal-400">
                                        <p className="text-sm text-teal-100 leading-relaxed">{parrotfish.physicalCharacteristics.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            
            case 'classification':
                return (
                    <div className="content-section">
                        <div className="bg-gradient-to-br from-indigo-900/90 to-purple-900/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-indigo-400/30">
                            <div className="flex items-center mb-6">
                                <h3 className="text-3xl font-bold text-indigo-300">Taxonomic Classification</h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {Object.entries(parrotfish.classification).map(([key, value]) => (
                                    <div key={key} className="flex justify-between items-center p-4 bg-slate-700/70 rounded-lg border-l-4 border-indigo-400 hover:bg-slate-600/70 transition-all duration-200">
                                        <span className="font-semibold capitalize text-indigo-200">{key}:</span>
                                        <span className="italic text-cyan-300 font-medium">{value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-4 bg-gradient-to-r from-indigo-800/60 to-purple-800/60 rounded-lg border border-indigo-300/30">
                                <p className="text-indigo-100 text-center">
                                    Complete scientific classification showing the evolutionary relationship and taxonomic hierarchy
                                </p>
                            </div>
                        </div>
                    </div>
                );
            
            case 'behavior':
                return (
                    <div className="content-section space-y-6">
                        <div className="bg-gradient-to-br from-emerald-900/90 to-teal-900/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-emerald-400/30">
                            <div className="flex items-center mb-4">
                                <h3 className="text-3xl font-bold text-emerald-300">Behavior & Intelligence</h3>
                            </div>
                            <div className="p-6 bg-slate-700/50 rounded-lg border-l-4 border-emerald-400">
                                <p className="text-emerald-100 leading-relaxed text-lg">{parrotfish.intelligenceBehavior}</p>
                            </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-green-900/90 to-emerald-800/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-green-400/30 hover:shadow-green-500/20 hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <h4 className="text-xl font-bold text-green-300">Diet & Feeding</h4>
                                </div>
                                <div className="space-y-3">
                                    {parrotfish.diet.map((item, index) => (
                                        <div key={index} className="flex items-start p-3 bg-slate-700/60 rounded-lg border-l-4 border-green-400">
                                            <span className="text-green-100">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-cyan-900/90 to-blue-800/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-cyan-400/30 hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <h4 className="text-xl font-bold text-cyan-300">Reproduction</h4>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-4 bg-slate-700/60 rounded-lg border-l-4 border-cyan-400">
                                        <span className="font-semibold text-cyan-200">Strategy:</span> 
                                        <span className="text-cyan-100 ml-2">{parrotfish.reproduction.strategy}</span>
                                    </div>
                                    <div className="p-4 bg-slate-700/60 rounded-lg border-l-4 border-cyan-400">
                                        <span className="font-semibold text-cyan-200">Gestation:</span> 
                                        <span className="text-cyan-100 ml-2">{parrotfish.reproduction.gestation}</span>
                                    </div>
                                    <div className="p-4 bg-slate-700/60 rounded-lg border-l-4 border-cyan-400">
                                        <span className="font-semibold text-cyan-200">Development:</span> 
                                        <span className="text-cyan-100 ml-2">{parrotfish.reproduction.development}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            
            case 'conservation':
                return (
                    <div className="content-section space-y-6">
                        <div className="bg-gradient-to-br from-amber-900/90 to-orange-900/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-amber-400/30">
                            <div className="flex items-center mb-4">
                                <h3 className="text-3xl font-bold text-amber-300">Conservation Status</h3>
                            </div>
                            <div className="flex items-center mb-6">
                                <span className={`px-6 py-3 rounded-full text-white font-semibold text-lg shadow-xl ${ColorMap[parrotfish.conservationStatus.toLowerCase()]} border border-white/20`}>
                                    {parrotfish.conservation.status}
                                </span>
                            </div>
                            <div className="p-6 bg-slate-700/50 rounded-lg border-l-4 border-amber-400">
                                <p className="text-amber-100 leading-relaxed text-lg">{parrotfish.conservation.researchNotes}</p>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-red-900/90 to-pink-900/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-red-400/30">
                            <div className="flex items-center mb-6">
                                <h4 className="text-2xl font-bold text-red-300">Major Threats</h4>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                {parrotfish.conservation.threats.map((threat, index) => (
                                    <div key={index} className="flex items-start p-4 bg-gradient-to-r from-red-800/60 to-pink-800/60 rounded-lg border-l-4 border-red-400 hover:shadow-lg transition-all duration-200">
                                        <span className="text-red-100 font-medium">{threat}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-4 bg-gradient-to-r from-red-800/60 to-pink-800/60 rounded-lg border border-red-300/30">
                                <p className="text-red-200 text-center font-semibold">
                                    Coral reef conservation is critical for parrotfish survival
                                </p>
                            </div>
                        </div>
                    </div>
                );
            
            case 'facts':
                return (
                    <div className="content-section">
                        <div className="bg-gradient-to-br from-purple-900/90 to-pink-900/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-purple-400/30">
                            <div className="flex items-center mb-6">
                                <h3 className="text-3xl font-bold text-purple-300">Amazing Fun Facts</h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {parrotfish.funFacts.map((fact, index) => (
                                    <div key={index} className="p-6 bg-gradient-to-br from-purple-800/60 to-pink-800/60 rounded-lg border-l-4 border-purple-400 hover:shadow-lg transition-all duration-200 hover:transform hover:scale-105">
                                        <p className="text-purple-100 leading-relaxed font-medium">{fact}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 p-6 bg-gradient-to-r from-purple-800/60 to-pink-800/60 rounded-lg border border-purple-300/30">
                                <p className="text-purple-200 text-center text-lg font-semibold">
                                    Parrotfish are true ocean architects, building the beaches we love!
                                </p>
                            </div>
                        </div>
                    </div>
                );
            
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-indigo-950">
            <Nav />
            
            {/* Hero Section */}
            <div ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src={parrotfish.imageUrls[currentImageIndex]} 
                        alt={parrotfish.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-blue-900/70 to-indigo-950/80"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-600/40 to-transparent"></div>
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
                        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                    </div>
                </div>
                
                {/* Image Navigation */}
                <button 
                    onClick={prevImage}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-slate-800/60 to-blue-800/60 hover:from-slate-700/80 hover:to-blue-700/80 text-cyan-300 p-4 rounded-full transition-all duration-300 z-10 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-300/50"
                >
                    <span className="text-2xl">←</span>
                </button>
                <button 
                    onClick={nextImage}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-800/60 to-slate-800/60 hover:from-blue-700/80 hover:to-slate-700/80 text-cyan-300 p-4 rounded-full transition-all duration-300 z-10 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-300/50"
                >
                    <span className="text-2xl">→</span>
                </button>
                
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">{parrotfish.name}</h1>
                    <p className="text-xl md:text-2xl mb-6 italic text-cyan-200">{parrotfish.scientificName}</p>
                    <div className="flex justify-center items-center space-x-6 flex-wrap">
                        <span className={`px-6 py-3 rounded-full text-white font-semibold text-lg shadow-2xl ${ColorMap[parrotfish.conservationStatus.toLowerCase()]} border border-white/30`}>
                            {parrotfish.conservation.status}
                        </span>
                        <span className="text-lg bg-slate-800/60 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-400/30 text-cyan-200">
                            Habitat: {parrotfish.habitat}
                        </span>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="sticky top-0 z-50 bg-gradient-to-r from-slate-900/95 to-blue-900/95 backdrop-blur-md shadow-2xl border-b border-cyan-400/30">
                <div className="container mx-auto px-6">
                    <div className="flex space-x-2 overflow-x-auto py-4">
                        {[
                            { id: 'overview', label: 'Overview' },
                            { id: 'classification', label: 'Classification' },
                            { id: 'behavior', label: 'Behavior' },
                            { id: 'conservation', label: 'Conservation' },
                            { id: 'facts', label: 'Fun Facts' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveSection(tab.id)}
                                className={`whitespace-nowrap px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                                    activeSection === tab.id
                                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-xl transform scale-105 border border-cyan-300/50'
                                        : 'text-cyan-300 hover:bg-gradient-to-r hover:from-slate-800/60 hover:to-blue-800/60 hover:text-cyan-200 border border-transparent hover:border-cyan-400/30'
                                }`}
                            >
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div ref={contentRef} className="container mx-auto px-6 py-12">
                {renderSection()}
            </div>

            {/* Related Species */}
            <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent transform -skew-y-1"></div>
                    <div className="absolute bottom-0 right-0 w-full h-16 bg-gradient-to-r from-transparent via-teal-400/30 to-transparent transform skew-y-1"></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Related Reef Species</h3>
                        <p className="text-cyan-200 text-lg">Explore other colorful inhabitants of coral reefs</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {parrotfish.relatedSpecies.map((species, index) => (
                            <div key={index} className="bg-gradient-to-br from-slate-800/60 to-blue-800/40 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-gradient-to-br hover:from-slate-700/80 hover:to-blue-700/60 transition-all duration-300 cursor-pointer group border border-cyan-400/20 hover:shadow-2xl hover:shadow-cyan-500/20 hover:transform hover:scale-105">
                                <h4 className="font-semibold text-lg text-cyan-200 group-hover:text-cyan-100 transition-colors">{species}</h4>
                                <p className="text-cyan-400 text-sm mt-2 opacity-80">Dive deeper to explore</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Parrotfish;
