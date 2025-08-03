import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const seaAngel = {
    name: "Sea Angel",
    scientificName: "Clione limacina",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Mollusca",
        class: "Gastropoda",
        order: "Pteropoda",
        family: "Clionidae",
        genus: "Clione",
        species: "C. limacina"
    },

    imageUrls: ["/imges/sea_angel.jpg", "/imges/jellyfish.png", "/imges/deep_sea.jpg"],

    physicalCharacteristics: {
        length: "1-5 cm (0.4-2 inches)",
        weight: "Less than 1 gram",
        body: "Transparent, gelatinous with wing-like projections",
        wings: "Two large parapodia for swimming",
        head: "Distinct head with feeding apparatus",
        lifespan: "Up to 2 years"
    },

    habitat: {
        primary: "Cold polar and subpolar waters",
        regions: "Arctic and Antarctic oceans",
        depth: "Surface to 600 meters (2,000 feet)",
        temperature: "-1 to 10°C (30-50°F)",
        distribution: "Circumpolar in cold oceans"
    },

    behavior: {
        swimming: "Graceful flapping wing-like motion",
        hunting: "Active predator of sea butterflies",
        migration: "Vertical migrations following prey",
        feeding: "Extracts prey from shells",
        transparency: "Nearly invisible when swimming"
    },

    diet: {
        primary: "Specialized predator of pteropods",
        food: ["Sea butterflies (Limacina)", "Other pteropods", "Small zooplankton", "Larval mollusks"],
        hunting: "Uses hooks and proboscis to extract prey",
        role: "Controls pteropod populations"
    },

    reproduction: {
        hermaphrodite: "All individuals are hermaphrodites",
        spawning: "Simultaneous reciprocal fertilization",
        eggs: "Gelatinous egg masses float in water",
        development: "Planktonic larval development",
        maturity: "Reach maturity at 1 year"
    },

    lifespan: "Up to 2 years",
    conservationStatus: "Data Deficient",

    threats: [
        "Ocean acidification affecting shell-forming prey",
        "Climate change warming polar waters",
        "Sea ice loss affecting habitat",
        "Pollution in polar regions",
        "Changes in pteropod populations"
    ],

    adaptations: [
        "Wing-like parapodia for efficient swimming",
        "Specialized feeding apparatus",
        "Transparent body for camouflage",
        "Cold-water metabolism",
        "Ability to extract prey from shells",
        "Hermaphroditic reproduction"
    ],

    feeding: [
        "Highly specialized predator of sea butterflies",
        "Uses six hooks to grab prey",
        "Extends proboscis to extract soft tissue",
        "Can completely remove prey from shell",
        "Hunting success rate near 100%",
        "Essential control of pteropod populations"
    ],

    interestingFacts: [
        "Called 'angels' for their wing-like swimming",
        "Have no shell despite being gastropod mollusks",
        "Are voracious predators of sea butterflies",
        "Can completely extract prey from shells",
        "Found in massive swarms in polar waters",
        "Important food source for Arctic fish",
        "Nearly transparent when alive",
        "Swim with graceful wing-flapping motion"
    ]
};

const SeaAngel = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % seaAngel.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + seaAngel.imageUrls.length) % seaAngel.imageUrls.length);
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
                                    <li><strong>Length:</strong> {seaAngel.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {seaAngel.physicalCharacteristics.weight}</li>
                                    <li><strong>Body:</strong> {seaAngel.physicalCharacteristics.body}</li>
                                    <li><strong>Wings:</strong> {seaAngel.physicalCharacteristics.wings}</li>
                                    <li><strong>Head:</strong> {seaAngel.physicalCharacteristics.head}</li>
                                    <li><strong>Lifespan:</strong> {seaAngel.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-400 mb-4">Feeding Specialization</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {seaAngel.feeding.map((feature, index) => (
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
                                    {Object.entries(seaAngel.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-cyan-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-cyan-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {seaAngel.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Hunting:</strong> {seaAngel.diet.hunting}</p>
                                    <p className="text-gray-300 mb-3"><strong>Role:</strong> {seaAngel.diet.role}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {seaAngel.diet.food.map((item, index) => (
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
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{seaAngel.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {seaAngel.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {seaAngel.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-blue-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-300 mb-4">Amazing Facts</h3>
                            <ul className="list-disc list-inside text-blue-200 space-y-2">
                                {seaAngel.interestingFacts.map((fact, index) => (
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
                        src={seaAngel.imageUrls[currentImageIndex]} 
                        alt={seaAngel.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        {seaAngel.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-cyan-200">
                        {seaAngel.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Graceful angels of the polar seas
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {seaAngel.imageUrls.length}
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
                        {Object.entries(seaAngel.classification).map(([key, value]) => (
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
                    <h3 className="text-4xl font-bold mb-6">Polar Ocean Jewels</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Sea angels are ethereal predators that dance through polar waters, controlling marine ecosystems.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-cyan-400 mb-3">Arctic Research</h4>
                            <p className="text-gray-300">Study polar ecosystem relationships and food webs.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-blue-400 mb-3">Climate Indicators</h4>
                            <p className="text-gray-300">Monitor polar species as climate change indicators.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-indigo-400 mb-3">Ocean Acidification</h4>
                            <p className="text-gray-300">Track impacts on shell-forming prey species.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeaAngel;
