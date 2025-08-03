import Nav from "../components/navbar/Nav.jsx";
import "../index.css";
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

import blueWhaleImg from "../Assets/bluewhale.jpg";
import whiteSharkImg from "../Assets/White_shark.webp";
import hawksbillTurtleImg from "../Assets/HawksbillTurtle.jpg";

// Comprehensive Blue Whale Data
const blueWhale = {
    name: "Blue Whale",
    scientificName: "Balaenoptera musculus",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Mammalia",
        order: "Artiodactyla",
        family: "Balaenopteridae",
        genus: "Balaenoptera",
        species: "B. musculus"
    },

    imageUrls: [blueWhaleImg, whiteSharkImg, hawksbillTurtleImg],
    
    conservationStatus: "endangered",
    population: "10,000-25,000 worldwide",
    
    depthOfExistence: "Surface to 500 meters (1,640 feet)",
    habitat: "Open oceans worldwide, preferring deeper waters",
    distribution: ["North Pacific", "North Atlantic", "Southern Ocean", "Indian Ocean"],

    size: "24-27 meters (79-89 feet) in length",
    weight: "100-200 tons (200,000-400,000 pounds)",
    
    lifecycle: "Sexual maturity at 5-15 years, gestation period of 10-12 months, lifespan of 80-90 years",
    
    sexuality: "Polygamous mating system, breed every 2-3 years",

    physicalCharacteristics: {
        length: "Up to 30 meters (98 feet)",
        weight: "Up to 200 tons",
        bodyType: "Streamlined, elongated body with pleated throat grooves",
        eyes: "Small relative to body size, located on sides of head",
        description: "Blue-gray coloration with lighter underside, massive heart weighing 400 pounds, tongue weighing 2.7 tons, and distinctive pleated throat grooves that expand when feeding"
    },

    diet: [
        "Krill (primarily Euphausia superba)",
        "Small schooling fish",
        "Copepods",
        "Can consume 4 tons of krill per day during feeding season"
    ],

    predators: [
        "Killer whales (Orcinus orca) - mainly calves",
        "Large sharks (rarely, mainly calves)",
        "Humans (historically through whaling)"
    ],

    intelligenceBehavior: "Complex communication through low-frequency calls (infrasound) that can travel hundreds of miles underwater. Shows sophisticated migration patterns and feeding strategies. Demonstrates social behaviors during feeding and mating.",

    reproduction: {
        strategy: "Polygamous, with males competing for females through song",
        gestation: "10-12 months",
        development: "Calves are born 7 meters long weighing 2.5-3 tons, nurse for 6-7 months"
    },

    funFacts: [
        "Largest animal ever known to exist on Earth",
        "Heart alone weighs as much as an automobile",
        "Tongue can weigh as much as an elephant",
        "Can eat up to 4 tons of krill in a single day",
        "Their calls can be heard from 1,000 miles away",
        "A human could crawl through their largest blood vessels",
        "They can hold their breath for up to 90 minutes",
        "Their brain weighs about 15 pounds"
    ],

    media: {
        images: [blueWhaleImg]
    },

    conservation: {
        status: "Endangered",
        threats: [
            "Ship strikes",
            "Entanglement in fishing gear",
            "Ocean noise pollution",
            "Climate change affecting krill populations",
            "Pollution and microplastics",
            "Reduced prey due to overfishing"
        ],
        researchNotes: "Protected under the Marine Mammal Protection Act and Endangered Species Act. International whaling moratorium has helped population recovery, but numbers remain critically low compared to pre-whaling estimates of 350,000."
    },

    relatedSpecies: [
        "Fin Whale (Balaenoptera physalus)",
        "Humpback Whale (Megaptera novaeangliae)",
        "Minke Whale (Balaenoptera acutorostrata)",
        "Sei Whale (Balaenoptera borealis)"
    ],

    about: "The blue whale is the largest animal ever known to have lived on Earth, reaching lengths of up to 30 meters and weights of up to 200 tons. These magnificent marine mammals are found in oceans worldwide and are known for their distinctive blue-gray coloration and enormous size. Blue whales are baleen whales, meaning they filter feed on tiny organisms like krill through baleen plates in their mouths. Despite their massive size, they feed almost exclusively on small, shrimp-like creatures called krill. Blue whales nearly went extinct due to whaling in the 20th century, with their population dropping to fewer than 5,000 individuals. Thanks to international protection, their numbers have slowly recovered, but they remain endangered with an estimated 10,000-25,000 individuals worldwide."
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

