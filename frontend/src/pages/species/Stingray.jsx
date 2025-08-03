import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

// Comprehensive Stingray Data
const stingray = {
    name: "Stingray",
    scientificName: "Dasyatidae",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Chondrichthyes",
        subclass: "Elasmobranchii",
        order: "Myliobatiformes",
        family: "Dasyatidae",
        species: "Various species"
    },

    imageUrls: ["/imges/stingray.png", "/imges/Great_white_shark.png", "/imges/sea_turtle.png"],

    physicalCharacteristics: {
        length: "30 cm - 6.5 m (1 ft - 21 ft) depending on species",
        weight: "0.5-350 kg (1-770 pounds)",
        wingspan: "Up to 6.5 m (21 ft) in large species",
        bodyType: "Flattened diamond-shaped body with long whip-like tail",
        tail: "Contains venomous barb used for defense",
        description: "Cartilaginous fish with flattened bodies, enlarged pectoral fins forming disc shape, and distinctive venomous tail spine. Coloration ranges from brown to gray, often with patterns for camouflage."
    },

    habitat: {
        primary: "Marine and freshwater environments worldwide",
        regions: "Tropical and subtropical waters, some in temperate zones",
        depth: "Shallow coastal waters to depths of 1,000+ meters",
        environment: "Sand and mud bottoms, coral reefs, estuaries, rivers",
        preferences: "Warm waters with sandy or muddy substrates for burying"
    },

    behavior: {
        social: "Generally solitary, some species form aggregations",
        hunting: "Ambush predators that bury in sand and strike at prey",
        defense: "Use venomous tail barb when threatened",
        feeding: "Forage by disturbing sediment to uncover hidden prey",
        reproduction: "Ovoviviparous - eggs develop inside mother"
    },

    diet: {
        primary: "Carnivorous",
        prey: ["Mollusks", "Crustaceans", "Worms", "Small fish", "Shrimp"],
        huntingMethod: "Electroreception to detect buried prey",
        feedingBehavior: "Use flattened teeth to crush hard-shelled prey"
    },

    reproduction: {
        maturity: "2-6 years depending on species",
        mating: "Internal fertilization",
        gestation: "2-4 months",
        offspring: "2-10 pups per litter",
        birthSize: "15-36 cm disc width",
        parentalCare: "No parental care after birth"
    },

    lifespan: "15-25 years in the wild",

    conservationStatus: "Varies by species - Least Concern to Critically Endangered",

    threats: [
        "Overfishing and bycatch in commercial fisheries",
        "Habitat destruction in coastal areas",
        "Marine pollution and plastic debris",
        "Climate change affecting ocean temperatures",
        "Recreational fishing pressure"
    ],

    adaptations: [
        "Flattened body perfect for benthic lifestyle",
        "Electroreception through ampullae of Lorenzini",
        "Venomous barb for defense against predators",
        "Camouflage coloration and sand-burying behavior",
        "Spiracles allow breathing while buried"
    ],

    culturalSignificance: [
        "Important in many Pacific Island cultures",
        "Symbol of grace and fluidity in movement",
        "Featured in marine aquariums worldwide",
        "Subject of marine research for venom properties"
    ],

    ecosystem: {
        role: "Important predator of bottom-dwelling organisms",
        relationships: "Prey for large sharks, marine mammals",
        habitat_creation: "Bioturbation helps oxygenate sediments",
        indicator: "Health indicator for coastal marine ecosystems"
    },

    researchSignificance: [
        "Study of cartilaginous fish evolution",
        "Venom research for medical applications",
        "Electroreception and sensory biology research",
        "Marine ecosystem health monitoring"
    ],

    economicImportance: [
        "Commercial fisheries in some regions",
        "Ecotourism and diving attractions",
        "Aquarium trade",
        "Traditional medicine in some cultures"
    ],

    educationalValue: [
        "Teaching marine biodiversity",
        "Understanding predator-prey relationships",
        "Demonstrating adaptation to environment",
        "Conservation awareness"
    ]
};

