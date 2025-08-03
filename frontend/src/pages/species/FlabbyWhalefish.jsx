import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

// Comprehensive Flabby Whalefish Data
const flabbyWhalefish = {
    name: "Flabby Whalefish",
    scientificName: "Cetomimus spp.",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Actinopterygii",
        order: "Stephanoberyciformes",
        family: "Cetomimidae",
        genus: "Cetomimus",
        species: "Multiple species"
    },

    imageUrls: ["/imges/deep_sea.jpg", "/imges/fish.png", "/imges/anglerfish.png"],

    physicalCharacteristics: {
        length: "15-35 cm (6-14 inches)",
        weight: "100-500 grams (3.5-17.6 oz)",
        bodyType: "Gelatinous, flabby, whale-like appearance",
        mouth: "Large, extensible mouth with prominent jaw",
        skin: "Loose, gelatinous skin with minimal scales",
        description: "Deep-sea fish with distinctive flabby appearance and remarkable sexual dimorphism in lifecycle."
    },

    habitat: {
        primary: "Deep ocean bathypelagic and abyssopelagic zones",
        regions: "Global distribution in deep waters",
        depth: "1,000 - 4,000+ meters (3,280 - 13,120+ feet)",
        zones: "Midnight zone and deeper",
        preferences: "Open ocean, midwater to near-bottom"
    },

    behavior: {
        feeding: "Active predator with large, extensible mouth",
        swimming: "Weak swimmers, drift with currents",
        social: "Solitary except during mating",
        vertical: "Limited vertical migration",
        bioluminescence: "Some species may have bioluminescent organs"
    },

    diet: {
        primary: "Carnivorous deep-sea predator",
        food: ["Small fish", "Crustaceans", "Cephalopod larvae", "Marine worms", "Jellyfish", "Other gelatinous organisms"],
        feeding: "Engulfs prey whole with expandable mouth and stomach",
        hunting: "Opportunistic predator in food-scarce environment"
    },

    reproduction: {
        dimorphism: "Extreme sexual dimorphism in development",
        males: "Degenerate into parasitic forms on females",
        females: "Develop into large, free-swimming adults",
        spawning: "Broadcast spawning in deep waters",
        larvae: "Complex larval development stages"
    },

    lifespan: "Unknown, estimated 5-15 years",

    conservationStatus: "Data Deficient (most species poorly studied)",

    deepSeaAdaptations: {
        pressure: "Body adapted for extreme deep-sea pressure",
        metabolism: "Extremely slow metabolism for energy conservation",
        buoyancy: "Gelatinous body provides neutral buoyancy",
        mouth: "Highly extensible mouth for large prey capture",
        stomach: "Expandable stomach for irregular feeding"
    },

    threats: [
        "Deep-sea trawling and fishing",
        "Ocean acidification affecting food chain",
        "Climate change altering deep-sea conditions",
        "Deep-sea mining potential impacts",
        "Pollution including microplastics"
    ],

    specializations: [
        "Gelatinous body structure for deep-sea life",
        "Highly extensible feeding apparatus",
        "Unique sexual dimorphism and lifecycle",
        "Pressure-resistant physiology",
        "Energy-efficient slow metabolism"
    ],

    lifecycle: {
        larvae: "Planktonic larvae in upper waters",
        juveniles: "Gradual descent to deeper waters",
        sexualDifferentiation: "Males become parasitic, females grow large",
        adults: "Females reach sexual maturity in deep waters",
        mating: "Complex mating with parasitic males"
    },

    familyCharacteristics: {
        cetomimidae: "Family of deep-sea whalefishes",
        diversity: "Over 20 species described",
        distribution: "Found in all major oceans",
        morphology: "Characterized by whale-like appearance",
        ecology: "Important deep-sea predators"
    },

    physiology: {
        skeleton: "Reduced, cartilaginous skeleton",
        gills: "Large gill chambers for oxygen extraction",
        liver: "Large, oil-filled liver for buoyancy",
        muscles: "Reduced muscle mass, gelatinous tissue",
        nervous: "Well-developed sensory systems"
    },

    ecologicalRole: [
        "Important predators in deep-sea food webs",
        "Connect surface and deep-sea ecosystems",
        "Prey for larger deep-sea predators",
        "Part of deep-sea carbon cycling",
        "Indicator of deep-sea ecosystem health"
    ],

    research: {
        taxonomy: "Ongoing species identification and classification",
        lifecycle: "Understanding complex developmental biology",
        ecology: "Studying deep-sea food web dynamics",
        physiology: "Adaptations to extreme pressure and cold",
        distribution: "Mapping global deep-sea biodiversity"
    },

    sexualDimorphism: {
        females: {
            size: "Large, up to 35 cm",
            lifestyle: "Free-swimming predators",
            feeding: "Active hunters with large mouths",
            role: "Primary reproductive individuals"
        },
        males: {
            size: "Much smaller, degenerate",
            lifestyle: "Parasitic on females",
            feeding: "Nutrient absorption from host",
            role: "Solely reproductive function"
        }
    },

    deepSeaEnvironment: {
        pressure: "Extreme pressure up to 400+ atmospheres",
        temperature: "Near-freezing temperatures (2-4°C)",
        light: "Complete darkness below 1000m",
        food: "Extremely scarce and patchy food sources",
        oxygen: "Low oxygen concentrations"
    },

    interestingFacts: [
        "Named for their whale-like appearance despite being fish",
        "Males become completely parasitic on females",
        "Can swallow prey larger than their normal body width",
        "Their gelatinous body helps them survive crushing depths",
        "Some species may live their entire lives without seeing sunlight",
        "Their large mouth can extend to capture surprising large prey",
        "They represent one of the most extreme examples of sexual dimorphism",
        "Their larvae migrate vertically thousands of meters during development"
    ],

    comparisons: {
        anglerfish: "Similar deep-sea lifestyle but different feeding strategy",
        snailfish: "Share gelatinous body but different family",
        gulperEel: "Similar large mouth adaptation for deep-sea feeding",
        barreleye: "Both show extreme deep-sea specializations"
    },

    culturalSignificance: [
        "Example of extreme deep-sea adaptation",
        "Featured in deep-sea biology research",
        "Represents unknown diversity of deep oceans",
        "Symbol of marine biodiversity",
        "Important for understanding evolution"
    ]
};

