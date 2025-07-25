import Nav from "./Nav";
import "./species.css";
import { useRef, useEffect, useState, forwardRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const animal = {
    name: "Jellyfish",
    imageUrls: [
        "../Assets/animal_image1.jpg",
        "../Assets/animal_image2.jpg",
        "../Assets/animal_image3.webp"
    ],
    count: "Unknown",
    conservationStatus: "least concern",
    about: "Jellyfish are gelatinous marine animals that have existed for over 500 million years, making them among the oldest living creatures. They inhabit oceans all around the world, from the surface to the deep sea. Despite their simple anatomy—lacking brains, hearts, and bones—they use specialized cells called cnidocytes to sting and capture prey. Some species can glow in the dark using bioluminescence. Jellyfish populations have increased in some areas due to climate change and overfishing of their natural predators.",
    threats: ["Climate change", "Pollution (especially plastic)", "Habitat disruption", "Ocean acidification"],
    facts: [
        "Jellyfish have been around longer than dinosaurs.",
        "They are 95% water and have no brain or heart.",
        "Some jellyfish can clone themselves.",
        "Box jellyfish are among the most venomous creatures on Earth."
    ],
    bioInfo: {
        sciName: "Scyphozoa (class)",
        size: "from a few millimeters to over 2 meters",
        weight: "Typically light due to water content",
        lifespan: "From a few hours to several months; some are biologically immortal",
        habitat: "Worldwide, from surface waters to deep sea"
    }
};

const ColorMap = {
    "critically endangered": "bg-red-600",
    "endangered": "bg-orange-500",
    "vulnerable": "bg-yellow-400",
    "near threatened": "bg-lime-400",
    "least concern": "bg-green-500",
    "extinct": "bg-gray-700",
};

const ListToItem = forwardRef(({ item }, ref) => (
    <p className="max-w-[80%] text-center text-xl md:text-2xl break-words" ref={ref}>{item}</p>
));

const BioInfo = ({ bioInfo }) => {
    return (
        <div className="text-base md:text-xl text-left">
            <p><strong>Scientific Name:</strong> {bioInfo.sciName}</p>
            <p><strong>Size:</strong> {bioInfo.size}</p>
            <p><strong>Weight:</strong> {bioInfo.weight}</p>
            <p><strong>Lifespan:</strong> {bioInfo.lifespan}</p>
            <p><strong>Habitat:</strong> {bioInfo.habitat}</p>
        </div>
    );
};

const SpeciesProfile = () => {
    const threatRef = useRef(null);
    const [threatIndex, setThreatIndex] = useState(0);
    const factRef = useRef(null);
    const [factIndex, setFactIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const aboutRef = useRef(null);
    const container1Ref = useRef(null);
    const container2Ref = useRef(null);
    const imageRef = useRef(null);
    const bgRef = useRef(null);
    const mouseContainerRef = useRef(null);

    useEffect(() => {
        const circle = document.querySelector(".cursorEffect");
        const handlemousemove = (e) => {
            gsap.to(circle, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'linear'
            });
        };
        document.addEventListener('mousemove', handlemousemove);
        return () => document.removeEventListener('mousemove', handlemousemove);
    }, []);

    useEffect(() => {
        const el = aboutRef.current;
        if (!el) return;
        const check = () => setIsOverflowing(el.scrollHeight > el.clientHeight);
        check();
        const ro = new ResizeObserver(check);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const animateTextChange = (ref, val) => {
        if (ref.current) {
            gsap.fromTo(ref.current,
                { x: val, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
            );
        }
    };

    const color = ColorMap[animal.conservationStatus.toLowerCase()] || "bg-gray-300";

    const nextThreat = () => {
        setThreatIndex((prev) => (prev + 1) % animal.threats.length);
        animateTextChange(threatRef, -50);
    };

    const prevThreat = () => {
        setThreatIndex((prev) => (prev - 1 + animal.threats.length) % animal.threats.length);
        animateTextChange(threatRef, 50);
    };

    const nextFact = () => {
        setFactIndex((prev) => (prev + 1) % animal.facts.length);
        animateTextChange(factRef, -50);
    };

    const prevFact = () => {
        setFactIndex((prev) => (prev - 1 + animal.facts.length) % animal.facts.length);
        animateTextChange(factRef, 50);
    };

    const changeImage = (next = true) => {
        if (!imageRef.current) return;
        gsap.to(imageRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power1.out",
            onComplete: () => {
                setImageIndex((prev) => {
                    const newIndex = next
                        ? (prev + 1) % animal.imageUrls.length
                        : (prev - 1 + animal.imageUrls.length) % animal.imageUrls.length;
                    gsap.to(imageRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" });
                    return newIndex;
                });
            },
        });
    };

    const handleMouseMove = (e) => {
        const container = mouseContainerRef.current;
        const image = imageRef.current;
        if (!container || !image) return;
        const rect = container.getBoundingClientRect();
        const moveX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const moveY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        const maxTilt = 7;
        gsap.to(image, {
            rotateY: moveX * maxTilt,
            rotateX: -moveY * maxTilt,
            x: moveX * 20,
            y: moveY * 20,
            duration: 0.4,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(imageRef.current, {
            rotateX: 0, rotateY: 0, x: 0, y: 0,
            duration: 0.6, ease: "power2.out",
        });
    };

    useGSAP(() => {
        const containerChildren = Array.from(container1Ref.current.children);
        gsap.set(bgRef.current, { opacity: 0.3 });
        gsap.from(containerChildren, {
            opacity: 0, y: 50, stagger: 0.2, duration: 1, ease: "power2.out",
        });
        if (imageRef.current) {
            gsap.fromTo(
                imageRef.current,
                { x: 200, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
            );
        }
        gsap.to(bgRef.current, {
            opacity: 1,
            scrollTrigger: {
                trigger: container1Ref.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        });
    }, []);

    useEffect(() => {
        const threatInterval = setInterval(nextThreat, 4500);
        const factInterval = setInterval(nextFact, 4000);
        const imageInterval = setInterval(() => changeImage(true), 7000);
        return () => {
            clearInterval(threatInterval);
            clearInterval(factInterval);
            clearInterval(imageInterval);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-[#20262e]">
            <Nav />
            <div className='cursorEffect pointer-events-none fixed h-[5vw] w-[5vw] rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 z-50 backdrop-invert' />
            <div
                ref={bgRef}
                className="banner fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 opacity-30"
                style={{ backgroundImage: `url(../Assets/species_bg.jpg)` }}
            />
            <main ref={container1Ref} className="text-white z-10 w-full">
                <div className="mt-[3em] mx-auto px-4 pt-10 pb-4 md:pt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-3 gap-8">
                        <div className="text-5xl lg:text-6xl flex justify-center items-center text-center lg:row-start-1 lg:col-start-1 lg:row-end-2 lg:col-end-3">
                            <h1>{animal.name}</h1>
                        </div>
                        <div
                            ref={mouseContainerRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="relative w-full aspect-video lg:aspect-auto flex justify-center items-center rounded-2xl overflow-hidden lg:row-start-1 lg:col-start-3 lg:row-end-4 lg:col-end-5 lg:h-[40em]"
                        >
                            <img
                                ref={imageRef}
                                src={animal.imageUrls[imageIndex]}
                                alt={animal.name}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute bottom-4 flex gap-4">
                                <button onClick={() => changeImage(false)} className="px-4 py-2 bg-white/80 rounded-full hover:bg-white text-black text-xl">&#8592;</button>
                                <button onClick={() => changeImage(true)} className="px-4 py-2 bg-white/80 rounded-full hover:bg-white text-black text-xl">&#8594;</button>
                            </div>
                        </div>
                        <div className="bg-[#393939] text-3xl flex flex-col justify-center items-center rounded-2xl hover:scale-105 hover:shadow-xl transition duration-300 min-h-[200px] lg:h-[60%] lg:row-start-2 lg:col-start-1 lg:row-end-4 lg:col-end-2">
                            <h2>Count</h2>
                            <p className="text-2xl mt-2">{animal.count}</p>
                        </div>
                        <div className={`${color} text-3xl text-center flex flex-col justify-center items-center rounded-2xl hover:scale-105 hover:shadow-xl transition duration-300 min-h-[200px] lg:h-[60%] lg:row-start-2 lg:col-start-2 lg:row-end-4 lg:col-end-3`}>
                            <h2>Conservation Status</h2>
                            <p className="text-2xl mt-2 capitalize">{animal.conservationStatus}</p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto px-4 py-10 md:py-16">
                    <div ref={container2Ref} className="grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-5 gap-8">
                        <div className="relative bg-[#393939] max-h-[25em] text-2xl md:text-3xl relative p-6 rounded-2xl hover:scale-101 hover:shadow-xl transition duration-300 lg:col-span-4 lg:row-span-3">
                            <h2>About</h2>
                            <div ref={aboutRef} className="h-full max-h-[25em] truncate overflow-hidden text-ellipsis whitespace-pre-wrap text-lg md:text-xl mt-4">
                                {animal.about}
                            </div>
                            {isOverflowing && (
                                <>
                                    <div className="absolute h-full max-h-[25em] bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#393939] to-transparent pointer-events-none"></div>
                                    <button className="absolute bottom-4 right-4 text-lg underline hover:text-yellow-300 transition-colors" onClick={() => setShowModal(true)}>
                                        Read more
                                    </button>
                                </>
                            )}
                        </div>
                        <div className="bg-[#7073d1] text-3xl p-6 rounded-2xl flex flex-col justify-start gap-4 items-center lg:row-span-5 lg:col-start-5">
                            <p>Information</p>
                            <BioInfo bioInfo={animal.bioInfo} />
                        </div>
                        <div className={`p-6 rounded-2xl text-3xl relative flex flex-col items-center justify-between min-h-[220px] ${color} lg:col-span-2 lg:row-span-2 lg:row-start-4`}>
                            <h2 className="mt-2">Threats</h2>
                            <div className="flex items-center justify-center flex-1 relative w-full">
                                <button className="absolute left-2 text-3xl hover:text-yellow-300 transition-colors" onClick={prevThreat}>&#8592;</button>
                                <ListToItem ref={threatRef} item={animal.threats[threatIndex]} />
                                <button className="absolute right-2 text-3xl hover:text-yellow-300 transition-colors" onClick={nextThreat}>&#8594;</button>
                            </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-[#393939] text-3xl relative flex flex-col items-center justify-between min-h-[220px] lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-4">
                            <h2 className="mt-2">Fun Facts</h2>
                            <div className="flex items-center justify-center flex-1 relative w-full">
                                <button className="absolute left-2 text-3xl hover:text-yellow-300 transition-colors" onClick={prevFact}>&#8592;</button>
                                <ListToItem ref={factRef} item={animal.facts[factIndex]} />
                                <button className="absolute right-2 text-3xl hover:text-yellow-300 transition-colors" onClick={nextFact}>&#8594;</button>
                            </div>
                        </div>
                    </div>
                </div>
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[100] p-4">
                        <div className="bg-[#393939] max-w-2xl w-full p-6 rounded-xl text-white text-left relative">
                            <h2 className="text-3xl mb-4">About {animal.name}</h2>
                            <p className="text-xl leading-relaxed max-h-[70vh] overflow-y-auto">{animal.about}</p>
                            <button onClick={() => setShowModal(false)} className="absolute top-3 right-4 text-3xl font-bold hover:text-red-500 transition-colors">
                                &times;
                            </button>
                        </div>
                    </div>
                )}
            </main>
            <footer className='footer w-full flex flex-col h-[15em] justify-center items-center bg-[#1a1a1a] text-white rounded-t-2xl mt-auto z-10 shadow-md'>
                <h1>Just A footer</h1>
                <p>created by team rocket</p>
            </footer>
        </div>
    );
};

export default SpeciesProfile;