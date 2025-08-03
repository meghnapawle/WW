import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const bristlemouth = {
    name: "Bristlemouth",
    scientificName: "Cyclothone spp.",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Actinopterygii",
        order: "Stomiiformes",
        family: "Gonostomatidae",
        genus: "Cyclothone",
        species: "Over 13 species"
    },

    imageUrls: ["/imges/lanternfish.jpg", "/imges/deep_sea.jpg", "/imges/angler_fish.jpg"],

    physicalCharacteristics: {
        length: "2-7 cm (0.8-2.8 inches)",
        weight: "Less than 1 gram",
        mouth: "Large mouth with needle-like teeth",
        photophores: "Rows of light-producing organs",
        body: "Elongated, dark brown to black",
        lifespan: "1-2 years"
    },

    habitat: {
        primary: "Deep ocean mesopelagic zone",
        regions: "All oceans worldwide",
        depth: "200-3,000 meters (650-9,800 feet)",
        temperature: "2-20°C (36-68°F)",
        distribution: "Most abundant vertebrate on Earth"
    },

    behavior: {
        migration: "Daily vertical migration following plankton",
        schooling: "Forms massive schools",
        feeding: "Filter feeding and active predation",
        bioluminescence: "Uses light for communication",
        hiding: "Stays in dark depths during day"
    },

    diet: {
        primary: "Planktivorous filter feeder",
        food: ["Copepods", "Marine larvae", "Small crustaceans", "Phytoplankton", "Zooplankton", "Organic particles"],
        feeding: "Filter feeds through gill rakers",
        role: "Key link in oceanic food webs"
    },

    reproduction: {
        spawning: "Broadcast spawning in open water",
        eggs: "Pelagic eggs float near surface",
        larvae: "Undergo metamorphosis during development",
        maturity: "Reach maturity within first year",
        frequency: "Multiple spawning events per year"
    },

    lifespan: "1-2 years",
    conservationStatus: "Least Concern",

    threats: [
        "Climate change affecting water temperature",
        "Ocean acidification reducing prey",
        "Deep-sea fishing operations",
        "Pollution and microplastics",
        "Changing ocean currents"
    ],

    adaptations: [
        "Massive population numbers for survival",
        "Daily vertical migration",
        "Efficient filter feeding system",
        "Bioluminescent communication",
        "Pressure adaptation for deep waters",
        "Large mouth for maximum feeding"
    ],

    ecological: [
        "Most abundant vertebrate species on Earth",
        "Critical food source for larger fish",
        "Major carbon cycle contributor",
        "Key component of deep-sea food webs",
        "Primary consumer of marine plankton",
        "Support entire ocean ecosystems"
    ],

    interestingFacts: [
        "Most abundant vertebrate on Earth by biomass",
        "Estimated 1 quintillion individuals exist",
        "Migrate vertically 400+ meters daily",
        "Can form schools containing billions of fish",
        "Critical to global carbon cycling",
        "Their migration is visible on sonar",
        "Eaten by everything from squid to whales",
        "Practically invisible to human eye"
    ]
};

const Bristlemouth = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % bristlemouth.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + bristlemouth.imageUrls.length) % bristlemouth.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-purple-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-purple-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {bristlemouth.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {bristlemouth.physicalCharacteristics.weight}</li>
                                    <li><strong>Mouth:</strong> {bristlemouth.physicalCharacteristics.mouth}</li>
                                    <li><strong>Photophores:</strong> {bristlemouth.physicalCharacteristics.photophores}</li>
                                    <li><strong>Body:</strong> {bristlemouth.physicalCharacteristics.body}</li>
                                    <li><strong>Lifespan:</strong> {bristlemouth.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-green-400 mb-4">Ecological Importance</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {bristlemouth.ecological.map((role, index) => (
                                        <li key={index}>{role}</li>
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
                                    {Object.entries(bristlemouth.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-cyan-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-purple-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {bristlemouth.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Feeding:</strong> {bristlemouth.diet.feeding}</p>
                                    <p className="text-gray-300 mb-3"><strong>Role:</strong> {bristlemouth.diet.role}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {bristlemouth.diet.food.map((item, index) => (
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
                            <h3 className="text-xl font-bold text-purple-400 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-green-400">{bristlemouth.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {bristlemouth.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {bristlemouth.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-indigo-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-indigo-300 mb-4">Amazing Facts</h3>
                            <ul className="list-disc list-inside text-indigo-200 space-y-2">
                                {bristlemouth.interestingFacts.map((fact, index) => (
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={bristlemouth.imageUrls[currentImageIndex]} 
                        alt={bristlemouth.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {bristlemouth.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-purple-200">
                        {bristlemouth.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The most abundant vertebrate on Earth
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {bristlemouth.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(bristlemouth.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-purple-300 mb-2 capitalize">{key}</h3>
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-purple-900 to-pink-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Ocean's Hidden Multitudes</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Bristlemouths are the most abundant vertebrates on Earth, forming the foundation of deep-sea food webs.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-purple-400 mb-3">Deep-Sea Research</h4>
                            <p className="text-gray-300">Study their massive migrations and ecological impact.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-pink-400 mb-3">Carbon Cycling</h4>
                            <p className="text-gray-300">Understand their role in global carbon transport.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-indigo-400 mb-3">Ecosystem Health</h4>
                            <p className="text-gray-300">Monitor populations as ocean health indicators.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bristlemouth;
