import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

// Comprehensive Orca Data
const orca = {
    name: "Orca (Killer Whale)",
    scientificName: "Orcinus orca",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Mammalia",
        order: "Artiodactyla",
        family: "Delphinidae",
        genus: "Orcinus",
        species: "O. orca"
    },

    imageUrls: ["/imges/orca.png", "/imges/dolphin.png", "/imges/Sperm Whale.png"],

    physicalCharacteristics: {
        length: "Males: 6-8 m (20-26 ft), Females: 5-7 m (16-23 ft)",
        weight: "Males: 6,000-8,000 kg (13,000-18,000 lbs), Females: 3,000-5,000 kg (6,600-11,000 lbs)",
        bodyType: "Robust, streamlined body with distinctive black and white coloration",
        dorsalFin: "Males: up to 1.8 m (6 ft) tall, Females: up to 0.9 m (3 ft) tall",
        distinguishingFeatures: "White eye patches, white chest and belly, prominent dorsal fin",
        description: "Largest members of the dolphin family with distinctive black and white coloration. Males are significantly larger than females with much taller dorsal fins."
    },

    habitat: {
        primary: "All oceans worldwide",
        regions: "Arctic to Antarctic, most abundant in cooler waters",
        depth: "Surface to 200+ meters, occasionally to 1,000 meters",
        environment: "Open ocean, coastal waters, fjords, bays",
        preferences: "Cold, nutrient-rich waters with abundant prey"
    },

    behavior: {
        social: "Highly social, live in matrilineal pods of 5-30 individuals",
        intelligence: "Extreme intelligence with complex communication and culture",
        hunting: "Cooperative hunting strategies unique to each population",
        communication: "Sophisticated vocal repertoire including clicks, whistles, and calls",
        echolocation: "Advanced biosonar for navigation and hunting"
    },

    diet: {
        primary: "Carnivorous apex predator",
        prey: ["Fish (salmon, tuna, herring)", "Marine mammals (seals, whales)", "Squid", "Rays", "Sharks"],
        huntingStrategies: ["Wave washing seals off ice", "Cooperative herding", "Beach rubbing", "Carousel feeding"],
        dailyIntake: "375-500 kg (825-1,100 lbs) of food per day"
    },

    reproduction: {
        maturity: "Females: 10-16 years, Males: 12-16 years",
        gestation: "15-18 months",
        birthInterval: "3-10 years between calves",
        calfSize: "2.4 m (8 ft) long, 180 kg (400 lbs) at birth",
        nursing: "12-24 months, sometimes longer",
        parentalCare: "Strong mother-calf bonds, lifelong family ties"
    },

    lifespan: "Females: 80-90 years, Males: 50-60 years",

    conservationStatus: "Data Deficient (varies by population)",

    populations: {
        residents: {
            diet: "Fish-eating specialists",
            behavior: "Live in large stable pods",
            range: "Coastal waters",
            example: "Southern Resident Killer Whales (Endangered)"
        },
        transients: {
            diet: "Marine mammal specialists", 
            behavior: "Smaller pods, wider ranging",
            range: "Open ocean and coast",
            example: "Bigg's Killer Whales"
        },
        offshore: {
            diet: "Primarily sharks and fish",
            behavior: "Large pods in open ocean",
            range: "Continental shelf waters",
            example: "North Pacific Offshore Type"
        }
    },

    threats: [
        "Prey depletion (especially salmon)",
        "Chemical pollution and toxins",
        "Vessel noise and disturbance",
        "Oil spills and marine pollution",
        "Climate change affecting prey distribution",
        "Captivity for entertainment industry"
    ],

    adaptations: [
        "Advanced echolocation system",
        "Cooperative hunting strategies",
        "Cultural transmission of knowledge",
        "Thermoregulation in cold waters",
        "Powerful tail fluke for high-speed swimming"
    ],

    intelligence: [
        "Self-recognition in mirrors",
        "Complex social learning and culture",
        "Problem-solving abilities",
        "Sophisticated communication systems",
        "Teaching behaviors to offspring",
        "Use of tools in some populations"
    ],

    culturalSignificance: [
        "Sacred animals in many Pacific Northwest cultures",
        "Symbol of family bonds and intelligence",
        "Important in marine mammal research",
        "Flagship species for ocean conservation",
        "Controversial captivity industry"
    ],

    ecosystem: {
        role: "Apex predator maintaining marine ecosystem balance",
        relationships: "Control populations of seals, fish, and other marine life",
        indicator: "Health indicator for marine ecosystems",
        culturalTransmission: "Pass hunting techniques through generations"
    },

    vocalizations: {
        clicks: "Echolocation for navigation and hunting",
        whistles: "Contact calls between individuals",
        calls: "Group-specific dialects passed down matrilineally",
        pulsedCalls: "Social communication within pods"
    },

    researchSignificance: [
        "Study of marine mammal intelligence",
        "Understanding of echolocation",
        "Social structure and culture research",
        "Climate change impact studies",
        "Marine ecosystem health monitoring"
    ],

    captivityIssues: [
        "Drastically reduced lifespan in captivity",
        "Psychological stress and abnormal behaviors",
        "Family separation trauma",
        "Physical health problems",
        "Ethical concerns about entertainment use"
    ]
};

