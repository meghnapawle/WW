import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

// Comprehensive Great White Shark Data
const greatWhiteShark = {
    name: "Great White Shark",
    scientificName: "Carcharodon carcharias",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Chondrichthyes",
        order: "Lamniformes",
        family: "Lamnidae",
        genus: "Carcharodon",
        species: "C. carcharias"
    },

    imageUrls: ["/imges/White_shark.webp", "/imges/shark.png", "/imges/deep_sea.jpg"],

    physicalCharacteristics: {
        length: "3.4 - 6.1 meters (11 - 20 feet), occasionally larger",
        weight: "680 - 1,100 kg (1,500 - 2,400 lbs), up to 2,268 kg (5,000 lbs)",
        bodyType: "Torpedo-shaped, robust, powerful build",
        teeth: "Triangular, serrated, up to 300 teeth in multiple rows",
        coloration: "Countershaded - dark grey above, white below",
        description: "Apex predator with powerful jaws, keen senses, and perfectly adapted hunting physiology."
    },

    habitat: {
        primary: "Coastal and offshore waters in temperate and subtropical regions",
        regions: "Found in all major oceans except Arctic and Antarctic",
        depth: "Surface to 1,200 meters (3,900 feet)",
        temperature: "12-24°C (54-75°F) preferred range",
        preferences: "Continental shelves, seal colonies, upwelling areas"
    },

    behavior: {
        hunting: "Ambush predator with burst-speed attacks",
        migration: "Long-distance migrations following prey and temperature",
        social: "Generally solitary, occasional loose aggregations",
        breaching: "Spectacular breaching behavior when hunting seals",
        territory: "Large home ranges, some site fidelity"
    },

    diet: {
        primary: "Carnivorous apex predator",
        adultDiet: ["Marine mammals (seals, sea lions)", "Large fish (tuna, other sharks)", "Sea turtles", "Dolphins", "Whale carcasses"],
        juvenileDiet: ["Fish", "Rays", "Smaller sharks", "Squid"],
        huntingStrategy: "Surprise attacks from below, powerful bite-and-release",
        metabolism: "Can go weeks without feeding after large meal"
    },

    reproduction: {
        maturity: "Males: 26 years, Females: 33 years",
        mating: "Internal fertilization, ovoviviparous",
        gestation: "11 months",
        litter: "2-10 pups, average 3-4",
        birthSize: "1.2-1.5 meters (4-5 feet)",
        nurseryAreas: "Warm, shallow coastal waters"
    },

    lifespan: "70+ years (some estimates suggest over 100 years)",

    conservationStatus: "Vulnerable (IUCN Red List)",

    senses: {
        electroreception: "Ampullae of Lorenzini detect electrical fields",
        smell: "Can detect blood at parts per billion",
        vision: "Excellent eyesight, can see in color",
        lateralLine: "Detects water movement and pressure changes",
        hearing: "Sensitive to low-frequency sounds"
    },

    threats: [
        "Overfishing and bycatch in commercial fisheries",
        "Targeted hunting for fins, jaws, and teeth",
        "Habitat degradation and coastal development",
        "Climate change affecting prey distribution",
        "Pollution including plastics and chemicals",
        "Boat strikes and fishing gear entanglement"
    ],

    adaptations: [
        "Counter-current heat exchange system (warm-blooded regions)",
        "Nictitating membranes protect eyes during attacks",
        "Replaceable teeth throughout lifetime",
        "Powerful jaw muscles with bite force up to 18,000 Newtons",
        "Efficient gill system for continuous swimming",
        "Acute sensory systems for hunting"
    ],

    migrationPatterns: {
        cafe: {
            location: "North Pacific 'White Shark Café'",
            behavior: "Deep diving behavior, feeding on deep-sea squid",
            significance: "Important foraging area between coastal regions"
        },
        australianPopulation: {
            location: "Australia to New Zealand",
            behavior: "Seasonal movements following food sources",
            tracking: "Satellite tagging reveals complex patterns"
        },
        mediterraneanPopulation: {
            location: "Mediterranean Sea",
            status: "Critically endangered regional population",
            conservation: "Special protection needed"
        }
    },

    ecologicalRole: [
        "Apex predator maintaining marine ecosystem balance",
        "Controls populations of marine mammals and large fish",
        "Removes weak and sick individuals from prey populations",
        "Influences prey behavior and distribution patterns",
        "Indicator species for ocean health"
    ],

    research: {
        tracking: "Satellite and acoustic tagging reveal migration patterns",
        genetics: "Population genetics inform conservation strategies",
        physiology: "Study of thermoregulation and metabolism",
        behavior: "Understanding hunting and social behaviors",
        conservation: "Population assessments and protection measures"
    },

    culturalImpact: [
        "Featured prominently in media and popular culture",
        "Important in marine ecotourism (cage diving)",
        "Symbol of ocean power and conservation",
        "Educational ambassador for shark conservation",
        "Traditional importance to indigenous cultures"
    ],

    anatomicalFeatures: {
        teeth: "Continuously replaced, up to 35,000 in lifetime",
        liver: "Large oil-filled liver provides buoyancy",
        gills: "Five gill slits for efficient oxygen extraction",
        skin: "Dermal denticles reduce drag and prevent bacterial growth",
        skeleton: "Cartilaginous skeleton, lighter than bone"
    },

    huntingBehavior: {
        ambushAttack: "Attack from below using countershading camouflage",
        investigatory: "Use mouth to investigate potential prey",
        biteAndRelease: "Often release prey and wait for it to weaken",
        breaching: "Launch completely out of water when attacking seals",
        persistence: "Can track wounded prey over long distances"
    },

    globalPopulations: {
        northeastPacific: {
            status: "Stable but declining",
            population: "Estimated 2,000-3,000 individuals",
            threats: "Bycatch, habitat loss"
        },
        southAfrica: {
            status: "Declining",
            population: "Unknown, significant decreases observed",
            threats: "Orca predation, fishing pressure"
        },
        mediterranean: {
            status: "Critically endangered",
            population: "Very small, possibly <500 individuals",
            threats: "Overfishing, habitat degradation"
        },
        australia: {
            status: "Stable",
            population: "Estimated 8,000-10,000 individuals",
            conservation: "Protected waters and research programs"
        }
    },

    interestingFacts: [
        "Can detect a single drop of blood in 25 gallons of water",
        "Body temperature can be 14°C warmer than surrounding water",
        "Teeth are continuously replaced throughout their lifetime",
        "Can breach completely out of the water when hunting",
        "Some individuals travel over 12,000 miles annually",
        "Have been around for over 400 million years",
        "Can go without eating for up to 3 months",
        "Their liver can weigh up to 25% of their total body weight"
    ]
};

