import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import Nav from '../../components/navbar/Nav';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const pelicanEel = {
    name: "Pelican Eel",
    scientificName: "Eurypharynx pelecanoides",
    
    classification: {
        domain: "Eukaryota",
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Actinopterygii",
        order: "Anguilliformes",
        family: "Eurypharyngidae",
        genus: "Eurypharynx",
        species: "E. pelecanoides"
    },

    imageUrls: ["/imges/anglerfish.png", "/imges/deep_sea.jpg", "/imges/fish.png"],

    physicalCharacteristics: {
        length: "60-75 cm (24-30 inches), rarely up to 1 meter",
        weight: "150-400 grams (5-14 oz)",
        bodyType: "Elongated eel-like body with massive expandable mouth",
        mouth: "Enormous pelican-like pouch capable of extreme expansion",
        tail: "Long whip-like tail with bioluminescent organ",
        description: "Deep-sea eel with the largest mouth relative to body size of any vertebrate."
    },

    habitat: {
        primary: "Deep oceanic waters worldwide",
        regions: "All major oceans in tropical and temperate zones",
        depth: "500-3,000 meters (1,640-9,840 feet)",
        zone: "Bathypelagic (midnight zone)",
        environment: "Open ocean midwater"
    },

    behavior: {
        feeding: "Gulp predator with expandable jaw",
        swimming: "Poor swimmer, drifts with currents",
        bioluminescence: "Light organ at tail tip attracts prey",
        migration: "Limited vertical migration",
        activity: "Most active during night hours"
    },

    diet: {
        primary: "Carnivorous opportunistic feeder",
        food: ["Small fish", "Crustaceans", "Cephalopods", "Marine worms", "Jellyfish"],
        strategy: "Ambush predator using expandable mouth",
        digestion: "Can swallow prey larger than normal body width",
        feeding: "Infrequent large meals due to food scarcity"
    },

    reproduction: {
        spawning: "Likely spawns in deep waters",
        larvae: "Leptocephalus larvae like other eels",
        development: "Complex larval development stages",
        maturity: "Reaches sexual maturity at 40-50 cm",
        lifecycle: "Poorly understood reproductive cycle"
    },

    lifespan: "Unknown, estimated 20-35 years",
    conservationStatus: "Least Concern",

    anatomy: {
        jaw: "Hinged jaw can open to massive proportions",
        stomach: "Highly expandable stomach and throat",
        skeleton: "Reduced bone structure for flexibility",
        gills: "Large gill slits for efficient oxygen extraction",
        vertebrae: "Over 100 vertebrae for flexibility"
    },

    threats: [
        "Deep-sea fishing bycatch",
        "Climate change affecting prey distribution",
        "Ocean pollution including plastics",
        "Deep-sea trawling destroying habitat",
        "Ocean acidification affecting food chain"
    ],

    adaptations: [
        "Massive expandable mouth for large prey",
        "Bioluminescent tail lure for attracting prey",
        "Flexible skeleton for extreme mouth opening",
        "Efficient metabolism for food-scarce environment",
        "Large gill slits for oxygen extraction in low-oxygen waters"
    ],

    uniqueFeatures: {
        mouth: "Can unhinge jaw like a snake",
        expansion: "Mouth can expand to 4x normal head width",
        lure: "Photophore at tail tip glows pink or red",
        flexibility: "Body extremely flexible and compressible",
        proportions: "Mouth makes up 25% of total body length"
    },

    relatedSpecies: {
        gulperEel: "Saccopharynx ampullaceus - similar deep-sea eel",
        umbrellaEel: "Eurypharynx richardi - close relative",
        snipeEel: "Nemichthys scolopaceus - different feeding strategy",
        difference: "Pelican eel has largest mouth proportionally"
    },

    ecologicalRole: [
        "Important midwater predator in deep-sea food webs",
        "Controls populations of small deep-sea organisms",
        "Prey for larger deep-sea predators",
        "Part of vertical migration food web",
        "Nutrient transfer between ocean layers"
    ],

    research: {
        discovery: "First described in 1882 from specimens",
        behavior: "Studying deep-sea feeding strategies",
        evolution: "Understanding extreme morphological adaptations",
        ecology: "Role in deep-sea ecosystem dynamics",
        physiology: "Biomechanics of extreme jaw expansion"
    },

    bioluminescence: {
        location: "Photophore at tip of whip-like tail",
        color: "Pink to red bioluminescent light",
        function: "Attracts prey in complete darkness",
        control: "Can control light intensity and duration",
        chemistry: "Luciferin-luciferase reaction like other deep-sea fish"
    },

    interestingFacts: [
        "Has the largest mouth relative to body size of any vertebrate",
        "Can unhinge its jaw like a snake to swallow huge prey",
        "Its stomach can stretch to accommodate prey larger than itself",
        "The tail light can glow for hours to attract prey",
        "Can compress its body to fit through tight spaces",
        "Related to common freshwater eels despite deep-sea lifestyle",
        "Its mouth pouch inspired the design of some fishing nets",
        "Can survive months without eating due to slow metabolism"
    ],

    culturalSignificance: [
        "Featured in deep-sea biology documentaries",
        "Symbol of deep-sea biodiversity and adaptation",
        "Inspiration for biomimetic engineering designs",
        "Educational icon for extreme animal adaptations",
        "Popular in aquarium exhibits when specimens available"
    ],

    feedingMechanism: {
        detection: "Uses lateral line system to detect prey movement",
        approach: "Slowly approaches prey in darkness",
        strike: "Rapidly expands mouth to create suction",
        capture: "Engulfs prey whole in expandable pouch",
        digestion: "Slowly digests large meals over weeks or months"
    }
};