const Orca = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % orca.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + orca.imageUrls.length) % orca.imageUrls.length);
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
                                    <li><strong>Length:</strong> {orca.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {orca.physicalCharacteristics.weight}</li>
                                    <li><strong>Dorsal Fin:</strong> {orca.physicalCharacteristics.dorsalFin}</li>
                                    <li><strong>Features:</strong> {orca.physicalCharacteristics.distinguishingFeatures}</li>
                                </ul>
                                <p className="mt-4 text-gray-300">{orca.physicalCharacteristics.description}</p>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-400 mb-4">Intelligence & Behavior</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {orca.intelligence.map((trait, index) => (
                                        <li key={index}>{trait}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            
            case 'populations':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-purple-400 mb-4">Orca Populations</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {Object.entries(orca.populations).map(([type, details]) => (
                                    <div key={type} className="bg-gray-700 p-4 rounded-lg">
                                        <h4 className="font-semibold text-purple-300 mb-3 capitalize">{type}</h4>
                                        <div className="space-y-2 text-gray-300 text-sm">
                                            <p><strong>Diet:</strong> {details.diet}</p>
                                            <p><strong>Behavior:</strong> {details.behavior}</p>
                                            <p><strong>Range:</strong> {details.range}</p>
                                            <p><strong>Example:</strong> {details.example}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-cyan-400 mb-4">Communication</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {Object.entries(orca.vocalizations).map(([type, description]) => (
                                    <div key={type} className="space-y-2">
                                        <h4 className="font-semibold text-cyan-300 capitalize">{type}</h4>
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
                            <h3 className="text-xl font-bold text-green-400 mb-4">Hunting & Diet</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-green-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {orca.diet.primary}</p>
                                    <p className="text-gray-300 mb-2"><strong>Prey:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {orca.diet.prey.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p className="text-gray-300 mt-3"><strong>Daily Intake:</strong> {orca.diet.dailyIntake}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-yellow-300 mb-3">Hunting Strategies</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                                        {orca.diet.huntingStrategies.map((strategy, index) => (
                                            <li key={index}>{strategy}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-pink-400 mb-4">Reproduction & Family</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2 text-gray-300">
                                    <p><strong>Maturity:</strong> {orca.reproduction.maturity}</p>
                                    <p><strong>Gestation:</strong> {orca.reproduction.gestation}</p>
                                    <p><strong>Birth Interval:</strong> {orca.reproduction.birthInterval}</p>
                                </div>
                                <div className="space-y-2 text-gray-300">
                                    <p><strong>Calf Size:</strong> {orca.reproduction.calfSize}</p>
                                    <p><strong>Nursing:</strong> {orca.reproduction.nursing}</p>
                                    <p><strong>Lifespan:</strong> {orca.lifespan}</p>
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
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{orca.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Major Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {orca.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Key Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {orca.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-red-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-red-300 mb-4">Captivity Concerns</h3>
                            <ul className="list-disc list-inside text-red-200 space-y-2">
                                {orca.captivityIssues.map((issue, index) => (
                                    <li key={index}>{issue}</li>
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={orca.imageUrls[currentImageIndex]} 
                        alt={orca.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        {orca.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-indigo-200">
                        {orca.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The ocean's apex predator with unmatched intelligence
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {orca.imageUrls.length}
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
                        {Object.entries(orca.classification).map(([key, value]) => (
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
                            id="populations" 
                            label="Populations & Communication" 
                            isActive={activeTab === 'populations'} 
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

            {/* Cultural & Research Significance */}
            <div className="fade-section py-20 px-6 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-3xl font-bold text-purple-400 mb-6">Cultural Significance</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {orca.culturalSignificance.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            
                            <h4 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">Ecological Role</h4>
                            <div className="space-y-2 text-gray-300">
                                <p><strong>Role:</strong> {orca.ecosystem.role}</p>
                                <p><strong>Relationships:</strong> {orca.ecosystem.relationships}</p>
                                <p><strong>Cultural Transmission:</strong> {orca.ecosystem.culturalTransmission}</p>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-3xl font-bold text-yellow-400 mb-6">Research Value</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {orca.researchSignificance.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-indigo-900 to-purple-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Protecting the Ocean's Apex Intelligence</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Orcas represent the pinnacle of marine intelligence and family bonds. These magnificent creatures face unprecedented threats and need our immediate protection.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-indigo-400 mb-3">End Captivity</h4>
                            <p className="text-gray-300">Support ending orca captivity for entertainment and transitioning to seaside sanctuaries.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-purple-400 mb-3">Protect Salmon</h4>
                            <p className="text-gray-300">Support salmon recovery efforts - their primary food source is critical for survival.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-cyan-400 mb-3">Reduce Noise</h4>
                            <p className="text-gray-300">Advocate for quieter ships and whale-safe shipping routes to protect their communication.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orca;