const GreatWhiteShark = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % greatWhiteShark.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + greatWhiteShark.imageUrls.length) % greatWhiteShark.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-red-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-red-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {greatWhiteShark.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {greatWhiteShark.physicalCharacteristics.weight}</li>
                                    <li><strong>Body Type:</strong> {greatWhiteShark.physicalCharacteristics.bodyType}</li>
                                    <li><strong>Teeth:</strong> {greatWhiteShark.physicalCharacteristics.teeth}</li>
                                    <li><strong>Coloration:</strong> {greatWhiteShark.physicalCharacteristics.coloration}</li>
                                </ul>
                                <p className="mt-4 text-gray-300">{greatWhiteShark.physicalCharacteristics.description}</p>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-yellow-400 mb-4">Incredible Facts</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {greatWhiteShark.interestingFacts.slice(0, 6).map((fact, index) => (
                                        <li key={index}>{fact}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            
            case 'hunting':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-orange-400 mb-4">Hunting & Senses</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-orange-300 mb-3">Hunting Behavior</h4>
                                    {Object.entries(greatWhiteShark.huntingBehavior).map(([behavior, description]) => (
                                        <div key={behavior} className="mb-3">
                                            <p className="text-red-300 font-medium capitalize">{behavior.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-cyan-300 mb-3">Supersenses</h4>
                                    {Object.entries(greatWhiteShark.senses).map(([sense, description]) => (
                                        <div key={sense} className="mb-3">
                                            <p className="text-cyan-300 font-medium capitalize">{sense.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-green-400 mb-4">Diet & Feeding</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-green-300 mb-3">Adult Diet</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                                        {greatWhiteShark.diet.adultDiet.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Juvenile Diet</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                                        {greatWhiteShark.diet.juvenileDiet.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-300"><strong>Strategy:</strong> {greatWhiteShark.diet.huntingStrategy}</p>
                        </div>
                    </div>
                );
            
            case 'populations':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-400 mb-4">Global Populations</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {Object.entries(greatWhiteShark.globalPopulations).map(([region, data]) => (
                                    <div key={region} className="bg-gray-700 p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-300 mb-3 capitalize">{region.replace(/([A-Z])/g, ' $1')}</h4>
                                        <div className="space-y-2 text-gray-300 text-sm">
                                            <p><strong>Status:</strong> {data.status}</p>
                                            <p><strong>Population:</strong> {data.population}</p>
                                            <p><strong>Main Issues:</strong> {data.threats || data.conservation}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-purple-400 mb-4">Migration Patterns</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                {Object.entries(greatWhiteShark.migrationPatterns).map(([pattern, details]) => (
                                    <div key={pattern} className="bg-gradient-to-b from-purple-900 to-indigo-900 p-4 rounded-lg">
                                        <h4 className="font-semibold text-purple-300 mb-2 capitalize">{pattern.replace(/([A-Z])/g, ' $1')}</h4>
                                        <div className="space-y-2 text-purple-200 text-sm">
                                            <p><strong>Location:</strong> {details.location}</p>
                                            <p><strong>Behavior:</strong> {details.behavior}</p>
                                            <p><strong>Significance:</strong> {details.significance || details.tracking || details.conservation}</p>
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
                            <p className="text-xl font-semibold mb-4 text-orange-400">{greatWhiteShark.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Major Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {greatWhiteShark.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Evolutionary Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {greatWhiteShark.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-blue-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-300 mb-4">Research & Conservation</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {Object.entries(greatWhiteShark.research).map(([field, description]) => (
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-red-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={greatWhiteShark.imageUrls[currentImageIndex]} 
                        alt={greatWhiteShark.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                        {greatWhiteShark.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-red-200">
                        {greatWhiteShark.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The ocean's most feared and respected apex predator
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {greatWhiteShark.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-red-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(greatWhiteShark.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-red-300 mb-2 capitalize">{key}</h3>
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
                            id="hunting" 
                            label="Hunting & Senses" 
                            isActive={activeTab === 'hunting'} 
                            onClick={setActiveTab} 
                        />
                        <TabButton 
                            id="populations" 
                            label="Populations & Migration" 
                            isActive={activeTab === 'populations'} 
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

            {/* Ecological Role & Anatomy */}
            <div className="fade-section py-20 px-6 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-3xl font-bold text-yellow-400 mb-6">Ecological Importance</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {greatWhiteShark.ecologicalRole.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                            
                            <h4 className="text-xl font-semibold text-orange-400 mt-6 mb-3">Cultural Impact</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {greatWhiteShark.culturalImpact.map((impact, index) => (
                                    <li key={index}>{impact}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-3xl font-bold text-cyan-400 mb-6">Anatomical Features</h3>
                            {Object.entries(greatWhiteShark.anatomicalFeatures).map(([feature, description]) => (
                                <div key={feature} className="mb-3">
                                    <p className="text-cyan-300 font-medium capitalize">{feature}</p>
                                    <p className="text-gray-300 text-sm ml-4">{description}</p>
                                </div>
                            ))}
                            
                            <div className="mt-6 p-4 bg-red-900 rounded-lg">
                                <h4 className="text-lg font-semibold text-red-300 mb-2">Ancient Predator</h4>
                                <p className="text-red-200 text-sm">
                                    Great whites have remained virtually unchanged for millions of years, representing 
                                    the pinnacle of predatory evolution. Their perfect adaptation to marine hunting 
                                    makes them both fascinating and essential to ocean ecosystems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-red-900 to-orange-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Protecting Ocean's Apex Predators</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Great white sharks are vulnerable despite their fearsome reputation. These apex predators 
                        are essential for healthy marine ecosystems and face numerous human-caused threats.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-red-400 mb-3">Support Shark Conservation</h4>
                            <p className="text-gray-300">Donate to organizations protecting sharks and marine habitats.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-yellow-400 mb-3">Sustainable Seafood</h4>
                            <p className="text-gray-300">Choose sustainably caught seafood to reduce bycatch and overfishing.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-orange-400 mb-3">Educate Others</h4>
                            <p className="text-gray-300">Share knowledge about sharks' ecological importance and conservation needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GreatWhiteShark;
