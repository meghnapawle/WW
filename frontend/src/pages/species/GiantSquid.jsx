import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const giantSquid = {
    name: "Giant Squid",
    scientificName: "Architeuthis dux",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Mollusca",
        class: "Cephalopoda",
        order: "Oegopsida",
        family: "Architeuthidae",
        genus: "Architeuthis",
        species: "A. dux"
    },

    imageUrls: ["/imges/cephalopods.png", "/imges/deep_sea.jpg", "/imges/octopus.png"],

    physicalCharacteristics: {
        length: "10-13 meters (33-43 feet) total length",
        weight: "150-275 kg (330-600 lbs)",
        mantleLength: "2-3 meters (6.5-10 feet)",
        arms: "8 arms with powerful suckers",
        tentacles: "2 feeding tentacles up to 8 meters long",
        description: "Largest invertebrate on Earth with massive eyes and powerful tentacles."
    },

    habitat: {
        primary: "Deep oceanic waters worldwide",
        regions: "All major oceans, temperate and subtropical zones",
        depth: "300-1,000 meters (980-3,280 feet), occasionally deeper",
        zone: "Mesopelagic to bathypelagic zones",
        environment: "Open ocean, near continental slopes"
    },

    behavior: {
        hunting: "Active predator using tentacles to capture prey",
        swimming: "Jet propulsion and fin undulation",
        intelligence: "Highly intelligent with complex nervous system",
        camouflage: "Can change color and texture rapidly",
        social: "Generally solitary except during mating"
    },

    diet: {
        primary: "Carnivorous predator",
        food: ["Deep-sea fish", "Other squid", "Shrimp", "Lanternfish", "Hake"],
        hunting: "Ambush predator using long feeding tentacles",
        consumption: "Can consume prey up to 30% of body weight",
        beak: "Powerful beak for crushing and tearing prey"
    },

    reproduction: {
        mating: "Males transfer sperm packets to females",
        eggs: "Females lay thousands of eggs in deep water",
        development: "Direct development, no larval stage",
        lifespan: "Short-lived, likely 2-5 years",
        death: "Die after reproduction (semelparity)"
    },

    lifespan: "2-5 years",
    conservationStatus: "Data Deficient",

    anatomy: {
        eyes: "Largest eyes in animal kingdom (25-27 cm diameter)",
        brain: "Highly developed brain and nervous system",
        beak: "Powerful parrot-like beak made of chitin",
        suckers: "Hundreds of suckers with toothed rings",
        chromatophores: "Color-changing cells for camouflage",
        statoliths: "Balance organs for orientation"
    },

    threats: [
        "Climate change affecting prey distribution",
        "Deep-sea fishing bycatch",
        "Ocean pollution including plastics",
        "Ocean acidification affecting shell-bearing prey",
        "Sperm whale predation (natural)"
    ],

    adaptations: [
        "Massive eyes for vision in low light",
        "Powerful tentacles for prey capture",
        "Jet propulsion for rapid movement",
        "Large brain for complex behaviors",
        "Pressure-resistant body for deep diving"
    ],

    massiveEyes: {
        diameter: "25-27 cm (10-11 inches) - largest in animal kingdom",
        function: "Detect large objects like sperm whales from great distances",
        lightGathering: "Extremely efficient in low-light deep-sea environment",
        comparison: "Larger than dinner plates",
        evolution: "Evolved for detecting predators and prey in darkness"
    },

    mythologyHistory: {
        kraken: "Inspired Norwegian kraken legends",
        literaure: "Featured in 20,000 Leagues Under the Sea",
        firstSpecimen: "First complete specimen found in 2007",
        documentary: "First live footage captured in 2012",
        mystery: "Remained mythical until recent scientific discoveries"
    },

    spermWhaleRelation: {
        predator: "Primary predator of giant squid",
        evidence: "Squid beaks found in whale stomachs",
        battles: "Epic underwater battles between giants",
        scars: "Circular scars on whales from squid suckers",
        coevolution: "Both species evolved in response to each other"
    },

    ecologicalRole: [
        "Top predator in deep-sea food webs",
        "Important prey for sperm whales",
        "Controls populations of deep-sea fish",
        "Transfers nutrients between ocean layers",
        "Key component of deep-sea ecosystems"
    ],

    research: {
        discovery: "First live specimen filmed in natural habitat in 2012",
        behavior: "Studying hunting and feeding behaviors",
        genetics: "Understanding population genetics and taxonomy",
        ecology: "Role in deep-sea ecosystem dynamics",
        evolution: "Evolutionary relationship with other giant cephalopods"
    },

    colossal: {
        comparison: "Colossal squid (Mesonychoteuthis hamiltoni) may be larger",
        differences: "Colossal squid has rotating hooks instead of suckers",
        habitat: "Colossal squid lives in Antarctic waters",
        discovery: "Colossal squid discovered more recently",
        mystery: "Both species remain poorly understood"
    },

    tentacleFeatures: {
        clubs: "Expanded clubs at tentacle tips",
        suckers: "Large suckers with sharp-toothed rings",
        reach: "Can extend tentacles rapidly to capture prey",
        strength: "Powerful enough to damage research equipment",
        regeneration: "Can regenerate lost tentacle portions"
    },

    interestingFacts: [
        "Has the largest eyes of any animal - size of dinner plates",
        "Can grow longer than a school bus",
        "Brain is donut-shaped and surrounds its esophagus",
        "Three hearts pump blue copper-based blood",
        "Can change color instantly for camouflage",
        "Remained mythical until first live footage in 2012",
        "Inspired countless sea monster legends",
        "Their battles with sperm whales are legendary"
    ],

    culturalImpact: [
        "Central figure in maritime mythology and literature",
        "Featured prominently in popular media and documentaries",
        "Symbol of ocean mystery and exploration",
        "Important in marine biology education",
        "Conservation icon for deep-sea protection"
    ]
};

