import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

// Comprehensive Leafy Sea Dragon Data
const leafySeaDragon = {
    name: "Leafy Sea Dragon",
    scientificName: "Phycodurus eques",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Actinopterygii",
        order: "Syngnathiformes",
        family: "Syngnathidae",
        genus: "Phycodurus",
        species: "P. eques"
    },

    imageUrls: ["/imges/leafy_sea_dragon.png", "/imges/coral.png", "/imges/sea_turtle.png"],

    physicalCharacteristics: {
        length: "20-24 cm (8-9.5 inches)",
        weight: "5-10 grams (0.2-0.4 ounces)",
        bodyType: "Elongated, seahorse-like with elaborate appendages",
        camouflage: "Leaf-like appendages that resemble floating seaweed",
        fins: "Small, translucent fins for delicate maneuvering",
        description: "Spectacular marine fish with elaborate leaf-like appendages extending from head, body, and tail. These appendages are not used for propulsion but purely for camouflage, making them appear like floating seaweed."
    },

    habitat: {
        primary: "Southern Australian coastal waters",
        regions: "South Australia, Western Australia, Victoria, Tasmania",
        depth: "3-50 meters (10-165 feet)",
        environment: "Kelp forests, seagrass beds, rocky reefs with algae",
        preferences: "Areas with gentle currents and abundant floating vegetation"
    },

    behavior: {
        movement: "Slow, graceful swimming using tiny fins",
        camouflage: "Masters of disguise, perfectly mimicking drifting seaweed",
        territorial: "Occupy small home ranges",
        social: "Generally solitary except during breeding",
        feeding: "Ambush predators with precise suction feeding"
    },

    diet: {
        primary: "Carnivorous",
        prey: ["Mysid shrimp", "Fish larvae", "Amphipods", "Other small crustaceans", "Zooplankton"],
        huntingMethod: "Suction feeding - rapidly expanding mouth to vacuum prey",
        feedingBehavior: "Patient ambush predators that strike with lightning speed"
    },

    reproduction: {
        uniqueFeature: "Males carry and incubate eggs",
        breeding: "Elaborate courtship dances in shallow waters",
        season: "Spring and summer (September to February)",
        eggs: "150-300 eggs carried by male for 6-8 weeks",
        parentalCare: "Exclusive male parental care until hatching"
    },

    lifespan: "5-6 years in the wild",

    conservationStatus: "Near Threatened",

    threats: [
        "Habitat destruction from coastal development",
        "Water pollution and agricultural runoff",
        "Climate change affecting kelp forest ecosystems",
        "Illegal collection for aquarium trade",
        "Boat anchors and fishing gear damage to habitat"
    ],

    adaptations: [
        "Perfect camouflage appendages for avoiding predators",
        "Tube-like snout for precision suction feeding",
        "Prehensile tail for grasping vegetation",
        "Extremely slow movement to avoid detection",
        "Male brooding for protecting offspring"
    ],

    uniqueCharacteristics: [
        "Only found in Australian waters - endemic species",
        "Cannot curl their tail like seahorses",
        "Have no stomach - food passes directly through digestive system",
        "Leaf-like appendages are permanent - they don't shed or regrow",
        "One of the most elaborately camouflaged fish in the ocean"
    ],

    culturalSignificance: [
        "State marine emblem of South Australia",
        "Icon of Australian marine biodiversity",
        "Popular subject for underwater photographers",
        "Symbol of delicate ocean ecosystems",
        "Featured in marine education programs worldwide"
    ],

    ecosystem: {
        role: "Small predator controlling zooplankton populations",
        relationships: "Prey for larger fish, rays, and crustaceans",
        habitat_dependency: "Completely dependent on healthy kelp forest ecosystems",
        indicator: "Excellent indicator species for coastal water quality"
    },

    conservationEfforts: [
        "Protected under Australian law - illegal to collect",
        "Marine protected areas in key habitats",
        "Research programs monitoring populations",
        "Public education and awareness campaigns",
        "Habitat restoration projects in degraded areas"
    ],

    researchSignificance: [
        "Study of extreme camouflage evolution",
        "Understanding of male pregnancy in fish",
        "Climate change impact research on kelp forests",
        "Biomimetics for robotics and camouflage technology",
        "Marine ecosystem health monitoring"
    ],

    relationToSeahorses: {
        similarities: ["Male pregnancy", "Tube snout", "Slow movement", "Same family"],
        differences: ["Cannot grasp with tail", "More elaborate appendages", "Different swimming style", "Larger size"],
        evolution: "Diverged from seahorse lineage approximately 25 million years ago"
    },

    interestingFacts: [
        "Their leaf-like appendages are purely decorative - not functional fins",
        "They can change color slightly to better match their surroundings",
        "Males create a special brood patch on their tail to carry eggs",
        "They have excellent eyesight and can move eyes independently",
        "Young dragons look exactly like miniature adults when they hatch"
    ]
};

