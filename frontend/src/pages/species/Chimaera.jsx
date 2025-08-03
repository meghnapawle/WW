import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const chimaera = {
    name: "Chimaera",
    scientificName: "Chimaeriformes",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Chondrichthyes",
        subclass: "Holocephali",
        order: "Chimaeriformes",
        families: "Chimaeridae, Rhinochimaeridae, Callorhinchidae"
    },

    imageUrls: ["/imges/shark.png", "/imges/deep_sea.jpg", "/imges/fish.png"],

    physicalCharacteristics: {
        length: "60 cm - 2 meters (2-6.5 feet)",
        weight: "2-20 kg (4.4-44 lbs)",
        bodyType: "Cartilaginous fish with rat-like tail",
        teeth: "Beak-like dental plates for crushing",
        skin: "Smooth, scaleless skin with lateral line system",
        description: "Ancient cartilaginous fish related to sharks and rays, with unique adaptations for deep-sea life."
    },

    habitat: {
        primary: "Deep ocean floors and continental slopes",
        regions: "Global distribution in temperate and cold waters",
        depth: "200-2,600 meters (650-8,500 feet)",
        preferences: "Muddy and sandy bottoms, continental shelves"
    },

    behavior: {
        swimming: "Undulating motion using pectoral fins",
        feeding: "Bottom-dwelling foragers",
        social: "Generally solitary",
        movement: "Slow, deliberate movements along seafloor"
    },

    diet: {
        primary: "Benthic invertebrates",
        food: ["Mollusks", "Crustaceans", "Marine worms", "Small fish", "Sea urchins"],
        feeding: "Crush prey with powerful dental plates"
    },

    reproduction: {
        mating: "Internal fertilization",
        eggs: "Large, leathery egg cases",
        development: "Long development period (6-12 months)",
        maturity: "Late sexual maturity (4-12 years)"
    },

    lifespan: "15-30 years",
    conservationStatus: "Near Threatened to Vulnerable",

    threats: [
        "Deep-sea fishing and trawling",
        "Bycatch in commercial fisheries",
        "Habitat destruction",
        "Slow reproduction rate",
        "Climate change"
    ],

    adaptations: [
        "Electroreception for finding prey",
        "Pressure-resistant cartilaginous skeleton",
        "Large pectoral fins for maneuvering",
        "Beak-like teeth for crushing shells",
        "Lateral line system for detecting movement"
    ],

    interestingFacts: [
        "Also known as ghost sharks or rabbit fish",
        "Have been around for 400 million years",
        "Males have retractable sex organ on their head",
        "Can detect electrical fields from prey",
        "Related to sharks but evolved separately",
        "Have only one gill opening on each side",
        "Their egg cases are called mermaid's purses"
    ]
};

const Chimaera = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % chimaera.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + chimaera.imageUrls.length) % chimaera.imageUrls.length);
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
                                    <li><strong>Length:</strong> {chimaera.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {chimaera.physicalCharacteristics.weight}</li>
                                    <li><strong>Body Type:</strong> {chimaera.physicalCharacteristics.bodyType}</li>
                                    <li><strong>Teeth:</strong> {chimaera.physicalCharacteristics.teeth}</li>
                                    <li><strong>Skin:</strong> {chimaera.physicalCharacteristics.skin}</li>
                                </ul>
                                <p className="mt-4 text-gray-300">{chimaera.physicalCharacteristics.description}</p>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-purple-400 mb-4">Fascinating Facts</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {chimaera.interestingFacts.map((fact, index) => (
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
                                    {Object.entries(chimaera.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-cyan-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-orange-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {chimaera.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Feeding:</strong> {chimaera.diet.feeding}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {chimaera.diet.food.map((item, index) => (
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
                            <p className="text-xl font-semibold mb-4 text-orange-400">{chimaera.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {chimaera.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {chimaera.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
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
                        src={chimaera.imageUrls[currentImageIndex]} 
                        alt={chimaera.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {chimaera.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-blue-200">
                        {chimaera.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Ancient ghost sharks of the deep sea
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {chimaera.imageUrls.length}
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
                        {Object.entries(chimaera.classification).map(([key, value]) => (
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-blue-900 to-purple-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Protecting Ancient Ghost Sharks</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Chimaeras are living fossils that need our protection from deep-sea fishing and habitat destruction.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-blue-400 mb-3">Sustainable Fishing</h4>
                            <p className="text-gray-300">Support regulations that protect deep-sea species from overfishing.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-purple-400 mb-3">Deep-Sea Protection</h4>
                            <p className="text-gray-300">Advocate for marine protected areas in deep-sea habitats.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-cyan-400 mb-3">Research Support</h4>
                            <p className="text-gray-300">Fund research to better understand these ancient creatures.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chimaera;
