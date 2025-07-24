import './species.css';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(SplitText, CSSPlugin, ScrollTrigger);

function HomePage() {
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

  const headingRef = useRef(null);
  const factsRef = useRef(null);
  const factTextRef = useRef(null);
  const factHeadRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];
  const heroRef = useRef(null);

  const funFacts = [
    "A group of jellyfish is called a smack.",
    "Octopuses have three hearts.",
    "Clownfish can change gender.",
    "Sea otters hold hands when they sleep.",
    "Some fish can glow in the dark (bioluminescence)."
  ];
  const deadlyFacts = [
    "Box jellyfish venom can stop a human heart in minutes.",
    "Stonefish is the most venomous fish in the ocean.",
    "Blue-ringed octopus bites can cause paralysis and death.",
    "Sharks are attracted to blood from miles away.",
    "The cone snail can kill a human with one sting."
  ];
  const [isFun, setIsFun] = useState(true);
  const [factIndex, setFactIndex] = useState(0);
  const currentList = isFun ? funFacts : deadlyFacts;

  const items = [
    { name: "Explore", href: "/explore", imageUrl: "../../Assets/explore_image.webp", text: "Dive into the depths — discover the secrets of the sea." },
    { name: "Threats", href: "/threats", imageUrl: "../../Assets/threats_image.webp", text: "Facing the tide — the dangers our oceans endure." },
    { name: "Solutions", href: "/solutions", imageUrl: "../../Assets/solutions_image.webp", text: "Turning the tide — how we can protect our oceans.", line2: "Hope floats — real answers for a healthier sea." },
    { name: "Stories", href: "/stories", imageUrl: "../../Assets/stories_image.jpeg", text: "Voices of the ocean — tales from the deep." },
    { name: "Infographics", href: "/infographics", imageUrl: "../../Assets/infographics_image.jpg", text: "The ocean, visualized — facts that make waves." },
    { name: "Quiz", href: "/quiz", imageUrl: "../../Assets/quiz_image.png", text: "Test your tides — how well do you know the ocean?" },
    { name: "Explore Species", href: "/species", imageUrl: "../../Assets/exploreSpecies.jpg", text: "Explore the creatures that adore the ocean" }
  ];

  const animals = [
    {
      name: "Dolphin",
      src: "../../Assets/dolphin.png",
      style: { top: "26%", left: "53%", width: "25vw", maxWidth: "400px" },
      depth: 3
    },
    {
      name: "MantaRay",
      src: "../../Assets/manta_home.png",
      style: { top: "45%", left: "22%", width: "22vw", maxWidth: "420px" },
      depth: 2
    },

  ];

  useEffect(() => {
    if (!isMobile) {
      const circle = document.querySelector(".cursorEffect");
      const handleMouseMove = (e) => {
        circle.style.top = `${e.clientY}px`;
        circle.style.left = `${e.clientX}px`;
      };
      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMobile]);

  useGSAP(() => {
    let split = new SplitText(headingRef.current);
    gsap.from(split.chars, { opacity: 0, yPercent: 120, duration: 1.1, ease: "back.out", stagger: 0.13 });

    gsap.from(factsRef.current, {
      scrollTrigger: { trigger: factsRef.current, start: "top 80%", end: "+=100", scrub: 0.3 },
      opacity: 0, x: -50, ease: "back.out"
    });

    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 90%" },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        delay: index * 0.1,
      });
    });

    gsap.to(".Dolphin",{
        scrollTrigger:{
          trigger: ".banner",
          start: "top top",
          end: "bottom 50%",
          scrub: true,
        },
        xPercent: -50,
        yPercent: -20
    })

    gsap.to(".MantaRay",{
        scrollTrigger:{
          trigger: ".banner",
          start: "top top",
          end: "bottom 50%",
          scrub: true,
        },
        xPercent: 50,
        yPercent: 20
      })

  }, []);

