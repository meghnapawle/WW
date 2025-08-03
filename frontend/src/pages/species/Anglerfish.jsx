import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const anglerfish = {
    name: "Anglerfish",
    scientificName: "Lophiiformes",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Actinopterygii",
        order: "Lophiiformes",
        family: "Multiple families",
        genus: "Various genera",
        species: "200+ species"
    },

    imageUrls: ["/imges/anglerfish.jpg", "/imges/deep_sea.jpg", "/imges/bioluminescent_fish.jpg"],

    physicalCharacteristics: {
        length: "2 cm to 3.3 meters (varies by species)",
        weight: "50 grams to 50 kg",
        lure: "Bioluminescent fishing rod (illicium)",
        mouth: "Enormous mouth with razor-sharp teeth",
        body: "Globular with expandable stomach",
        lifespan: "5-30 years depending on species"
    },

    habitat: {
        primary: "Deep ocean waters worldwide",
        regions: "All major oceans",
        depth: "200-8,000 meters (650-26,200 feet)",
        temperature: "1-4°C (34-39°F)",
        distribution: "Bathypelagic and abyssopelagic zones"
    },

    behavior: {
        hunting: "Lures prey with bioluminescent appendage",
        movement: "Mostly sedentary, ambush predator",
        mating: "Extreme sexual dimorphism",
        feeding: "Can swallow prey twice their size",
        luminescence: "Uses bacteria for light production"
    },

    diet: {
        primary: "Opportunistic deep-sea predator",
        food: ["Deep-sea fish", "Squid", "Crustaceans", "Small sharks", "Jellies", "Any available prey"],
        hunting: "Attracts prey with glowing lure",
        method: "Rapid mouth expansion and suction"
    },

    reproduction: {
        method: "Sexual parasitism (some species)",
        dimorphism: "Extreme - males tiny compared to females",
        mating: "Male fuses to female body permanently",
        spawning: "Females release millions of eggs",
        development: "Planktonic larval stage"
    },

    lifespan: "5-30 years depending on species",
    conservationStatus: "Various (most Data Deficient)",

    threats: [
        "Deep-sea fishing bycatch",
        "Ocean pollution and chemicals",
        "Climate change affecting deep waters",
        "Deep-sea mining operations",
        "Habitat destruction from trawling"
    ],

    adaptations: [
        "Bioluminescent lure for prey attraction",
        "Expandable stomach and jaw",
        "Pressure-resistant body structure",
        "Symbiotic bacteria for light production",
        "Sexual parasitism reproductive strategy",
        "Large mouth for maximum prey capture"
    ],

    uniqueFeatures: [
        "Living fishing rod with bacterial light",
        "Can eat prey twice their body size",
        "Males permanently fuse to females",
        "Over 200 different species",
        "Expandable stomach like a balloon",
        "Some of the most extreme sexual dimorphism"
    ],

    interestingFacts: [
        "The glowing lure is filled with bioluminescent bacteria",
        "Can unhinge their jaw to swallow enormous prey",
        "Male anglerfish are often 1/40th the size of females",
        "Some males bite onto females and fuse permanently",
        "Found in every ocean at depths over 200 meters",
        "Their stomach can expand to hold prey twice their size",
        "Over 200 species with wildly different appearances",
        "Some species can glow multiple colors"
    ]
};

const Anglerfish = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % anglerfish.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + anglerfish.imageUrls.length) % anglerfish.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-amber-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-amber-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {anglerfish.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {anglerfish.physicalCharacteristics.weight}</li>
                                    <li><strong>Lure:</strong> {anglerfish.physicalCharacteristics.lure}</li>
                                    <li><strong>Mouth:</strong> {anglerfish.physicalCharacteristics.mouth}</li>
                                    <li><strong>Body:</strong> {anglerfish.physicalCharacteristics.body}</li>
                                    <li><strong>Lifespan:</strong> {anglerfish.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-yellow-400 mb-4">Unique Features</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {anglerfish.uniqueFeatures.map((feature, index) => (
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
                                    {Object.entries(anglerfish.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-amber-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-yellow-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {anglerfish.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Hunting:</strong> {anglerfish.diet.hunting}</p>
                                    <p className="text-gray-300 mb-3"><strong>Method:</strong> {anglerfish.diet.method}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {anglerfish.diet.food.map((item, index) => (
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
                            <h3 className="text-xl font-bold text-amber-400 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{anglerfish.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {anglerfish.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {anglerfish.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-amber-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-amber-300 mb-4">Fascinating Facts</h3>
                            <ul className="list-disc list-inside text-amber-200 space-y-2">
                                {anglerfish.interestingFacts.map((fact, index) => (
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-amber-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={anglerfish.imageUrls[currentImageIndex]} 
                        alt={anglerfish.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                        {anglerfish.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-amber-200">
                        {anglerfish.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Deep-sea fishermen with living bioluminescent lures
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {anglerfish.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-amber-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(anglerfish.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-amber-300 mb-2 capitalize">{key}</h3>
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-amber-900 to-yellow-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Living Lighthouses</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Anglerfish represent some of the most sophisticated bioluminescent adaptations in the deep sea.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-amber-400 mb-3">Bioluminescence</h4>
                            <p className="text-gray-300">Study bacterial symbiosis and light production.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-yellow-400 mb-3">Sexual Biology</h4>
                            <p className="text-gray-300">Research extreme sexual dimorphism.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-orange-400 mb-3">Deep-Sea Ecology</h4>
                            <p className="text-gray-300">Explore deep-ocean predator roles.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Anglerfish;
