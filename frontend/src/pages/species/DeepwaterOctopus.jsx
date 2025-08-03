import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

// Comprehensive Deepwater Octopus Data
const deepwaterOctopus = {
    name: "Deepwater Octopus",
    scientificName: "Octopoda (deep-sea species)",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Mollusca",
        class: "Cephalopoda",
        order: "Octopoda",
        families: "Various (Bathypolypodidae, Octopodidae)",
        species: "Multiple deep-sea species"
    },

    imageUrls: ["/imges/octopus.png", "/imges/cephalopods.png", "/imges/deep_sea.jpg"],

    physicalCharacteristics: {
        armSpan: "10 cm - 6 meters (4 inches - 20 feet) depending on species",
        weight: "50 g - 75 kg (1.8 oz - 165 lbs)",
        bodyType: "Soft-bodied with muscular arms, bulbous head",
        arms: "Eight arms with powerful suckers",
        eyes: "Large, highly developed eyes adapted for low light",
        description: "Highly intelligent cephalopods adapted for deep-sea life with specialized features for extreme depths and pressure."
    },

    habitat: {
        primary: "Deep ocean environments worldwide",
        regions: "Global distribution in deep waters",
        depth: "200 - 7,000+ meters (656 - 23,000+ feet)",
        zones: "Bathyal, abyssal, and hadal zones",
        preferences: "Rocky outcrops, seamounts, hydrothermal vents"
    },

    behavior: {
        intelligence: "Highly intelligent with problem-solving abilities",
        camouflage: "Master of camouflage and color change",
        solitary: "Generally solitary except during mating",
        hunting: "Ambush predators with powerful arms",
        denMaking: "Create dens in rocks and crevices"
    },

    diet: {
        primary: "Carnivorous predators",
        food: ["Fish", "Crustaceans", "Mollusks", "Marine worms", "Other cephalopods", "Carrion"],
        huntingStrategy: "Ambush predation using camouflage and rapid strikes",
        feeding: "Use beak to break down prey after subduing with arms"
    },

    reproduction: {
        mating: "Males transfer sperm packets via specialized arm",
        eggs: "Females guard and tend eggs until hatching",
        brooding: "Extended brooding period in cold deep waters",
        larvae: "Planktonic larvae drift in water column",
        semelparity: "Die after single reproductive cycle"
    },

    lifespan: "6 months - 5 years depending on species and temperature",

    conservationStatus: "Data Deficient to Vulnerable (varies by species)",

    deepSeaAdaptations: {
        pressure: "Body composition adapted for extreme pressure",
        temperature: "Adapted to near-freezing temperatures",
        oxygen: "Efficient oxygen extraction in low-oxygen environments",
        bioluminescence: "Some species produce their own light",
        metabolism: "Slower metabolism to conserve energy"
    },

    threats: [
        "Deep-sea fishing and trawling",
        "Ocean acidification affecting prey species",
        "Climate change altering deep-sea conditions",
        "Pollution including plastics and chemicals",
        "Deep-sea mining activities"
    ],

    specializations: [
        "Highly developed nervous system and brain",
        "Chromatophores for rapid color and texture change",
        "Jet propulsion for rapid escape",
        "Regenerative abilities for lost arms",
        "Pressure-resistant physiology"
    ],

    speciesExamples: {
        glassOctopus: {
            name: "Glass Octopus (Vitreledonella richardi)",
            depth: "500-1,000 meters",
            feature: "Transparent body for camouflage"
        },
        giantPacific: {
            name: "Giant Pacific Octopus (Enteroctopus dofleini)",
            depth: "0-2,000 meters",
            feature: "Largest octopus species"
        },
        dumboDctopus: {
            name: "Dumbo Octopus (Grimpoteuthis spp.)",
            depth: "3,000-7,000 meters",
            feature: "Ear-like fins for swimming"
        }
    },

    intelligence: {
        problemSolving: "Can solve complex puzzles and mazes",
        toolUse: "Use tools for hunting and protection",
        learning: "Demonstrate learning and memory capabilities",
        recognition: "Individual recognition and personality",
        planning: "Show evidence of planning and foresight"
    },

    physiology: {
        hearts: "Three hearts - two branchial, one systemic",
        blood: "Blue copper-based blood (hemocyanin)",
        brain: "Highly developed brain with learning centers",
        arms: "Two-thirds of neurons located in arms",
        gills: "Highly efficient gill system"
    },

    ecologicalRole: [
        "Important predators in deep-sea food webs",
        "Prey for larger marine animals",
        "Nutrient transfer between depth zones",
        "Indicator species for deep-sea ecosystem health",
        "Key components of benthic communities"
    ],

    research: {
        neuroscience: "Model organisms for studying intelligence",
        biomimetics: "Inspiration for robotics and materials",
        ecology: "Understanding deep-sea ecosystem dynamics",
        evolution: "Studying cephalopod evolution and adaptation",
        conservation: "Assessing deep-sea biodiversity"
    },

    culturalSignificance: [
        "Featured in marine biology research",
        "Inspiration for science fiction and literature",
        "Symbol of intelligence and mystery",
        "Important in understanding consciousness",
        "Conservation flagship species"
    ],

    interestingFacts: [
        "Have three hearts and blue blood",
        "Two-thirds of their neurons are in their arms",
        "Can change color and texture in milliseconds",
        "Some species are completely transparent",
        "Can regenerate lost arms completely",
        "Show individual personalities and preferences",
        "Use jet propulsion to escape predators",
        "Some deep-sea species glow with bioluminescence"
    ],

    depthZones: {
        mesopelagic: {
            range: "200-1,000 meters",
            characteristics: "Twilight zone with some light",
            species: "Glass octopus, smaller species"
        },
        bathypelagic: {
            range: "1,000-4,000 meters",
            characteristics: "Midnight zone, no sunlight",
            species: "Many deep-sea octopus species"
        },
        abyssopelagic: {
            range: "4,000-6,000 meters",
            characteristics: "Abyssal zone, extreme pressure",
            species: "Dumbo octopus and relatives"
        },
        hadalpelagic: {
            range: "6,000+ meters",
            characteristics: "Deepest trenches",
            species: "Specialized deep-trench octopuses"
        }
    }
};

