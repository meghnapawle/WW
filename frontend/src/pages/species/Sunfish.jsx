import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const sunfish = {
    name: "Ocean Sunfish",
    scientificName: "Mola mola",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Actinopterygii",
        order: "Tetraodontiformes",
        family: "Molidae",
        genus: "Mola",
        species: "M. mola"
    },

    imageUrls: ["/imges/sunfish.jpg", "/imges/large_fish.jpg", "/imges/ocean_giant.jpg"],

    physicalCharacteristics: {
        length: "Up to 4.2 meters (14 feet)",
        weight: "Up to 2,300 kg (5,070 lbs)",
        shape: "Flattened, disc-like body",
        fins: "Lacks caudal fin, has clavus",
        skin: "Rough, sandpaper-like texture",
        lifespan: "Up to 100+ years"
    },

    habitat: {
        primary: "Open ocean pelagic waters",
        regions: "Tropical and temperate waters worldwide",
        depth: "Surface to 600 meters (2,000 feet)",
        temperature: "10-25°C (50-77°F)",
        distribution: "Atlantic, Pacific, and Indian Oceans"
    },

    behavior: {
        swimming: "Slow, undulating movement",
        basking: "Surface basking to regulate temperature",
        diving: "Deep dives for feeding",
        cleaning: "Visits cleaning stations",
        migration: "Long-distance seasonal movements"
    },

    diet: {
        primary: "Jellyfish specialist",
        food: ["Jellyfish", "Ctenophores", "Salps", "Squid larvae", "Small fish", "Zooplankton"],
        hunting: "Follows jellyfish blooms",
        method: "Suction feeding on gelatinous prey"
    },

    reproduction: {
        method: "External fertilization",
        spawning: "Releases up to 300 million eggs",
        development: "Pelagic larval stage",
        growth: "Rapid growth from tiny larvae",
        maturity: "Sexual maturity around 5 years"
    },

    lifespan: "Up to 100+ years",
    conservationStatus: "Vulnerable",

    threats: [
        "Plastic pollution (mistaken for jellyfish)",
        "Boat strikes due to surface basking",
        "Fishing gear entanglement",
        "Overfishing of jellyfish prey",
        "Ocean temperature changes"
    ],

    adaptations: [
        "Massive size for predator deterrence",
        "Flattened body for efficient swimming",
        "Rough skin for parasite removal",
        "Temperature regulation through basking",
        "Specialized diet for jellyfish consumption",
        "Deep diving capability for feeding"
    ],

    uniqueFeatures: [
        "Heaviest bony fish in the world",
        "Lacks true tail fin (caudal fin)",
        "Can produce 300 million eggs",
        "Grows 60 million times from larva to adult",
        "Can dive to 600 meters depth",
        "Often mistaken for sharks when basking"
    ],

    interestingFacts: [
        "Heaviest bony fish species in the world",
        "Can weigh as much as a small car",
        "Produces more eggs than any vertebrate",
        "Grows 60 million times from birth to adult",
        "Often seen lying sideways at the surface",
        "Can dive deeper than 600 meters",
        "Has no true tail - just a rudder called a clavus",
        "Sometimes jumps completely out of the water"
    ]
};

const Sunfish = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % sunfish.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + sunfish.imageUrls.length) % sunfish.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-orange-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-orange-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {sunfish.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {sunfish.physicalCharacteristics.weight}</li>
                                    <li><strong>Shape:</strong> {sunfish.physicalCharacteristics.shape}</li>
                                    <li><strong>Fins:</strong> {sunfish.physicalCharacteristics.fins}</li>
                                    <li><strong>Skin:</strong> {sunfish.physicalCharacteristics.skin}</li>
                                    <li><strong>Lifespan:</strong> {sunfish.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-yellow-400 mb-4">Unique Features</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {sunfish.uniqueFeatures.map((feature, index) => (
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
                                    {Object.entries(sunfish.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-orange-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-yellow-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {sunfish.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Hunting:</strong> {sunfish.diet.hunting}</p>
                                    <p className="text-gray-300 mb-3"><strong>Method:</strong> {sunfish.diet.method}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {sunfish.diet.food.map((item, index) => (
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
                            <h3 className="text-xl font-bold text-orange-400 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{sunfish.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {sunfish.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {sunfish.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-orange-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-orange-300 mb-4">Fascinating Facts</h3>
                            <ul className="list-disc list-inside text-orange-200 space-y-2">
                                {sunfish.interestingFacts.map((fact, index) => (
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-orange-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={sunfish.imageUrls[currentImageIndex]} 
                        alt={sunfish.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                        {sunfish.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-orange-200">
                        {sunfish.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The world's heaviest bony fish with a passion for jellyfish
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {sunfish.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(sunfish.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-orange-300 mb-2 capitalize">{key}</h3>
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-orange-900 to-yellow-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Ocean Giants</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Ocean sunfish are remarkable examples of extreme fish evolution and jellyfish specialization.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-orange-400 mb-3">Giant Fish Biology</h4>
                            <p className="text-gray-300">Study extreme size evolution in fish.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-yellow-400 mb-3">Jellyfish Ecology</h4>
                            <p className="text-gray-300">Research jellyfish-predator relationships.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-red-400 mb-3">Plastic Pollution</h4>
                            <p className="text-gray-300">Address ocean plastic threats.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sunfish;
