import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

// Comprehensive Ribbon Eel Data
const ribbonEel = {
    name: "Ribbon Eel",
    scientificName: "Rhinomuraena quaesita",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Actinopterygii",
        order: "Anguilliformes",
        family: "Muraenidae",
        genus: "Rhinomuraena",
        species: "R. quaesita"
    },

    imageUrls: ["/imges/ribbon_eel.png", "/imges/coral.png", "/imges/clownfish.png"],

    physicalCharacteristics: {
        length: "Up to 130 cm (4.3 feet)",
        weight: "200-500 grams (0.4-1.1 pounds)",
        bodyType: "Extremely elongated, ribbon-like body",
        coloration: "Changes with age and sex - black (juvenile), blue and yellow (male), yellow (female)",
        nostrils: "Distinctive leaf-like flared nostrils",
        description: "Spectacular eel with an extremely long, thin body and distinctive coloration patterns that change throughout their life. Males display brilliant blue bodies with bright yellow dorsal fins, while females are entirely yellow."
    },

    habitat: {
        primary: "Tropical Indo-Pacific coral reefs",
        regions: "Indonesia, Philippines, Great Barrier Reef, Red Sea, Maldives",
        depth: "1-60 meters (3-200 feet)",
        environment: "Coral reefs, sandy slopes, rubble areas",
        preferences: "Sandy burrows near coral outcrops with good water flow"
    },

    behavior: {
        lifestyle: "Secretive, burrow-dwelling",
        activity: "Diurnal - active during daylight hours",
        territorial: "Highly territorial, rarely leave their burrow area",
        burrowing: "Live in self-constructed sand burrows",
        feeding: "Ambush predator from burrow entrance"
    },

    diet: {
        primary: "Carnivorous",
        prey: ["Small fish", "Shrimp", "Crabs", "Fish larvae", "Zooplankton"],
        huntingMethod: "Ambush predation from burrow entrance",
        feedingBehavior: "Quick strikes to capture passing prey"
    },

    reproduction: {
        sexualDimorphism: "Pronounced color differences between sexes",
        maturity: "Sexual maturity around 85-100 cm length",
        transformation: "Males can transform into females (protandry)",
        spawning: "Believed to spawn in deep water",
        lifespan: "Unknown in wild, estimated 15-20 years"
    },

    lifespan: "15-20 years (estimated)",

    conservationStatus: "Least Concern (but populations declining)",

    threats: [
        "Coral reef destruction and bleaching",
        "Collection for aquarium trade",
        "Coastal development and pollution",
        "Climate change affecting reef ecosystems",
        "Diving and snorkeling disturbance"
    ],

    adaptations: [
        "Cryptic coloration for camouflage",
        "Burrowing lifestyle for protection",
        "Protandrous hermaphroditism for reproductive flexibility",
        "Sensitive nostrils for detecting chemical cues",
        "Streamlined body for quick retreat into burrows"
    ],

    lifeStages: {
        juvenile: {
            coloration: "Black with yellow dorsal fin",
            behavior: "More secretive, smaller territories",
            size: "20-65 cm"
        },
        male: {
            coloration: "Electric blue body with bright yellow dorsal fin",
            behavior: "Territorial, aggressive to other males",
            size: "65-100 cm"
        },
        female: {
            coloration: "Entirely bright yellow",
            behavior: "Less territorial, focused on reproduction",
            size: "100-130 cm"
        }
    },

    culturalSignificance: [
        "Highly prized in marine aquarium trade",
        "Popular diving attraction in tropical destinations",
        "Symbol of coral reef biodiversity",
        "Featured in underwater photography competitions",
        "Important indicator species for reef health"
    ],

    ecosystem: {
        role: "Mesopredator in coral reef food webs",
        relationships: "Prey for larger fish, sharks, and octopuses",
        habitat_engineering: "Burrow creation affects sediment structure",
        indicator: "Sensitive indicator of coral reef ecosystem health"
    },

    researchSignificance: [
        "Study of sequential hermaphroditism in fish",
        "Coral reef ecosystem health monitoring",
        "Understanding of anguilliform fish behavior",
        "Marine aquaculture research",
        "Climate change impact studies"
    ],

    aquariumCare: {
        difficulty: "Expert level - very challenging",
        tankSize: "Minimum 500+ liters",
        requirements: "Fine sand substrate, caves, excellent water quality",
        feeding: "Live or frozen marine foods",
        challenges: "Extremely secretive, difficult to feed, sensitive to stress"
    },

    divingTips: [
        "Look for distinctive leaf-like nostrils protruding from sand",
        "Move slowly to avoid startling them",
        "Best spotted during morning dives",
        "Check sandy areas near coral outcrops",
        "Use red lights to reduce disturbance"
    ]
};

