import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

// Comprehensive Sea Turtle Data
const seaTurtle = {
    name: "Sea Turtle",
    scientificName: "Cheloniidae & Dermochelyidae",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Reptilia",
        order: "Testudines",
        families: "Cheloniidae (hard-shell), Dermochelyidae (soft-shell)",
        species: "7 species worldwide",
        examples: "Green, Hawksbill, Loggerhead, Leatherback, Olive Ridley, Kemp's Ridley, Flatback"
    },

    imageUrls: ["/imges/sea_turtle.png", "/imges/HawksbillTurtle.jpg", "/imges/coral.png"],

    physicalCharacteristics: {
        length: "0.6-2.2 m (2-7 feet) depending on species",
        weight: "35-700 kg (77-1,540 lbs) depending on species",
        bodyType: "Streamlined body with protective shell (carapace)",
        flippers: "Four paddle-like flippers adapted for swimming",
        shell: "Bony or leathery carapace for protection",
        description: "Ancient marine reptiles with shells adapted for oceanic life. Front flippers are larger than rear for powerful swimming strokes."
    },

    habitat: {
        primary: "Tropical and subtropical oceans worldwide",
        regions: "Atlantic, Pacific, Indian Oceans and Mediterranean Sea",
        nestingBeaches: "Sandy beaches in warm climates",
        feedingAreas: "Coral reefs, seagrass beds, open ocean",
        migration: "Epic migrations between feeding and nesting areas"
    },

    behavior: {
        migration: "Navigate thousands of miles using magnetic fields",
        nesting: "Females return to natal beaches to lay eggs",
        diving: "Can dive to depths of 1,000+ meters",
        navigation: "Use Earth's magnetic field, stars, and ocean currents",
        social: "Generally solitary except during mating"
    },

    diet: {
        variation: "Varies greatly by species",
        green: "Herbivorous - seagrass and algae",
        hawksbill: "Spongivorous - primarily sponges",
        loggerhead: "Carnivorous - crabs, mollusks, jellyfish",
        leatherback: "Jellyfish specialist",
        ridleys: "Omnivorous - crabs, fish, plants"
    },

    reproduction: {
        maturity: "15-50 years depending on species",
        nesting: "Every 2-7 years, multiple nests per season",
        eggs: "50-200 eggs per nest",
        incubation: "45-75 days depending on temperature",
        sexDetermination: "Temperature-dependent - warmer = more females",
        hatchlings: "Navigate to ocean using light cues"
    },

    lifespan: "50-100+ years",

    conservationStatus: "Critically Endangered to Vulnerable (varies by species)",

    species: {
        green: {
            size: "1.5 m, 200 kg",
            diet: "Seagrass and algae",
            status: "Endangered",
            habitat: "Coastal waters, seagrass beds"
        },
        hawksbill: {
            size: "1 m, 80 kg", 
            diet: "Sponges",
            status: "Critically Endangered",
            habitat: "Coral reefs"
        },
        loggerhead: {
            size: "1.2 m, 135 kg",
            diet: "Crabs, mollusks",
            status: "Vulnerable",
            habitat: "Continental shelves"
        },
        leatherback: {
            size: "2.2 m, 700 kg",
            diet: "Jellyfish",
            status: "Vulnerable", 
            habitat: "Open ocean"
        }
    },

    threats: [
        "Plastic pollution and marine debris",
        "Climate change affecting nesting beaches",
        "Coastal development destroying nesting sites",
        "Fishing bycatch in nets and longlines",
        "Poaching for shells, meat, and eggs",
        "Light pollution disrupting hatchling navigation",
        "Boat strikes"
    ],

    adaptations: [
        "Streamlined shell for efficient swimming",
        "Salt glands to excrete excess salt",
        "Magnetic navigation system",
        "Temperature-dependent sex determination",
        "Ability to hold breath for hours while sleeping",
        "Powerful flippers for long-distance swimming"
    ],

    lifecycle: {
        hatchling: "2-5 cm, vulnerable to predators",
        juvenile: "Live in open ocean 'lost years'",
        subadult: "Return to coastal feeding areas",
        adult: "Mature and begin reproduction cycle"
    },

    culturalSignificance: [
        "Sacred animals in many Pacific cultures",
        "Symbol of longevity and wisdom",
        "Important in marine ecosystem health",
        "Flagship species for ocean conservation",
        "Traditional food source (now protected)"
    ],

    ecosystem: {
        role: "Keystone species maintaining marine ecosystem balance",
        seagrass: "Green turtles maintain seagrass bed health",
        reefs: "Hawksbills control sponge populations on reefs",
        beaches: "Nesting provides nutrients to coastal vegetation",
        indicator: "Health indicators for marine ecosystems"
    },

    conservationEfforts: [
        "Protected nesting beaches worldwide",
        "Turtle Excluder Devices (TEDs) in fishing nets",
        "International trade bans (CITES)",
        "Satellite tracking for migration research",
        "Community-based conservation programs",
        "Plastic reduction initiatives"
    ],

    researchSignificance: [
        "Climate change impact studies",
        "Navigation and migration research",
        "Marine ecosystem health monitoring",
        "Longevity and aging research",
        "Ocean current and temperature studies"
    ],

    navigationMystery: [
        "Use Earth's magnetic field as compass",
        "Detect magnetic signatures of home beaches",
        "Navigate by star patterns and sun position",
        "Follow ocean current patterns",
        "Chemical cues from water masses"
    ],

    interestingFacts: [
        "Can live longer than humans",
        "Have existed for over 100 million years",
        "Temperature of nest determines gender of babies",
        "Some species can dive deeper than sperm whales",
        "Navigate using the same beaches for decades",
        "Baby turtles have a built-in compass"
    ]
};

