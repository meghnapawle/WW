import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

// Comprehensive Cephalopods Data
const cephalopods = {
    name: "Cephalopods",
    scientificName: "Cephalopoda",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Mollusca",
        class: "Cephalopoda",
        subclasses: "Nautiloidea, Coleoidea",
        majorGroups: "Octopods, Squids, Cuttlefish, Nautiluses",
        species: "800+ known species"
    },

    imageUrls: ["/imges/cephalopods.png", "/imges/Dumbo Octopus.png", "/imges/Giant Squid (Architeuthis dux).png"],

    physicalCharacteristics: {
        length: "1 cm - 18 m (0.4 in - 59 ft) depending on species",
        weight: "1 g - 750 kg (0.04 oz - 1,650 pounds)",
        bodyType: "Soft-bodied mollusks with distinct head and arms/tentacles",
        arms: "8 arms in octopods, 8 arms + 2 tentacles in squids/cuttlefish",
        brain: "Highly developed nervous system with large brain-to-body ratio",
        description: "Intelligent invertebrates with bilateral symmetry, complex eyes, chromatophores for color change, and sophisticated nervous systems. Bodies range from soft and flexible to muscular and torpedo-shaped."
    },

    habitat: {
        primary: "Marine environments worldwide",
        regions: "All oceans from polar to tropical waters",
        depth: "Intertidal zones to abyssal depths (11,000+ meters)",
        environment: "Coral reefs, open ocean, deep sea, rocky shores",
        preferences: "Species-specific - some prefer reefs, others open water or deep sea"
    },

    behavior: {
        intelligence: "Problem-solving, tool use, learning, memory",
        camouflage: "Rapid color and texture change through chromatophores",
        locomotion: "Jet propulsion, arm crawling, fin swimming",
        defense: "Ink clouds, camouflage, autotomy, venomous bites",
        communication: "Visual displays, color patterns, body postures"
    },

    diet: {
        primary: "Carnivorous predators",
        prey: ["Fish", "Crustaceans", "Mollusks", "Worms", "Other cephalopods"],
        huntingMethod: "Ambush predation, active hunting, tool use",
        feeding: "Powerful beak tears prey, radula (rasping tongue) processes food"
    },

    reproduction: {
        strategy: "Semelparous (die after reproduction) in most species",
        fertilization: "Internal fertilization via spermatophores",
        mating: "Complex courtship displays and color changes",
        eggs: "Direct development - no larval stage in most",
        parentalCare: "Females guard eggs, often sacrificing themselves"
    },

    lifespan: "6 months - 5 years (most species live 1-2 years)",

    conservationStatus: "Varies by species - Least Concern to Data Deficient",

    threats: [
        "Climate change and ocean acidification",
        "Overfishing reducing prey availability",
        "Pollution including plastic debris and chemicals",
        "Habitat destruction in coastal areas",
        "Commercial exploitation for food markets"
    ],

    adaptations: [
        "Chromatophores for instant camouflage and communication",
        "Jet propulsion for rapid escape",
        "Highly developed nervous system and learning ability",
        "Flexible bodies for squeezing through small spaces",
        "Ink sacs for confusing predators"
    ],

    intelligence: [
        "Problem-solving abilities rivaling vertebrates",
        "Tool use in wild and laboratory settings",
        "Complex learning and memory formation",
        "Individual recognition and personality",
        "Maze navigation and spatial memory"
    ],

    culturalSignificance: [
        "Important food source in many cultures",
        "Inspiration for art and mythology (Kraken legends)",
        "Symbol of intelligence and adaptability",
        "Featured prominently in Japanese cuisine",
        "Research models for neuroscience and robotics"
    ],

    ecosystem: {
        role: "Key predators in marine food webs",
        relationships: "Prey for whales, sharks, fish, seabirds",
        nutrient_cycling: "Transfer nutrients between deep and shallow waters",
        indicator: "Sentinels of ocean health and climate change"
    },

    majorGroups: {
        octopods: {
            characteristics: "8 arms, no internal shell, highly intelligent",
            habitat: "Benthic, reef-dwelling, some pelagic species",
            examples: "Common octopus, blue-ringed octopus, giant Pacific octopus"
        },
        squids: {
            characteristics: "8 arms + 2 tentacles, internal pen, fast swimmers",
            habitat: "Pelagic, open ocean dwellers",
            examples: "Giant squid, Humboldt squid, vampire squid"
        },
        cuttlefish: {
            characteristics: "8 arms + 2 tentacles, internal cuttlebone, masters of camouflage",
            habitat: "Coastal waters, seagrass beds, sandy bottoms",
            examples: "Common cuttlefish, flamboyant cuttlefish, pharaoh cuttlefish"
        },
        nautiluses: {
            characteristics: "90+ tentacles, external chambered shell, primitive",
            habitat: "Deep reef slopes, 200-800m depth",
            examples: "Chambered nautilus, Allonautilus"
        }
    },

    researchSignificance: [
        "Model organisms for neuroscience research",
        "Inspiration for soft robotics and biomimetics",
        "Climate change indicators in marine ecosystems",
        "Evolution of intelligence in invertebrates",
        "Camouflage technology development"
    ]
};

