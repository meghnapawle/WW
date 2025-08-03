import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const zombieWorms = {
    name: "Zombie Worms",
    scientificName: "Osedax spp.",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Annelida",
        class: "Polychaeta",
        family: "Siboglinidae",
        genus: "Osedax",
        species: "Multiple species"
    },

    imageUrls: ["/imges/deep_sea.jpg", "/imges/coral.png", "/imges/fish.png"],

    physicalCharacteristics: {
        length: "1-7 cm (0.4-2.8 inches)",
        weight: "Less than 1 gram",
        bodyType: "Segmented marine worm with specialized feeding apparatus",
        appearance: "Red, pink, or white feathery plumes extending from bone",
        anatomy: "No mouth, gut, or anus - absorbs nutrients through skin",
        description: "Bone-eating marine worms that dissolve whale skeletons with acid."
    },

    habitat: {
        primary: "Whale falls on deep ocean floor",
        regions: "Global distribution in deep waters",
        depth: "100-4,000+ meters (330-13,100+ feet)",
        substrate: "Exclusively on whale and other vertebrate bones",
        environment: "Cold, high-pressure deep-sea environments"
    },

    behavior: {
        feeding: "Dissolve bone matrix with acid secretions",
        reproduction: "Extreme sexual size dimorphism",
        colonization: "Rapid colonization of new whale falls",
        symbiosis: "Dependent on bacterial symbionts for nutrition",
        distribution: "Can detect whale falls from great distances"
    },

    diet: {
        primary: "Bone collagen and lipids",
        source: "Whale bones, fish bones, other vertebrate remains",
        method: "Acid secretion dissolves bone, bacteria process nutrients",
        dependency: "Completely dependent on vertebrate bone chemistry",
        nutrition: "Obtains nutrients through bacterial symbionts"
    },

    reproduction: {
        sexualDimorphism: "Extreme - females 100x larger than males",
        males: "Microscopic, live inside female reproductive tubes",
        females: "Large, visible, bore into bones",
        fertilization: "Internal fertilization within female",
        larvae: "Free-swimming planktonic larvae"
    },

    lifespan: "Unknown, estimated 5-20 years depending on bone availability",
    conservationStatus: "Data Deficient",

    species: {
        osedaxRubicundus: "First discovered species, on gray whale bones",
        osedaxFrankpressi: "Named after Frank Press, found on whale falls",
        osedaxMucofloris: "Mucus flower bone worm",
        osedaxYellow: "Yellow bone-eating worm from Antarctic",
        diversity: "Over 30 species described worldwide"
    },

    threats: [
        "Climate change affecting whale populations",
        "Deep-sea mining disturbing whale fall sites",
        "Ocean acidification affecting bone chemistry",
        "Reduction in whale populations reducing food sources",
        "Deep-sea trawling destroying habitats"
    ],

    adaptations: [
        "Acid secretion system for bone dissolution",
        "Bacterial symbiosis for nutrient processing",
        "Extreme sexual dimorphism for reproduction",
        "Specialized root system for bone penetration",
        "Efficient larval dispersal mechanisms"
    ],

    whalefall: {
        stages: "Four stages of whale fall decomposition",
        mobile: "Mobile scavengers remove soft tissue",
        enrichment: "Organic enrichment of sediments",
        sulphophilic: "Sulphide-oxidizing bacteria dominate",
        reef: "Zombie worms colonize exposed bones"
    },

    ecologicalRole: [
        "Key decomposers of whale fall ecosystems",
        "Recycle nutrients from bones back to ocean",
        "Create habitat for other deep-sea organisms",
        "Connect surface and deep-sea carbon cycles",
        "Indicate healthy whale populations"
    ],

    research: {
        discovery: "First discovered in 2002 in Monterey Bay",
        ecology: "Understanding whale fall ecosystem dynamics",
        evolution: "Studying extreme sexual dimorphism evolution",
        symbiosis: "Bacterial partnerships in extreme environments",
        biodiversity: "Discovering new species in deep-sea habitats"
    },

    symbioticBacteria: {
        function: "Break down bone collagen into usable nutrients",
        location: "Live in specialized organs called trophosome",
        chemistry: "Process complex organic molecules",
        dependency: "Worms cannot survive without bacterial partners",
        evolution: "Co-evolved relationship over millions of years"
    },

    interestingFacts: [
        "Were unknown to science until 2002",
        "Males are 100,000 times smaller than females",
        "Can completely dissolve whale bones in decades",
        "Over 30 species discovered in just 20 years",
        "Found on bones from whales that died 100+ years ago",
        "Each species may specialize on different bone types",
        "Their discovery changed understanding of deep-sea ecosystems",
        "Can detect new whale falls from kilometers away"
    ],

    culturalSignificance: [
        "Symbol of nature's incredible recycling ability",
        "Featured in deep-sea biology documentaries",
        "Important for understanding ecosystem connections",
        "Example of extreme evolutionary adaptations",
        "Conservation indicator for whale populations"
    ]
};