const LeafySeaDragon = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % leafySeaDragon.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + leafySeaDragon.imageUrls.length) % leafySeaDragon.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-green-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-green-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {leafySeaDragon.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {leafySeaDragon.physicalCharacteristics.weight}</li>
                                    <li><strong>Body Type:</strong> {leafySeaDragon.physicalCharacteristics.bodyType}</li>
                                    <li><strong>Special Feature:</strong> {leafySeaDragon.physicalCharacteristics.camouflage}</li>
                                </ul>
                                <p className="mt-4 text-gray-300">{leafySeaDragon.physicalCharacteristics.description}</p>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-400 mb-4">Habitat</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Primary:</strong> {leafySeaDragon.habitat.primary}</li>
                                    <li><strong>Regions:</strong> {leafySeaDragon.habitat.regions}</li>
                                    <li><strong>Depth:</strong> {leafySeaDragon.habitat.depth}</li>
                                    <li><strong>Environment:</strong> {leafySeaDragon.habitat.environment}</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-yellow-400 mb-4">Unique Characteristics</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {leafySeaDragon.uniqueCharacteristics.map((characteristic, index) => (
                                    <li key={index}>{characteristic}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );
            
            case 'behavior':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-purple-400 mb-4">Behavior & Diet</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-purple-300 mb-3">Behavior</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li><strong>Movement:</strong> {leafySeaDragon.behavior.movement}</li>
                                        <li><strong>Camouflage:</strong> {leafySeaDragon.behavior.camouflage}</li>
                                        <li><strong>Territory:</strong> {leafySeaDragon.behavior.territorial}</li>
                                        <li><strong>Social:</strong> {leafySeaDragon.behavior.social}</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-green-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {leafySeaDragon.diet.primary}</p>
                                    <p className="text-gray-300 mb-2"><strong>Prey:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {leafySeaDragon.diet.prey.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p className="text-gray-300 mt-3"><strong>Method:</strong> {leafySeaDragon.diet.huntingMethod}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-pink-400 mb-4">Reproduction</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2 text-gray-300">
                                    <p><strong>Unique Feature:</strong> {leafySeaDragon.reproduction.uniqueFeature}</p>
                                    <p><strong>Breeding:</strong> {leafySeaDragon.reproduction.breeding}</p>
                                    <p><strong>Season:</strong> {leafySeaDragon.reproduction.season}</p>
                                </div>
                                <div className="space-y-2 text-gray-300">
                                    <p><strong>Eggs:</strong> {leafySeaDragon.reproduction.eggs}</p>
                                    <p><strong>Parental Care:</strong> {leafySeaDragon.reproduction.parentalCare}</p>
                                    <p><strong>Lifespan:</strong> {leafySeaDragon.lifespan}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            
            case 'seahorse':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-cyan-400 mb-4">Relationship to Seahorses</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-green-300 mb-3">Similarities</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                                        {leafySeaDragon.relationToSeahorses.similarities.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Differences</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                                        {leafySeaDragon.relationToSeahorses.differences.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-blue-900 rounded-lg">
                                <p className="text-blue-200">
                                    <strong>Evolution:</strong> {leafySeaDragon.relationToSeahorses.evolution}
                                </p>
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-yellow-400 mb-4">Interesting Facts</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {leafySeaDragon.interestingFacts.map((fact, index) => (
                                    <li key={index}>{fact}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );
            
            case 'conservation':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-red-400 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{leafySeaDragon.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Major Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {leafySeaDragon.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-green-300 mb-3">Conservation Efforts</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {leafySeaDragon.conservationEfforts.map((effort, index) => (
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={leafySeaDragon.imageUrls[currentImageIndex]} 
                        alt={leafySeaDragon.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        {leafySeaDragon.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-green-200">
                        {leafySeaDragon.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Australia's living seaweed - the ultimate camouflage master
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {leafySeaDragon.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(leafySeaDragon.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-green-300 mb-2 capitalize">{key}</h3>
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
                            id="seahorse" 
                            label="Seahorse Connection" 
                            isActive={activeTab === 'seahorse'} 
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
                            <h3 className="text-3xl font-bold text-emerald-400 mb-6">Cultural Significance</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {leafySeaDragon.culturalSignificance.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            
                            <h4 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">Ecological Role</h4>
                            <div className="space-y-2 text-gray-300">
                                <p><strong>Role:</strong> {leafySeaDragon.ecosystem.role}</p>
                                <p><strong>Relationships:</strong> {leafySeaDragon.ecosystem.relationships}</p>
                                <p><strong>Dependency:</strong> {leafySeaDragon.ecosystem.habitat_dependency}</p>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-3xl font-bold text-yellow-400 mb-6">Research Value</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {leafySeaDragon.researchSignificance.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            
                            <div className="mt-6 p-4 bg-green-900 rounded-lg">
                                <h4 className="text-lg font-semibold text-green-300 mb-2">Protected Species</h4>
                                <p className="text-green-200 text-sm">
                                    Leafy sea dragons are fully protected under Australian law. It is illegal to collect, 
                                    disturb, or harm these creatures. They are also protected under international trade agreements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-green-900 to-emerald-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Protecting Australia's Marine Jewel</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Leafy sea dragons are found nowhere else on Earth except in Australian waters. 
                        These magical creatures need our help to survive climate change and coastal development.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-green-400 mb-3">Habitat Protection</h4>
                            <p className="text-gray-300">Support marine protected areas and kelp forest conservation in southern Australia.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-blue-400 mb-3">Water Quality</h4>
                            <p className="text-gray-300">Reduce pollution and runoff that damages their delicate coastal habitats.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-yellow-400 mb-3">Climate Action</h4>
                            <p className="text-gray-300">Combat climate change to preserve kelp forests and cold-water habitats.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeafySeaDragon;
