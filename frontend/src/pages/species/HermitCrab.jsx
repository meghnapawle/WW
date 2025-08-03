import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

// Comprehensive Hermit Crab Data
const hermitCrab = {
    name: "Hermit Crab",
    scientificName: "Paguroidea",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Arthropoda",
        subphylum: "Crustacea",
        class: "Malacostraca",
        order: "Decapoda",
        superfamily: "Paguroidea",
        families: "Multiple families including Paguridae"
    },

    imageUrls: ["/imges/hermit_crab.png", "/imges/coral.png", "/imges/stingray.png"],

    physicalCharacteristics: {
        length: "1 cm - 30 cm (0.4 inches - 1 foot) depending on species",
        weight: "1 g - 200 g (0.04 oz - 7 oz)",
        bodyType: "Soft, curved abdomen with hard front claws and legs",
        abdomen: "Soft, asymmetrical abdomen that fits into gastropod shells",
        claws: "Right claw typically larger than left claw",
        description: "Crustaceans with soft, vulnerable abdomens that seek protection in empty gastropod shells. Front half is armored while back half requires shell protection."
    },

    habitat: {
        primary: "Marine, terrestrial, and freshwater environments worldwide",
        regions: "Global distribution from tropical to polar regions",
        marineTerrestrial: "Ocean floors, tide pools, beaches, tropical islands",
        depth: "Intertidal zones to deep ocean depths of 4,000+ meters",
        preferences: "Areas with abundant empty shells for housing"
    },

    behavior: {
        shellSwitching: "Regularly upgrade to larger shells as they grow",
        social: "Form shell-exchange chains and vacancy chains",
        scavenging: "Opportunistic feeders and decomposers",
        molting: "Hide in shells during vulnerable molting periods",
        climbing: "Many species are excellent climbers"
    },

    diet: {
        primary: "Omnivorous scavengers",
        food: ["Dead organic matter", "Algae", "Small invertebrates", "Plankton", "Fruit (terrestrial species)", "Detritus"],
        feedingBehavior: "Use specialized mouthparts to filter and process food",
        roleInEcosystem: "Important decomposers and nutrient recyclers"
    },

    reproduction: {
        mating: "Internal fertilization, females carry eggs",
        eggs: "Hundreds to thousands of eggs carried under abdomen",
        larvae: "Planktonic zoea larvae in marine species",
        development: "Multiple larval stages before settling as juveniles",
        sexualMaturity: "6 months to 2 years depending on species"
    },

    lifespan: "1-30 years depending on species and environment",

    conservationStatus: "Least Concern to Vulnerable (varies by species)",

    shellTypes: {
        gastropod: "Snail shells - most common choice",
        nautilus: "Used by larger hermit crab species",
        artificial: "Bottles, cans, and other human debris",
        coconut: "Coconut shells used by terrestrial species",
        specialized: "Some species use specific shell types only"
    },

    threats: [
        "Shell collection reducing available homes",
        "Plastic pollution providing poor-quality shells",
        "Ocean acidification weakening shell sources",
        "Coastal development destroying habitats",
        "Climate change affecting shell-producing mollusks"
    ],

    adaptations: [
        "Soft abdomen perfectly curved to fit shells",
        "Modified uropods (tail appendages) to grip shell interior",
        "Asymmetrical body plan matching spiral shells",
        "Behavioral adaptations for shell selection and exchange",
        "Protective shell withdrawal reflexes"
    ],

    speciesVariety: {
        terrestrial: {
            examples: "Coconut crab, Caribbean hermit crab",
            habitat: "Land-dwelling, often in tropical areas",
            specializations: "Modified gills for air breathing"
        },
        marine: {
            examples: "Common hermit crab, decorator crab",
            habitat: "Ocean floors and tide pools",
            specializations: "Gills for underwater breathing"
        },
        deepSea: {
            examples: "Deep-sea hermit crabs",
            habitat: "Abyssal and bathyal zones",
            specializations: "Pressure adaptations, bioluminescence"
        }
    },

    culturalSignificance: [
        "Popular in marine aquariums and as pets",
        "Symbol of adaptability and resourcefulness",
        "Important in tide pool education",
        "Featured in children's literature and media",
        "Traditional food source in some cultures"
    ],

    ecosystem: {
        role: "Key decomposers and scavengers in marine ecosystems",
        relationships: "Prey for fish, birds, octopuses; compete with other crustaceans",
        shellRecycling: "Important shell recyclers, making shells available to others",
        indicator: "Presence indicates healthy shell-producing mollusk populations"
    },

    shellExchangeChains: {
        process: "Multiple crabs line up by size to exchange shells",
        cooperation: "Rare example of cooperation in invertebrates",
        efficiency: "Ensures all participants get appropriately sized shells",
        triggers: "Initiated when large shell becomes available"
    },

    researchSignificance: [
        "Study of behavioral ecology and cooperation",
        "Understanding shell selection and competition",
        "Climate change impact research on shell availability",
        "Biomimetics for robotics and materials science",
        "Marine ecosystem health monitoring"
    ],

    husbandryRequirements: {
        shells: "Variety of appropriate-sized empty shells",
        environment: "Proper humidity and temperature",
        social: "Best kept in groups for natural behaviors",
        diet: "Varied omnivorous diet with calcium supplements",
        care: "Relatively easy to maintain in captivity"
    },

    interestingFacts: [
        "Can form shell-exchange chains with dozens of individuals",
        "Some species live entirely on land but return to sea to reproduce",
        "The largest hermit crab (coconut crab) eventually abandons its shell",
        "They taste with their legs and antennae",
        "Some species decorate their shells with sea anemones for protection",
        "They can live in human trash when natural shells are unavailable"
    ]
};

