import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const blobfish = {
    name: "Blobfish",
    scientificName: "Psychrolutes marcidus",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Actinopterygii",
        order: "Scorpaeniformes",
        family: "Psychrolutidae",
        genus: "Psychrolutes",
        species: "P. marcidus"
    },

    imageUrls: ["/imges/blobfish.jpg", "/imges/deep_sea.jpg", "/imges/pink_fish.jpg"],

    physicalCharacteristics: {
        length: "30 cm (12 inches)",
        weight: "Up to 9.5 kg (21 lbs)",
        body: "Gelatinous, lacks muscle structure",
        density: "Slightly less than water",
        color: "Pink to tan coloration",
        lifespan: "Unknown, estimated short"
    },

    habitat: {
        primary: "Deep waters off Australia and New Zealand",
        regions: "Continental slopes of southeastern Australia",
        depth: "600-1,200 meters (2,000-3,900 feet)",
        temperature: "2-4°C (36-39°F)",
        distribution: "Limited to southeastern Pacific"
    },

    behavior: {
        swimming: "Minimal active swimming",
        feeding: "Ambush predator, waits for prey",
        movement: "Drifts with ocean currents",
        pressure: "Body adapted to extreme pressure",
        surface: "Becomes gelatinous blob at surface"
    },

    diet: {
        primary: "Deep-sea bottom dweller",
        food: ["Crustaceans", "Sea pens", "Small fish", "Mollusks", "Marine worms", "Bottom invertebrates"],
        hunting: "Sits and waits for food to float by",
        method: "Mouth opens to catch passing prey"
    },

    reproduction: {
        method: "External fertilization",
        nesting: "Sits on eggs to protect them",
        parenting: "Guards eggs until hatching",
        eggs: "Pink gelatinous eggs",
        knowledge: "Little known about reproduction"
    },

    lifespan: "Unknown, possibly short-lived",
    conservationStatus: "Data Deficient",

    threats: [
        "Deep-sea fishing bycatch",
        "Bottom trawling damage",
        "Climate change affecting deep waters",
        "Ocean acidification",
        "Pollution in deep-sea environments"
    ],

    adaptations: [
        "Gelatinous body for pressure adaptation",
        "Minimal skeletal structure",
        "Low metabolic rate",
        "Density matching water for buoyancy",
        "Large mouth for opportunistic feeding",
        "Sedentary lifestyle conserves energy"
    ],

    uniqueFeatures: [
        "Becomes shapeless blob at surface",
        "Lacks swim bladder",
        "Gelatinous flesh instead of muscle",
        "Voted 'world's ugliest animal'",
        "Body density slightly less than water",
        "Can sit on eggs for protection"
    ],

    interestingFacts: [
        "Voted the world's ugliest animal in 2013",
        "Only looks blobby when brought to surface",
        "At depth, it looks like a normal fish",
        "Body is mostly gelatinous substance",
        "Sits on its eggs to guard them",
        "Has become an internet meme",
        "Body decompresses rapidly at surface",
        "Lives in complete darkness"
    ]
};

const Blobfish = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % blobfish.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + blobfish.imageUrls.length) % blobfish.imageUrls.length);
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
                                    <li><strong>Length:</strong> {blobfish.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {blobfish.physicalCharacteristics.weight}</li>
                                    <li><strong>Body:</strong> {blobfish.physicalCharacteristics.body}</li>
                                    <li><strong>Density:</strong> {blobfish.physicalCharacteristics.density}</li>
                                    <li><strong>Color:</strong> {blobfish.physicalCharacteristics.color}</li>
                                    <li><strong>Lifespan:</strong> {blobfish.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-rose-400 mb-4">Unique Features</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {blobfish.uniqueFeatures.map((feature, index) => (
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
                                    {Object.entries(blobfish.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-cyan-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-pink-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {blobfish.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Hunting:</strong> {blobfish.diet.hunting}</p>
                                    <p className="text-gray-300 mb-3"><strong>Method:</strong> {blobfish.diet.method}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {blobfish.diet.food.map((item, index) => (
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
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{blobfish.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {blobfish.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {blobfish.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-pink-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-pink-300 mb-4">Fascinating Facts</h3>
                            <ul className="list-disc list-inside text-pink-200 space-y-2">
                                {blobfish.interestingFacts.map((fact, index) => (
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
                        src={blobfish.imageUrls[currentImageIndex]} 
                        alt={blobfish.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                        {blobfish.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-pink-200">
                        {blobfish.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The world's "ugliest" animal with remarkable pressure adaptations
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {blobfish.imageUrls.length}
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
                        {Object.entries(blobfish.classification).map(([key, value]) => (
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-pink-900 to-rose-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Pressure Adaptation Masters</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Blobfish demonstrate incredible adaptation to extreme deep-sea pressure environments.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-pink-400 mb-3">Pressure Biology</h4>
                            <p className="text-gray-300">Study extreme pressure adaptations.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-rose-400 mb-3">Deep-Sea Ecology</h4>
                            <p className="text-gray-300">Understand deep-sea ecosystem roles.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-red-400 mb-3">Conservation</h4>
                            <p className="text-gray-300">Protect deep-sea fishing practices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blobfish;
