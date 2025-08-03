import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const hatchetfish = {
    name: "Hatchetfish",
    scientificName: "Sternoptychidae family",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Actinopterygii",
        order: "Stomiiformes",
        family: "Sternoptychidae",
        genus: "Various genera",
        species: "Over 45 species"
    },

    imageUrls: ["/imges/hatchetfish.jpg", "/imges/deep_sea.jpg", "/imges/lanternfish.jpg"],

    physicalCharacteristics: {
        length: "2.5-12 cm (1-5 inches)",
        weight: "2-20 grams",
        shape: "Laterally compressed, hatchet-like profile",
        photophores: "Rows of light organs on belly",
        eyes: "Large, upward-pointing eyes",
        lifespan: "1-4 years"
    },

    habitat: {
        primary: "Mesopelagic zone of open ocean",
        regions: "All oceans worldwide",
        depth: "200-1,500 meters (650-4,900 feet)",
        migration: "Daily vertical migration to surface",
        distribution: "Most abundant fish in twilight zone"
    },

    behavior: {
        camouflage: "Counter-illumination to match surface light",
        migration: "Follows zooplankton to surface at night",
        schooling: "Forms large aggregations",
        predation: "Feeds upward on descending prey",
        hiding: "Remains in dark depths during day"
    },

    diet: {
        primary: "Planktivorous predator",
        food: ["Copepods", "Ostracods", "Small crustaceans", "Zooplankton larvae", "Marine worms", "Fish larvae"],
        hunting: "Ambush predator looking upward",
        role: "Important link in deep-sea food webs"
    },

    reproduction: {
        spawning: "Broadcast spawning in open water",
        eggs: "Pelagic eggs float to surface waters",
        development: "Planktonic larval development",
        maturity: "Reach maturity at 1-2 years",
        timing: "Seasonal spawning cycles"
    },

    lifespan: "1-4 years",
    conservationStatus: "Least Concern",

    threats: [
        "Climate change affecting prey distribution",
        "Ocean warming disrupting migrations",
        "Deep-sea fishing operations",
        "Pollution and microplastics",
        "Ocean acidification"
    ],

    adaptations: [
        "Counter-illumination camouflage system",
        "Upward-pointing eyes for prey detection",
        "Compressed body shape for stealth",
        "Bioluminescent photophores",
        "Daily vertical migration behavior",
        "Large mouth for efficient feeding"
    ],

    counterIllumination: [
        "Belly photophores match surface light",
        "Makes them invisible from below",
        "Can adjust light intensity",
        "Perfectly camouflaged silhouette",
        "Most sophisticated biological camouflage",
        "Each species has unique light pattern"
    ],

    interestingFacts: [
        "Named for their hatchet-like body shape",
        "Masters of counter-illumination camouflage",
        "Eyes point upward to spot prey silhouettes",
        "Can become completely invisible from below",
        "Form some of the densest fish schools",
        "Key species in twilight zone ecosystem",
        "Migrate hundreds of meters daily",
        "Living examples of natural stealth technology"
    ]
};

const Hatchetfish = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % hatchetfish.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + hatchetfish.imageUrls.length) % hatchetfish.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-silver-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-gray-300 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {hatchetfish.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {hatchetfish.physicalCharacteristics.weight}</li>
                                    <li><strong>Shape:</strong> {hatchetfish.physicalCharacteristics.shape}</li>
                                    <li><strong>Photophores:</strong> {hatchetfish.physicalCharacteristics.photophores}</li>
                                    <li><strong>Eyes:</strong> {hatchetfish.physicalCharacteristics.eyes}</li>
                                    <li><strong>Lifespan:</strong> {hatchetfish.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-cyan-400 mb-4">Counter-Illumination</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {hatchetfish.counterIllumination.map((feature, index) => (
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
                                    {Object.entries(hatchetfish.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-cyan-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {hatchetfish.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Hunting:</strong> {hatchetfish.diet.hunting}</p>
                                    <p className="text-gray-300 mb-3"><strong>Role:</strong> {hatchetfish.diet.role}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {hatchetfish.diet.food.map((item, index) => (
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
                            <h3 className="text-xl font-bold text-gray-300 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-green-400">{hatchetfish.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {hatchetfish.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {hatchetfish.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-slate-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-slate-300 mb-4">Amazing Facts</h3>
                            <ul className="list-disc list-inside text-slate-200 space-y-2">
                                {hatchetfish.interestingFacts.map((fact, index) => (
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-800 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={hatchetfish.imageUrls[currentImageIndex]} 
                        alt={hatchetfish.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-300 to-cyan-400 bg-clip-text text-transparent">
                        {hatchetfish.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-gray-200">
                        {hatchetfish.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Masters of biological stealth technology
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {hatchetfish.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-300">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(hatchetfish.classification).map(([key, value]) => (
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-slate-800 to-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Nature's Stealth Masters</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Hatchetfish demonstrate the most sophisticated biological camouflage system in the ocean.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-gray-300 mb-3">Biomimicry</h4>
                            <p className="text-gray-300">Study counter-illumination for stealth technology.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-cyan-400 mb-3">Deep-Sea Research</h4>
                            <p className="text-gray-300">Explore twilight zone ecosystems and migrations.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-blue-400 mb-3">Bioluminescence</h4>
                            <p className="text-gray-300">Advance understanding of natural light systems.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hatchetfish;
