import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const vampireSquid = {
    name: "Vampire Squid",
    scientificName: "Vampyroteuthis infernalis",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Mollusca",
        class: "Cephalopoda",
        order: "Vampyromorpha",
        family: "Vampyroteuthidae",
        genus: "Vampyroteuthis",
        species: "V. infernalis"
    },

    imageUrls: ["/imges/vampire_squid.jpg", "/imges/deep_sea.jpg", "/imges/squid.png"],

    physicalCharacteristics: {
        length: "15-30 cm (6-12 inches)",
        weight: "50-150 grams",
        arms: "8 arms connected by web of skin",
        eyes: "Largest eye-to-body ratio of any animal",
        body: "Gelatinous, dark red to black",
        lifespan: "Up to 8 years"
    },

    habitat: {
        primary: "Oxygen minimum zones in deep ocean",
        regions: "Tropical and temperate oceans worldwide",
        depth: "600-900 meters (2,000-3,000 feet)",
        oxygen: "Survives in extremely low oxygen conditions",
        temperature: "2-6°C (36-43°F)"
    },

    behavior: {
        defense: "Turns inside-out to expose spines",
        bioluminescence: "Ejects glowing mucus clouds",
        swimming: "Uses fins, not jet propulsion",
        feeding: "Filter feeds on marine snow",
        metabolism: "Extremely slow metabolism"
    },

    diet: {
        primary: "Detritivore - feeds on marine snow",
        food: ["Marine snow", "Dead organic matter", "Fecal pellets", "Algal remains", "Bacterial aggregates", "Organic particles"],
        feeding: "Uses mucus-covered filaments to collect food",
        role: "Important recycler of ocean nutrients"
    },

    reproduction: {
        spawning: "Internal fertilization",
        eggs: "Large eggs brooded by female",
        development: "Direct development without larval stage",
        maturity: "Reach maturity at 2-3 years",
        care: "Extended parental care"
    },

    lifespan: "Up to 8 years",
    conservationStatus: "Least Concern",

    threats: [
        "Deep-sea fishing and trawling",
        "Ocean warming reducing oxygen zones",
        "Pollution affecting food sources",
        "Climate change altering ocean chemistry",
        "Deep-sea mining activities"
    ],

    adaptations: [
        "Survives in extremely low oxygen",
        "Can turn inside-out for protection",
        "Bioluminescent defense mechanisms",
        "Largest eyes relative to body size",
        "Efficient slow metabolism",
        "Web between arms for protection"
    ],

    uniqueFeatures: [
        "Not actually a squid - in its own order",
        "Only living member of Vampyromorpha",
        "Living fossil unchanged for millions of years",
        "Can survive oxygen levels that kill other animals",
        "Turns inside-out when threatened",
        "Has both squid and octopus characteristics"
    ],

    interestingFacts: [
        "Name means 'vampire squid from hell'",
        "Has the largest eyes relative to body size of any animal",
        "Can turn completely inside-out when threatened",
        "Ejects bioluminescent mucus when scared",
        "Neither squid nor octopus - in its own group",
        "Feeds on 'marine snow' - falling organic matter",
        "Can survive where oxygen is nearly absent",
        "Lives in the ocean's 'dead zones'"
    ]
};

const VampireSquid = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % vampireSquid.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + vampireSquid.imageUrls.length) % vampireSquid.imageUrls.length);
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
                                    <li><strong>Length:</strong> {vampireSquid.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {vampireSquid.physicalCharacteristics.weight}</li>
                                    <li><strong>Arms:</strong> {vampireSquid.physicalCharacteristics.arms}</li>
                                    <li><strong>Eyes:</strong> {vampireSquid.physicalCharacteristics.eyes}</li>
                                    <li><strong>Body:</strong> {vampireSquid.physicalCharacteristics.body}</li>
                                    <li><strong>Lifespan:</strong> {vampireSquid.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-purple-400 mb-4">Unique Features</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {vampireSquid.uniqueFeatures.map((feature, index) => (
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
                                    {Object.entries(vampireSquid.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-cyan-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {vampireSquid.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Feeding:</strong> {vampireSquid.diet.feeding}</p>
                                    <p className="text-gray-300 mb-3"><strong>Role:</strong> {vampireSquid.diet.role}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {vampireSquid.diet.food.map((item, index) => (
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
                            <p className="text-xl font-semibold mb-4 text-green-400">{vampireSquid.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {vampireSquid.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {vampireSquid.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-red-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-red-300 mb-4">Fascinating Facts</h3>
                            <ul className="list-disc list-inside text-red-200 space-y-2">
                                {vampireSquid.interestingFacts.map((fact, index) => (
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
                        src={vampireSquid.imageUrls[currentImageIndex]} 
                        alt={vampireSquid.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                        {vampireSquid.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-red-200">
                        {vampireSquid.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Living fossil from the ocean's dead zones
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {vampireSquid.imageUrls.length}
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
                        {Object.entries(vampireSquid.classification).map(([key, value]) => (
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-red-900 to-purple-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Ancient Survivors</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Vampire squids are living fossils that have survived in Earth's most extreme ocean environments.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-red-400 mb-3">Oxygen Research</h4>
                            <p className="text-gray-300">Study survival in low-oxygen environments.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-purple-400 mb-3">Evolution Studies</h4>
                            <p className="text-gray-300">Learn from these living fossils of the deep.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-pink-400 mb-3">Climate Monitoring</h4>
                            <p className="text-gray-300">Track oxygen minimum zone changes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VampireSquid;