const HermitCrab = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % hermitCrab.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + hermitCrab.imageUrls.length) % hermitCrab.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-orange-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-orange-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {hermitCrab.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {hermitCrab.physicalCharacteristics.weight}</li>
                                    <li><strong>Body Type:</strong> {hermitCrab.physicalCharacteristics.bodyType}</li>
                                    <li><strong>Claws:</strong> {hermitCrab.physicalCharacteristics.claws}</li>
                                </ul>
                                <p className="mt-4 text-gray-300">{hermitCrab.physicalCharacteristics.description}</p>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-yellow-400 mb-4">Fascinating Facts</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {hermitCrab.interestingFacts.map((fact, index) => (
                                        <li key={index}>{fact}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            
            case 'shells':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-brown-400 mb-4">Shell Types & Exchange</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-amber-300 mb-3">Shell Types</h4>
                                    {Object.entries(hermitCrab.shellTypes).map(([type, description]) => (
                                        <div key={type} className="mb-3">
                                            <p className="text-orange-300 font-medium capitalize">{type}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Shell Exchange Process</h4>
                                    <div className="space-y-2 text-gray-300 text-sm">
                                        <p><strong>Process:</strong> {hermitCrab.shellExchangeChains.process}</p>
                                        <p><strong>Cooperation:</strong> {hermitCrab.shellExchangeChains.cooperation}</p>
                                        <p><strong>Efficiency:</strong> {hermitCrab.shellExchangeChains.efficiency}</p>
                                        <p><strong>Triggers:</strong> {hermitCrab.shellExchangeChains.triggers}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            
            case 'species':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-green-400 mb-4">Species Variety</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {Object.entries(hermitCrab.speciesVariety).map(([type, details]) => (
                                    <div key={type} className="bg-gray-700 p-4 rounded-lg">
                                        <h4 className="font-semibold text-green-300 mb-3 capitalize">{type}</h4>
                                        <div className="space-y-2 text-gray-300 text-sm">
                                            <p><strong>Examples:</strong> {details.examples}</p>
                                            <p><strong>Habitat:</strong> {details.habitat}</p>
                                            <p><strong>Specializations:</strong> {details.specializations}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-purple-400 mb-4">Behavior & Diet</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-purple-300 mb-3">Behavior</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li><strong>Shell Switching:</strong> {hermitCrab.behavior.shellSwitching}</li>
                                        <li><strong>Social:</strong> {hermitCrab.behavior.social}</li>
                                        <li><strong>Molting:</strong> {hermitCrab.behavior.molting}</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-cyan-300 mb-3">Diet</h4>
                                    <p className="text-gray-300 mb-3"><strong>Type:</strong> {hermitCrab.diet.primary}</p>
                                    <p className="text-gray-300 mb-2"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {hermitCrab.diet.food.map((item, index) => (
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
                            <h3 className="text-xl font-bold text-red-400 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-green-400">{hermitCrab.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {hermitCrab.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {hermitCrab.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-blue-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-300 mb-4">As Pets</h3>
                            <div className="space-y-2 text-blue-200">
                                <p><strong>Shells:</strong> {hermitCrab.husbandryRequirements.shells}</p>
                                <p><strong>Environment:</strong> {hermitCrab.husbandryRequirements.environment}</p>
                                <p><strong>Social:</strong> {hermitCrab.husbandryRequirements.social}</p>
                                <p><strong>Care Level:</strong> {hermitCrab.husbandryRequirements.care}</p>
                            </div>
                        </div>
                    </div>
                );
            
            default:
                return null;
        }
    };

    return (
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-orange-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={hermitCrab.imageUrls[currentImageIndex]} 
                        alt={hermitCrab.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                        {hermitCrab.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-orange-200">
                        {hermitCrab.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Nature's ultimate home-swappers and recyclers
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {hermitCrab.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(hermitCrab.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-orange-300 mb-2 capitalize">{key}</h3>
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
                            id="shells" 
                            label="Shells & Exchange" 
                            isActive={activeTab === 'shells'} 
                            onClick={setActiveTab} 
                        />
                        <TabButton 
                            id="species" 
                            label="Species & Behavior" 
                            isActive={activeTab === 'species'} 
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

            {/* Ecological Role & Research */}
            <div className="fade-section py-20 px-6 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-3xl font-bold text-yellow-400 mb-6">Ecological Role</h3>
                            <div className="space-y-4 text-gray-300">
                                <p><strong>Role:</strong> {hermitCrab.ecosystem.role}</p>
                                <p><strong>Relationships:</strong> {hermitCrab.ecosystem.relationships}</p>
                                <p><strong>Shell Recycling:</strong> {hermitCrab.ecosystem.shellRecycling}</p>
                                <p><strong>Indicator:</strong> {hermitCrab.ecosystem.indicator}</p>
                            </div>
                            
                            <h4 className="text-xl font-semibold text-amber-400 mt-6 mb-3">Cultural Significance</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {hermitCrab.culturalSignificance.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-3xl font-bold text-cyan-400 mb-6">Research Value</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {hermitCrab.researchSignificance.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            
                            <div className="mt-6 p-4 bg-orange-900 rounded-lg">
                                <h4 className="text-lg font-semibold text-orange-300 mb-2">Nature's Recyclers</h4>
                                <p className="text-orange-200 text-sm">
                                    Hermit crabs are among nature's most efficient recyclers. They give gastropod shells a second life, 
                                    and their cooperative shell-exchange chains demonstrate rare examples of mutual aid in the animal kingdom. 
                                    These behaviors have inspired research in cooperation, resource sharing, and sustainable living.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-orange-900 to-red-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Protecting Nature's Home-Swappers</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        Hermit crabs face a housing crisis as shell collection and ocean acidification reduce their available homes. 
                        These resourceful creatures teach us about cooperation and recycling.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-orange-400 mb-3">Leave Shells Behind</h4>
                            <p className="text-gray-300">Don't collect shells from beaches - hermit crabs need them for homes.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-yellow-400 mb-3">Reduce Ocean Acidification</h4>
                            <p className="text-gray-300">Support actions to reduce CO2 emissions that weaken shell-producing mollusks.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-red-400 mb-3">Clean Beaches</h4>
                            <p className="text-gray-300">Remove plastic debris that can trap or harm hermit crabs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HermitCrab;