const Cephalopods = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % cephalopods.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + cephalopods.imageUrls.length) % cephalopods.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-purple-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-purple-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Size Range:</strong> {cephalopods.physicalCharacteristics.length}</li>
                                    <li><strong>Weight Range:</strong> {cephalopods.physicalCharacteristics.weight}</li>
                                    <li><strong>Body Type:</strong> {cephalopods.physicalCharacteristics.bodyType}</li>
                                    <li><strong>Appendages:</strong> {cephalopods.physicalCharacteristics.arms}</li>
                                </ul>
                                <p className="mt-4 text-gray-300">{cephalopods.physicalCharacteristics.description}</p>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-400 mb-4">Intelligence Features</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {cephalopods.intelligence.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            
            case 'groups':
                return (
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {Object.entries(cephalopods.majorGroups).map(([group, details]) => (
                                <div key={group} className="bg-gray-800 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-4 capitalize">{group}</h3>
                                    <div className="space-y-3 text-gray-300">
                                        <p><strong>Characteristics:</strong> {details.characteristics}</p>
                                        <p><strong>Habitat:</strong> {details.habitat}</p>
                                        <p><strong>Examples:</strong> {details.examples}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            
            case 'behavior':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-green-400 mb-4">Behavior & Abilities</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-green-300 mb-3">Behavioral Traits</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li><strong>Intelligence:</strong> {cephalopods.behavior.intelligence}</li>
                                        <li><strong>Camouflage:</strong> {cephalopods.behavior.camouflage}</li>
                                        <li><strong>Locomotion:</strong> {cephalopods.behavior.locomotion}</li>
                                        <li><strong>Defense:</strong> {cephalopods.behavior.defense}</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-yellow-300 mb-3">Diet & Hunting</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {cephalopods.diet.primary}</p>
                                    <p className="text-gray-300 mb-2"><strong>Prey:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {cephalopods.diet.prey.map((item, index) => (
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
                            <h3 className="text-xl font-bold text-red-400 mb-4">Conservation & Threats</h3>
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{cephalopods.conservationStatus}</p>
                            
                            <div className="mb-6">
                                <h4 className="font-semibold text-red-300 mb-3">Major Threats</h4>
                                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                    {cephalopods.threats.map((threat, index) => (
                                        <li key={index}>{threat}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold text-blue-300 mb-3">Key Adaptations</h4>
                                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                    {cephalopods.adaptations.map((adaptation, index) => (
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={cephalopods.imageUrls[currentImageIndex]} 
                        alt={cephalopods.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {cephalopods.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-purple-200">
                        {cephalopods.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The ocean's most intelligent invertebrates
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {cephalopods.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(cephalopods.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-purple-300 mb-2 capitalize">{key}</h3>
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
                            id="groups" 
                            label="Major Groups" 
                            isActive={activeTab === 'groups'} 
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

            {/* Research & Cultural Significance */}
            <div className="fade-section py-20 px-6 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-3xl font-bold text-cyan-400 mb-6">Research Significance</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {cephalopods.researchSignificance.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-3xl font-bold text-pink-400 mb-6">Cultural Impact</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {cephalopods.culturalSignificance.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-purple-900 to-pink-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Protecting Ocean Intelligence</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Cephalopods represent some of the most remarkable intelligence in the ocean. These alien-like creatures need our protection to continue their evolutionary journey.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-purple-400 mb-3">Support Research</h4>
                            <p className="text-gray-300">Fund studies on cephalopod intelligence and behavior to understand these remarkable creatures.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-cyan-400 mb-3">Ocean Protection</h4>
                            <p className="text-gray-300">Reduce plastic pollution and support marine protected areas.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-pink-400 mb-3">Sustainable Practices</h4>
                            <p className="text-gray-300">Choose sustainable seafood and support ethical research practices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cephalopods;