const DeepwaterOctopus = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % deepwaterOctopus.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + deepwaterOctopus.imageUrls.length) % deepwaterOctopus.imageUrls.length);
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
                                    <li><strong>Arm Span:</strong> {deepwaterOctopus.physicalCharacteristics.armSpan}</li>
                                    <li><strong>Weight:</strong> {deepwaterOctopus.physicalCharacteristics.weight}</li>
                                    <li><strong>Arms:</strong> {deepwaterOctopus.physicalCharacteristics.arms}</li>
                                    <li><strong>Eyes:</strong> {deepwaterOctopus.physicalCharacteristics.eyes}</li>
                                </ul>
                                <p className="mt-4 text-gray-300">{deepwaterOctopus.physicalCharacteristics.description}</p>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-cyan-400 mb-4">Fascinating Facts</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {deepwaterOctopus.interestingFacts.slice(0, 6).map((fact, index) => (
                                        <li key={index}>{fact}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            
            case 'intelligence':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-400 mb-4">Intelligence & Physiology</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Intelligence Capabilities</h4>
                                    {Object.entries(deepwaterOctopus.intelligence).map(([ability, description]) => (
                                        <div key={ability} className="mb-3">
                                            <p className="text-cyan-300 font-medium capitalize">{ability.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-purple-300 mb-3">Unique Physiology</h4>
                                    {Object.entries(deepwaterOctopus.physiology).map(([feature, description]) => (
                                        <div key={feature} className="mb-3">
                                            <p className="text-purple-300 font-medium capitalize">{feature}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            
            case 'species':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-green-400 mb-4">Deep-Sea Species Examples</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {Object.entries(deepwaterOctopus.speciesExamples).map(([key, species]) => (
                                    <div key={key} className="bg-gray-700 p-4 rounded-lg">
                                        <h4 className="font-semibold text-green-300 mb-3">{species.name}</h4>
                                        <div className="space-y-2 text-gray-300 text-sm">
                                            <p><strong>Depth:</strong> {species.depth}</p>
                                            <p><strong>Special Feature:</strong> {species.feature}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-indigo-400 mb-4">Depth Zones</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {Object.entries(deepwaterOctopus.depthZones).map(([zone, details]) => (
                                    <div key={zone} className="bg-gradient-to-b from-blue-900 to-black p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-300 mb-2 capitalize">{zone.replace(/([A-Z])/g, ' $1')}</h4>
                                        <div className="space-y-2 text-blue-200 text-sm">
                                            <p><strong>Range:</strong> {details.range}</p>
                                            <p><strong>Characteristics:</strong> {details.characteristics}</p>
                                            <p><strong>Species:</strong> {details.species}</p>
                                        </div>
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
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{deepwaterOctopus.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {deepwaterOctopus.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Deep-Sea Adaptations</h4>
                                    {Object.entries(deepwaterOctopus.deepSeaAdaptations).map(([adaptation, description]) => (
                                        <div key={adaptation} className="mb-2">
                                            <p className="text-blue-300 font-medium capitalize">{adaptation}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-blue-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-300 mb-4">Research Applications</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {Object.entries(deepwaterOctopus.research).map(([field, description]) => (
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={deepwaterOctopus.imageUrls[currentImageIndex]} 
                        alt={deepwaterOctopus.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {deepwaterOctopus.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-purple-200">
                        {deepwaterOctopus.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Masters of the deep - intelligent, adaptable, and mysterious
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {deepwaterOctopus.imageUrls.length}
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
                        {Object.entries(deepwaterOctopus.classification).map(([key, value]) => (
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
                            id="intelligence" 
                            label="Intelligence & Physiology" 
                            isActive={activeTab === 'intelligence'} 
                            onClick={setActiveTab} 
                        />
                        <TabButton 
                            id="species" 
                            label="Species & Depths" 
                            isActive={activeTab === 'species'} 
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

            {/* Ecological Role & Behavior */}
            <div className="fade-section py-20 px-6 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-3xl font-bold text-cyan-400 mb-6">Behavior & Diet</h3>
                            <div className="space-y-4 text-gray-300">
                                <p><strong>Intelligence:</strong> {deepwaterOctopus.behavior.intelligence}</p>
                                <p><strong>Camouflage:</strong> {deepwaterOctopus.behavior.camouflage}</p>
                                <p><strong>Hunting:</strong> {deepwaterOctopus.behavior.hunting}</p>
                                <p><strong>Social:</strong> {deepwaterOctopus.behavior.solitary}</p>
                            </div>
                            
                            <h4 className="text-xl font-semibold text-orange-400 mt-6 mb-3">Diet</h4>
                            <p className="text-gray-300 mb-3"><strong>Type:</strong> {deepwaterOctopus.diet.primary}</p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                {deepwaterOctopus.diet.food.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-3xl font-bold text-yellow-400 mb-6">Ecological Role</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {deepwaterOctopus.ecologicalRole.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                            
                            <div className="mt-6 p-4 bg-purple-900 rounded-lg">
                                <h4 className="text-lg font-semibold text-purple-300 mb-2">Masters of Adaptation</h4>
                                <p className="text-purple-200 text-sm">
                                    Deep-sea octopuses represent some of the most sophisticated adaptations to extreme environments on Earth. 
                                    Their intelligence, combined with their ability to thrive in the deep ocean, makes them fascinating subjects 
                                    for understanding consciousness, problem-solving, and survival in harsh conditions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-purple-900 to-indigo-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Protecting Deep-Sea Intelligence</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Deep-sea octopuses face increasing threats from human activities in the deep ocean. 
                        These intelligent creatures hold keys to understanding consciousness and deep-sea ecosystems.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-purple-400 mb-3">Reduce Deep-Sea Impact</h4>
                            <p className="text-gray-300">Support sustainable fishing practices that minimize deep-sea habitat destruction.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-cyan-400 mb-3">Support Research</h4>
                            <p className="text-gray-300">Fund deep-sea exploration and octopus intelligence research.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-indigo-400 mb-3">Ocean Conservation</h4>
                            <p className="text-gray-300">Protect marine environments from pollution and climate change.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeepwaterOctopus;
