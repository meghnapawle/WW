import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const japaneseSpiderCrab = {
    name: "Japanese Spider Crab",
    scientificName: "Macrocheira kaempferi",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Arthropoda",
        subphylum: "Crustacea",
        class: "Malacostraca",
        order: "Decapoda",
        family: "Inachidae",
        genus: "Macrocheira",
        species: "M. kaempferi"
    },

    imageUrls: ["/imges/hermit_crab.png", "/imges/coral.png", "/imges/deep_sea.jpg"],

    physicalCharacteristics: {
        legSpan: "3.8 meters (12.5 feet) - largest arthropod leg span",
        bodySize: "40 cm (16 inches) carapace width",
        weight: "Up to 19 kg (42 lbs)",
        legs: "8 long, spindly legs and 2 claws",
        lifespan: "Up to 100 years",
        description: "World's largest arthropod by leg span, with incredibly long, thin legs."
    },

    habitat: {
        primary: "Deep waters around Japan",
        regions: "Pacific Ocean around Japanese coast",
        depth: "50-600 meters (160-2,000 feet)",
        substrate: "Rocky bottoms and sandy areas",
        temperature: "Cold waters, 10-15°C (50-59°F)"
    },

    behavior: {
        movement: "Slow, deliberate walking on long legs",
        feeding: "Scavenging and opportunistic predation",
        molting: "Vulnerable during molting periods",
        camouflage: "Decorates shell with sponges and other organisms",
        social: "Generally solitary except during mating"
    },

    diet: {
        primary: "Omnivorous scavenger",
        food: ["Dead fish", "Mollusks", "Algae", "Plants", "Small invertebrates", "Carrion"],
        feeding: "Uses claws to tear apart food",
        role: "Important deep-sea scavenger and cleaner"
    },

    reproduction: {
        mating: "Males compete for females during breeding season",
        eggs: "Females carry up to 1.5 million eggs",
        development: "Planktonic larval stages",
        maturity: "Sexual maturity at 10+ years",
        spawning: "Migrate to shallower waters to spawn"
    },

    lifespan: "50-100 years",
    conservationStatus: "Vulnerable",

    threats: [
        "Overfishing and collection for food",
        "Habitat destruction from deep-sea trawling",
        "Climate change affecting water temperature",
        "Ocean pollution",
        "Slow reproduction rate makes recovery difficult"
    ],

    adaptations: [
        "Extremely long legs for covering large areas",
        "Slow metabolism for longevity",
        "Camouflage decoration behavior",
        "Strong claws for handling prey",
        "Pressure adaptation for deep waters"
    ],

    culturalSignificance: [
        "Considered delicacy in Japanese cuisine",
        "Featured in Japanese folklore and art",
        "Popular in aquariums worldwide",
        "Symbol of longevity in Japanese culture",
        "Important in marine biology research"
    ],

    interestingFacts: [
        "Has the largest leg span of any arthropod in the world",
        "Can live for over a century",
        "Their legs can regenerate if lost",
        "Decorates its shell with sponges and algae for camouflage",
        "Gentle giants despite their intimidating size",
        "Can weigh as much as a small child",
        "Endemic to waters around Japan",
        "Molts its entire exoskeleton as it grows"
    ]
};

const JapaneseSpiderCrab = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % japaneseSpiderCrab.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + japaneseSpiderCrab.imageUrls.length) % japaneseSpiderCrab.imageUrls.length);
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
                                    <li><strong>Leg Span:</strong> {japaneseSpiderCrab.physicalCharacteristics.legSpan}</li>
                                    <li><strong>Body Size:</strong> {japaneseSpiderCrab.physicalCharacteristics.bodySize}</li>
                                    <li><strong>Weight:</strong> {japaneseSpiderCrab.physicalCharacteristics.weight}</li>
                                    <li><strong>Legs:</strong> {japaneseSpiderCrab.physicalCharacteristics.legs}</li>
                                    <li><strong>Lifespan:</strong> {japaneseSpiderCrab.physicalCharacteristics.lifespan}</li>
                                </ul>
                                <p className="mt-4 text-gray-300">{japaneseSpiderCrab.physicalCharacteristics.description}</p>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-red-400 mb-4">Amazing Facts</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {japaneseSpiderCrab.interestingFacts.map((fact, index) => (
                                        <li key={index}>{fact}</li>
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
                                    {Object.entries(japaneseSpiderCrab.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-cyan-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-orange-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {japaneseSpiderCrab.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Role:</strong> {japaneseSpiderCrab.diet.role}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {japaneseSpiderCrab.diet.food.map((item, index) => (
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
                            <p className="text-xl font-semibold mb-4 text-orange-400">{japaneseSpiderCrab.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {japaneseSpiderCrab.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {japaneseSpiderCrab.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-yellow-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-yellow-300 mb-4">Cultural Significance</h3>
                            <ul className="list-disc list-inside text-yellow-200 space-y-2">
                                {japaneseSpiderCrab.culturalSignificance.map((significance, index) => (
                                    <li key={index}>{significance}</li>
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-orange-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={japaneseSpiderCrab.imageUrls[currentImageIndex]} 
                        alt={japaneseSpiderCrab.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                        {japaneseSpiderCrab.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-orange-200">
                        {japaneseSpiderCrab.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The world's largest arthropod by leg span
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {japaneseSpiderCrab.imageUrls.length}
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
                        {Object.entries(japaneseSpiderCrab.classification).map(([key, value]) => (
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-orange-900 to-red-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Protecting Ocean Giants</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Japanese spider crabs are vulnerable gentle giants that need protection from overfishing and habitat destruction.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-orange-400 mb-3">Sustainable Fishing</h4>
                            <p className="text-gray-300">Support regulations protecting these slow-growing crabs.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-red-400 mb-3">Habitat Protection</h4>
                            <p className="text-gray-300">Preserve deep-sea habitats from trawling damage.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-yellow-400 mb-3">Research Support</h4>
                            <p className="text-gray-300">Fund studies on longevity and deep-sea ecology.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JapaneseSpiderCrab;
