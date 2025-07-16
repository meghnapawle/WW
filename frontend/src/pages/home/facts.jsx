import './facts.css';
import { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

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

function Facts() {
  const [isFun, setIsFun] = useState(true);
  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);
  const factRef = useRef(null);
  const factHeadRef = useRef(null);
  const currentList = isFun ? funFacts : deadlyFacts;

    useGSAP(() => {
    gsap.from(sectionRef.current, {
      scrollTrigger:{
        trigger:sectionRef.current,
        start: "top 80%",
        end: "+=100",
        scrub: 0.3
      },
      opacity: 0,
      x: -50,
      // duration: 1.2,
      ease: "back.out"
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      factHeadRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    )
    .fromTo(
      factRef.current,
      { stagger:0.12,
        opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [isFun]);
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      factRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % currentList.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentList]);

  const nextFact = () => {
    setIndex(prev => (prev + 1) % currentList.length);
  };

  const prevFact = () => {
    setIndex(prev => (prev - 1 + currentList.length) % currentList.length);
  };

  const toggleList = () => {
    setIsFun(prev => !prev);
    setIndex(0); 
  };

  return (
    <div className="facts-carousel" ref={sectionRef}>
      <button className="arrow left" onClick={prevFact}>&larr;</button>

      <div className="fact-box">
        <h1 ref={factHeadRef}>{isFun ? "Ocean Facts" : "Deadly Facts"}</h1>
        <p key={index} ref={factRef} className="fact-text">{currentList[index]}</p>
        <button className="toggle-button" onClick={toggleList}>
          {isFun ? "Switch to Deadly Facts" : "Switch to Fun Facts"}
        </button>
      </div>

      <button className="arrow right" onClick={nextFact}>&rarr;</button>
    </div>
  );
}

export default Facts;
