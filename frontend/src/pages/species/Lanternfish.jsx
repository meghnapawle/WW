import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const lanternfish = {
    name: "Lanternfish",
    scientificName: "Myctophidae family",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Actinopterygii",
        order: "Myctophiformes",
        family: "Myctophidae",
        genus: "Various genera",
        species: "Over 250 species"
    },

    imageUrls: ["/imges/lanternfish.jpg", "/imges/deep_sea.jpg", "/imges/jellyfish.png"],

    physicalCharacteristics: {
        length: "2-30 cm (0.8-12 inches)",
        weight: "2-600 grams",
        photophores: "Complex patterns of bioluminescent organs",
        body: "Streamlined, silvery body",
        eyes: "Large eyes adapted for low light",
        lifespan: "1-7 years depending on species"
    },

    habitat: {
        primary: "Mesopelagic zone of open ocean",
        regions: "All oceans worldwide",
        depth: "200-1,000 meters (650-3,300 feet) during day",
        migration: "Surface waters at night",
        distribution: "Most diverse deep-sea fish family"
    },

    behavior: {
        migration: "Largest animal migration on Earth daily",
        bioluminescence: "Species-specific light patterns",
        schooling: "Form massive aggregations",
        camouflage: "Counter-illumination to avoid predators",
        communication: "Light-based species recognition"
    },

    diet: {
        primary: "Planktivorous and small fish predator",
        food: ["Copepods", "Krill", "Small fish", "Squid larvae", "Marine worms", "Zooplankton"],
        hunting: "Follow plankton to surface at night",
        role: "Critical link between primary producers and predators"
    },

    reproduction: {
        spawning: "Pelagic broadcast spawning",
        eggs: "Planktonic eggs in upper waters",
        development: "Complex larval stages",
        maturity: "Reach maturity at 1-2 years",
        timing: "Seasonal spawning patterns"
    },

    lifespan: "1-7 years",
    conservationStatus: "Least Concern (most species)",

    threats: [
        "Climate change affecting prey distribution",
        "Ocean warming disrupting migrations",
        "Commercial fishing pressure",
        "Pollution and microplastics",
        "Deep-sea mining activities"
    ],

    adaptations: [
        "Complex bioluminescent patterns",
        "Daily vertical migration behavior",
        "Large eyes for low-light vision",
        "Swim bladder for buoyancy control",
        "Counter-illumination camouflage",
        "Species-specific light codes"
    ],

    bioluminescence: [
        "Each species has unique photophore pattern",
        "Males and females have different patterns",
        "Used for species recognition and mating",
        "Counter-illumination breaks up silhouette",
        "Can control light intensity",
        "Blue-green light penetrates water best"
    ],

    interestingFacts: [
        "Participate in largest migration on Earth",
        "Travel 400+ meters vertically twice daily",
        "Each species has unique light signature",
        "Form the 'deep scattering layer' on sonar",
        "May comprise 65% of deep-sea fish biomass",
        "Their migration transports carbon to deep ocean",
        "Can live in total darkness during day",
        "Some species have light organs on their tongues"
    ]
};

const Lanternfish = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % lanternfish.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + lanternfish.imageUrls.length) % lanternfish.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-yellow-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-yellow-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {lanternfish.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {lanternfish.physicalCharacteristics.weight}</li>
                                    <li><strong>Photophores:</strong> {lanternfish.physicalCharacteristics.photophores}</li>
                                    <li><strong>Body:</strong> {lanternfish.physicalCharacteristics.body}</li>
                                    <li><strong>Eyes:</strong> {lanternfish.physicalCharacteristics.eyes}</li>
                                    <li><strong>Lifespan:</strong> {lanternfish.physicalCharacteristics.lifespan}</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-cyan-400 mb-4">Bioluminescence</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {lanternfish.bioluminescence.map((feature, index) => (
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
                                    {Object.entries(lanternfish.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-cyan-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-yellow-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {lanternfish.diet.primary}</p>
                                    <p className="text-gray-300 mb-3"><strong>Hunting:</strong> {lanternfish.diet.hunting}</p>
                                    <p className="text-gray-300 mb-3"><strong>Role:</strong> {lanternfish.diet.role}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {lanternfish.diet.food.map((item, index) => (
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
                            <h3 className="text-xl font-bold text-yellow-400 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-green-400">{lanternfish.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {lanternfish.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {lanternfish.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-amber-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-amber-300 mb-4">Amazing Facts</h3>
                            <ul className="list-disc list-inside text-amber-200 space-y-2">
                                {lanternfish.interestingFacts.map((fact, index) => (
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-yellow-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={lanternfish.imageUrls[currentImageIndex]} 
                        alt={lanternfish.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                        {lanternfish.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-yellow-200">
                        {lanternfish.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Masters of the largest migration on Earth
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {lanternfish.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(lanternfish.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-yellow-300 mb-2 capitalize">{key}</h3>
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-yellow-900 to-orange-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Living Light Shows</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Lanternfish create the ocean's greatest daily spectacle, migrating in numbers beyond imagination.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-yellow-400 mb-3">Migration Studies</h4>
                            <p className="text-gray-300">Track the largest migration phenomenon on Earth.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-orange-400 mb-3">Bioluminescence</h4>
                            <p className="text-gray-300">Study natural light production for technology.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-amber-400 mb-3">Carbon Cycling</h4>
                            <p className="text-gray-300">Understand their role in ocean carbon transport.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lanternfish;