function SampleSpecies() {
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
        setCurrentImageIndex((prev) => (prev + 1) % blueWhale.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + blueWhale.imageUrls.length) % blueWhale.imageUrls.length);
    };

    const renderSection = () => {
        switch(activeSection) {
            case 'overview':
                return (
                    <div className="content-section space-y-6">
                        <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-cyan-400/30">
                            <div className="flex items-center mb-4">
                                <h3 className="text-3xl font-bold text-cyan-300">About the Blue Whale</h3>
                            </div>
                            <p className="text-cyan-100 leading-relaxed text-lg border-l-4 border-cyan-400 pl-6 bg-slate-700/30 p-4 rounded-r-lg">{blueWhale.about}</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-indigo-900/90 to-blue-800/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-blue-400/30 hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <h4 className="text-xl font-bold text-blue-300">Basic Information</h4>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-blue-400/20">
                                        <span className="font-semibold text-blue-200">Scientific Name:</span> 
                                        <span className="italic text-cyan-300">{blueWhale.scientificName}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-blue-400/20">
                                        <span className="font-semibold text-blue-200">Size:</span> 
                                        <span className="text-cyan-300">{blueWhale.size}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-blue-400/20">
                                        <span className="font-semibold text-blue-200">Weight:</span> 
                                        <span className="text-cyan-300">{blueWhale.weight}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-blue-400/20">
                                        <span className="font-semibold text-blue-200">Population:</span> 
                                        <span className="text-cyan-300">{blueWhale.population}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-blue-400/20">
                                        <span className="font-semibold text-blue-200">Habitat:</span> 
                                        <span className="text-cyan-300">{blueWhale.habitat}</span>
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
                                        <span className="text-cyan-300">{blueWhale.physicalCharacteristics.length}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-teal-400/20">
                                        <span className="font-semibold text-teal-200">Weight:</span> 
                                        <span className="text-cyan-300">{blueWhale.physicalCharacteristics.weight}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-teal-400/20">
                                        <span className="font-semibold text-teal-200">Body Type:</span> 
                                        <span className="text-cyan-300">{blueWhale.physicalCharacteristics.bodyType}</span>
                                    </div>
                                    <div className="p-3 bg-gradient-to-r from-teal-800/60 to-cyan-800/60 rounded-lg border-l-4 border-teal-400">
                                        <p className="text-sm text-teal-100 leading-relaxed">{blueWhale.physicalCharacteristics.description}</p>
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
                                {Object.entries(blueWhale.classification).map(([key, value]) => (
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
                                <p className="text-emerald-100 leading-relaxed text-lg">{blueWhale.intelligenceBehavior}</p>
                            </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-green-900/90 to-emerald-800/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-green-400/30 hover:shadow-green-500/20 hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <h4 className="text-xl font-bold text-green-300">Diet & Feeding</h4>
                                </div>
                                <div className="space-y-3">
                                    {blueWhale.diet.map((item, index) => (
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
                                        <span className="text-cyan-100 ml-2">{blueWhale.reproduction.strategy}</span>
                                    </div>
                                    <div className="p-4 bg-slate-700/60 rounded-lg border-l-4 border-cyan-400">
                                        <span className="font-semibold text-cyan-200">Gestation:</span> 
                                        <span className="text-cyan-100 ml-2">{blueWhale.reproduction.gestation}</span>
                                    </div>
                                    <div className="p-4 bg-slate-700/60 rounded-lg border-l-4 border-cyan-400">
                                        <span className="font-semibold text-cyan-200">Development:</span> 
                                        <span className="text-cyan-100 ml-2">{blueWhale.reproduction.development}</span>
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
                                <span className={`px-6 py-3 rounded-full text-white font-semibold text-lg shadow-xl ${ColorMap[blueWhale.conservationStatus.toLowerCase()]} border border-white/20`}>
                                    {blueWhale.conservation.status}
                                </span>
                            </div>
                            <div className="p-6 bg-slate-700/50 rounded-lg border-l-4 border-amber-400">
                                <p className="text-amber-100 leading-relaxed text-lg">{blueWhale.conservation.researchNotes}</p>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-red-900/90 to-pink-900/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-red-400/30">
                            <div className="flex items-center mb-6">
                                <h4 className="text-2xl font-bold text-red-300">Major Threats</h4>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                {blueWhale.conservation.threats.map((threat, index) => (
                                    <div key={index} className="flex items-start p-4 bg-gradient-to-r from-red-800/60 to-pink-800/60 rounded-lg border-l-4 border-red-400 hover:shadow-lg transition-all duration-200">
                                        <span className="text-red-100 font-medium">{threat}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-4 bg-gradient-to-r from-red-800/60 to-pink-800/60 rounded-lg border border-red-300/30">
                                <p className="text-red-200 text-center font-semibold">
                                    Ocean conservation is critical for the survival of marine species
                                </p>
                            </div>
                        </div>
                    </div>
                );
            
            case 'facts':
                return (
                    <div className="content-section">
                        <div className="bg-gradient-to-br from-purple-900/90 to-indigo-900/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-purple-400/30">
                            <div className="flex items-center mb-6">
                                <h3 className="text-3xl font-bold text-purple-300">Amazing Deep Ocean Facts</h3>
                            </div>
                            <div className="grid gap-6">
                                {blueWhale.funFacts.map((fact, index) => (
                                    <div key={index} className="flex items-start p-6 bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-xl border-l-4 border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                                            <span className="text-white text-xl font-bold">{index + 1}</span>
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-cyan-100 text-lg leading-relaxed">{fact}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 p-6 bg-gradient-to-r from-purple-800/60 to-blue-800/60 rounded-xl border border-purple-300/30">
                                <p className="text-purple-200 text-center text-lg font-semibold">
                                    Discover the mysteries of our ocean's most magnificent creatures
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
                        src={blueWhale.imageUrls[currentImageIndex]} 
                        alt={blueWhale.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-blue-900/70 to-indigo-950/80"></div>
                    {/* Deep ocean wave overlay effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-600/40 to-transparent"></div>
                    {/* Bioluminescent particles effect */}
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
                    <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">{blueWhale.name}</h1>
                    <p className="text-xl md:text-2xl mb-6 italic text-cyan-200">{blueWhale.scientificName}</p>
                    <div className="flex justify-center items-center space-x-6 flex-wrap">
                        <span className={`px-6 py-3 rounded-full text-white font-semibold text-lg shadow-2xl ${ColorMap[blueWhale.conservationStatus.toLowerCase()]} border border-white/30`}>
                            {blueWhale.conservation.status}
                        </span>
                        <span className="text-lg bg-slate-800/60 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-400/30 text-cyan-200">
                            Population: {blueWhale.population}
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
                {/* Deep ocean wave background pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent transform -skew-y-1"></div>
                    <div className="absolute bottom-0 right-0 w-full h-16 bg-gradient-to-r from-transparent via-teal-400/30 to-transparent transform skew-y-1"></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Related Deep Sea Species</h3>
                        <p className="text-cyan-200 text-lg">Explore other mysterious creatures of the dark ocean depths</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {blueWhale.relatedSpecies.map((species, index) => (
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

export default SampleSpecies;
