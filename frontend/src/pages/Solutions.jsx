import React, { useState, useEffect } from "react";
import Habitspinner from "./Habitspinner.jsx";
import { motion, useScroll, useTransform } from "framer-motion";

const FloatingFish = ({ emoji, baseLeft, baseTop, xOffset, yOffset }) => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 500], [0, xOffset]);
  const y = useTransform(scrollY, [0, 1000], [0, yOffset]);


  return ( 
    <motion.div
      style={{
        position: "absolute",
        left: baseLeft,
        top: baseTop,
        x,
        y,
        fontSize: "5rem",
        zIndex: 1,
        pointerEvents: "none",
      }}
      whileHover={{ scale: 1.2, rotate: 10 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      {emoji}
    </motion.div>
  );
};

const oceanNews = [
  {
    title: "Ocean Cleanup Removes 200,000 Pounds of Plastic",
    summary: "Revolutionary system successfully extracts massive amounts of plastic from the Great Pacific Garbage Patch.",
    date: "2024-12-15",
    image: "🌊"
  },
  {
    title: "Coral Restoration Breakthrough",
    summary: "Scientists develop new technique to grow coral 40x faster, offering hope for dying reefs worldwide.",
    date: "2024-12-10",
    image: "🪸"
  },
  {
    title: "Marine Protected Areas Expand Globally",
    summary: "New international agreement protects 30% of world's oceans by 2030, creating largest conservation network.",
    date: "2024-12-05",
    image: "🐠"
  },
  {
    title: "Microplastic-Eating Bacteria Discovered",
    summary: "Revolutionary discovery of naturally occurring bacteria that can break down microplastics in ocean water.",
    date: "2024-11-28",
    image: "🧬"
  }
];

const Solutions = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
    <div className="relative overflow-x-hidden bg-[#020617] text-white">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pb-20">
        
        {/* Background Waves */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-cyan-800 to-blue-950 z-0" />
        
        {/* Animated Ocean Waves */}
        <div className="absolute inset-0 z-0">
          <svg viewBox="0 0 1200 120" className="absolute bottom-0 w-full h-32">
            <path d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60 L1200,120 L0,120 Z" fill="rgba(6, 182, 212, 0.3)">
              <animate attributeName="d" 
                values="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60 L1200,120 L0,120 Z;
                        M0,60 Q150,80 300,60 T600,60 T900,60 T1200,60 L1200,120 L0,120 Z;
                        M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60 L1200,120 L0,120 Z"
                dur="4s" repeatCount="indefinite"/>
            </path>
          </svg>
          <svg viewBox="0 0 1200 120" className="absolute bottom-0 w-full h-24">
            <path d="M0,80 Q200,40 400,80 T800,80 T1200,80 L1200,120 L0,120 Z" fill="rgba(14, 165, 233, 0.4)">
              <animate attributeName="d" 
                values="M0,80 Q200,40 400,80 T800,80 T1200,80 L1200,120 L0,120 Z;
                        M0,80 Q200,100 400,80 T800,80 T1200,80 L1200,120 L0,120 Z;
                        M0,80 Q200,40 400,80 T800,80 T1200,80 L1200,120 L0,120 Z"
                dur="3s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>

        {/* Floating Fish (Background Decoration) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <FloatingFish emoji="🐠" baseLeft="10%" baseTop="20%" xOffset={100} yOffset={-80} />
          <FloatingFish emoji="🐟" baseLeft="50%" baseTop="72%" xOffset={-120} yOffset={100} />
          <FloatingFish emoji="🐡" baseLeft="80%" baseTop="30%" xOffset={70} yOffset={-120} />
        </div>

        {/* Hero Text */}
        <div 
          className="relative z-10 text-center px-4"
          style={{ transform: `translateY(${scroll * 0.5}px)` }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
            REVIVE THE BLUE
          </h1>
          <p className="text-2xl mb-8 text-cyan-100 max-w-2xl mx-auto">
            A space for solutions, updates and real impact.
          </p>
          <button 
            onClick={() => document.getElementById('news').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Discover Ocean Conservation 🌊
          </button>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gradient-to-b from-blue-950 to-cyan-950 mt-[-5rem]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-cyan-100 mb-16">
            <span className="border-b-4 border-cyan-400/60 pb-2">🌊 OCEAN CONSERVATION NEWS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {oceanNews.map((news, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-blue-900/70 to-cyan-900/50 backdrop-blur-sm border border-cyan-500/40 rounded-xl p-6 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{news.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-cyan-300/80 text-sm">{news.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-cyan-100 mb-3">{news.title}</h3>
                    <p className="text-cyan-200/80 leading-relaxed">{news.summary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Habit Spinner Section */}
      <section className="py-20 bg-gradient-to-b from-cyan-950 to-blue-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-cyan-100 mb-16 text-center">
            <span className="border-b-4 border-cyan-400/60 pb-2">🔄 DIVE INTO ACTION</span>
          </h2>
          <div className="flex justify-center">
            <Habitspinner />
          </div>
        </div>
      </section>

    </div>
    
  );
};

export default Solutions;