const Stingray = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % stingray.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + stingray.imageUrls.length) % stingray.imageUrls.length);
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
                                    <li><strong>Length:</strong> {stingray.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {stingray.physicalCharacteristics.weight}</li>
                                    <li><strong>Wingspan:</strong> {stingray.physicalCharacteristics.wingspan}</li>
                                    <li><strong>Body Type:</strong> {stingray.physicalCharacteristics.bodyType}</li>
                                </ul>
                                <p className="mt-4 text-gray-300">{stingray.physicalCharacteristics.description}</p>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-green-400 mb-4">Habitat</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Primary:</strong> {stingray.habitat.primary}</li>
                                    <li><strong>Regions:</strong> {stingray.habitat.regions}</li>
                                    <li><strong>Depth:</strong> {stingray.habitat.depth}</li>
                                    <li><strong>Environment:</strong> {stingray.habitat.environment}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            
            case 'behavior':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-purple-400 mb-4">Behavior & Diet</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-purple-300 mb-3">Behavior</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li><strong>Social:</strong> {stingray.behavior.social}</li>
                                        <li><strong>Hunting:</strong> {stingray.behavior.hunting}</li>
                                        <li><strong>Defense:</strong> {stingray.behavior.defense}</li>
                                        <li><strong>Feeding:</strong> {stingray.behavior.feeding}</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-green-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {stingray.diet.primary}</p>
                                    <p className="text-gray-300 mb-2"><strong>Prey:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {stingray.diet.prey.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p className="text-gray-300 mt-3"><strong>Method:</strong> {stingray.diet.huntingMethod}</p>
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
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{stingray.conservationStatus}</p>
                            
                            <div className="mb-6">
                                <h4 className="font-semibold text-red-300 mb-3">Major Threats</h4>
                                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                    {stingray.threats.map((threat, index) => (
                                        <li key={index}>{threat}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold text-blue-300 mb-3">Key Adaptations</h4>
                                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                    {stingray.adaptations.map((adaptation, index) => (
                                        <li key={index}>{adaptation}</li>
                                    ))}
                                </ul>
                            </div>
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
                        src={stingray.imageUrls[currentImageIndex]} 
                        alt={stingray.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {stingray.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-blue-200">
                        {stingray.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Graceful cartilaginous fish with venomous defense
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {stingray.imageUrls.length}
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
                        {Object.entries(stingray.classification).map(([key, value]) => (
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

            {/* Additional Information */}
            <div className="fade-section py-20 px-6 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-3xl font-bold text-blue-400 mb-6">Ecological Role</h3>
                            <div className="space-y-4 text-gray-300">
                                <p><strong>Role:</strong> {stingray.ecosystem.role}</p>
                                <p><strong>Relationships:</strong> {stingray.ecosystem.relationships}</p>
                                <p><strong>Habitat Creation:</strong> {stingray.ecosystem.habitat_creation}</p>
                                <p><strong>Indicator:</strong> {stingray.ecosystem.indicator}</p>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-3xl font-bold text-green-400 mb-6">Cultural Significance</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {stingray.culturalSignificance.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            
                            <h4 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Economic Importance</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {stingray.economicImportance.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-blue-900 to-purple-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Protect Our Ocean's Ancient Cartilaginous Fish</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Stingrays have inhabited our oceans for over 100 million years. These graceful creatures face increasing threats from human activities.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-blue-400 mb-3">Support Research</h4>
                            <p className="text-gray-300">Fund marine biology research to better understand stingray behavior and ecology.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-green-400 mb-3">Sustainable Tourism</h4>
                            <p className="text-gray-300">Choose responsible dive operators that practice ethical wildlife viewing.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-purple-400 mb-3">Habitat Protection</h4>
                            <p className="text-gray-300">Support marine protected areas that preserve critical stingray habitats.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stingray;