const FlabbyWhalefish = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % flabbyWhalefish.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + flabbyWhalefish.imageUrls.length) % flabbyWhalefish.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-indigo-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-indigo-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {flabbyWhalefish.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {flabbyWhalefish.physicalCharacteristics.weight}</li>
                                    <li><strong>Body Type:</strong> {flabbyWhalefish.physicalCharacteristics.bodyType}</li>
                                    <li><strong>Mouth:</strong> {flabbyWhalefish.physicalCharacteristics.mouth}</li>
                                    <li><strong>Skin:</strong> {flabbyWhalefish.physicalCharacteristics.skin}</li>
                                </ul>
                                <p className="mt-4 text-gray-300">{flabbyWhalefish.physicalCharacteristics.description}</p>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-purple-400 mb-4">Fascinating Facts</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {flabbyWhalefish.interestingFacts.slice(0, 6).map((fact, index) => (
                                        <li key={index}>{fact}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            
            case 'dimorphism':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-pink-400 mb-4">Extreme Sexual Dimorphism</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-pink-900 p-4 rounded-lg">
                                    <h4 className="font-semibold text-pink-300 mb-3">Females</h4>
                                    {Object.entries(flabbyWhalefish.sexualDimorphism.females).map(([trait, description]) => (
                                        <div key={trait} className="mb-2">
                                            <p className="text-pink-200 font-medium capitalize">{trait}</p>
                                            <p className="text-pink-100 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-blue-900 p-4 rounded-lg">
                                    <h4 className="font-semibold text-blue-300 mb-3">Males</h4>
                                    {Object.entries(flabbyWhalefish.sexualDimorphism.males).map(([trait, description]) => (
                                        <div key={trait} className="mb-2">
                                            <p className="text-blue-200 font-medium capitalize">{trait}</p>
                                            <p className="text-blue-100 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-cyan-400 mb-4">Lifecycle Stages</h3>
                            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {Object.entries(flabbyWhalefish.lifecycle).map(([stage, description]) => (
                                    <div key={stage} className="bg-gradient-to-b from-cyan-900 to-blue-900 p-4 rounded-lg">
                                        <h4 className="font-semibold text-cyan-300 mb-2 capitalize">{stage.replace(/([A-Z])/g, ' $1')}</h4>
                                        <p className="text-cyan-200 text-sm">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            
            case 'adaptations':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-green-400 mb-4">Deep-Sea Adaptations</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {Object.entries(flabbyWhalefish.deepSeaAdaptations).map(([adaptation, description]) => (
                                    <div key={adaptation} className="bg-gray-700 p-4 rounded-lg">
                                        <h4 className="font-semibold text-green-300 mb-3 capitalize">{adaptation}</h4>
                                        <p className="text-gray-300 text-sm">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-orange-400 mb-4">Deep-Sea Environment</h3>
                            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {Object.entries(flabbyWhalefish.deepSeaEnvironment).map(([factor, description]) => (
                                    <div key={factor} className="bg-gradient-to-b from-orange-900 to-red-900 p-4 rounded-lg">
                                        <h4 className="font-semibold text-orange-300 mb-2 capitalize">{factor}</h4>
                                        <p className="text-orange-200 text-sm">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-yellow-400 mb-4">Physiology</h3>
                            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {Object.entries(flabbyWhalefish.physiology).map(([system, description]) => (
                                    <div key={system} className="bg-yellow-900 p-3 rounded-lg">
                                        <h4 className="font-semibold text-yellow-300 mb-2 capitalize">{system}</h4>
                                        <p className="text-yellow-200 text-sm">{description}</p>
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
                            <h3 className="text-xl font-bold text-red-400 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{flabbyWhalefish.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {flabbyWhalefish.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Research Areas</h4>
                                    {Object.entries(flabbyWhalefish.research).map(([area, description]) => (
                                        <div key={area} className="mb-2">
                                            <p className="text-blue-300 font-medium capitalize">{area}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-blue-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-300 mb-4">Family Characteristics</h3>
                            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {Object.entries(flabbyWhalefish.familyCharacteristics).map(([trait, description]) => (
                                    <div key={trait} className="space-y-2">
                                        <p className="text-blue-300 font-semibold capitalize">{trait.replace(/([A-Z])/g, ' $1')}</p>
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={flabbyWhalefish.imageUrls[currentImageIndex]} 
                        alt={flabbyWhalefish.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        {flabbyWhalefish.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-indigo-200">
                        {flabbyWhalefish.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Mysterious deep-sea dwellers with extraordinary adaptations
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {flabbyWhalefish.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-indigo-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(flabbyWhalefish.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-indigo-300 mb-2 capitalize">{key}</h3>
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
                            id="dimorphism" 
                            label="Sexual Dimorphism" 
                            isActive={activeTab === 'dimorphism'} 
                            onClick={setActiveTab} 
                        />
                        <TabButton 
                            id="adaptations" 
                            label="Deep-Sea Adaptations" 
                            isActive={activeTab === 'adaptations'} 
                            onClick={setActiveTab} 
                        />
                        <TabButton 
                            id="conservation" 
                            label="Research & Conservation" 
                            isActive={activeTab === 'conservation'} 
                            onClick={setActiveTab} 
                        />
                    </div>
                    
                    <div className="transition-all duration-300">
                        {renderTabContent()}
                    </div>
                </div>
            </div>

            {/* Ecological Role & Diet */}
            <div className="fade-section py-20 px-6 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-3xl font-bold text-cyan-400 mb-6">Diet & Feeding</h3>
                            <div className="space-y-4 text-gray-300">
                                <p><strong>Type:</strong> {flabbyWhalefish.diet.primary}</p>
                                <p><strong>Strategy:</strong> {flabbyWhalefish.diet.feeding}</p>
                                <p><strong>Hunting:</strong> {flabbyWhalefish.diet.hunting}</p>
                            </div>
                            
                            <h4 className="text-xl font-semibold text-orange-400 mt-6 mb-3">Food Sources</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                {flabbyWhalefish.diet.food.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-3xl font-bold text-yellow-400 mb-6">Ecological Role</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {flabbyWhalefish.ecologicalRole.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                            
                            <div className="mt-6 p-4 bg-indigo-900 rounded-lg">
                                <h4 className="text-lg font-semibold text-indigo-300 mb-2">Deep-Sea Mysteries</h4>
                                <p className="text-indigo-200 text-sm">
                                    Flabby whalefishes represent some of the most extreme adaptations to deep-sea life. 
                                    Their bizarre lifecycle and sexual dimorphism showcase the incredible diversity 
                                    of life in Earth's most remote environments. Each discovery reveals new mysteries 
                                    about how life adapts to extreme conditions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-indigo-900 to-purple-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Protecting Deep-Sea Biodiversity</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        The deep sea remains largely unexplored, with species like the flabby whalefish 
                        representing the incredible diversity waiting to be discovered and protected.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-indigo-400 mb-3">Support Deep-Sea Research</h4>
                            <p className="text-gray-300">Fund exploration and study of deep-sea ecosystems and biodiversity.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-purple-400 mb-3">Protect Deep Waters</h4>
                            <p className="text-gray-300">Advocate for marine protected areas in deep-sea environments.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-cyan-400 mb-3">Reduce Ocean Impact</h4>
                            <p className="text-gray-300">Minimize pollution and climate change effects on deep-sea habitats.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlabbyWhalefish;
