import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const bigfinSquid = {
    name: "Bigfin Squid",
    scientificName: "Magnapinna genus",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Mollusca",
        class: "Cephalopoda",
        order: "Oegopsida",
        family: "Magnapinnidae",
        genus: "Magnapinna",
        species: "Multiple species"
    },

    imageUrls: ["/imges/bigfin_squid.jpg", "/imges/deep_squid.jpg", "/imges/long_arms_squid.jpg"],

    physicalCharacteristics: {
        length: "Arms up to 8 meters (26 feet)",
        totalLength: "Total length up to 26 feet",
        arms: "Extremely long, bendable arms",
        fins: "Large triangular fins",
        body: "Small mantle relative to arms",
        lifespan: "Unknown"
    },

    habitat: {
        primary: "Deep ocean waters worldwide",
        regions: "Global distribution in deep seas",
        depth: "3,000-6,000 meters (9,800-19,700 feet)",
        temperature: "1-4°C (34-39°F)",
        distribution: "Abyssal and bathyal zones"
    },

    behavior: {
        swimming: "Arms trail behind like ribbons",
        posture: "Unique elbow bend in arms",
        feeding: "Arms used as fishing lines",
        rarity: "Rarely observed alive",
        mystery: "Behavior largely unknown"
    },

    diet: {
        primary: "Presumed deep-sea predator",
        food: ["Small fish", "Crustaceans", "Other squid", "Deep-sea organisms", "Zooplankton"],
        hunting: "Presumed to use arms as lures",
        method: "Unknown feeding strategy"
    },

    reproduction: {
        method: "Unknown reproductive strategy",
        spawning: "Reproduction completely unknown",
        development: "Unknown life cycle",
        growth: "Growth pattern unknown",
        knowledge: "No reproductive data available"
    },

    lifespan: "Unknown",
    conservationStatus: "Data Deficient",

    threats: [
        "Deep-sea fishing impacts",
        "Ocean pollution",
        "Climate change in deep waters",
        "Unknown population pressures",
        "Potential deep-sea mining"
    ],

    adaptations: [
        "Extremely long flexible arms",
        "Deep-water pressure tolerance",
        "Unique arm positioning ability",
        "Large fins for deep-sea navigation",
        "Specialized deep-sea anatomy",
        "Mysterious elbow-like arm bends"
    ],

    uniqueFeatures: [
        "Longest arms relative to body size",
        "Mysterious elbow bends in arms",
        "Arms trail like ribbons",
        "One of most enigmatic squids",
        "Rarely seen alive",
        "Unique deep-sea anatomy"
    ],

    interestingFacts: [
        "Has the longest arms relative to body size",
        "Arms can be 4-8 times longer than body",
        "Creates mysterious 'elbow' bends in arms",
        "Only seen a handful of times alive",
        "Arms trail behind like long ribbons",
        "One of the most mysterious cephalopods",
        "Lives deeper than most other squids",
        "May use arms as fishing lines"
    ]
};

const BigfinSquid = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % bigfinSquid.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + bigfinSquid.imageUrls.length) % bigfinSquid.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-indigo-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-indigo-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Arm Length:</strong> {bigfinSquid.physicalCharacteristics.length}</li>
                                    <li><strong>Total Length:</strong> {bigfinSquid.physicalCharacteristics.totalLength}</li>
                                    <li><strong>Arms:</strong> {bigfinSquid.physicalCharacteristics.arms}</li>
                                    <li><strong>Fins:</strong> {bigfinSquid.physicalCharacteristics.fins}</li>
                                    <li><strong>Body:</strong> {bigfinSquid.physicalCharacteristics.body}</li>
                                    <li><strong>Lifespan:</strong> {bigfinSquid.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-purple-400 mb-4">Unique Features</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {bigfinSquid.uniqueFeatures.map((feature, index) => (
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
                                    {Object.entries(bigfinSquid.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-indigo-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-purple-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {bigfinSquid.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Hunting:</strong> {bigfinSquid.diet.hunting}</p>
                                    <p className="text-gray-300 mb-3"><strong>Method:</strong> {bigfinSquid.diet.method}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {bigfinSquid.diet.food.map((item, index) => (
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
                            <h3 className="text-xl font-bold text-indigo-400 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{bigfinSquid.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {bigfinSquid.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {bigfinSquid.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-indigo-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-indigo-300 mb-4">Fascinating Facts</h3>
                            <ul className="list-disc list-inside text-indigo-200 space-y-2">
                                {bigfinSquid.interestingFacts.map((fact, index) => (
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={bigfinSquid.imageUrls[currentImageIndex]} 
                        alt={bigfinSquid.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        {bigfinSquid.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-indigo-200">
                        {bigfinSquid.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The mysterious squid with impossibly long ribbon-like arms
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {bigfinSquid.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-indigo-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(bigfinSquid.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-indigo-300 mb-2 capitalize">{key}</h3>
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-indigo-900 to-purple-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Mysterious Giants</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Bigfin squids remain one of the ocean's greatest mysteries with their impossible anatomy.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-indigo-400 mb-3">Mystery Research</h4>
                            <p className="text-gray-300">Study unknown deep-sea behaviors.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-purple-400 mb-3">Deep Observation</h4>
                            <p className="text-gray-300">Develop deep-sea monitoring.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-violet-400 mb-3">Cephalopod Evolution</h4>
                            <p className="text-gray-300">Research squid evolution.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigfinSquid;
