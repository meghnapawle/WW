import Nav from "./Nav";
import "./species.css"
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
  <p className="max-w-[80%] text-center text-2xl break-words" ref={ref}>{item}</p>
));

const BioInfo = ({ bioInfo }) => {
  return (
    <div className="text-xl text-left">
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
    const imageRef =useRef(null);
    const bgRef = useRef(null);
    const mouseContainerRef = useRef(null);

    useEffect(()=>{
        const circle = document.querySelector(".cursorEffect")
        const handlemousemove=  (e)=>{
        circle.style.top=`${e.clientY}px`;
        circle.style.left=`${e.clientX}px`;
        };
        document.addEventListener('mousemove', handlemousemove)
        return () => {document.removeEventListener('mousemove', handlemousemove);
        };
    },[]);

    useEffect(() => {
        const el = aboutRef.current;
        if (el) {
        setIsOverflowing(el.scrollHeight > el.clientHeight);
        }
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
        setThreatIndex((prev) => {
        const newIndex = (prev + 1) % animal.threats.length;
        animateTextChange(threatRef, -50);
        return newIndex;
        });
    };

    const prevThreat = () => {
        setThreatIndex((prev) => {
        const newIndex = (prev - 1 + animal.threats.length) % animal.threats.length;
        animateTextChange(threatRef, +50);
        return newIndex;
        });
    };

    const nextFact = () => {
        setFactIndex((prev) => {
        const newIndex = (prev + 1) % animal.facts.length;
        animateTextChange(factRef, -50);
        return newIndex;
        });
    };

    const prevFact = () => {
        setFactIndex((prev) => {
        const newIndex = (prev - 1 + animal.facts.length) % animal.facts.length;
        animateTextChange(factRef,50);
        return newIndex;
        });
    }

    const nextImage = () => {
    if (imageRef.current) {
        gsap.fromTo(
        imageRef.current,
        { opacity: 1 },
        {
            opacity: 0,
            duration: 0.3,
            ease: "power1.out",
            onComplete: () => {
            setImageIndex((prev) => {
                const newIndex = (prev + 1) % animal.imageUrls.length;
                gsap.fromTo(
                    imageRef.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.4, ease: "power2.out" }
                )
                return newIndex;
            });
            },
        }
        );
    }
    };

    const prevImage = () => {
    if (imageRef.current) {
        gsap.fromTo(
        imageRef.current,
        { opacity: 1 },
        {
            opacity: 0,
            duration: 0.3,
            ease: "power1.out",
            onComplete: () => {
            setImageIndex((prev) => {
                const newIndex =
                (prev - 1 + animal.imageUrls.length) % animal.imageUrls.length;
                gsap.fromTo(
                    imageRef.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.4, ease: "power2.out" }
                );
                return newIndex;
            });
            },
        }
        );
    }
    };

    const handleMouseMove = (e) => {
        const container = mouseContainerRef.current;
        const image = imageRef.current;
        if (!container || !image) return;

        const rect = container.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const moveX = (offsetX - centerX) / centerX;
        const moveY = (offsetY - centerY) / centerY;
        const maxTilt = 7;
        gsap.to(image, {
            rotateY: moveX * maxTilt,
            rotateX: -moveY * maxTilt,
            transformPerspective: 1000,
            transformOrigin: "center",
            x: moveX * 30,
            y: moveY * 30,
            duration: 0.4,
            ease: "power2.out",
        });
    };

    useEffect(() => {
        if (bgRef.current) {
            bgRef.current.style.backgroundImage = `url(../Assets/species_bg.jpg)`;
        }
    }, []);

    useGSAP(() => {
        const aboutSection = aboutRef.current;
        const containerChildren = Array.from(container1Ref.current.children).filter(
            (el) => el !== aboutSection
        );
        gsap.set(bgRef.current, {opacity:0.3,})

        gsap.from(containerChildren, {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 1.2,
            ease: "power2.out",
        });

        if (imageRef.current) {
            gsap.fromTo(
            imageRef.current,
            { x: 200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
            );
        }
        gsap.to(bgRef.current, {
            opacity:1,
            scrollTrigger: {
                trigger: container1Ref.current,
                start: "top top",  
                end: "bottom bottom",
                scrub: true,
            },
        });

    
    }, []);


    useEffect(() => {
    const interval = setInterval(() => {
        setThreatIndex((prev) => {
        const newIndex = (prev + 1) % animal.threats.length;
        animateTextChange(threatRef, -50);
        return newIndex;
        });
    }, 4500);

    return () => clearInterval(interval); // Clean up on unmount
    }, []);

    useEffect(() => {
    const interval = setInterval(() => {
        setFactIndex((prev) => {
        const newIndex = (prev + 1) % animal.facts.length;
        animateTextChange(factRef, -50);
        return newIndex;
        });
    }, 4000);

    return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (imageRef.current) {
            gsap.fromTo(
                imageRef.current,
                { opacity: 1 },
                {
                opacity: 0,
                duration: 0.3,
                ease: "power1.out",
                onComplete: () => {
                    setImageIndex((prev) => {
                    const newIndex = (prev + 1) % animal.imageUrls.length;
                    gsap.fromTo(
                        imageRef.current,
                        { opacity: 0 },
                        { opacity: 1, duration: 0.4, ease: "power2.out" }
                    );
                    return newIndex;
                    });
                },
                }
            );
            }
        }, 7000);

        return () => clearInterval(interval);
    }, []);



  return (
    <div className="min-h-screen flex flex-col">
        <Nav></Nav>
        <div className='cursorEffect pointer-events-none fixed h-[5vw] w-[5vw] rounded-[50%] transform translate-x-[-50%] translate-y-[-50%] z-999 backdrop-invert transition-all duration-[10ms] ease-linear'/>
        <div
            className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0" 
            ref={bgRef}
        />
        <div className="bg-[#20262e] text-white banner" ref={container1Ref}>
        <div className="grid grid-cols-4 grid-rows-3 gap-4 pt-20 mx-4 mt-0 h-[54em] rounded-2xl text-center">
            <div className="row-start-1 col-start-1 row-end-2 col-end-3 text-6xl flex justify-center items-center rounded-2xl">
            <h1>{animal.name}</h1>
            </div>
            <div className="bg-[#393939] row-start-2 col-start-1 row-end-4 col-end-2 text-3xl flex flex-col justify-center items-center h-[60%] rounded-2xl hover:scale-105 hover:shadow-xl transition duration-300">
            <h2>Count</h2>
            <p className="text-2xl mt-2">{animal.count}</p>
            </div>
            <div className={`${color} row-start-2 col-start-2 row-end-4 col-end-3 text-3xl flex flex-col justify-center items-center h-[60%] rounded-2xl hover:scale-105 hover:shadow-xl transition duration-300`}>
            <h2>Conservation Status</h2>
            <p className="text-2xl mt-2">{animal.conservationStatus}</p>
            </div>
            <div className="row-start-1 col-start-3 row-end-4 col-end-5 flex justify-center items-center rounded-2xl overflow-hidden"
                onMouseMove={handleMouseMove}
                ref={mouseContainerRef}
                onMouseLeave={() => {
                gsap.to(imageRef.current, {
                    rotateX: 0,
                    rotateY: 0,
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                });
                }}
            >
                <img
                ref={imageRef}
                src={animal.imageUrls[imageIndex]}
                alt="animal"
                className="h-[100%] w-[100%] object-cover"
                />
                <div className="absolute bottom-4 flex gap-4">
                    <button onClick={prevImage} className="px-4 py-3 bg-white rounded-[50%] hover:bg-gray-500 text-black">&#8592;</button>
                    <button onClick={nextImage} className="px-4 py-3 bg-white rounded-[50%] hover:bg-gray-500 text-black">&#8594;</button>
                </div>      
            </div>
        </div>

        <div className="grid grid-cols-5 grid-rows-5 gap-4 mt-20 mx-4 h-[35em] rounded-2xl text-center"  ref={container2Ref}>
            <div className="col-span-4 row-span-3 bg-[#393939] text-3xl relative p-6 rounded-2xl  hover:scale-101 hover:shadow-xl transition duration-300">
            <h2>About</h2>
            <div
                ref={aboutRef}
                className="leading-snug max-h-[60%] relative overflow-hidden text-ellipsis whitespace-pre-wrap text-xl mt-4"
            >
                {animal.about}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2.5em] bg-gradient-to-t from-[#393939] to-[rgba(57,57,57,0)] pointer-events-none"></div>
            {isOverflowing && (
                <button
                className="absolute bottom-4 right-4 text-lg underline hover:text-yellow-300 transition-colors"
                onClick={() => setShowModal(true)}
                >
                Read more
                </button>
            )}
            </div>

            <div className="row-span-5 col-start-5 bg-[#7073d1] text-3xl p-4 rounded-2xl flex flex-col justify-top gap-[0.5rem] items-center">
            <p>Information</p>
            <BioInfo bioInfo={animal.bioInfo} />
            </div>

            <div className={`col-span-2 row-span-2 row-start-4 rounded-2xl text-3xl relative flex flex-col items-center justify-between ${color}`}>
                <h2 className="mt-4">Threats</h2>
                <div className="flex items-center justify-center flex-1 relative w-full">
                    <button className="absolute left-[0.5rem] text-3xl hover:text-yellow-300 transition-colors" onClick={prevThreat}>&#8592;</button>
                    <ListToItem ref={threatRef} item={animal.threats[threatIndex]} />
                    <button className="absolute right-[0.5rem] text-3xl hover:text-yellow-300 transition-colors" onClick={nextThreat}>&#8594;</button>
                </div>
            </div>

            <div className="col-span-2 row-span-2 col-start-3 row-start-4 rounded-2xl bg-[#393939] text-3xl relative flex flex-col items-center justify-between">
                <h2 className="mt-4">Fun Facts</h2>
                <div className="flex items-center justify-center flex-1 relative w-full">
                    <button className="absolute left-[0.5rem] text-3xl hover:text-yellow-300 transition-colors" onClick={prevFact}>&#8592;</button>
                    <ListToItem ref={factRef} item={animal.facts[factIndex]} />
                    <button className="absolute right-[0.5rem] text-3xl hover:text-yellow-300 transition-colors" onClick={nextFact}>&#8594;</button>
                </div>
            </div>

        </div>

        {showModal && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center z-0">
            <div className="bg-[#393939] max-w-[50%] p-6 rounded-xl text-white text-left relative">
                <h2 className="text-3xl mb-4">Full About</h2>
                <p className="text-xl leading-relaxed">{animal.about}</p>
                <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-4 text-2xl font-bold hover:text-red"
                >
                &times;
                </button>
            </div>
            </div>
        )}
        </div>
        <footer className='footer w-full flex flex-col h-[15em] justify-center items-center bg-[#1a1a1a] text-white rounded-t-2xl mt-[1em] z-1 shadow-md'>
            <h1>Just A footer</h1>
            <p>created by team rocket</p>
        </footer>
    </div>
  );
};

export default SpeciesProfile;
