import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const cookiecutterShark = {
    name: "Cookiecutter Shark",
    scientificName: "Isistius brasiliensis",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Chondrichthyes",
        order: "Squaliformes",
        family: "Dalatiidae",
        genus: "Isistius",
        species: "I. brasiliensis"
    },

    imageUrls: ["/imges/shark.png", "/imges/deep_sea.jpg", "/imges/fish.png"],

    physicalCharacteristics: {
        length: "42-56 cm (16-22 inches)",
        weight: "0.5-1.5 kg (1-3 lbs)",
        bodyType: "Small, cigar-shaped body with large mouth",
        teeth: "Large lower teeth in a single row, small upper teeth",
        coloration: "Dark brown with lighter underside, glowing collar",
        description: "Small but formidable shark known for taking circular bites from large marine animals."
    },

    habitat: {
        primary: "Deep oceanic waters worldwide",
        regions: "Tropical and warm temperate oceans",
        depth: "Surface to 3,700 meters (12,100 feet)",
        behavior: "Vertical migrations from deep to surface waters"
    },

    behavior: {
        feeding: "Ectoparasitic feeding on large marine animals",
        migration: "Extensive vertical migrations following prey",
        bioluminescence: "Glowing collar to attract prey",
        swimming: "Efficient swimmer with unique feeding strategy"
    },

    diet: {
        primary: "Ectoparasitic carnivore",
        targets: ["Whales", "Dolphins", "Large fish (tuna, marlin)", "Sharks", "Seals", "Squid"],
        feeding: "Attaches and removes circular plugs of flesh",
        strategy: "Suction feeding with rotating jaw action"
    },

    reproduction: {
        maturity: "Males: 36 cm, Females: 39 cm",
        gestation: "Unknown, likely 12-22 months",
        litter: "6-12 pups",
        development: "Ovoviviparous (eggs hatch inside mother)"
    },

    lifespan: "Unknown, estimated 10-20 years",
    conservationStatus: "Least Concern",

    threats: [
        "Bycatch in deep-sea fisheries",
        "Climate change affecting prey distribution",
        "Ocean pollution",
        "Deep-sea habitat disturbance"
    ],

    adaptations: [
        "Bioluminescent collar for luring prey",
        "Specialized jaw structure for circular bites",
        "Strong suction feeding mechanism",
        "Efficient vertical migration abilities",
        "Ability to feed on much larger animals"
    ],

    uniqueFeatures: {
        bite: "Creates perfect circular wounds in prey",
        bioluminescence: "Photophores around collar region",
        size: "Smallest known ectoparasite of marine megafauna",
        teeth: "Self-sharpening tooth replacement system",
        suction: "Powerful suction cup-like mouth"
    },

    preyAnimals: {
        whales: "Blue whales, sperm whales, humpback whales",
        dolphins: "Various dolphin species",
        sharks: "Great whites, tiger sharks, whale sharks",
        fish: "Tuna, marlin, swordfish",
        pinnipeds: "Seals, sea lions"
    },

    interestingFacts: [
        "Takes cookie-shaped bites from animals 10x their size",
        "Their bites rarely kill but leave distinctive scars",
        "Can glow in the dark to attract prey",
        "Sometimes called cigar sharks",
        "Their teeth are found in whale stomachs",
        "Can attach to submarines and research vessels",
        "First discovered in 1824 but poorly understood until recently",
        "Their bite marks help scientists track whale migration"
    ],

    research: {
        ecology: "Understanding deep-sea food webs",
        bioluminescence: "Studying natural light production",
        behavior: "Tracking vertical migration patterns",
        evolution: "Unique feeding strategy evolution"
    }
};

const CookiecutterShark = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % cookiecutterShark.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + cookiecutterShark.imageUrls.length) % cookiecutterShark.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-orange-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-orange-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {cookiecutterShark.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {cookiecutterShark.physicalCharacteristics.weight}</li>
                                    <li><strong>Body Type:</strong> {cookiecutterShark.physicalCharacteristics.bodyType}</li>
                                    <li><strong>Teeth:</strong> {cookiecutterShark.physicalCharacteristics.teeth}</li>
                                    <li><strong>Coloration:</strong> {cookiecutterShark.physicalCharacteristics.coloration}</li>
                                </ul>
                                <p className="mt-4 text-gray-300">{cookiecutterShark.physicalCharacteristics.description}</p>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-yellow-400 mb-4">Incredible Facts</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {cookiecutterShark.interestingFacts.slice(0, 6).map((fact, index) => (
                                        <li key={index}>{fact}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            
            case 'feeding':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-red-400 mb-4">Unique Feeding Strategy</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Feeding Mechanism</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {cookiecutterShark.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Method:</strong> {cookiecutterShark.diet.feeding}</p>
                                    <p className="text-gray-300 mb-3"><strong>Strategy:</strong> {cookiecutterShark.diet.strategy}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-orange-300 mb-3">Target Animals</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                                        {cookiecutterShark.diet.targets.map((target, index) => (
                                            <li key={index}>{target}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-cyan-400 mb-4">Unique Features</h3>
                            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {Object.entries(cookiecutterShark.uniqueFeatures).map(([feature, description]) => (
                                    <div key={feature} className="bg-cyan-900 p-4 rounded-lg">
                                        <h4 className="font-semibold text-cyan-300 mb-2 capitalize">{feature}</h4>
                                        <p className="text-cyan-200 text-sm">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-purple-400 mb-4">Prey Categories</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Object.entries(cookiecutterShark.preyAnimals).map(([category, species]) => (
                                    <div key={category} className="bg-purple-900 p-4 rounded-lg">
                                        <h4 className="font-semibold text-purple-300 mb-2 capitalize">{category}</h4>
                                        <p className="text-purple-200 text-sm">{species}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            
            case 'conservation':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-green-400 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-green-400">{cookiecutterShark.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {cookiecutterShark.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {cookiecutterShark.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-blue-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-300 mb-4">Research Applications</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {Object.entries(cookiecutterShark.research).map(([field, description]) => (
                                    <div key={field} className="space-y-2">
                                        <p className="text-blue-300 font-semibold capitalize">{field}</p>
                                        <p className="text-blue-200 text-sm">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            
            default:
                return null;
        }
    };

    return (
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-orange-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={cookiecutterShark.imageUrls[currentImageIndex]} 
                        alt={cookiecutterShark.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                        {cookiecutterShark.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-orange-200">
                        {cookiecutterShark.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The ocean's smallest but most notorious biter
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {cookiecutterShark.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(cookiecutterShark.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-orange-300 mb-2 capitalize">{key}</h3>
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
                            id="feeding" 
                            label="Feeding Strategy" 
                            isActive={activeTab === 'feeding'} 
                            onClick={setActiveTab} 
                        />
                        <TabButton 
                            id="conservation" 
                            label="Conservation & Research" 
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-orange-900 to-red-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Protecting Ocean's Cookie Biters</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        These unique sharks play an important role in marine ecosystems and help scientists 
                        track the movements of large marine animals through their distinctive bite marks.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-orange-400 mb-3">Support Deep-Sea Research</h4>
                            <p className="text-gray-300">Fund studies of deep-sea ecosystems and unique species.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-red-400 mb-3">Reduce Bycatch</h4>
                            <p className="text-gray-300">Support fishing practices that minimize accidental capture.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-yellow-400 mb-3">Ocean Conservation</h4>
                            <p className="text-gray-300">Protect marine food webs that support diverse species.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookiecutterShark;