const SeaTurtle = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % seaTurtle.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + seaTurtle.imageUrls.length) % seaTurtle.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-teal-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-teal-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {seaTurtle.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {seaTurtle.physicalCharacteristics.weight}</li>
                                    <li><strong>Body Type:</strong> {seaTurtle.physicalCharacteristics.bodyType}</li>
                                    <li><strong>Flippers:</strong> {seaTurtle.physicalCharacteristics.flippers}</li>
                                </ul>
                                <p className="mt-4 text-gray-300">{seaTurtle.physicalCharacteristics.description}</p>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-400 mb-4">Fascinating Facts</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {seaTurtle.interestingFacts.map((fact, index) => (
                                        <li key={index}>{fact}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            
            case 'species':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-green-400 mb-4">Sea Turtle Species</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {Object.entries(seaTurtle.species).map(([species, details]) => (
                                    <div key={species} className="bg-gray-700 p-4 rounded-lg">
                                        <h4 className="font-semibold text-green-300 mb-3 capitalize">{species} Turtle</h4>
                                        <div className="space-y-2 text-gray-300 text-sm">
                                            <p><strong>Size:</strong> {details.size}</p>
                                            <p><strong>Diet:</strong> {details.diet}</p>
                                            <p><strong>Status:</strong> <span className="text-red-300">{details.status}</span></p>
                                            <p><strong>Habitat:</strong> {details.habitat}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-purple-400 mb-4">Life Cycle</h3>
                            <div className="grid md:grid-cols-4 gap-4">
                                {Object.entries(seaTurtle.lifecycle).map(([stage, description]) => (
                                    <div key={stage} className="bg-gray-700 p-4 rounded-lg text-center">
                                        <h4 className="font-semibold text-purple-300 mb-2 capitalize">{stage}</h4>
                                        <p className="text-gray-300 text-sm">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            
            case 'behavior':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-cyan-400 mb-4">Navigation & Migration</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-cyan-300 mb-3">Navigation Methods</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                                        {seaTurtle.navigationMystery.map((method, index) => (
                                            <li key={index}>{method}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-yellow-300 mb-3">Behavior</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li><strong>Migration:</strong> {seaTurtle.behavior.migration}</li>
                                        <li><strong>Nesting:</strong> {seaTurtle.behavior.nesting}</li>
                                        <li><strong>Diving:</strong> {seaTurtle.behavior.diving}</li>
                                        <li><strong>Social:</strong> {seaTurtle.behavior.social}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-pink-400 mb-4">Reproduction</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2 text-gray-300">
                                    <p><strong>Maturity:</strong> {seaTurtle.reproduction.maturity}</p>
                                    <p><strong>Nesting Frequency:</strong> {seaTurtle.reproduction.nesting}</p>
                                    <p><strong>Eggs per Nest:</strong> {seaTurtle.reproduction.eggs}</p>
                                </div>
                                <div className="space-y-2 text-gray-300">
                                    <p><strong>Incubation:</strong> {seaTurtle.reproduction.incubation}</p>
                                    <p><strong>Sex Determination:</strong> {seaTurtle.reproduction.sexDetermination}</p>
                                    <p><strong>Lifespan:</strong> {seaTurtle.lifespan}</p>
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
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{seaTurtle.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Major Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {seaTurtle.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-green-300 mb-3">Conservation Efforts</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {seaTurtle.conservationEfforts.map((effort, index) => (
                                            <li key={index}>{effort}</li>
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-teal-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={seaTurtle.imageUrls[currentImageIndex]} 
                        alt={seaTurtle.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                        {seaTurtle.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-teal-200">
                        {seaTurtle.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Ancient ocean navigators with built-in compasses
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {seaTurtle.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(seaTurtle.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-teal-300 mb-2 capitalize">{key}</h3>
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
                            id="species" 
                            label="Species & Life Cycle" 
                            isActive={activeTab === 'species'} 
                            onClick={setActiveTab} 
                        />
                        <TabButton 
                            id="behavior" 
                            label="Navigation & Behavior" 
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

            {/* Ecological Role & Cultural Significance */}
            <div className="fade-section py-20 px-6 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-3xl font-bold text-emerald-400 mb-6">Ecological Role</h3>
                            <div className="space-y-4 text-gray-300">
                                <p><strong>Keystone Species:</strong> {seaTurtle.ecosystem.role}</p>
                                <p><strong>Seagrass Maintenance:</strong> {seaTurtle.ecosystem.seagrass}</p>
                                <p><strong>Reef Health:</strong> {seaTurtle.ecosystem.reefs}</p>
                                <p><strong>Beach Ecosystems:</strong> {seaTurtle.ecosystem.beaches}</p>
                            </div>
                            
                            <h4 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">Research Value</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {seaTurtle.researchSignificance.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-3xl font-bold text-orange-400 mb-6">Cultural Significance</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {seaTurtle.culturalSignificance.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            
                            <div className="mt-6 p-4 bg-teal-900 rounded-lg">
                                <h4 className="text-lg font-semibold text-teal-300 mb-2">Ancient Survivors</h4>
                                <p className="text-teal-200 text-sm">
                                    Sea turtles have survived for over 100 million years, outliving the dinosaurs. 
                                    They witnessed the rise and fall of countless species and continue to navigate our oceans 
                                    with the same ancient wisdom.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-teal-900 to-green-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Protecting Ancient Ocean Navigators</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Sea turtles have navigated our oceans for 100 million years. Now they need our help to survive the next century. 
                        Every action we take can help these ancient mariners continue their epic journeys.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-teal-400 mb-3">Reduce Plastic</h4>
                            <p className="text-gray-300">Eliminate single-use plastics - sea turtles mistake plastic bags for jellyfish.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-green-400 mb-3">Protect Beaches</h4>
                            <p className="text-gray-300">Support nesting beach conservation and reduce light pollution near coasts.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-blue-400 mb-3">Choose Sustainable</h4>
                            <p className="text-gray-300">Select turtle-safe seafood and support fishing practices that use turtle excluder devices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeaTurtle;
