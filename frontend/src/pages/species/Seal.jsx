import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

// Import images (using available images from Assets folder)
import sealImg from '../../Assets/animal_image3.webp';
import dolphinImg from '../../Assets/dolphin.png';
import turtleImg from '../../Assets/turtle.png';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

// Comprehensive Seal Data
const seal = {
    name: "Seal",
    scientificName: "Pinnipedia",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Mammalia",
        order: "Carnivora",
        suborder: "Pinnipedia",
        families: "Phocidae, Otariidae, Odobenidae",
        genus: "Various (33 species)",
        species: "Multiple species"
    },

    imageUrls: ["/imges/seal.png", "/imges/dolphin.png", "/imges/sea_turtle.png"],
    
    conservationStatus: "vulnerable",
    population: "Varies by species, some declining",
    
    depthOfExistence: "Surface to 600 meters (1,970 feet)",
    habitat: "Coastal waters, ice floes, rocky shores, beaches",
    distribution: ["Arctic Ocean", "Antarctic Ocean", "North Pacific", "North Atlantic", "Various coastal regions"],

    size: "1.2-6 meters (4-20 feet) depending on species",
    weight: "45-4,000 kg (100-8,800 pounds)",
    
    lifecycle: "Sexual maturity at 3-8 years, gestation period varies by species, lifespan of 15-30 years",
    
    sexuality: "Polygynous mating system with dominant males controlling harems",

    physicalCharacteristics: {
        length: "1.2-6 meters depending on species",
        weight: "45-4,000 kg",
        bodyType: "Streamlined body with flippers, thick blubber layer for insulation",
        eyes: "Large eyes adapted for underwater vision, can see well in murky water",
        description: "Sleek, torpedo-shaped body covered in short fur or hair. Four flippers for swimming and maneuvering on land. Thick layer of blubber for warmth. Whiskers (vibrissae) for sensing vibrations and locating prey."
    },

    diet: [
        "Fish (cod, herring, mackerel)",
        "Squid and octopus",
        "Crustaceans (krill, shrimp)",
        "Mollusks",
        "Some species eat penguins and other seals"
    ],

    predators: [
        "Killer whales (orcas)",
        "Great white sharks",
        "Polar bears (Arctic seals)",
        "Leopard seals (Antarctic species)",
        "Humans (hunting and fishing nets)"
    ],

    intelligenceBehavior: "Highly intelligent marine mammals with complex social behaviors. Excellent divers and swimmers with sophisticated navigation abilities. Use echolocation and keen senses to hunt. Display territorial behavior during breeding season. Many species are highly social and form large colonies.",

    reproduction: {
        strategy: "Polygynous with seasonal breeding on land or ice",
        gestation: "8-15 months depending on species (includes delayed implantation)",
        development: "Pups nurse for weeks to months, learn swimming and hunting from mothers"
    },

    funFacts: [
        "Can hold their breath for up to 2 hours underwater",
        "Some species can dive to depths of over 1,500 meters",
        "Their whiskers can detect fish movements from great distances",
        "Baby seals are called pups and are born on land or ice",
        "Can sleep underwater and surface to breathe without waking",
        "Have excellent underwater vision and hearing",
        "Can rotate their rear flippers forward to walk on land",
        "Some species migrate thousands of miles annually"
    ],

    media: {
        images: [sealImg]
    },

    conservation: {
        status: "Vulnerable",
        threats: [
            "Climate change and melting sea ice",
            "Overfishing reducing prey availability",
            "Entanglement in fishing nets and debris",
            "Pollution (plastics, chemicals, oil spills)",
            "Habitat destruction and coastal development",
            "Hunting and culling in some regions"
        ],
        researchNotes: "Many seal species face threats from climate change, particularly Arctic and Antarctic species dependent on sea ice. Several species have recovered from near extinction due to conservation efforts, but others remain at risk. Marine protected areas and fishing regulations are crucial for their survival."
    },

    relatedSpecies: [
        "Harbor Seal (Phoca vitulina)",
        "Gray Seal (Halichoerus grypus)",
        "Leopard Seal (Hydrurga leptonyx)",
        "Elephant Seal (Mirounga)"
    ],

    about: "Seals are semi-aquatic marine mammals that have adapted to life both in water and on land. These remarkable creatures belong to the group called pinnipeds, which means 'fin-footed,' and include true seals, sea lions, and walruses. With their streamlined bodies, powerful flippers, and thick blubber layer, seals are perfectly designed for life in cold ocean waters. They are exceptional divers, with some species capable of diving to incredible depths and holding their breath for extended periods. Seals play crucial roles in marine ecosystems as both predators and prey, and their presence often indicates healthy ocean environments. From the tiny ringed seal to the massive elephant seal, these intelligent mammals display complex social behaviors and remarkable adaptations to some of the world's most challenging marine environments."
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