useGSAP(() => {
  const animalEls = gsap.utils.toArray(".animal");

  animalEls.forEach((el, i) => {
    gsap.to(el, {
      y: -20,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: i * 0.2,
    });
    gsap.to(el, {
      x: `+=${gsap.utils.random(-30, 30)}`,
      duration: gsap.utils.random(18, 36),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      const maxX = 10;
      const maxY = 10;

      gsap.to(el, {
        x: relX / rect.width * maxX,
        y: relY / rect.height * maxY,
        rotateX: -relY / rect.height * 10,
        rotateY: relX / rect.width * 10,
        duration: 0.3,
        ease: "power2.out",
        transformPerspective: 450,
        transformOrigin: 'center'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  });
}, []);


  useEffect(() => {
    const factTimer = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % currentList.length);
    }, 4000);
    return () => clearInterval(factTimer);
  }, [currentList]);

  useEffect(() => {
    gsap.fromTo(
        factTextRef.current,
        { 
        opacity: 0,
         y: 20 
        },

        { 
        opacity: 1,
        y: 0,
        duration: 0.5, 
        ease: "power2.out" 
        }
    );
  }, [factIndex, isFun]);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div className='overflow-x-hidden'>

      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center"
      >
        <div
          className="fixed inset-0 bg-cover bg-center -z-10 banner"
          style={{ backgroundImage: "url('../../Assets/view-archeological-underwater-building-ruins.jpg')" }}
        />

        {animals.map((a) => (
          <img
            key={a.name}
            src={a.src}
            alt={a.name}
            className={`animal ${a.name} absolute pointer-events-auto z-20`}
            style={a.style}
            title={a.name}
          />
        ))}
        <div className="relative z-10 px-4">
          <h1
            ref={headingRef}
            className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg"
          >
            Ocean
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-xl mx-auto">
            Discover the deep secrets of the blue planet
          </p>
          <a
            href="/explore"
            className="inline-block mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-xl text-white font-semibold transition-transform transform hover:scale-105"
          >
            Explore Now
          </a>
        </div>
      </section>

      <div className='cursorEffect pointer-events-none fixed h-[5vw] w-[5vw] rounded-full -translate-x-1/2 -translate-y-1/2 backdrop-invert transition-all duration-[10ms] ease-linear z-[999]' />

      <div className='content flex w-full px-4 md:px-8 py-12 flex-col justify-end items-center'>

        <div
          className="facts-carousel flex w-[95%] max-w-4xl flex-col sm:flex-row justify-center items-center relative text-center bg-cyan-500 shadow-[0_0_0.25em_0.25em_rgba(0,0,0,0.3)] rounded-3xl my-8 mx-auto p-4 sm:p-6"
          ref={factsRef}
        >
          <button
          className="arrow sm:left-4 absolute sm:static top-2 sm:top-1/2 sm:-translate-y-1/2 text-xl sm:text-2xl bg-transparent border-none cursor-pointer text-white p-2 sm:p-4 z-10 select-none"
          onClick={() => setFactIndex((prev) => (prev - 1 + currentList.length) % currentList.length)}
          >
            &larr;
          </button>
          <div className="fact-box w-full px-8 py-6 text-white flex justify-center items-center flex-col">
            <h1 ref={factHeadRef} className="text-xl sm:text-2xl font-semibold mb-2">
              {isFun ? "Ocean Facts" : "Deadly Facts"}
            </h1>
            <p ref={factTextRef} className="fact-text text-base sm:text-lg md:text-xl my-4 max-w-[90%] sm:max-w-[80%]">
              {currentList[factIndex]}
            </p>
            <button
              className="toggle-button mt-2 sm:mt-4 px-4 py-2 sm:px-5 sm:py-2 text-sm sm:text-base border-none rounded-lg bg-black text-white cursor-pointer"
              onClick={() => { setIsFun((prev) => !prev); setFactIndex(0); }}
            >
              {isFun ? "Switch to Deadly Facts" : "Switch to Fun Facts"}
            </button>
          </div>
          <button
            className="arrow sm:right-4 absolute sm:static top-2 sm:top-1/2 sm:-translate-y-1/2 text-xl sm:text-2xl bg-transparent border-none cursor-pointer text-white p-2 sm:p-4 z-10 select-none"
            onClick={() => setFactIndex((prev) => (prev + 1) % currentList.length)}
          >
            &rarr;
          </button>
        </div>

        <div className="w-full max-w-7xl mx-auto py-12">
          <h2 className="text-4xl font-extrabold text-white mb-10 text-center">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <a
                key={index}
                ref={addToRefs}
                href={item.href}
                className={`relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl ${
                  index === items.length - 1 ? 'lg:col-span-3 justify-self-center max-w-sm' : ''
                }`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 "></div>
                <div className="absolute bottom-4 left-4 text-white transition-all duration-300 group-hover:bottom-6">
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <p className="text-sm mt-2 max-w-xs opacity-0 transition-opacity duration-300">
                    {item.text} {item.line2 && <span>{item.line2}</span>}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className='footer w-full bg-white shadow-[0_0_0.25em_0.25em_rgba(0,0,0,0.3)] h-[15em] flex flex-col items-center justify-center rounded-t-[2em]'>
        <h1>Just A footer</h1>
        <p>created by team rocket</p>
      </footer>
    </div>
  );
}

export default HomePage;
