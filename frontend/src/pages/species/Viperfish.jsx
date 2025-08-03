import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const viperfish = {
    name: "Viperfish",
    scientificName: "Chauliodus sloani",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Actinopterygii",
        order: "Stomiiformes",
        family: "Stomiidae",
        genus: "Chauliodus",
        species: "C. sloani"
    },

    imageUrls: ["/imges/viperfish.jpg", "/imges/deep_sea.jpg", "/imges/angler_fish.jpg"],

    physicalCharacteristics: {
        length: "30-60 cm (12-24 inches)",
        weight: "Up to 0.5 kg (1.1 lbs)",
        teeth: "Long, needle-like fangs that don't fit in mouth",
        photophores: "350+ light-producing organs",
        vertebrae: "Extended vertebrae for wide mouth opening",
        lifespan: "15-40 years"
    },

    habitat: {
        primary: "Deep ocean mesopelagic and bathypelagic zones",
        regions: "Tropical and temperate oceans worldwide",
        depth: "200-5,000 meters (650-16,400 feet)",
        temperature: "1-15°C (34-59°F)",
        migration: "Daily vertical migration following prey"
    },

    behavior: {
        hunting: "Ambush predator with bioluminescent lure",
        migration: "Follows diel vertical migration pattern",
        swimming: "Poor swimmer, relies on stealth",
        jaw: "Can unhinge jaw to swallow large prey",
        bioluminescence: "Uses light to communicate and hunt"
    },

    diet: {
        primary: "Piscivorous predator",
        food: ["Lanternfish", "Hatchetfish", "Small squid", "Crustaceans", "Other deep-sea fish"],
        hunting: "Uses photophore lure to attract prey",
        prey: "Can eat fish up to 63% of own body length"
    },

    reproduction: {
        spawning: "External fertilization in open water",
        eggs: "Pelagic eggs float in upper waters",
        larvae: "Undergo metamorphosis during development",
        maturity: "Reach sexual maturity at 2-3 years",
        season: "Year-round in tropical waters"
    },

    lifespan: "15-40 years",
    conservationStatus: "Least Concern",

    threats: [
        "Deep-sea fishing bycatch",
        "Ocean warming affecting prey distribution",
        "Pollution and microplastics",
        "Ocean acidification",
        "Overfishing of prey species"
    ],

    adaptations: [
        "Massive fangs for gripping slippery prey",
        "Expandable jaw and stomach",
        "Bioluminescent lure for hunting",
        "Light-producing photophores",
        "Large eyes for detecting prey in darkness",
        "Pressure adaptation for deep waters"
    ],

    bioluminescence: [
        "350+ photophores along body",
        "Dorsal fin photophore acts as fishing lure",
        "Blue-green light most common in deep sea",
        "Can control light intensity",
        "Used for communication and hunting",
        "May confuse predators"
    ],

    interestingFacts: [
        "Teeth are so large they curve back toward their eyes",
        "Can unhinge their jaw like a snake",
        "Have one of the most effective bioluminescent lures",
        "Make daily migrations of over 1500 meters",
        "Can swallow prey larger than themselves",
        "Their stomach can stretch to hold huge meals",
        "First vertebra acts as a shock absorber",
        "Found in every ocean except polar regions"
    ]
};

const Viperfish = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % viperfish.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + viperfish.imageUrls.length) % viperfish.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-red-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-red-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {viperfish.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {viperfish.physicalCharacteristics.weight}</li>
                                    <li><strong>Teeth:</strong> {viperfish.physicalCharacteristics.teeth}</li>
                                    <li><strong>Photophores:</strong> {viperfish.physicalCharacteristics.photophores}</li>
                                    <li><strong>Vertebrae:</strong> {viperfish.physicalCharacteristics.vertebrae}</li>
                                    <li><strong>Lifespan:</strong> {viperfish.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-cyan-400 mb-4">Bioluminescence</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {viperfish.bioluminescence.map((feature, index) => (
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
                                    {Object.entries(viperfish.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-cyan-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {viperfish.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Hunting:</strong> {viperfish.diet.hunting}</p>
                                    <p className="text-gray-300 mb-3"><strong>Prey Size:</strong> {viperfish.diet.prey}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {viperfish.diet.food.map((item, index) => (
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
                            <h3 className="text-xl font-bold text-red-400 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-green-400">{viperfish.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {viperfish.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {viperfish.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-purple-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-purple-300 mb-4">Fascinating Facts</h3>
                            <ul className="list-disc list-inside text-purple-200 space-y-2">
                                {viperfish.interestingFacts.map((fact, index) => (
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-red-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={viperfish.imageUrls[currentImageIndex]} 
                        alt={viperfish.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                        {viperfish.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-red-200">
                        {viperfish.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Deep-sea predator with nightmare fangs and bioluminescent lure
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {viperfish.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-red-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(viperfish.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-red-300 mb-2 capitalize">{key}</h3>
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-red-900 to-orange-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Guardians of the Deep</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Viperfish are crucial predators in the deep ocean ecosystem, controlling populations of smaller fish.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-red-400 mb-3">Deep-Sea Research</h4>
                            <p className="text-gray-300">Study bioluminescence and deep-sea adaptations.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-orange-400 mb-3">Ecosystem Protection</h4>
                            <p className="text-gray-300">Protect deep-sea habitats from destructive fishing.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-yellow-400 mb-3">Climate Monitoring</h4>
                            <p className="text-gray-300">Track migration patterns as climate indicators.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Viperfish;