const GiantSquid = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % giantSquid.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + giantSquid.imageUrls.length) % giantSquid.imageUrls.length);
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
                                    <li><strong>Length:</strong> {giantSquid.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {giantSquid.physicalCharacteristics.weight}</li>
                                    <li><strong>Mantle Length:</strong> {giantSquid.physicalCharacteristics.mantleLength}</li>
                                    <li><strong>Arms:</strong> {giantSquid.physicalCharacteristics.arms}</li>
                                    <li><strong>Tentacles:</strong> {giantSquid.physicalCharacteristics.tentacles}</li>
                                </ul>
                                <p className="mt-4 text-gray-300">{giantSquid.physicalCharacteristics.description}</p>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-red-400 mb-4">Legendary Facts</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {giantSquid.interestingFacts.slice(0, 6).map((fact, index) => (
                                        <li key={index}>{fact}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            
            case 'anatomy':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-cyan-400 mb-4">Remarkable Anatomy</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Object.entries(giantSquid.anatomy).map(([part, description]) => (
                                    <div key={part} className="bg-cyan-900 p-4 rounded-lg">
                                        <h4 className="font-semibold text-cyan-300 mb-2 capitalize">{part}</h4>
                                        <p className="text-cyan-200 text-sm">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-yellow-400 mb-4">Massive Eyes</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Object.entries(giantSquid.massiveEyes).map(([aspect, description]) => (
                                    <div key={aspect} className="bg-yellow-900 p-4 rounded-lg">
                                        <h4 className="font-semibold text-yellow-300 mb-2 capitalize">{aspect.replace(/([A-Z])/g, ' $1')}</h4>
                                        <p className="text-yellow-200 text-sm">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-green-400 mb-4">Tentacle Features</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Object.entries(giantSquid.tentacleFeatures).map(([feature, description]) => (
                                    <div key={feature} className="bg-green-900 p-4 rounded-lg">
                                        <h4 className="font-semibold text-green-300 mb-2 capitalize">{feature}</h4>
                                        <p className="text-green-200 text-sm">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            
            case 'predators':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-orange-400 mb-4">Epic Battles with Sperm Whales</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {Object.entries(giantSquid.spermWhaleRelation).map(([aspect, description]) => (
                                    <div key={aspect} className="bg-orange-900 p-4 rounded-lg">
                                        <h4 className="font-semibold text-orange-300 mb-2 capitalize">{aspect.replace(/([A-Z])/g, ' $1')}</h4>
                                        <p className="text-orange-200 text-sm">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-400 mb-4">Colossal Squid Comparison</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {Object.entries(giantSquid.colossal).map(([aspect, description]) => (
                                    <div key={aspect} className="bg-blue-900 p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-300 mb-2 capitalize">{aspect}</h4>
                                        <p className="text-blue-200 text-sm">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-indigo-400 mb-4">Diet & Hunting</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-indigo-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-2"><strong>Type:</strong> {giantSquid.diet.primary}</p>
                                    <p className="text-gray-300 mb-2"><strong>Hunting:</strong> {giantSquid.diet.hunting}</p>
                                    <p className="text-gray-300 mb-3"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {giantSquid.diet.food.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-purple-300 mb-3">Behavior</h4>
                                    {Object.entries(giantSquid.behavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-2">
                                            <p className="text-purple-300 font-medium capitalize">{behavior}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
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
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{giantSquid.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {giantSquid.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {giantSquid.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-pink-400 mb-4">Mythology & History</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Object.entries(giantSquid.mythologyHistory).map(([aspect, description]) => (
                                    <div key={aspect} className="bg-pink-900 p-4 rounded-lg">
                                        <h4 className="font-semibold text-pink-300 mb-2 capitalize">{aspect.replace(/([A-Z])/g, ' $1')}</h4>
                                        <p className="text-pink-200 text-sm">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="bg-blue-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-300 mb-4">Research & Discovery</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {Object.entries(giantSquid.research).map(([field, description]) => (
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
                        src={giantSquid.imageUrls[currentImageIndex]} 
                        alt={giantSquid.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
                        {giantSquid.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-purple-200">
                        {giantSquid.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The legendary kraken of the deep ocean
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {giantSquid.imageUrls.length}
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
                        {Object.entries(giantSquid.classification).map(([key, value]) => (
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
                            id="anatomy" 
                            label="Anatomy & Features" 
                            isActive={activeTab === 'anatomy'} 
                            onClick={setActiveTab} 
                        />
                        <TabButton 
                            id="predators" 
                            label="Predators & Behavior" 
                            isActive={activeTab === 'predators'} 
                            onClick={setActiveTab} 
                        />
                        <TabButton 
                            id="conservation" 
                            label="Conservation & History" 
                            isActive={activeTab === 'conservation'} 
                            onClick={setActiveTab} 
                        />
                    </div>
                    
                    <div className="transition-all duration-300">
                        {renderTabContent()}
                    </div>
                </div>
            </div>

            {/* Ecological Role */}
            <div className="fade-section py-20 px-6 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-3xl font-bold text-center mb-8 text-cyan-400">Ecological Role</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {giantSquid.ecologicalRole.map((role, index) => (
                            <div key={index} className="bg-cyan-900 p-6 rounded-lg text-center">
                                <p className="text-cyan-200">{role}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-8 p-6 bg-purple-900 rounded-lg text-center">
                        <h4 className="text-xl font-semibold text-purple-300 mb-3">Ocean's Legendary Giant</h4>
                        <p className="text-purple-200">
                            Giant squid represent one of the ocean's greatest mysteries. These colossal creatures have inspired 
                            countless legends and continue to fascinate scientists and the public alike. Their recent discovery 
                            alive in their natural habitat has revolutionized our understanding of deep-sea ecosystems.
                        </p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-purple-900 to-indigo-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Protecting Ocean's Greatest Mystery</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Giant squid remain one of the least understood creatures on Earth. Protecting their deep-sea habitat 
                        is crucial for maintaining ocean biodiversity and continuing scientific discovery.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-purple-400 mb-3">Deep-Sea Protection</h4>
                            <p className="text-gray-300">Advocate for marine protected areas in deep-sea environments.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-indigo-400 mb-3">Support Research</h4>
                            <p className="text-gray-300">Fund deep-sea exploration and cephalopod research programs.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-cyan-400 mb-3">Reduce Ocean Impact</h4>
                            <p className="text-gray-300">Minimize climate change and pollution affecting deep-sea ecosystems.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiantSquid;
