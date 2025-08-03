import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const frilledShark = {
    name: "Frilled Shark",
    scientificName: "Chlamydoselachus anguineus",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Chondrichthyes",
        order: "Hexanchiformes",
        family: "Chlamydoselachidae",
        genus: "Chlamydoselachus",
        species: "C. anguineus"
    },

    imageUrls: ["/imges/frilled_shark.jpg", "/imges/deep_sea.jpg", "/imges/shark.png"],

    physicalCharacteristics: {
        length: "1.5-2 meters (5-6.5 feet)",
        weight: "200-300 kg (440-660 lbs)",
        gills: "Six pairs of frilled gill slits",
        teeth: "300 needle-sharp recurved teeth",
        body: "Eel-like, primitive body shape",
        lifespan: "Up to 25 years"
    },

    habitat: {
        primary: "Deep continental slopes and seamounts",
        regions: "Atlantic and Pacific Oceans",
        depth: "120-1,570 meters (390-5,150 feet)",
        temperature: "4-12°C (39-54°F)",
        preference: "Near ocean floor"
    },

    behavior: {
        swimming: "Undulating, eel-like motion",
        hunting: "Ambush predator with lunging strikes",
        reproduction: "Extremely long gestation period",
        activity: "Sluggish and energy-conserving",
        feeding: "Swallows prey whole"
    },

    diet: {
        primary: "Deep-sea cephalopod specialist",
        food: ["Squid", "Deep-sea fish", "Sharks", "Rays", "Hagfish", "Lamprey"],
        hunting: "Strikes like a snake at prey",
        feeding: "Needle teeth prevent escape"
    },

    reproduction: {
        gestation: "Longest of any vertebrate - 3.5 years",
        litter: "2-15 pups",
        development: "Ovoviviparous development",
        maturity: "Sexual maturity at 10+ years",
        rarity: "Rarely observed mating"
    },

    lifespan: "Up to 25 years",
    conservationStatus: "Least Concern",

    threats: [
        "Deep-sea fishing bycatch",
        "Habitat destruction from trawling",
        "Climate change affecting deep waters",
        "Pollution in deep ocean",
        "Slow reproduction making recovery difficult"
    ],

    adaptations: [
        "Primitive six-gill breathing system",
        "Needle-sharp recurved teeth",
        "Flexible jaw for large prey",
        "Eel-like body for deep-sea living",
        "Low metabolism for energy conservation",
        "Extended gestation for offspring survival"
    ],

    livingFossil: [
        "Virtually unchanged for 80 million years",
        "Most primitive living shark species",
        "Retains many ancient characteristics",
        "Six gill slits like ancient sharks",
        "Missing many modern shark features",
        "Living window into shark evolution"
    ],

    interestingFacts: [
        "Called a 'living fossil' - unchanged for 80 million years",
        "Has the longest gestation period of any vertebrate",
        "Can unhinge its jaw like a snake",
        "Has 300 needle-sharp teeth in 25 rows",
        "Rarely seen alive - lives in deep ocean",
        "More closely related to ancient sharks than modern ones",
        "Can swallow prey half its own body length",
        "Sometimes called the 'eel shark'"
    ]
};

const FrilledShark = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % frilledShark.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + frilledShark.imageUrls.length) % frilledShark.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-emerald-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-emerald-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {frilledShark.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {frilledShark.physicalCharacteristics.weight}</li>
                                    <li><strong>Gills:</strong> {frilledShark.physicalCharacteristics.gills}</li>
                                    <li><strong>Teeth:</strong> {frilledShark.physicalCharacteristics.teeth}</li>
                                    <li><strong>Body:</strong> {frilledShark.physicalCharacteristics.body}</li>
                                    <li><strong>Lifespan:</strong> {frilledShark.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-teal-400 mb-4">Living Fossil</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {frilledShark.livingFossil.map((feature, index) => (
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
                                    {Object.entries(frilledShark.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-cyan-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-emerald-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {frilledShark.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Hunting:</strong> {frilledShark.diet.hunting}</p>
                                    <p className="text-gray-300 mb-3"><strong>Feeding:</strong> {frilledShark.diet.feeding}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {frilledShark.diet.food.map((item, index) => (
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
                            <h3 className="text-xl font-bold text-emerald-400 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-green-400">{frilledShark.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {frilledShark.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {frilledShark.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-emerald-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-emerald-300 mb-4">Fascinating Facts</h3>
                            <ul className="list-disc list-inside text-emerald-200 space-y-2">
                                {frilledShark.interestingFacts.map((fact, index) => (
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-emerald-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={frilledShark.imageUrls[currentImageIndex]} 
                        alt={frilledShark.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                        {frilledShark.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-emerald-200">
                        {frilledShark.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Living fossil from the age of dinosaurs
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {frilledShark.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-emerald-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(frilledShark.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-emerald-300 mb-2 capitalize">{key}</h3>
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-emerald-900 to-teal-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Ancient Ocean Survivors</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Frilled sharks are living fossils that have survived virtually unchanged for 80 million years.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-emerald-400 mb-3">Evolution Research</h4>
                            <p className="text-gray-300">Study ancient shark characteristics and evolution.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-teal-400 mb-3">Deep-Sea Protection</h4>
                            <p className="text-gray-300">Protect deep-sea habitats from human impacts.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-green-400 mb-3">Scientific Discovery</h4>
                            <p className="text-gray-300">Support research into these mysterious creatures.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrilledShark;
