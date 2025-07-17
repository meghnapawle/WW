import './items.css';
import { useRef, useEffect, useState, forwardRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);


const items = [
  {
    name: "Explore",
    imageUrl: "../../Assets/explore_image.webp",
    text: "Dive into the depths — discover the secrets of the sea.",
  },
  {
    name: "Threats",
    imageUrl: "../../Assets/threats_image.webp",
    text: "Facing the tide — the dangers our oceans endure.",
  },
  {
    name: "Solutions",
    imageUrl: "../../Assets/solutions_image.webp",
    text: "Turning the tide — how we can protect our oceans.",
    line2: "Hope floats — real answers for a healthier sea."
  },
  {
    name: "Stories",
    imageUrl: "../../Assets/stories_image.jpeg",
    text: "Voices of the ocean — tales from the deep.",
  },
  {
    name: "Infographics",
    imageUrl: "../../Assets/infographics_image.jpg",
    text: "The ocean, visualized — facts that make waves.",
  },
  {
    name: "Quiz",
    imageUrl: "../../Assets/quiz_image.png",
    text: "Test your tides — how well do you know the ocean?",
  }
];

const BannerItems = forwardRef(({ item }, ref) => (
  <div className="banner-item" ref={ref}>
    <img className="item-image" src={item.imageUrl} alt={item.name} />
    <div className="text">
      <h1>{item.name}</h1>
      <p className="text">{item.text}</p>
    </div>
  </div>
));

function Items(){
  const cardRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const bannerRef = useRef(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);
        return () => clearInterval(interval);
  }, []);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const el = bannerRef.current;

    gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => setIsAnimating(false)
        }
      );
  }, [currentIndex]);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      scrollTrigger:{
        trigger:cardRef.current,
        start: "top 80%",
        end: "+=200",
        scrub: true
      },
      opacity: 0,
      x: 50,
      duration: 1.2,
      ease: "back.out"
    });
  }, []);

    return(
            <div ref={cardRef} className='Item-cards'>
                <button className="arrow left" onClick={nextItem}>
                    &#8592;
                </button>
                <BannerItems ref={bannerRef} item={items[currentIndex]} />
                <button className="arrow right" onClick={prevItem}>
                    &#8594;
                </button>
            </div>

    )
}
export default Items