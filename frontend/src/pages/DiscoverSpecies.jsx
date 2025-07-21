import Nav from "./Nav";
import './species.css'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

import background from '../../Assets/background_discover_species.png';
import manta1img from '../../Assets/manta1.png'
import manta2img from '../../Assets/manta2.png'



const data = {
  species: [
    {
      name: "Clownfish",
      image: "../Assets/clownfish.jpeg",
      description: "Lives in sea anemones, part of coral reef ecosystems.",
      status: "Least Concern",
    },
    {
      name: "Lionfish",
      image: "../Assets/lionfish.jpg",
      description: "Venomous predator affecting native ecosystems.",
      status: "Invasive",
    },
    {
      name: "Blue Tang",
      image: "../Assets/Paletten-Doktorfisch_Münster.jpeg",
      description: "Famous for its appearance in coral reefs.",
      status: "Least Concern",
    },
    {
      name: "Mandarinfish",
      image: "../Assets/mandarinfish.jpg",
      description: "Known for its vivid coloration and reef habitat.",
      status: "Least Concern",
    },
    {
      name: "Great White Shark",
      image: "../Assets/White_shark.webp",
      description: "Apex predator facing threats from overfishing.",
      status: "Vulnerable",
    },
    {
      name: "Manta Ray",
      image: "../Assets/Dharavandhoo_Thila_-_Manata_Black_Pearl.jpeg",
      description: "Large filter-feeder known for its majestic flight.",
      status: "Vulnerable",
    },
  ],
  endangered: [
    {
      name: "Blue Whale",
      image: "../Assets/bluewhale.jpg",
      description:
        "Critically endangered due to overfishing and climate change.",
      learnMoreLink: "#",
    },
    {
      name: "Hawksbill Turtle",
      image: "../Assets/HawksbillTurtle.jpg",
      description:
        "Critically endangered due to habitat loss and illegal trade.",
      learnMoreLink: "#",
    },
  ],
};

const ColorMap = {
  "critically endangered": "border-red-600",
  "endangered": "border-orange-500",
  "vulnerable": "border-yellow-400",
  "near threatened": "border-lime-400",
  "least concern": "border-green-500",
  "extinct": "border-gray-700",
  "invasive": "border-purple-500"
};

const ShadowMap = {
  "critically endangered": "shadow-red-600",
  "endangered": "shadow-orange-500",
  "vulnerable": "shadow-yellow-400",
  "near threatened": "shadow-lime-400",
  "least concern": "hadow-green-500",
  "extinct": "shadow-gray-700",
  "invasive": "shadow-purple-500",
};



