import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const spermWhale = {
    name: "Sperm Whale",
    scientificName: "Physeter macrocephalus",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Mammalia",
        order: "Artiodactyla",
        family: "Physeteridae",
        genus: "Physeter",
        species: "P. macrocephalus"
    },

    imageUrls: ["/imges/sperm_whale.jpg", "/imges/giant_whale.jpg", "/imges/deep_diving_whale.jpg"],

    physicalCharacteristics: {
        length: "15-20 meters (49-66 feet)",
        weight: "35-57 tonnes",
        brain: "Largest brain of any animal (17 pounds)",
        head: "Makes up 1/3 of body length",
        teeth: "20-26 conical teeth in lower jaw",
        lifespan: "60-70 years"
    },

    habitat: {
        primary: "Deep ocean waters worldwide",
        regions: "All oceans except polar waters",
        depth: "Dives to 2,250+ meters (7,380+ feet)",
        temperature: "Temperate and tropical waters",
        distribution: "Pelagic waters globally"
    },

    behavior: {
        diving: "Deepest diving mammal on Earth",
        echolocation: "Sophisticated biosonar system",
        social: "Lives in family groups",
        communication: "Complex click patterns",
        hunting: "Hunts giant squid in deep waters"
    },

    diet: {
        primary: "Deep-sea squid specialist",
        food: ["Giant squid", "Colossal squid", "Deep-sea fish", "Octopuses", "Skates", "Sharks"],
        hunting: "Deep diving pursuit predator",
        method: "Echolocation and suction feeding"
    },

    reproduction: {
        method: "Live birth",
        gestation: "14-16 months",
        calves: "Single calf every 4-20 years",
        nursing: "Calves nurse for 19-42 months",
        maturity: "Sexual maturity at 7-13 years"
    },

    lifespan: "60-70 years",
    conservationStatus: "Vulnerable",

    threats: [
        "Commercial whaling (historical)",
        "Ship strikes",
        "Ocean noise pollution",
        "Plastic pollution and ingestion",
        "Climate change affecting prey"
    ],

    adaptations: [
        "Largest brain of any animal",
        "Sophisticated echolocation system",
        "Extreme diving capabilities",
        "Spermaceti organ for buoyancy",
        "Collapsed lungs during deep dives",
        "Myoglobin-rich muscles for oxygen storage"
    ],

    uniqueFeatures: [
        "Deepest diving mammal",
        "Largest brain on Earth",
        "Can hold breath for 90 minutes",
        "Dives deeper than 2,250 meters",
        "Hunts giant squid in darkness",
        "Head contains spermaceti oil"
    ],

    interestingFacts: [
        "Has the largest brain of any animal on Earth",
        "Can dive deeper than 2,250 meters",
        "Holds breath for up to 90 minutes",
        "Main predator of giant squid",
        "Uses echolocation clicks louder than jet engines",
        "Head contains up to 1,900 liters of spermaceti oil",
        "Can sleep vertically in the water",
        "Inspired the novel Moby Dick"
    ]
};

const SpermWhale = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % spermWhale.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + spermWhale.imageUrls.length) % spermWhale.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-blue-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-blue-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {spermWhale.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {spermWhale.physicalCharacteristics.weight}</li>
                                    <li><strong>Brain:</strong> {spermWhale.physicalCharacteristics.brain}</li>
                                    <li><strong>Head:</strong> {spermWhale.physicalCharacteristics.head}</li>
                                    <li><strong>Teeth:</strong> {spermWhale.physicalCharacteristics.teeth}</li>
                                    <li><strong>Lifespan:</strong> {spermWhale.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-cyan-400 mb-4">Unique Features</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {spermWhale.uniqueFeatures.map((feature, index) => (
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
                                    {Object.entries(spermWhale.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-blue-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-cyan-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {spermWhale.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Hunting:</strong> {spermWhale.diet.hunting}</p>
                                    <p className="text-gray-300 mb-3"><strong>Method:</strong> {spermWhale.diet.method}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {spermWhale.diet.food.map((item, index) => (
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
                            <h3 className="text-xl font-bold text-blue-400 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{spermWhale.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {spermWhale.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {spermWhale.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-blue-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-300 mb-4">Fascinating Facts</h3>
                            <ul className="list-disc list-inside text-blue-200 space-y-2">
                                {spermWhale.interestingFacts.map((fact, index) => (
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={spermWhale.imageUrls[currentImageIndex]} 
                        alt={spermWhale.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {spermWhale.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-blue-200">
                        {spermWhale.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The deepest diving mammal with Earth's largest brain
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {spermWhale.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(spermWhale.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-blue-300 mb-2 capitalize">{key}</h3>
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-blue-900 to-cyan-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Ocean Giants</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Sperm whales are the ultimate deep-sea hunters with the largest brains on Earth.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-blue-400 mb-3">Brain Research</h4>
                            <p className="text-gray-300">Study the largest brain on Earth.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-cyan-400 mb-3">Deep-Sea Biology</h4>
                            <p className="text-gray-300">Research extreme diving adaptations.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-teal-400 mb-3">Ocean Protection</h4>
                            <p className="text-gray-300">Protect whale migration routes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpermWhale;
