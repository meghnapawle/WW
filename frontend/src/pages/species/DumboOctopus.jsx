import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const dumboOctopus = {
    name: "Dumbo Octopus",
    scientificName: "Grimpoteuthis spp.",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Mollusca",
        class: "Cephalopoda",
        order: "Octopoda",
        family: "Grimpoteuthidae",
        genus: "Grimpoteuthis",
        species: "About 17 species"
    },

    imageUrls: ["/imges/dumbo_octopus.jpg", "/imges/deep_sea.jpg", "/imges/octopus.png"],

    physicalCharacteristics: {
        length: "20-30 cm (8-12 inches)",
        weight: "5.9-6 kg (13 lbs) maximum",
        fins: "Prominent ear-like fins",
        arms: "8 arms with webbed skin",
        body: "Bell-shaped, gelatinous",
        lifespan: "3-5 years"
    },

    habitat: {
        primary: "Abyssal and hadal zones",
        regions: "All oceans worldwide",
        depth: "3,000-7,000 meters (9,800-23,000 feet)",
        temperature: "1-4°C (34-39°F)",
        pressure: "Extreme deep-sea pressure"
    },

    behavior: {
        swimming: "Flaps ear-like fins for propulsion",
        movement: "Also uses jet propulsion and arm crawling",
        feeding: "Hovers above sea floor hunting",
        reproduction: "Males permanently attach to females",
        camouflage: "Can change color and texture"
    },

    diet: {
        primary: "Benthic predator and scavenger",
        food: ["Amphipods", "Isopods", "Bristle worms", "Copepods", "Small crustaceans", "Marine worms"],
        hunting: "Pounces on prey from above",
        feeding: "Engulfs prey with webbed arms"
    },

    reproduction: {
        dimorphism: "Extreme sexual dimorphism",
        mating: "Dwarf males attach permanently to females",
        eggs: "Females can store sperm for long periods",
        development: "Direct development without larval stage",
        brooding: "Extended parental care"
    },

    lifespan: "3-5 years",
    conservationStatus: "Data Deficient",

    threats: [
        "Deep-sea mining activities",
        "Climate change affecting deep waters",
        "Ocean acidification",
        "Pollution reaching deep ocean",
        "Deep-sea fishing operations"
    ],

    adaptations: [
        "Ear-like fins for efficient swimming",
        "Extreme pressure tolerance",
        "Large eyes for low-light vision",
        "Webbed arms for prey capture",
        "Gelatinous body structure",
        "Cold-water metabolism"
    ],

    uniqueFeatures: [
        "Deepest-living octopus species",
        "Only octopus with fins",
        "Named after Disney's Dumbo elephant",
        "Can swim, crawl, and hover",
        "Extreme sexual size dimorphism",
        "Lives at crushing depths"
    ],

    interestingFacts: [
        "Named after Disney's Dumbo for their ear-like fins",
        "Deepest-living octopus on Earth",
        "Can live at depths with crushing pressure",
        "Males are tiny and attach permanently to females",
        "Have the largest eyes relative to body size",
        "Can change color even in total darkness",
        "Use three different methods of locomotion",
        "Found in ocean's deepest trenches"
    ]
};

const DumboOctopus = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % dumboOctopus.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + dumboOctopus.imageUrls.length) % dumboOctopus.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-pink-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-pink-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {dumboOctopus.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {dumboOctopus.physicalCharacteristics.weight}</li>
                                    <li><strong>Fins:</strong> {dumboOctopus.physicalCharacteristics.fins}</li>
                                    <li><strong>Arms:</strong> {dumboOctopus.physicalCharacteristics.arms}</li>
                                    <li><strong>Body:</strong> {dumboOctopus.physicalCharacteristics.body}</li>
                                    <li><strong>Lifespan:</strong> {dumboOctopus.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-purple-400 mb-4">Unique Features</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {dumboOctopus.uniqueFeatures.map((feature, index) => (
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
                                    {Object.entries(dumboOctopus.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-cyan-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-pink-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {dumboOctopus.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Hunting:</strong> {dumboOctopus.diet.hunting}</p>
                                    <p className="text-gray-300 mb-3"><strong>Feeding:</strong> {dumboOctopus.diet.feeding}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {dumboOctopus.diet.food.map((item, index) => (
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
                            <h3 className="text-xl font-bold text-pink-400 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{dumboOctopus.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {dumboOctopus.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {dumboOctopus.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-pink-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-pink-300 mb-4">Fascinating Facts</h3>
                            <ul className="list-disc list-inside text-pink-200 space-y-2">
                                {dumboOctopus.interestingFacts.map((fact, index) => (
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-pink-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={dumboOctopus.imageUrls[currentImageIndex]} 
                        alt={dumboOctopus.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                        {dumboOctopus.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-pink-200">
                        {dumboOctopus.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Adorable giants of the deepest ocean
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {dumboOctopus.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-pink-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(dumboOctopus.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-pink-300 mb-2 capitalize">{key}</h3>
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-pink-900 to-purple-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Deep-Sea Treasures</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Dumbo octopuses are the deepest-living octopuses, inhabiting Earth's most extreme environments.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-pink-400 mb-3">Deep-Sea Exploration</h4>
                            <p className="text-gray-300">Study life in Earth's most extreme environments.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-purple-400 mb-3">Pressure Research</h4>
                            <p className="text-gray-300">Learn how life adapts to crushing depths.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-magenta-400 mb-3">Conservation</h4>
                            <p className="text-gray-300">Protect deep-sea habitats from mining.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DumboOctopus;