const PelicanEel = () => {
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
        setCurrentImageIndex((prev) => (prev + 1) % pelicanEel.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + pelicanEel.imageUrls.length) % pelicanEel.imageUrls.length);
    };

    const TabButton = ({ id, label, isActive, onClick }) => (
        <button
            onClick={() => onClick(id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive 
                    ? 'bg-yellow-600 text-white shadow-lg' 
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
                                <h3 className="text-xl font-bold text-yellow-400 mb-4">Physical Characteristics</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li><strong>Length:</strong> {pelicanEel.physicalCharacteristics.length}</li>
                                    <li><strong>Weight:</strong> {pelicanEel.physicalCharacteristics.weight}</li>
                                    <li><strong>Body Type:</strong> {pelicanEel.physicalCharacteristics.bodyType}</li>
                                    <li><strong>Mouth:</strong> {pelicanEel.physicalCharacteristics.mouth}</li>
                                    <li><strong>Tail:</strong> {pelicanEel.physicalCharacteristics.tail}</li>
                                </ul>
                                <p className="mt-4 text-gray-300">{pelicanEel.physicalCharacteristics.description}</p>
                            </div>
                            
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-orange-400 mb-4">Amazing Facts</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {pelicanEel.interestingFacts.slice(0, 6).map((fact, index) => (
                                        <li key={index}>{fact}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            
            case 'feeding':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-red-400 mb-4">Feeding Strategy</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Diet & Strategy</h4>
                                    <p className="text-gray-300 mb-2"><strong>Type:</strong> {pelicanEel.diet.primary}</p>
                                    <p className="text-gray-300 mb-2"><strong>Strategy:</strong> {pelicanEel.diet.strategy}</p>
                                    <p className="text-gray-300 mb-2"><strong>Digestion:</strong> {pelicanEel.diet.digestion}</p>
                                    <p className="text-gray-300 mb-3"><strong>Food:</strong></p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                        {pelicanEel.diet.food.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-cyan-300 mb-3">Feeding Mechanism</h4>
                                    {Object.entries(pelicanEel.feedingMechanism).map(([step, description]) => (
                                        <div key={step} className="mb-2">
                                            <p className="text-cyan-300 font-medium capitalize">{step}</p>
                                            <p className="text-gray-300 text-sm ml-4">{description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-purple-400 mb-4">Unique Features</h3>
                            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {Object.entries(pelicanEel.uniqueFeatures).map(([feature, description]) => (
                                    <div key={feature} className="bg-purple-900 p-4 rounded-lg">
                                        <h4 className="font-semibold text-purple-300 mb-2 capitalize">{feature}</h4>
                                        <p className="text-purple-200 text-sm">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            
            case 'anatomy':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-green-400 mb-4">Anatomical Adaptations</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Object.entries(pelicanEel.anatomy).map(([part, description]) => (
                                    <div key={part} className="bg-green-900 p-4 rounded-lg">
                                        <h4 className="font-semibold text-green-300 mb-2 capitalize">{part}</h4>
                                        <p className="text-green-200 text-sm">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-pink-400 mb-4">Bioluminescence</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Object.entries(pelicanEel.bioluminescence).map(([aspect, description]) => (
                                    <div key={aspect} className="bg-pink-900 p-4 rounded-lg">
                                        <h4 className="font-semibold text-pink-300 mb-2 capitalize">{aspect}</h4>
                                        <p className="text-pink-200 text-sm">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-400 mb-4">Related Species</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {Object.entries(pelicanEel.relatedSpecies).filter(([key]) => key !== 'difference').map(([species, description]) => (
                                    <div key={species} className="bg-blue-900 p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-300 mb-2 capitalize">{species.replace(/([A-Z])/g, ' $1')}</h4>
                                        <p className="text-blue-200 text-sm">{description}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-4 text-blue-300 font-semibold">{pelicanEel.relatedSpecies.difference}</p>
                        </div>
                    </div>
                );
            
            case 'conservation':
                return (
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-green-400 mb-4">Conservation Status</h3>
                            <p className="text-xl font-semibold mb-4 text-green-400">{pelicanEel.conservationStatus}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-red-300 mb-3">Threats</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {pelicanEel.threats.map((threat, index) => (
                                            <li key={index}>{threat}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-blue-300 mb-3">Adaptations</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                        {pelicanEel.adaptations.map((adaptation, index) => (
                                            <li key={index}>{adaptation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-blue-900 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-300 mb-4">Research Areas</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {Object.entries(pelicanEel.research).map(([field, description]) => (
                                    <div key={field} className="space-y-2">
                                        <p className="text-blue-300 font-semibold capitalize">{field}</p>
                                        <p className="text-blue-200 text-sm">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-orange-400 mb-4">Ecological Role</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {pelicanEel.ecologicalRole.map((role, index) => (
                                    <li key={index}>{role}</li>
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
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-yellow-900 to-black text-white">
            <Nav />
            
            {/* Hero Section */}
            <div className="fade-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={pelicanEel.imageUrls[currentImageIndex]} 
                        alt={pelicanEel.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                        {pelicanEel.name}
                    </h1>
                    <p className="text-2xl font-light mb-4 text-yellow-200">
                        {pelicanEel.scientificName}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The deep sea's ultimate gulp predator
                    </p>
                </div>
                
                {/* Image Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button onClick={prevImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        ←
                    </button>
                    <span className="bg-black bg-opacity-50 text-white px-4 py-3 rounded-full">
                        {currentImageIndex + 1} / {pelicanEel.imageUrls.length}
                    </span>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all">
                        →
                    </button>
                </div>
            </div>

            {/* Classification Section */}
            <div className="fade-section py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Scientific Classification</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(pelicanEel.classification).map(([key, value]) => (
                            <div key={key} className="bg-gray-800 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-semibold text-yellow-300 mb-2 capitalize">{key}</h3>
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
                            id="feeding" 
                            label="Feeding Strategy" 
                            isActive={activeTab === 'feeding'} 
                            onClick={setActiveTab} 
                        />
                        <TabButton 
                            id="anatomy" 
                            label="Anatomy & Adaptations" 
                            isActive={activeTab === 'anatomy'} 
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
            <div className="fade-section py-20 px-6 bg-gradient-to-r from-yellow-900 to-orange-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-6">Protecting Deep-Sea Marvels</h3>
                    <p className="text-xl text-gray-300 mb-8">
                        The pelican eel represents one of nature's most extreme adaptations to deep-sea life. 
                        These remarkable creatures need our protection from deep-sea fishing and habitat destruction.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-yellow-400 mb-3">Sustainable Fishing</h4>
                            <p className="text-gray-300">Support fishing practices that reduce deep-sea bycatch.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-orange-400 mb-3">Deep-Sea Research</h4>
                            <p className="text-gray-300">Fund exploration and study of deep-sea ecosystems.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-red-400 mb-3">Ocean Protection</h4>
                            <p className="text-gray-300">Advocate for marine protected areas in deep waters.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PelicanEel;
