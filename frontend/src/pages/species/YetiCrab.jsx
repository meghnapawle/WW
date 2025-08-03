import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const yetiCrab = {
    name: "Yeti Crab",
    scientificName: "Kiwa hirsuta",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Arthropoda",
        class: "Malacostraca",
        order: "Decapoda",
        family: "Kiwaidae",
        genus: "Kiwa",
        species: "K. hirsuta"
    },

    imageUrls: ["/imges/yeti_crab.jpg", "/imges/hydrothermal_vent.jpg", "/imges/deep_crab.jpg"],

    physicalCharacteristics: {
        length: "15 cm (6 inches)",
        weight: "30-50 grams",
        claws: "Covered in hair-like filaments",
        eyes: "Reduced, nearly blind",
        color: "Pale yellow to white",
        lifespan: "Unknown, estimated 10-20 years"
    },

    habitat: {
        primary: "Hydrothermal vents in South Pacific",
        regions: "South Pacific Ridge near Easter Island",
        depth: "2,200 meters (7,200 feet)",
        temperature: "Extreme temperature gradients",
        distribution: "Around deep-sea volcanic vents"
    },

    behavior: {
        farming: "Cultivates bacteria on hairy arms",
        feeding: "Filters bacteria and organic matter",
        movement: "Waves arms to collect food",
        thermoregulation: "Moves between hot and cold zones",
        blindness: "Relies on chemical senses"
    },

    diet: {
        primary: "Bacteria and chemosynthetic organisms",
        food: ["Symbiotic bacteria", "Organic particles", "Chemosynthetic microbes", "Vent minerals", "Bacterial mats"],
        hunting: "Grazes bacteria from arm filaments",
        method: "Filter feeding and bacterial cultivation"
    },

    reproduction: {
        method: "Sexual reproduction",
        brooding: "Females carry eggs under abdomen",
        development: "Direct development",
        dispersal: "Larvae must find new vents",
        knowledge: "Reproduction poorly understood"
    },

    lifespan: "Unknown, estimated 10-20 years",
    conservationStatus: "Data Deficient",

    threats: [
        "Deep-sea mining around vents",
        "Habitat destruction",
        "Limited vent locations",
        "Ocean acidification",
        "Climate change affecting vent systems"
    ],

    adaptations: [
        "Hair-like filaments for bacterial cultivation",
        "Reduced eyes for vent environment",
        "Heat tolerance near volcanic vents",
        "Specialized claws for filter feeding",
        "Symbiotic relationship with bacteria",
        "Ability to move between temperature zones"
    ],

    uniqueFeatures: [
        "Cultivates bacteria on hairy arms",
        "Lives around volcanic hydrothermal vents",
        "Nearly blind with reduced eyes",
        "Discovered only in 2005",
        "Unique bacterial farming behavior",
        "Extreme environment specialist"
    ],

    interestingFacts: [
        "Discovered in 2005 near Easter Island",
        "Named for its hairy, yeti-like appearance",
        "Farms bacteria on hair-like filaments",
        "Lives in one of Earth's most extreme environments",
        "Nearly blind, relying on chemical senses",
        "Waves arms to cultivate bacterial gardens",
        "Found only around deep-sea hydrothermal vents",
        "May represent entirely new family of crabs"
    ]
};

const YetiCrab = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % yetiCrab.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + yetiCrab.imageUrls.length) % yetiCrab.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-yellow-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-yellow-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {yetiCrab.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {yetiCrab.physicalCharacteristics.weight}</li>
                                    <li><strong>Claws:</strong> {yetiCrab.physicalCharacteristics.claws}</li>
                                    <li><strong>Eyes:</strong> {yetiCrab.physicalCharacteristics.eyes}</li>
                                    <li><strong>Color:</strong> {yetiCrab.physicalCharacteristics.color}</li>
                                    <li><strong>Lifespan:</strong> {yetiCrab.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-orange-400 mb-4">Unique Features</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {yetiCrab.uniqueFeatures.map((feature, index) => (
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
                                    {Object.entries(yetiCrab.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-yellow-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-orange-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {yetiCrab.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Hunting:</strong> {yetiCrab.diet.hunting}</p>
                                    <p className="text-gray-300 mb-3"><strong>Method:</strong> {yetiCrab.diet.method}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {yetiCrab.diet.food.map((item, index) => (
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
                            <h3 className="text-xl font-bold text-yellow-400 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{yetiCrab.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {yetiCrab.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {yetiCrab.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-yellow-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-yellow-300 mb-4">Fascinating Facts</h3>
                            <ul className="list-disc list-inside text-yellow-200 space-y-2">
                                {yetiCrab.interestingFacts.map((fact, index) => (
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-yellow-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={yetiCrab.imageUrls[currentImageIndex]} 
                        alt={yetiCrab.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                        {yetiCrab.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-yellow-200">
                        {yetiCrab.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The hairy crab that farms bacteria around volcanic vents
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {yetiCrab.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(yetiCrab.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-yellow-300 mb-2 capitalize">{key}</h3>
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-yellow-900 to-orange-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Bacterial Farmers</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Yeti crabs represent remarkable adaptation to extreme hydrothermal vent environments.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-yellow-400 mb-3">Vent Ecology</h4>
                            <p className="text-gray-300">Study hydrothermal vent ecosystems.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-orange-400 mb-3">Symbiosis Research</h4>
                            <p className="text-gray-300">Research bacterial-animal relationships.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-red-400 mb-3">Deep-Sea Mining</h4>
                            <p className="text-gray-300">Protect unique vent habitats.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YetiCrab;