const ZombieWorms = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % zombieWorms.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + zombieWorms.imageUrls.length) % zombieWorms.imageUrls.length);
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
                                    <li><strong>Length:</strong> {zombieWorms.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {zombieWorms.physicalCharacteristics.weight}</li>
                                    <li><strong>Body Type:</strong> {zombieWorms.physicalCharacteristics.bodyType}</li>
                                    <li><strong>Appearance:</strong> {zombieWorms.physicalCharacteristics.appearance}</li>
                                    <li><strong>Anatomy:</strong> {zombieWorms.physicalCharacteristics.anatomy}</li>
                                </ul>
                                <p className="mt-4 text-gray-300">{zombieWorms.physicalCharacteristics.description}</p>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-red-400 mb-4">Incredible Facts</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {zombieWorms.interestingFacts.slice(0, 6).map((fact, index) => (
                                        <li key={index}>{fact}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            
            case 'reproduction':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-pink-400 mb-4">Extreme Sexual Dimorphism</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-pink-900 p-4 rounded-lg">
                                    <h4 className="font-semibold text-pink-300 mb-3">Females</h4>
                                    <p className="text-pink-200 mb-2"><strong>Size:</strong> {zombieWorms.reproduction.females}</p>
                                    <p className="text-pink-200 mb-2"><strong>Role:</strong> Bore into bones and feed</p>
                                    <p className="text-pink-200 text-sm">Large, visible worms that do all the bone-eating work</p>
                                </div>
                                <div className="bg-blue-900 p-4 rounded-lg">
                                    <h4 className="font-semibold text-blue-300 mb-3">Males</h4>
                                    <p className="text-blue-200 mb-2"><strong>Size:</strong> {zombieWorms.reproduction.males}</p>
                                    <p className="text-blue-200 mb-2"><strong>Role:</strong> Live inside females for reproduction only</p>
                                    <p className="text-blue-200 text-sm">Extremely small, exist solely for fertilization</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-300"><strong>Size Difference:</strong> {zombieWorms.reproduction.sexualDimorphism}</p>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-purple-400 mb-4">Species Diversity</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Object.entries(zombieWorms.species).filter(([key]) => key !== 'diversity').map(([species, description]) => (
                                    <div key={species} className="bg-purple-900 p-4 rounded-lg">
                                        <h4 className="font-semibold text-purple-300 mb-2 capitalize">{species.replace(/([A-Z])/g, ' $1')}</h4>
                                        <p className="text-purple-200 text-sm">{description}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-4 text-purple-300 font-semibold">{zombieWorms.species.diversity}</p>
                        </div>
                    </div>
                );
            
            case 'ecology':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-cyan-400 mb-4">Whale Fall Ecosystem</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-cyan-300 mb-3">Whale Fall Stages</h4>
                                    {Object.entries(zombieWorms.whalefall).map(([stage, description]) => (
                                        <div key={stage} className="mb-3">
                                            <p className="text-cyan-300 font-medium capitalize">{stage.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-orange-300 mb-3">Feeding Strategy</h4>
                                    <p className="text-gray-300 mb-2"><strong>Primary Food:</strong> {zombieWorms.diet.primary}</p>
                                    <p className="text-gray-300 mb-2"><strong>Method:</strong> {zombieWorms.diet.method}</p>
                                    <p className="text-gray-300 mb-2"><strong>Dependency:</strong> {zombieWorms.diet.dependency}</p>
                                    <p className="text-gray-300 text-sm"><strong>Nutrition:</strong> {zombieWorms.diet.nutrition}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-yellow-400 mb-4">Bacterial Symbiosis</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Object.entries(zombieWorms.symbioticBacteria).map(([aspect, description]) => (
                                    <div key={aspect} className="bg-yellow-900 p-4 rounded-lg">
                                        <h4 className="font-semibold text-yellow-300 mb-2 capitalize">{aspect}</h4>
                                        <p className="text-yellow-200 text-sm">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-green-400 mb-4">Ecological Role</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {zombieWorms.ecologicalRole.map((role, index) => (
                                    <li key={index}>{role}</li>
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
                            <p className="text-xl font-semibold mb-4 text-yellow-400">{zombieWorms.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {zombieWorms.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {zombieWorms.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-blue-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-300 mb-4">Research Significance</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {Object.entries(zombieWorms.research).map(([field, description]) => (
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={zombieWorms.imageUrls[currentImageIndex]} 
                        alt={zombieWorms.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-red-400 bg-clip-text text-transparent">
                        {zombieWorms.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-green-200">
                        {zombieWorms.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The ocean's bone-eating decomposers
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {zombieWorms.imageUrls.length}
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
                        {Object.entries(zombieWorms.classification).map(([key, value]) => (
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
                            id="reproduction" 
                            label="Reproduction & Species" 
                            isActive={activeTab === 'reproduction'} 
                            onClick={setActiveTab} 
                        />
                        <TabButton 
                            id="ecology" 
                            label="Ecology & Symbiosis" 
                            isActive={activeTab === 'ecology'} 
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

            {/* Call to Action */}
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-green-900 to-teal-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Protecting Ocean's Recyclers</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Zombie worms play a crucial role in recycling nutrients from whale carcasses back into the ocean ecosystem. 
                        Protecting whales means protecting these remarkable decomposers.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-green-400 mb-3">Protect Whales</h4>
                            <p className="text-gray-300">Support whale conservation to maintain zombie worm food sources.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-teal-400 mb-3">Deep-Sea Research</h4>
                            <p className="text-gray-300">Fund exploration of deep-sea whale fall ecosystems.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-cyan-400 mb-3">Prevent Deep Mining</h4>
                            <p className="text-gray-300">Oppose deep-sea mining that destroys whale fall habitats.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ZombieWorms;
