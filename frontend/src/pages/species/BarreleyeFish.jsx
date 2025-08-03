import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const barreleyeFish = {
    name: "Barreleye Fish",
    scientificName: "Macropinna microstoma",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Actinopterygii",
        order: "Argentiniformes",
        family: "Opisthoproctidae",
        genus: "Macropinna",
        species: "M. microstoma"
    },

    imageUrls: ["/imges/barreleye_fish.jpg", "/imges/deep_sea.jpg", "/imges/transparent_fish.jpg"],

    physicalCharacteristics: {
        length: "15 cm (6 inches)",
        weight: "20-30 grams",
        head: "Completely transparent",
        eyes: "Tubular, point upward",
        body: "Dark brownish-green",
        lifespan: "Unknown, estimated 3-5 years"
    },

    habitat: {
        primary: "Deep waters of Pacific Ocean",
        regions: "North Pacific from Japan to Baja California",
        depth: "600-800 meters (2,000-2,600 feet)",
        temperature: "3-4°C (37-39°F)",
        distribution: "Mesopelagic and bathypelagic zones"
    },

    behavior: {
        orientation: "Hangs motionless in water",
        eyeMovement: "Can rotate eyes within head",
        hunting: "Waits for silhouettes against surface light",
        movement: "Minimal active swimming",
        feeding: "Ambush predator strategy"
    },

    diet: {
        primary: "Opportunistic predator",
        food: ["Small fish", "Jellyfish", "Zooplankton", "Copepods", "Small crustaceans", "Marine larvae"],
        hunting: "Detects prey silhouettes from below",
        method: "Rotates eyes to track prey movement"
    },

    reproduction: {
        method: "External fertilization assumed",
        spawning: "Likely seasonal spawning",
        eggs: "Pelagic eggs assumed",
        development: "Larval development in open water",
        knowledge: "Reproduction poorly understood"
    },

    lifespan: "Unknown, estimated 3-5 years",
    conservationStatus: "Data Deficient",

    threats: [
        "Deep-sea fishing bycatch",
        "Ocean pollution and plastics",
        "Climate change affecting prey",
        "Deep-sea mining activities",
        "Research collection pressure"
    ],

    adaptations: [
        "Transparent head for camouflage",
        "Tubular eyes for upward vision",
        "Rotatable eyes within skull",
        "Large eyes for low-light detection",
        "Minimal body movement conservation",
        "Pressure-adapted body structure"
    ],

    uniqueFeatures: [
        "Completely transparent head",
        "Eyes rotate within transparent skull",
        "Can see through own forehead",
        "Tubular eyes point upward",
        "Invisible from below due to transparency",
        "One of most unusual fish anatomies"
    ],

    interestingFacts: [
        "Has a completely transparent head",
        "Eyes can rotate inside its transparent skull",
        "Can literally see through its own forehead",
        "Was first discovered in 1939",
        "Remained a mystery until 2004 when filmed alive",
        "Eyes point upward to spot prey silhouettes",
        "Invisible from below due to transparent head",
        "Uses stolen jellyfish tentacles as tools"
    ]
};

const BarreleyeFish = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % barreleyeFish.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + barreleyeFish.imageUrls.length) % barreleyeFish.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-cyan-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-cyan-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {barreleyeFish.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {barreleyeFish.physicalCharacteristics.weight}</li>
                                    <li><strong>Head:</strong> {barreleyeFish.physicalCharacteristics.head}</li>
                                    <li><strong>Eyes:</strong> {barreleyeFish.physicalCharacteristics.eyes}</li>
                                    <li><strong>Body:</strong> {barreleyeFish.physicalCharacteristics.body}</li>
                                    <li><strong>Lifespan:</strong> {barreleyeFish.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-400 mb-4">Unique Features</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {barreleyeFish.uniqueFeatures.map((feature, index) => (
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
                                    {Object.entries(barreleyeFish.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-cyan-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {barreleyeFish.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Hunting:</strong> {barreleyeFish.diet.hunting}</p>
                                    <p className="text-gray-300 mb-3"><strong>Method:</strong> {barreleyeFish.diet.method}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {barreleyeFish.diet.food.map((item, index) => (
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
                            <h3 className="text-xl font-bold text-cyan-400 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{barreleyeFish.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {barreleyeFish.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {barreleyeFish.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-cyan-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-cyan-300 mb-4">Fascinating Facts</h3>
                            <ul className="list-disc list-inside text-cyan-200 space-y-2">
                                {barreleyeFish.interestingFacts.map((fact, index) => (
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-cyan-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={barreleyeFish.imageUrls[currentImageIndex]} 
                        alt={barreleyeFish.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        {barreleyeFish.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-cyan-200">
                        {barreleyeFish.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The transparent-headed fish with rotating tubular eyes
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {barreleyeFish.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(barreleyeFish.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-cyan-300 mb-2 capitalize">{key}</h3>
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-cyan-900 to-blue-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Transparent Marvels</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Barreleye fish demonstrate incredible transparency adaptations for deep-sea survival.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-cyan-400 mb-3">Vision Research</h4>
                            <p className="text-gray-300">Study unique rotating eye mechanics.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-blue-400 mb-3">Transparency Science</h4>
                            <p className="text-gray-300">Research biological transparency mechanisms.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-teal-400 mb-3">Deep-Sea Biology</h4>
                            <p className="text-gray-300">Explore adaptation to extreme environments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BarreleyeFish;
