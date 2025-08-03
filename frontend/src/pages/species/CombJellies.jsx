import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const combJellies = {
    name: "Comb Jellies",
    scientificName: "Ctenophora",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Ctenophora",
        class: "Tentaculata",
        order: "Cydippida",
        family: "Various families",
        genus: "Various genera",
        species: "Over 200 species"
    },

    imageUrls: ["/imges/jellyfish.png", "/imges/deep_sea.jpg", "/imges/coral.png"],

    physicalCharacteristics: {
        size: "2 mm to 1.5 meters (0.08 inches to 5 feet)",
        bodyShape: "Transparent, gelatinous oval or sphere",
        combRows: "8 rows of ciliary combs for propulsion",
        tentacles: "Two long tentacles with colloblasts (some species)",
        transparency: "Nearly 95% water content",
        lifespan: "Few weeks to several months"
    },

    habitat: {
        primary: "All marine environments worldwide",
        regions: "Found in every ocean from surface to deep sea",
        depth: "Surface waters to abyssal depths",
        temperature: "Tropical to polar waters",
        environment: "Pelagic (open ocean) lifestyle"
    },

    behavior: {
        locomotion: "Unique ciliary propulsion system",
        feeding: "Active predators despite appearance",
        bioluminescence: "Many species produce light",
        regeneration: "Remarkable regenerative abilities",
        swimming: "Can swim both forward and backward"
    },

    diet: {
        primary: "Carnivorous zooplankton predators",
        food: ["Copepods", "Fish larvae", "Other comb jellies", "Small crustaceans", "Marine worms", "Plankton"],
        hunting: "Use sticky tentacles to capture prey",
        role: "Important planktonic predators and prey"
    },

    reproduction: {
        type: "Most are simultaneous hermaphrodites",
        development: "Direct development without metamorphosis",
        spawning: "Release eggs and sperm into water column",
        larval: "Cydippid larvae with long tentacles",
        regeneration: "Can regenerate lost body parts"
    },

    lifespan: "Weeks to months (highly variable)",
    conservationStatus: "Least Concern (most species)",

    threats: [
        "Ocean acidification affecting prey",
        "Climate change altering ocean currents",
        "Pollution reducing water quality",
        "Overfishing of their prey species",
        "Plastic pollution and microplastics"
    ],

    adaptations: [
        "Unique ciliary locomotion system",
        "Transparent body for camouflage",
        "Bioluminescence for communication",
        "Colloblasts (sticky cells) for prey capture",
        "High water content for buoyancy",
        "Remarkable regenerative abilities"
    ],

    uniqueFeatures: [
        "Not true jellyfish - completely different phylum",
        "Oldest animal phylum still existing",
        "Only animals that use cilia for swimming",
        "Can regenerate entire body from fragments",
        "Some species are voracious invasive predators",
        "Rainbow-like light patterns from comb refraction"
    ],

    interestingFacts: [
        "May be the oldest surviving animal lineage on Earth",
        "Their comb rows create beautiful rainbow patterns",
        "Can eat prey larger than themselves",
        "Some species are major invasive species",
        "Not related to cnidarian jellyfish at all",
        "Can regenerate from tiny body fragments",
        "Move by beating millions of tiny cilia",
        "Many are bioluminescent when disturbed"
    ]
};

const CombJellies = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % combJellies.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + combJellies.imageUrls.length) % combJellies.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-cyan-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-cyan-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Size:</strong> {combJellies.physicalCharacteristics.size}</li>
                                    <li><strong>Body Shape:</strong> {combJellies.physicalCharacteristics.bodyShape}</li>
                                    <li><strong>Comb Rows:</strong> {combJellies.physicalCharacteristics.combRows}</li>
                                    <li><strong>Tentacles:</strong> {combJellies.physicalCharacteristics.tentacles}</li>
                                    <li><strong>Transparency:</strong> {combJellies.physicalCharacteristics.transparency}</li>
                                    <li><strong>Lifespan:</strong> {combJellies.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-400 mb-4">Unique Features</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {combJellies.uniqueFeatures.map((feature, index) => (
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
                                    {Object.entries(combJellies.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-cyan-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {combJellies.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Hunting:</strong> {combJellies.diet.hunting}</p>
                                    <p className="text-gray-300 mb-3"><strong>Role:</strong> {combJellies.diet.role}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {combJellies.diet.food.map((item, index) => (
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
                            <h3 className="text-xl font-bold text-cyan-400 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-green-400">{combJellies.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {combJellies.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {combJellies.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-purple-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-purple-300 mb-4">Fascinating Facts</h3>
                            <ul className="list-disc list-inside text-purple-200 space-y-2">
                                {combJellies.interestingFacts.map((fact, index) => (
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-cyan-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={combJellies.imageUrls[currentImageIndex]} 
                        alt={combJellies.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        {combJellies.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-cyan-200">
                        {combJellies.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Ancient marine predators with rainbow light displays
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {combJellies.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(combJellies.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-cyan-300 mb-2 capitalize">{key}</h3>
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-cyan-900 to-blue-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Ancient Ocean Wanderers</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Comb jellies have survived for over 500 million years, representing one of Earth's oldest animal lineages.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-cyan-400 mb-3">Ocean Research</h4>
                            <p className="text-gray-300">Study these ancient creatures to understand evolution.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-blue-400 mb-3">Climate Monitoring</h4>
                            <p className="text-gray-300">Track comb jelly populations as ocean health indicators.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-purple-400 mb-3">Biomimicry</h4>
                            <p className="text-gray-300">Learn from their unique locomotion and regeneration.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CombJellies;
