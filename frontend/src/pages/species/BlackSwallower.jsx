import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const blackSwallower = {
    name: "Black Swallower",
    scientificName: "Chiasmodon niger",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Actinopterygii",
        order: "Perciformes",
        family: "Chiasmodontidae",
        genus: "Chiasmodon",
        species: "C. niger"
    },

    imageUrls: ["/imges/black_swallower.jpg", "/imges/expanded_fish.jpg", "/imges/deep_predator.jpg"],

    physicalCharacteristics: {
        length: "25 cm (10 inches)",
        weight: "200-500 grams normally",
        stomach: "Expandable to enormous size",
        jaw: "Hinged jaw for large prey",
        teeth: "Sharp, backward-curving teeth",
        lifespan: "Unknown, estimated 5-10 years"
    },

    habitat: {
        primary: "Deep tropical and subtropical waters",
        regions: "Atlantic, Pacific, and Indian Oceans",
        depth: "700-2,745 meters (2,300-9,000 feet)",
        temperature: "4-15°C (39-59°F)",
        distribution: "Mesopelagic to bathypelagic zones"
    },

    behavior: {
        feeding: "Swallows prey larger than itself",
        hunting: "Ambush predator",
        digestion: "Extremely slow digestion process",
        expansion: "Stomach expands dramatically",
        death: "Often dies from overeating"
    },

    diet: {
        primary: "Opportunistic predator",
        food: ["Fish twice its size", "Deep-sea fish", "Lanternfish", "Other small fish", "Squid"],
        hunting: "Swallows whole fish alive",
        method: "Unhinging jaw and expanding stomach"
    },

    reproduction: {
        method: "External fertilization",
        spawning: "Pelagic spawning",
        eggs: "Small pelagic eggs",
        development: "Unknown larval development",
        knowledge: "Reproduction poorly understood"
    },

    lifespan: "Unknown, estimated 5-10 years",
    conservationStatus: "Data Deficient",

    threats: [
        "Deep-sea fishing bycatch",
        "Pollution in deep waters",
        "Climate change affecting prey",
        "Unknown population pressures",
        "Deep-sea habitat disturbance"
    ],

    adaptations: [
        "Extremely expandable stomach",
        "Hinged jaw mechanism",
        "Backward-curved teeth",
        "Slow metabolism for large meals",
        "Deep-water pressure tolerance",
        "Opportunistic feeding strategy"
    ],

    uniqueFeatures: [
        "Can swallow fish twice its size",
        "Stomach expands to hold huge prey",
        "Often dies from overeating",
        "Hinged jaw like a snake",
        "One of nature's greediest predators",
        "Sometimes found floating with massive meal"
    ],

    interestingFacts: [
        "Can swallow fish twice its own size",
        "Often dies from overeating too large prey",
        "Stomach can expand to incredible proportions",
        "Sometimes found floating at surface after overeating",
        "Has hinged jaws like a snake",
        "Prey can be seen inside transparent stomach",
        "One of the greediest fish in the ocean",
        "Body becomes grotesquely distended when feeding"
    ]
};

const BlackSwallower = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % blackSwallower.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + blackSwallower.imageUrls.length) % blackSwallower.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-gray-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-gray-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {blackSwallower.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {blackSwallower.physicalCharacteristics.weight}</li>
                                    <li><strong>Stomach:</strong> {blackSwallower.physicalCharacteristics.stomach}</li>
                                    <li><strong>Jaw:</strong> {blackSwallower.physicalCharacteristics.jaw}</li>
                                    <li><strong>Teeth:</strong> {blackSwallower.physicalCharacteristics.teeth}</li>
                                    <li><strong>Lifespan:</strong> {blackSwallower.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-slate-400 mb-4">Unique Features</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {blackSwallower.uniqueFeatures.map((feature, index) => (
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
                                    {Object.entries(blackSwallower.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-gray-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {blackSwallower.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Hunting:</strong> {blackSwallower.diet.hunting}</p>
                                    <p className="text-gray-300 mb-3"><strong>Method:</strong> {blackSwallower.diet.method}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {blackSwallower.diet.food.map((item, index) => (
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
                            <h3 className="text-xl font-bold text-gray-400 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{blackSwallower.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {blackSwallower.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {blackSwallower.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-gray-300 mb-4">Fascinating Facts</h3>
                            <ul className="list-disc list-inside text-gray-200 space-y-2">
                                {blackSwallower.interestingFacts.map((fact, index) => (
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={blackSwallower.imageUrls[currentImageIndex]} 
                        alt={blackSwallower.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-400 to-slate-400 bg-clip-text text-transparent">
                        {blackSwallower.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-gray-200">
                        {blackSwallower.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The greedy fish that can swallow prey twice its size
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {blackSwallower.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(blackSwallower.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-gray-300 mb-2 capitalize">{key}</h3>
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-gray-900 to-slate-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Voracious Predators</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Black swallowers demonstrate extreme feeding adaptations in the deep sea.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-gray-400 mb-3">Feeding Biology</h4>
                            <p className="text-gray-300">Study extreme feeding adaptations.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-slate-400 mb-3">Deep-Sea Ecology</h4>
                            <p className="text-gray-300">Research opportunistic predators.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-zinc-400 mb-3">Adaptation Studies</h4>
                            <p className="text-gray-300">Explore expandable anatomy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlackSwallower;
