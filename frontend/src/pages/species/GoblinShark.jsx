import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const goblinShark = {
    name: "Goblin Shark",
    scientificName: "Mitsukurina owstoni",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Chondrichthyes",
        order: "Lamniformes",
        family: "Mitsukurinidae",
        genus: "Mitsukurina",
        species: "M. owstoni"
    },

    imageUrls: ["/imges/goblin_shark.jpg", "/imges/deep_sea.jpg", "/imges/shark.png"],

    physicalCharacteristics: {
        length: "3-4 meters (10-13 feet)",
        weight: "210 kg (460 lbs) maximum",
        snout: "Extendable flattened rostrum",
        jaws: "Highly protrusible jaws",
        color: "Pink to brownish coloration",
        lifespan: "Estimated 60+ years"
    },

    habitat: {
        primary: "Continental slopes and seamounts",
        regions: "Western and Eastern Pacific, Atlantic",
        depth: "100-1,300 meters (330-4,270 feet)",
        temperature: "Temperature varies with depth",
        distribution: "Rare, scattered populations"
    },

    behavior: {
        hunting: "Ambush predator with jaw projection",
        swimming: "Slow, sluggish movement",
        detection: "Uses electroreception to find prey",
        feeding: "Slingshot jaw mechanism",
        rarity: "Rarely encountered by humans"
    },

    diet: {
        primary: "Deep-sea specialist predator",
        food: ["Deep-sea fish", "Squid", "Crustaceans", "Cephalopods", "Shrimp", "Dragonfish"],
        hunting: "Projects jaws like a slingshot",
        mechanism: "Fastest jaw extension of any shark"
    },

    reproduction: {
        method: "Ovoviviparous reproduction",
        development: "Internal development with egg cases",
        maturity: "Late sexual maturity",
        offspring: "Small litter size",
        knowledge: "Reproduction poorly understood"
    },

    lifespan: "Estimated 60+ years",
    conservationStatus: "Least Concern",

    threats: [
        "Deep-sea fishing bycatch",
        "Habitat destruction from bottom trawling",
        "Climate change affecting deep waters",
        "Pollution in deep ocean environments",
        "Rarity making conservation difficult"
    ],

    adaptations: [
        "Extendable jaw mechanism",
        "Electroreceptive rostrum for prey detection",
        "Soft, flabby body for deep-sea pressure",
        "Large liver for buoyancy",
        "Reduced skeleton for energy conservation",
        "Pink coloration from blood vessels"
    ],

    uniqueFeatures: [
        "Only living member of its family",
        "Living fossil - 125 million years old",
        "Can shoot jaws out 3 inches in 0.3 seconds",
        "Nicknamed 'alien shark'",
        "Extendable snout for electroreception",
        "One of rarest sharks in the world"
    ],

    interestingFacts: [
        "Called a 'living fossil' - existed for 125 million years",
        "Can shoot its jaws out like a slingshot",
        "Only living member of the family Mitsukurinidae",
        "Has the fastest jaw extension of any shark",
        "Pink color comes from blood vessels near skin",
        "Uses extendable snout to detect electrical fields",
        "Rarely seen alive - most specimens are dead",
        "Sometimes called the 'alien shark'"
    ]
};

const GoblinShark = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % goblinShark.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + goblinShark.imageUrls.length) % goblinShark.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-rose-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-rose-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {goblinShark.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {goblinShark.physicalCharacteristics.weight}</li>
                                    <li><strong>Snout:</strong> {goblinShark.physicalCharacteristics.snout}</li>
                                    <li><strong>Jaws:</strong> {goblinShark.physicalCharacteristics.jaws}</li>
                                    <li><strong>Color:</strong> {goblinShark.physicalCharacteristics.color}</li>
                                    <li><strong>Lifespan:</strong> {goblinShark.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-pink-400 mb-4">Unique Features</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {goblinShark.uniqueFeatures.map((feature, index) => (
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
                                    {Object.entries(goblinShark.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-cyan-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-rose-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {goblinShark.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Hunting:</strong> {goblinShark.diet.hunting}</p>
                                    <p className="text-gray-300 mb-3"><strong>Mechanism:</strong> {goblinShark.diet.mechanism}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {goblinShark.diet.food.map((item, index) => (
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
                            <h3 className="text-xl font-bold text-rose-400 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-green-400">{goblinShark.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {goblinShark.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {goblinShark.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-rose-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-rose-300 mb-4">Fascinating Facts</h3>
                            <ul className="list-disc list-inside text-rose-200 space-y-2">
                                {goblinShark.interestingFacts.map((fact, index) => (
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-rose-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={goblinShark.imageUrls[currentImageIndex]} 
                        alt={goblinShark.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                        {goblinShark.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-rose-200">
                        {goblinShark.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The alien shark with projectile jaws
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {goblinShark.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-rose-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(goblinShark.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-rose-300 mb-2 capitalize">{key}</h3>
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-rose-900 to-pink-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Prehistoric Aliens</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Goblin sharks are 125-million-year-old living fossils with the most unusual feeding mechanism.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-rose-400 mb-3">Evolutionary Studies</h4>
                            <p className="text-gray-300">Study ancient feeding mechanisms and evolution.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-pink-400 mb-3">Deep-Sea Research</h4>
                            <p className="text-gray-300">Explore rare deep-sea shark populations.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-red-400 mb-3">Biomechanics</h4>
                            <p className="text-gray-300">Study rapid jaw extension mechanisms.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoblinShark;
