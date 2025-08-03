import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const glassSquid = {
    name: "Glass Squid",
    scientificName: "Cranchiidae family",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Mollusca",
        class: "Cephalopoda",
        order: "Oegopsida",
        family: "Cranchiidae",
        genus: "Various genera",
        species: "Over 60 species"
    },

    imageUrls: ["/imges/squid.png", "/imges/deep_sea.jpg", "/imges/jellyfish.png"],

    physicalCharacteristics: {
        size: "2 cm to 3 meters (0.8 inches to 10 feet)",
        transparency: "Nearly completely transparent body",
        eyes: "Large eyes, often pigmented",
        organs: "Internal organs visible through transparent body",
        mantle: "Inflated, balloon-like mantle cavity",
        lifespan: "1-5 years depending on species"
    },

    habitat: {
        primary: "Open ocean pelagic zones",
        regions: "All oceans worldwide",
        depth: "Surface to 2,000 meters (6,600 feet)",
        migration: "Many species migrate vertically daily",
        distribution: "Cosmopolitan in temperate and tropical waters"
    },

    behavior: {
        transparency: "Ultimate camouflage in open water",
        swimming: "Jet propulsion and fin undulation",
        vertical: "Daily vertical migration following prey",
        buoyancy: "Inflated mantle provides neutral buoyancy",
        escape: "Can eject ink and change shape rapidly"
    },

    diet: {
        primary: "Planktivorous and piscivorous",
        food: ["Copepods", "Krill", "Small fish", "Other squid", "Jellyfish", "Marine larvae"],
        hunting: "Visual hunting in well-lit surface waters",
        feeding: "Uses tentacles to capture prey"
    },

    reproduction: {
        spawning: "Semelparous (breed once then die)",
        eggs: "Large eggs with high yolk content",
        parental: "Some species show parental care",
        development: "Direct development without larval stage",
        dimorphism: "Males often smaller than females"
    },

    lifespan: "1-5 years",
    conservationStatus: "Data Deficient (most species)",

    threats: [
        "Ocean warming affecting distribution",
        "Pollution reducing water clarity",
        "Overfishing affecting food webs",
        "Climate change altering currents",
        "Deep-sea fishing bycatch"
    ],

    adaptations: [
        "Near-complete transparency for camouflage",
        "Large eyes for detecting prey and predators",
        "Inflated mantle for buoyancy control",
        "Ability to change body shape",
        "Efficient jet propulsion system",
        "Some species have bioluminescence"
    ],

    transparency: [
        "Most transparent animals in the ocean",
        "Only eyes and internal organs visible",
        "Muscle tissue is completely clear",
        "Transparency varies with age and species",
        "Perfect camouflage in open water",
        "Refracts light like water itself"
    ],

    interestingFacts: [
        "Some of the most transparent animals on Earth",
        "Their eyes are often the only visible part",
        "Can inflate their mantle like a balloon",
        "Some species brood their eggs in special pouches",
        "Found in every ocean from surface to deep sea",
        "Many species are almost impossible to see",
        "Can change from transparent to opaque",
        "Some have eyes larger than their brain"
    ]
};

const GlassSquid = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('overview');
    const containerRef = useRef(null);

    useGSAP(() => {
        const sections = containerRef.current.querySelectorAll('.fade-section');
        
        sections.forEach((section, index) => {
            gsap.fromTo(section, 
                { 
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, { scope: containerRef });

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % glassSquid.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + glassSquid.imageUrls.length) % glassSquid.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
        >
            {label}
        </button>
    );

    const renderTabContent = () => {
        switch(activeTab) {
            case 'overview':
                return (
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Size:</strong> {glassSquid.physicalCharacteristics.size}</li>
                                    <li><strong>Transparency:</strong> {glassSquid.physicalCharacteristics.transparency}</li>
                                    <li><strong>Eyes:</strong> {glassSquid.physicalCharacteristics.eyes}</li>
                                    <li><strong>Organs:</strong> {glassSquid.physicalCharacteristics.organs}</li>
                                    <li><strong>Mantle:</strong> {glassSquid.physicalCharacteristics.mantle}</li>
                                    <li><strong>Lifespan:</strong> {glassSquid.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-cyan-400 mb-4">Transparency Features</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {glassSquid.transparency.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            
            case 'behavior':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-green-400 mb-4">Behavior & Diet</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-green-300 mb-3">Behavior</h4>
                                    {Object.entries(glassSquid.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-cyan-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {glassSquid.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Hunting:</strong> {glassSquid.diet.hunting}</p>
                                    <p className="text-gray-300 mb-3"><strong>Feeding:</strong> {glassSquid.diet.feeding}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {glassSquid.diet.food.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            
            case 'conservation':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-400 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{glassSquid.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {glassSquid.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {glassSquid.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-indigo-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-indigo-300 mb-4">Fascinating Facts</h3>
                            <ul className="list-disc list-inside text-indigo-200 space-y-2">
                                {glassSquid.interestingFacts.map((fact, index) => (
                                    <li key={index}>{fact}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );
            
            default:
                return null;
        }
    };

    return (
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={glassSquid.imageUrls[currentImageIndex]} 
                        alt={glassSquid.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {glassSquid.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-blue-200">
                        {glassSquid.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Masters of invisibility in the open ocean
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {glassSquid.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(glassSquid.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-blue-300 mb-2 capitalize">{key}</h3>
                                <p className="text-gray-300">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tabbed Content Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <TabButton 
                            id="overview" 
                            label="Overview" 
                            isActive={activeTab === 'overview'} 
                            onClick={setActiveTab} 
                        />
                        <TabButton 
                            id="behavior" 
                            label="Behavior & Diet" 
                            isActive={activeTab === 'behavior'} 
                            onClick={setActiveTab} 
                        />
                        <TabButton 
                            id="conservation" 
                            label="Conservation" 
                            isActive={activeTab === 'conservation'} 
                            onClick={setActiveTab} 
                        />
                    </div>
                    
                    <div className="transition-all duration-300">
                        {renderTabContent()}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-blue-900 to-cyan-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Invisible Ocean Wanderers</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Glass squids represent the ultimate in marine camouflage, nearly invisible in their oceanic home.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-blue-400 mb-3">Transparency Research</h4>
                            <p className="text-gray-300">Study natural invisibility for biomimetic applications.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-cyan-400 mb-3">Ocean Monitoring</h4>
                            <p className="text-gray-300">Use glass squids as indicators of ocean health.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-indigo-400 mb-3">Pelagic Protection</h4>
                            <p className="text-gray-300">Protect open ocean ecosystems and food webs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlassSquid;