const DiscoverSpecies = ()=> {
  const manta1=useRef(null);
  const manta2=useRef(null);
  const headingRef = useRef(null);
  const bgTrigger =useRef(null);
  const bgRef =useRef(null);

      const handleMouseMove = (e,imageRef) => {
      const image = imageRef?.current;
      if (!image) return;
      const rect = image.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      const centerX = rect.width / 2 ;
      const centerY = rect.height / 2 ;

      const moveX = (offsetX - centerX) / centerX;
      const moveY = (offsetY - centerY) / centerY;

      const maxTilt = 15;
      gsap.to(image, {
          rotateY: moveX * maxTilt,
          rotateX: -moveY * maxTilt,
          transformPerspective: 450,
          transformOrigin: "center",
          x: moveX * 60,
          y: moveY * 60,
          duration: 0.4,
          scale: 1.05,
      });
  };

  const handleMouseLeave=(object) => {
    gsap.to(object, {
        rotateX: 0,
        rotateY: 0,
        scale:1,
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    }
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

  useGSAP(()=>{
    let split = new SplitText(headingRef.current)
    let chars = split.chars
    gsap.from(chars, {
      opacity: 0,
      yPercent: 120,
      duration: 1,
      ease: "back.out",
      stagger: 0.05,
    });

    if(manta1.current && manta2.current){
      gsap.to(manta1.current,{
        scrollTrigger:{
          trigger: ".banner",
          start: "top top",
          end: "bottom 50%",
          scrub: true,
        },
        xPercent: 50,
        yPercent: -20
      })
      gsap.to(manta2.current,{
        scrollTrigger:{
          trigger: ".banner",
          start: "top top",
          end: "bottom 50%",
          scrub: true,
        },
        xPercent: -50,
        yPercent: -20
      })
    }

    gsap.to(bgRef.current, {
      scrollTrigger: {
        trigger: bgTrigger.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
      opacity: 0.6,
    });

  },[]);

  return (
    <>
    <Nav/>
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-5] bg-black opacity-0" ref={bgRef}/>
    <div className="banner fixed top-0 left-0 h-screen w-screen -z-10 bg-cover bg-center overflow-hidden m-0 p-0" style={{ backgroundImage: `url(${background})`}}></div>
      <img src={manta1img} alt="manta1" className='absolute top-[43%] left-[7%] w-[30%] z-10' 
      ref={manta1}
      onMouseMove={(e)=>handleMouseMove(e, manta1)}
      onMouseLeave={()=>handleMouseLeave(manta1.current)}      
      />
      <img src={manta2img} alt="manta2" className='absolute top-[17%] left-[55%] z-10 w-[25%]'
      ref={manta2}
      onMouseMove={(e)=>handleMouseMove(e, manta2)}
      onMouseLeave={()=>handleMouseLeave(manta2.current)}
     />
    <div ref={headingRef} className='main-heading h-screen w-full text-[7rem] font-extrabold text-white text-center relative my-8 flex items-center justify-center tracking-wide m-0 p-0'   style={{textShadow: "0 4px 8px rgba(0, 188, 212, 0.4), 0 0 20px rgba(0, 188, 212, 0.3)"}}><h1>Discover Species</h1></div>
    <div className='cursorEffect pointer-events-none fixed h-[5vw] w-[5vw] rounded-[50%] transform translate-x-[-50%] translate-y-[-50%] z-999 backdrop-invert transition-all duration-[10ms] ease-linear'/>
    <div className="min-h-screen">
      <div ref={bgTrigger}>
      <section className="p-10">
        <h3 className="text-3xl font-bold mb-6 text-white">Explore Species</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.species.map((species) => {
            const color = ColorMap[species.status.toLowerCase()] || "gray-300";
            const glow = ShadowMap[species.status.toLowerCase()] || "";
            return (
              <div
                key={species.name}
                className={`p-4 rounded-xl bg-[#F1E4C3] transition-transform ease-linear transform hover:scale-105 hover:shadow-2xl ${glow}`}
              >
                <img
                  src={species.image}
                  alt={species.name}
                  className="rounded-lg mb-3 w-full object-cover h-48"
                />
                <h4 className="text-lg font-semibold">{species.name}</h4>
                <p className="text-sm italic leading-relaxed">
                  {species.description}
                </p>
                <span className={`inline-block mt-2 px-3 py-1 text-xs rounded-full border-[3px] ${color}`}>
                  {species.status}
                </span>
              </div>
            );
          })}
        </div>
      </section>
      <section className="p-10">
        <h3 className="text-3xl font-bold mb-6 text-white">Endangered Species Spotlight</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {data.endangered.map((species) => (
            <div key={species.name} className="p-6 rounded-lg bg-[#F1E4C3] transition-transform ease-linear transform hover:scale-105 hover:shadow-2xl shadow-red-600">
              <img
                src={species.image}
                alt={species.name}
                className="rounded mb-4 w-full object-cover h-64"
              />
              <h4 className="text-2xl font-semibold">{species.name}</h4>
              <p className="text-sm mt-2">{species.description}</p>
              <button
                className={`mt-4 px-4 py-2 rounded-md border border-red-600 hover:bg-red-600 hover:text-white transition-all`}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>
      </div>
      <footer className='footer w-full flex flex-col h-[15em] justify-center items-center bg-[#1a1a1a] text-white rounded-t-2xl mt-[1em] z-1 shadow-md'>
        <h1>Just A footer</h1>
        <p>created by team rocket</p>
      </footer>
    </div>
    </>
  );
}

export default DiscoverSpecies