const RibbonEel = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % ribbonEel.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + ribbonEel.imageUrls.length) % ribbonEel.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-blue-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-blue-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {ribbonEel.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {ribbonEel.physicalCharacteristics.weight}</li>
                                    <li><strong>Body Type:</strong> {ribbonEel.physicalCharacteristics.bodyType}</li>
                                    <li><strong>Special Feature:</strong> {ribbonEel.physicalCharacteristics.nostrils}</li>
                                </ul>
                                <p className="mt-4 text-gray-300">{ribbonEel.physicalCharacteristics.description}</p>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-green-400 mb-4">Habitat</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Primary:</strong> {ribbonEel.habitat.primary}</li>
                                    <li><strong>Regions:</strong> {ribbonEel.habitat.regions}</li>
                                    <li><strong>Depth:</strong> {ribbonEel.habitat.depth}</li>
                                    <li><strong>Environment:</strong> {ribbonEel.habitat.environment}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            
            case 'lifestages':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-yellow-400 mb-4">Life Stages & Color Changes</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {Object.entries(ribbonEel.lifeStages).map(([stage, details]) => (
                                    <div key={stage} className="bg-gray-700 p-4 rounded-lg">
                                        <h4 className="font-semibold text-yellow-300 mb-3 capitalize">{stage}</h4>
                                        <div className="space-y-2 text-gray-300 text-sm">
                                            <p><strong>Size:</strong> {details.size}</p>
                                            <p><strong>Coloration:</strong> {details.coloration}</p>
                                            <p><strong>Behavior:</strong> {details.behavior}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-4 bg-blue-900 rounded-lg">
                                <p className="text-blue-200">
                                    <strong>Amazing Fact:</strong> Ribbon eels are protandrous hermaphrodites - they start life as males and can transform into females as they age and grow larger!
                                </p>
                            </div>
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
                                        <li><strong>Lifestyle:</strong> {ribbonEel.behavior.lifestyle}</li>
                                        <li><strong>Activity:</strong> {ribbonEel.behavior.activity}</li>
                                        <li><strong>Territory:</strong> {ribbonEel.behavior.territorial}</li>
                                        <li><strong>Habitat:</strong> {ribbonEel.behavior.burrowing}</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-green-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {ribbonEel.diet.primary}</p>
                                    <p className="text-gray-300 mb-2"><strong>Prey:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {ribbonEel.diet.prey.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p className="text-gray-300 mt-3"><strong>Method:</strong> {ribbonEel.diet.huntingMethod}</p>
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
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{ribbonEel.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Major Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {ribbonEel.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Key Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {ribbonEel.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={ribbonEel.imageUrls[currentImageIndex]} 
                        alt={ribbonEel.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
                        {ribbonEel.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-blue-200">
                        {ribbonEel.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The color-changing master of coral reef sand burrows
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {ribbonEel.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(ribbonEel.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-blue-300 mb-2 capitalize">{key}</h3>
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
                            id="lifestages" 
                            label="Life Stages" 
                            isActive={activeTab === 'lifestages'} 
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

            {/* Diving & Research Information */}
            <div className="fade-section py-20 px-6 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-3xl font-bold text-cyan-400 mb-6">Diving Tips</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {ribbonEel.divingTips.map((tip, index) => (
                                    <li key={index}>{tip}</li>
                                ))}
                            </ul>
                            
                            <h4 className="text-xl font-semibold text-yellow-400 mt-6 mb-3">Cultural Significance</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {ribbonEel.culturalSignificance.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-3xl font-bold text-green-400 mb-6">Research Value</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {ribbonEel.researchSignificance.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            
                            <div className="mt-6 p-4 bg-red-900 rounded-lg">
                                <h4 className="text-lg font-semibold text-red-300 mb-2">Aquarium Care Warning</h4>
                                <p className="text-red-200 text-sm">
                                    Ribbon eels are extremely difficult to keep in aquariums and have very low survival rates. 
                                    They require expert care and are not recommended for home aquariums.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-blue-900 to-yellow-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Protect Coral Reef Ecosystems</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Ribbon eels are indicators of healthy coral reefs. Protecting their habitat means preserving one of Earth's most biodiverse ecosystems.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-blue-400 mb-3">Responsible Diving</h4>
                            <p className="text-gray-300">Practice ethical diving and avoid disturbing wildlife. Observe from a distance.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-yellow-400 mb-3">Coral Conservation</h4>
                            <p className="text-gray-300">Support coral reef restoration and marine protected area initiatives.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-green-400 mb-3">Climate Action</h4>
                            <p className="text-gray-300">Reduce carbon emissions to combat ocean warming and acidification.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RibbonEel;
