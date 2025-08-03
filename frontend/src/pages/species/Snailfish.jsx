import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const snailfish = {
    name: "Snailfish",
    scientificName: "Liparidae family",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Actinopterygii",
        order: "Scorpaeniformes",
        family: "Liparidae",
        genus: "Multiple genera",
        species: "400+ species"
    },

    imageUrls: ["/imges/snailfish.jpg", "/imges/deep_fish.jpg", "/imges/abyssal_fish.jpg"],

    physicalCharacteristics: {
        length: "2 cm to 77 cm",
        weight: "Few grams to several pounds",
        body: "Soft, gelatinous, tadpole-like",
        fins: "Large pectoral fins",
        skin: "Scaleless, translucent",
        lifespan: "1-5 years (varies by species)"
    },

    habitat: {
        primary: "Deepest ocean trenches worldwide",
        regions: "All ocean basins",
        depth: "Surface to 8,178 meters (deepest fish)",
        temperature: "1-4°C in deep waters",
        distribution: "Arctic to Antarctic waters"
    },

    behavior: {
        pressure: "Survives extreme pressure",
        movement: "Slow, undulating swimming",
        feeding: "Bottom dwelling scavenger",
        burrowing: "Hides in sediment",
        record: "Deepest living fish ever recorded"
    },

    diet: {
        primary: "Opportunistic scavenger",
        food: ["Amphipods", "Marine worms", "Small crustaceans", "Organic debris", "Dead organisms", "Bacteria"],
        hunting: "Passive foraging on seafloor",
        method: "Suction feeding and scavenging"
    },

    reproduction: {
        method: "External fertilization",
        eggs: "Large, yolk-rich eggs",
        parenting: "Some species guard eggs",
        development: "Direct development",
        spawning: "Seasonal breeding"
    },

    lifespan: "1-5 years depending on species",
    conservationStatus: "Various (most Data Deficient)",

    threats: [
        "Deep-sea fishing disturbance",
        "Ocean pollution",
        "Climate change in polar regions",
        "Deep-sea mining",
        "Research collection impact"
    ],

    adaptations: [
        "Gelatinous body for pressure resistance",
        "Antifreeze proteins in tissues",
        "Large liver for buoyancy",
        "Reduced skeleton structure",
        "Specialized pressure-resistant proteins",
        "Slow metabolism for energy conservation"
    ],

    uniqueFeatures: [
        "Deepest living fish on Earth",
        "Survives crushing pressure",
        "400+ species in family",
        "Found in every ocean",
        "Completely scaleless body",
        "Record holder at 8,178 meters deep"
    ],

    interestingFacts: [
        "Holds the record as deepest living fish",
        "Found at 8,178 meters in Mariana Trench",
        "Body is mostly water and protein",
        "Some species live in Arctic ice",
        "Can survive pressure 800x greater than surface",
        "Over 400 species in the family",
        "Body feels like jelly to touch",
        "Essential to deep-sea food webs"
    ]
};

const Snailfish = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % snailfish.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + snailfish.imageUrls.length) % snailfish.imageUrls.length);
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
                                    <li><strong>Length:</strong> {snailfish.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {snailfish.physicalCharacteristics.weight}</li>
                                    <li><strong>Body:</strong> {snailfish.physicalCharacteristics.body}</li>
                                    <li><strong>Fins:</strong> {snailfish.physicalCharacteristics.fins}</li>
                                    <li><strong>Skin:</strong> {snailfish.physicalCharacteristics.skin}</li>
                                    <li><strong>Lifespan:</strong> {snailfish.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-violet-400 mb-4">Unique Features</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {snailfish.uniqueFeatures.map((feature, index) => (
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
                                    {Object.entries(snailfish.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-purple-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-violet-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {snailfish.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Hunting:</strong> {snailfish.diet.hunting}</p>
                                    <p className="text-gray-300 mb-3"><strong>Method:</strong> {snailfish.diet.method}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {snailfish.diet.food.map((item, index) => (
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
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{snailfish.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {snailfish.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {snailfish.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-purple-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-purple-300 mb-4">Fascinating Facts</h3>
                            <ul className="list-disc list-inside text-purple-200 space-y-2">
                                {snailfish.interestingFacts.map((fact, index) => (
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
                        src={snailfish.imageUrls[currentImageIndex]} 
                        alt={snailfish.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                        {snailfish.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-purple-200">
                        {snailfish.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The deepest living fish on Earth, surviving crushing pressure
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {snailfish.imageUrls.length}
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
                        {Object.entries(snailfish.classification).map(([key, value]) => (
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-purple-900 to-violet-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Pressure Champions</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Snailfish represent the ultimate adaptation to Earth's most extreme pressures.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-purple-400 mb-3">Pressure Biology</h4>
                            <p className="text-gray-300">Study extreme pressure adaptations.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-violet-400 mb-3">Deep-Sea Records</h4>
                            <p className="text-gray-300">Research deepest living organisms.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-indigo-400 mb-3">Trench Ecology</h4>
                            <p className="text-gray-300">Explore hadal zone biodiversity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Snailfish;
