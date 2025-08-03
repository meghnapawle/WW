import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const colossalSquid = {
    name: "Colossal Squid",
    scientificName: "Mesonychoteuthis hamiltoni",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Mollusca",
        class: "Cephalopoda",
        order: "Oegopsida",
        family: "Cranchiidae",
        genus: "Mesonychoteuthis",
        species: "M. hamiltoni"
    },

    imageUrls: ["/imges/colossal_squid.jpg", "/imges/giant_squid_fight.jpg", "/imges/antarctic_squid.jpg"],

    physicalCharacteristics: {
        length: "Up to 14 meters (46 feet)",
        weight: "Up to 750 kg (1,650 lbs)",
        tentacles: "Armed with rotating hooks",
        eyes: "Largest eyes in animal kingdom",
        beak: "Massive, powerful beak",
        lifespan: "Unknown, estimated 1-2 years"
    },

    habitat: {
        primary: "Antarctic deep waters",
        regions: "Southern Ocean around Antarctica",
        depth: "300-2,200 meters (980-7,220 feet)",
        temperature: "-1 to 4°C (30-39°F)",
        distribution: "Circumpolar Antarctic waters"
    },

    behavior: {
        swimming: "Powerful jet propulsion",
        hunting: "Aggressive deep-sea predator",
        defense: "Uses hooks and size for protection",
        migration: "Vertical migration patterns",
        battle: "Fights sperm whales"
    },

    diet: {
        primary: "Large Antarctic predator",
        food: ["Large fish", "Other squid", "Antarctic toothfish", "Deep-sea fish", "Smaller cephalopods"],
        hunting: "Ambush predator with hooks",
        method: "Grappling with rotating hooks"
    },

    reproduction: {
        method: "Single reproductive event",
        spawning: "Dies after reproduction",
        development: "Direct development",
        growth: "Extremely rapid growth",
        lifespan: "Short but intense life"
    },

    lifespan: "Unknown, estimated 1-2 years",
    conservationStatus: "Data Deficient",

    threats: [
        "Climate change in Antarctic waters",
        "Sperm whale predation",
        "Ocean warming",
        "Potential fishing impacts",
        "Unknown population pressures"
    ],

    adaptations: [
        "Rotating hooks on tentacles",
        "Largest eyes in animal kingdom",
        "Antarctic cold-water adaptation",
        "Massive size for protection",
        "Powerful jet propulsion",
        "Bioluminescent capabilities"
    ],

    uniqueFeatures: [
        "Heavier than giant squid",
        "Tentacles armed with rotating hooks",
        "Largest eyes of any animal",
        "Lives in Antarctic waters",
        "Main prey of sperm whales",
        "Incredibly powerful predator"
    ],

    interestingFacts: [
        "Heavier than the giant squid",
        "Has the largest eyes of any animal",
        "Tentacles armed with rotating hooks",
        "Lives exclusively in Antarctic waters",
        "Main prey of sperm whales in the south",
        "Can weigh as much as a small car",
        "Eyes are the size of dinner plates",
        "May be more aggressive than giant squid"
    ]
};

const ColossalSquid = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % colossalSquid.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + colossalSquid.imageUrls.length) % colossalSquid.imageUrls.length);
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
                                    <li><strong>Length:</strong> {colossalSquid.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {colossalSquid.physicalCharacteristics.weight}</li>
                                    <li><strong>Tentacles:</strong> {colossalSquid.physicalCharacteristics.tentacles}</li>
                                    <li><strong>Eyes:</strong> {colossalSquid.physicalCharacteristics.eyes}</li>
                                    <li><strong>Beak:</strong> {colossalSquid.physicalCharacteristics.beak}</li>
                                    <li><strong>Lifespan:</strong> {colossalSquid.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-orange-400 mb-4">Unique Features</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {colossalSquid.uniqueFeatures.map((feature, index) => (
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
                                    {Object.entries(colossalSquid.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-red-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-orange-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {colossalSquid.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Hunting:</strong> {colossalSquid.diet.hunting}</p>
                                    <p className="text-gray-300 mb-3"><strong>Method:</strong> {colossalSquid.diet.method}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {colossalSquid.diet.food.map((item, index) => (
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
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{colossalSquid.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {colossalSquid.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {colossalSquid.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-red-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-red-300 mb-4">Fascinating Facts</h3>
                            <ul className="list-disc list-inside text-red-200 space-y-2">
                                {colossalSquid.interestingFacts.map((fact, index) => (
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
                        src={colossalSquid.imageUrls[currentImageIndex]} 
                        alt={colossalSquid.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                        {colossalSquid.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-red-200">
                        {colossalSquid.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The heaviest squid with rotating hooks and dinner-plate eyes
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {colossalSquid.imageUrls.length}
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
                        {Object.entries(colossalSquid.classification).map(([key, value]) => (
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
                    <h3 className="text-4xl font-bold mb-6">Antarctic Giants</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Colossal squids are the heaviest cephalopods with the largest eyes in the animal kingdom.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-red-400 mb-3">Giant Research</h4>
                            <p className="text-gray-300">Study the largest cephalopods.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-orange-400 mb-3">Antarctic Ecology</h4>
                            <p className="text-gray-300">Research Southern Ocean ecosystems.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-yellow-400 mb-3">Predator Dynamics</h4>
                            <p className="text-gray-300">Study whale-squid interactions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColossalSquid;
