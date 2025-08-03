import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

// Import images (using available images from Assets folder)
import manOWarImg from '../../Assets/animal_image2.jpg';
import dolphinImg from '../../Assets/dolphin.png';
import turtleImg from '../../Assets/turtle.png';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

// Comprehensive Portuguese Man o' War Data
const manOWar = {
    name: "Portuguese Man o' War",
    scientificName: "Physalia physalis",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Cnidaria",
        class: "Hydrozoa",
        order: "Siphonophorae",
        family: "Physaliidae",
        genus: "Physalia",
        species: "P. physalis"
    },

    imageUrls: ["/imges/man_o_war.png", "/imges/dolphin.png", "/imges/sea_turtle.png"],
    
    conservationStatus: "least concern",
    population: "Stable, widespread in warm oceans",
    
    depthOfExistence: "Surface waters (floating)",
    habitat: "Open ocean surface in warm waters worldwide",
    distribution: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Mediterranean Sea"],

    size: "Float: 15-30 cm (6-12 inches), Tentacles: up to 50 meters (165 feet)",
    weight: "Float weighs about 1 gram when dry",
    
    lifecycle: "Colonial organism with specialized polyps, lifespan unknown but estimated weeks to months",
    
    sexuality: "Both sexual and asexual reproduction, hermaphroditic reproductive polyps",

    physicalCharacteristics: {
        length: "Float: 15-30 cm, Tentacles: up to 50 meters",
        weight: "Extremely light, mostly water",
        bodyType: "Colonial siphonophore with gas-filled float and long tentacles",
        eyes: "No eyes, but sensitive to light and chemical stimuli",
        description: "Translucent blue gas-filled bladder (pneumatophore) that acts as a sail. Long blue tentacles armed with venomous nematocysts. Not a single animal but a colony of specialized organisms called zooids."
    },

    diet: [
        "Small fish (especially flying fish)",
        "Larval fish",
        "Shrimp and other crustaceans",
        "Squid larvae",
        "Zooplankton"
    ],

    predators: [
        "Sea turtles (especially loggerheads)",
        "Ocean sunfish (Mola mola)",
        "Blanket octopus",
        "Nudibranchs",
        "Purple sea snails (Janthina)"
    ],

    intelligenceBehavior: "Lacks a central nervous system but shows coordinated behavior among colony members. Responds to environmental stimuli and can adjust float height. Uses wind and currents for movement. Tentacles automatically respond to prey contact.",

    reproduction: {
        strategy: "Complex colonial reproduction with both sexual and asexual phases",
        gestation: "Reproductive polyps release eggs and sperm into water",
        development: "Larvae develop into new colonies through budding and specialization"
    },

    funFacts: [
        "Not actually a jellyfish - it's a colonial organism",
        "Made up of four different types of specialized polyps",
        "Can deliver painful stings even when dead",
        "Its float acts like a sail, earning it the name 'Man o' War'",
        "Tentacles can stretch longer than a blue whale",
        "Cannot swim - completely dependent on wind and currents",
        "Venom can be fatal to small fish and painful to humans",
        "Found in warm waters around the world"
    ],

    media: {
        images: [manOWarImg]
    },

    conservation: {
        status: "Least Concern",
        threats: [
            "Plastic pollution (mistaken for prey by predators)",
            "Climate change affecting ocean currents",
            "Ocean acidification",
            "Pollution from chemicals and oil spills",
            "Beach cleanup efforts (beneficial removal)"
        ],
        researchNotes: "Portuguese Man o' War populations appear stable and are not currently threatened. They play an important role in marine ecosystems both as predators and prey. Climate change may affect their distribution patterns as ocean currents and temperatures change."
    },

    relatedSpecies: [
        "Bluebottle (Physalia utriculus)",
        "By-the-wind Sailor (Velella velella)",
        "Blue Blubber Jellyfish (Catostylus mosaicus)",
        "Moon Jellyfish (Aurelia aurita)"
    ],

    about: "The Portuguese Man o' War is often mistaken for a jellyfish, but it's actually a fascinating colonial organism called a siphonophore. This remarkable creature consists of four different types of specialized polyps working together as one unit - one acts as the float, one for stinging and capturing prey, one for digestion, and one for reproduction. Its distinctive blue gas-filled bladder acts as a sail, allowing it to drift across warm ocean surfaces worldwide. The long blue tentacles, which can extend up to 50 meters, are armed with powerful venomous cells that can deliver painful stings to both prey and humans, even after the organism has died. Despite its beauty, the Portuguese Man o' War is a formidable predator of the open ocean."
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