function Seal() {
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
        setCurrentImageIndex((prev) => (prev + 1) % seal.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + seal.imageUrls.length) % seal.imageUrls.length);
    };

    const renderSection = () => {
        switch(activeSection) {
            case 'overview':
                return (
                    <div className="content-section space-y-6">
                        <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-cyan-400/30">
                            <div className="flex items-center mb-4">
                                <h3 className="text-3xl font-bold text-cyan-300">About Seals</h3>
                            </div>
                            <p className="text-cyan-100 leading-relaxed text-lg border-l-4 border-cyan-400 pl-6 bg-slate-700/30 p-4 rounded-r-lg">{seal.about}</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-indigo-900/90 to-blue-800/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-blue-400/30 hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <h4 className="text-xl font-bold text-blue-300">Basic Information</h4>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-blue-400/20">
                                        <span className="font-semibold text-blue-200">Scientific Name:</span> 
                                        <span className="italic text-cyan-300">{seal.scientificName}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-blue-400/20">
                                        <span className="font-semibold text-blue-200">Size:</span> 
                                        <span className="text-cyan-300">{seal.size}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-blue-400/20">
                                        <span className="font-semibold text-blue-200">Weight:</span> 
                                        <span className="text-cyan-300">{seal.weight}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-blue-400/20">
                                        <span className="font-semibold text-blue-200">Population:</span> 
                                        <span className="text-cyan-300">{seal.population}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-blue-400/20">
                                        <span className="font-semibold text-blue-200">Habitat:</span> 
                                        <span className="text-cyan-300">{seal.habitat}</span>
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
                                        <span className="text-cyan-300">{seal.physicalCharacteristics.length}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-teal-400/20">
                                        <span className="font-semibold text-teal-200">Weight:</span> 
                                        <span className="text-cyan-300">{seal.physicalCharacteristics.weight}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-700/60 rounded-lg border border-teal-400/20">
                                        <span className="font-semibold text-teal-200">Body Type:</span> 
                                        <span className="text-cyan-300">{seal.physicalCharacteristics.bodyType}</span>
                                    </div>
                                    <div className="p-3 bg-gradient-to-r from-teal-800/60 to-cyan-800/60 rounded-lg border-l-4 border-teal-400">
                                        <p className="text-sm text-teal-100 leading-relaxed">{seal.physicalCharacteristics.description}</p>
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
                                {Object.entries(seal.classification).map(([key, value]) => (
                                    <div key={key} className="flex justify-between items-center p-4 bg-slate-700/70 rounded-lg border-l-4 border-indigo-400 hover:bg-slate-600/70 transition-all duration-200">
                                        <span className="font-semibold capitalize text-indigo-200">{key}:</span>
                                        <span className="italic text-cyan-300 font-medium">{value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-4 bg-gradient-to-r from-indigo-800/60 to-purple-800/60 rounded-lg border border-indigo-300/30">
                                <p className="text-indigo-100 text-center">
                                    Semi-aquatic marine mammals in the group Pinnipedia (fin-footed)
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
                                <p className="text-emerald-100 leading-relaxed text-lg">{seal.intelligenceBehavior}</p>
                            </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-green-900/90 to-emerald-800/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-green-400/30 hover:shadow-green-500/20 hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <h4 className="text-xl font-bold text-green-300">Diet & Feeding</h4>
                                </div>
                                <div className="space-y-3">
                                    {seal.diet.map((item, index) => (
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
                                        <span className="text-cyan-100 ml-2">{seal.reproduction.strategy}</span>
                                    </div>
                                    <div className="p-4 bg-slate-700/60 rounded-lg border-l-4 border-cyan-400">
                                        <span className="font-semibold text-cyan-200">Gestation:</span> 
                                        <span className="text-cyan-100 ml-2">{seal.reproduction.gestation}</span>
                                    </div>
                                    <div className="p-4 bg-slate-700/60 rounded-lg border-l-4 border-cyan-400">
                                        <span className="font-semibold text-cyan-200">Development:</span> 
                                        <span className="text-cyan-100 ml-2">{seal.reproduction.development}</span>
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
                                <span className={`px-6 py-3 rounded-full text-white font-semibold text-lg shadow-xl ${ColorMap[seal.conservationStatus.toLowerCase()]} border border-white/20`}>
                                    {seal.conservation.status}
                                </span>
                            </div>
                            <div className="p-6 bg-slate-700/50 rounded-lg border-l-4 border-amber-400">
                                <p className="text-amber-100 leading-relaxed text-lg">{seal.conservation.researchNotes}</p>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-red-900/90 to-pink-900/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-red-400/30">
                            <div className="flex items-center mb-6">
                                <h4 className="text-2xl font-bold text-red-300">Major Threats</h4>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                {seal.conservation.threats.map((threat, index) => (
                                    <div key={index} className="flex items-start p-4 bg-gradient-to-r from-red-800/60 to-pink-800/60 rounded-lg border-l-4 border-red-400 hover:shadow-lg transition-all duration-200">
                                        <span className="text-red-100 font-medium">{threat}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-4 bg-gradient-to-r from-red-800/60 to-pink-800/60 rounded-lg border border-red-300/30">
                                <p className="text-red-200 text-center font-semibold">
                                    Climate change poses the greatest threat to ice-dependent seal species
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
                                {seal.funFacts.map((fact, index) => (
                                    <div key={index} className="p-6 bg-gradient-to-br from-purple-800/60 to-pink-800/60 rounded-lg border-l-4 border-purple-400 hover:shadow-lg transition-all duration-200 hover:transform hover:scale-105">
                                        <p className="text-purple-100 leading-relaxed font-medium">{fact}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 p-6 bg-gradient-to-r from-purple-800/60 to-pink-800/60 rounded-lg border border-purple-300/30">
                                <p className="text-purple-200 text-center text-lg font-semibold">
                                    Masters of both land and sea - nature's ultimate amphibious athletes!
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
                        src={seal.imageUrls[currentImageIndex]} 
                        alt={seal.name}
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
                    <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">{seal.name}</h1>
                    <p className="text-xl md:text-2xl mb-6 italic text-cyan-200">{seal.scientificName}</p>
                    <div className="flex justify-center items-center space-x-6 flex-wrap">
                        <span className={`px-6 py-3 rounded-full text-white font-semibold text-lg shadow-2xl ${ColorMap[seal.conservationStatus.toLowerCase()]} border border-white/30`}>
                            {seal.conservation.status}
                        </span>
                        <span className="text-lg bg-slate-800/60 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-400/30 text-cyan-200">
                            Habitat: {seal.habitat}
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
                        <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Related Pinniped Species</h3>
                        <p className="text-cyan-200 text-lg">Explore other fin-footed marine mammals</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {seal.relatedSpecies.map((species, index) => (
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

export default Seal;