function PortugueseManOWar() {
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
        setCurrentImageIndex((prev) => (prev + 1) % manOWar.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + manOWar.imageUrls.length) % manOWar.imageUrls.length);
    };

    const renderSection = () => {
        switch(activeSection) {
            case 'overview':
                return (
                    <div className="content-section space-y-6">
                        <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-cyan-400/30">
                            <div className="flex items-center mb-4">
                                <h3 className="text-3xl font-bold text-cyan-300">About the Portuguese Man o' War</h3>
                            </div>
                            <p className="text-cyan-100 leading-relaxed text-lg border-l-4 border-cyan-400 pl-6 bg-slate-700/30 p-4 rounded-r-lg">{manOWar.about}</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-indigo-900/90 to-blue-800/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-blue-400/30 hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <h4 className="text-xl font-bold text-blue-300">Basic Information</h4>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-blue-400/20">
                                        <span className="font-semibold text-blue-200">Scientific Name:</span> 
                                        <span className="italic text-cyan-300">{manOWar.scientificName}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-blue-400/20">
                                        <span className="font-semibold text-blue-200">Size:</span> 
                                        <span className="text-cyan-300">{manOWar.size}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-blue-400/20">
                                        <span className="font-semibold text-blue-200">Weight:</span> 
                                        <span className="text-cyan-300">{manOWar.weight}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-blue-400/20">
                                        <span className="font-semibold text-blue-200">Population:</span> 
                                        <span className="text-cyan-300">{manOWar.population}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-blue-400/20">
                                        <span className="font-semibold text-blue-200">Habitat:</span> 
                                        <span className="text-cyan-300">{manOWar.habitat}</span>
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
                                        <span className="text-cyan-300">{manOWar.physicalCharacteristics.length}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-teal-400/20">
                                        <span className="font-semibold text-teal-200">Weight:</span> 
                                        <span className="text-cyan-300">{manOWar.physicalCharacteristics.weight}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-teal-400/20">
                                        <span className="font-semibold text-teal-200">Body Type:</span> 
                                        <span className="text-cyan-300">{manOWar.physicalCharacteristics.bodyType}</span>
                                    </div>
                                    <div className="p-3 bg-gradient-to-r from-teal-800/60 to-cyan-800/60 rounded-lg border-l-4 border-teal-400">
                                        <p className="text-sm text-teal-100 leading-relaxed">{manOWar.physicalCharacteristics.description}</p>
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
                                {Object.entries(manOWar.classification).map(([key, value]) => (
                                    <div key={key} className="flex justify-between items-center p-4 bg-slate-700/70 rounded-lg border-l-4 border-indigo-400 hover:bg-slate-600/70 transition-all duration-200">
                                        <span className="font-semibold capitalize text-indigo-200">{key}:</span>
                                        <span className="italic text-cyan-300 font-medium">{value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-4 bg-gradient-to-r from-indigo-800/60 to-purple-800/60 rounded-lg border border-indigo-300/30">
                                <p className="text-indigo-100 text-center">
                                    A colonial organism (siphonophore) often mistaken for a jellyfish
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
                                <p className="text-emerald-100 leading-relaxed text-lg">{manOWar.intelligenceBehavior}</p>
                            </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-green-900/90 to-emerald-800/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-green-400/30 hover:shadow-green-500/20 hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <h4 className="text-xl font-bold text-green-300">Diet & Feeding</h4>
                                </div>
                                <div className="space-y-3">
                                    {manOWar.diet.map((item, index) => (
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
                                        <span className="text-cyan-100 ml-2">{manOWar.reproduction.strategy}</span>
                                    </div>
                                    <div className="p-4 bg-slate-700/60 rounded-lg border-l-4 border-cyan-400">
                                        <span className="font-semibold text-cyan-200">Gestation:</span> 
                                        <span className="text-cyan-100 ml-2">{manOWar.reproduction.gestation}</span>
                                    </div>
                                    <div className="p-4 bg-slate-700/60 rounded-lg border-l-4 border-cyan-400">
                                        <span className="font-semibold text-cyan-200">Development:</span> 
                                        <span className="text-cyan-100 ml-2">{manOWar.reproduction.development}</span>
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
                                <span className={`px-6 py-3 rounded-full text-white font-semibold text-lg shadow-xl ${ColorMap[manOWar.conservationStatus.toLowerCase().replace(' ', '_')]} border border-white/20`}>
                                    {manOWar.conservation.status}
                                </span>
                            </div>
                            <div className="p-6 bg-slate-700/50 rounded-lg border-l-4 border-amber-400">
                                <p className="text-amber-100 leading-relaxed text-lg">{manOWar.conservation.researchNotes}</p>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-red-900/90 to-pink-900/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-red-400/30">
                            <div className="flex items-center mb-6">
                                <h4 className="text-2xl font-bold text-red-300">Environmental Threats</h4>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                {manOWar.conservation.threats.map((threat, index) => (
                                    <div key={index} className="flex items-start p-4 bg-gradient-to-r from-red-800/60 to-pink-800/60 rounded-lg border-l-4 border-red-400 hover:shadow-lg transition-all duration-200">
                                        <span className="text-red-100 font-medium">{threat}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-4 bg-gradient-to-r from-red-800/60 to-pink-800/60 rounded-lg border border-red-300/30">
                                <p className="text-red-200 text-center font-semibold">
                                    Ocean health affects all surface marine life
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
                                {manOWar.funFacts.map((fact, index) => (
                                    <div key={index} className="p-6 bg-gradient-to-br from-purple-800/60 to-pink-800/60 rounded-lg border-l-4 border-purple-400 hover:shadow-lg transition-all duration-200 hover:transform hover:scale-105">
                                        <p className="text-purple-100 leading-relaxed font-medium">{fact}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 p-6 bg-gradient-to-r from-purple-800/60 to-pink-800/60 rounded-lg border border-purple-300/30">
                                <p className="text-purple-200 text-center text-lg font-semibold">
                                    A beautiful but dangerous drifter of the open ocean!
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
                        src={manOWar.imageUrls[currentImageIndex]} 
                        alt={manOWar.name}
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
                    <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">{manOWar.name}</h1>
                    <p className="text-xl md:text-2xl mb-6 italic text-cyan-200">{manOWar.scientificName}</p>
                    <div className="flex justify-center items-center space-x-6 flex-wrap">
                        <span className={`px-6 py-3 rounded-full text-white font-semibold text-lg shadow-2xl ${ColorMap[manOWar.conservationStatus.toLowerCase().replace(' ', '_')]} border border-white/30`}>
                            {manOWar.conservation.status}
                        </span>
                        <span className="text-lg bg-slate-800/60 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-400/30 text-cyan-200">
                            Habitat: {manOWar.habitat}
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
                        <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Related Ocean Drifters</h3>
                        <p className="text-cyan-200 text-lg">Explore other fascinating surface marine creatures</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {manOWar.relatedSpecies.map((species, index) => (
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

export default PortugueseManOWar;
