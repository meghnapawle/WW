// uses ".banner" for scroll trigger
// navbar expands when bottom of banner reaches 70% of viewport
// refer lines 154 and 155 to change trigger behaviour

import './nav.css';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger, CSSPlugin);

const show_nav = {
  x: 0,
  display: 'flex',
  flexDirection:'row',
  width: '97vw',
  duration: 0.5,
  ease: "power2.out",
  justifyContent: 'space-between',
};

const show_links = {
  visibility: 'visible',
  display: 'flex',
  flexDirection:'row',
  opacity: 1,
  duration: 0.2,
  ease: "power2.out"

};

const show_links_mobile = {
  visibility: 'visible',
  display: 'flex',
  opacity: 1,
  duration: 0.2,
  ease: "power2.out"

};

const hide_nav = {
  textAlign: 'center',
  width: '7vw',
  left: '50%',
  xPercent: -50,
  duration: 0.3,
};

const hide_links = {
  delay:0.1,
  visibility: 'hidden',
  opacity: 0,
  display: 'none',
  duration: 0.2
};


const nav_items = ["Explore", "Threats", "Solutions", "Stories", "Infographics", "Quiz"];

function Nav() {
  const navbar = useRef(null);
  const liRef = useRef(null);
  const tl = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });
  const [expanded, setExpanded] = useState(false);
  const scrollTriggerRef = useRef(null);
  const clickRef = useRef(null)

  const expand = () => {
    if (tl.current) tl.current.kill();
    gsap.to(clickRef.current, {width:"auto"})
    tl.current = gsap.timeline();
    tl.current.to(navbar.current, show_nav).to(liRef.current, show_links);
  };

  const collapse = () => {
    if (tl.current) tl.current.kill();
    tl.current = gsap.timeline();
    tl.current
            .to(liRef.current, hide_links)
            .to(navbar.current, hide_nav)
            .to(navbar.current, {justifyContent: "center"})
  };

  const mobileExpand= ()=>{
    if (tl.current) tl.current.kill();
    gsap.set(navbar.current, { flexDirection: "column", alignItems: "center" });
    gsap.set(liRef.current, { flexDirection: "column" });

    tl.current = gsap.timeline();
    tl.current.to(navbar.current, 
      {
        x: 0,
        height: "23.5em",
        display: 'flex',
        width: '97vw',
        duration: 0.5,
        ease: "power2.out",
        justifyContent: 'space-between',

      }

    )
    .to(liRef.current, show_links_mobile);
  }

  const mobileCollapse = () => {
  if (tl.current) tl.current.kill();
  tl.current = gsap.timeline();
  tl.current
    .to(liRef.current, hide_links)
    .to(navbar.current, {
      height: "auto",
      duration: 0.4,
      ease: "power2.inOut",
      width:"7vw",
    }
    )}

  useEffect(()=>{
    const nav = navbar.current;
    const list = liRef.current;

    if (!nav || !list) return;
      gsap.set(nav, {
        height: 'auto',
        textAlign: "center",
        width: "7vw",
        minWidth: "6em",
        left: "50%",
        xPercent: -50,
        display: "flex",
        justifyContent:"center",
      });

      gsap.set(list, {
        visibility: "hidden",
        opacity: 0,
        display: "none"
      });
  },[isMobile])
  useEffect(() => {
    const nav = navbar.current;
    const list = liRef.current;

    if (!nav || !list) return;
    if (!isMobile) {
      nav.addEventListener("mouseenter", expand);
      nav.addEventListener("mouseleave", collapse);

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: ".banner",
        start: "bottom 70%",
        onEnter: () => {
          expand();
          setExpanded(true);
        },
        onLeaveBack: () => {
          collapse();
          setExpanded(false);
        }
      });

      return () => {
        nav.removeEventListener("mouseenter", expand);
        nav.removeEventListener("mouseleave", collapse);
        scrollTriggerRef.current?.kill();
      };
    }

    const toggle = () => {
      if (expanded) {
        mobileCollapse();
        setExpanded(false);
      } else {
        gsap.to(clickRef.current, {width:"100%"})
        mobileExpand();
        setExpanded(true);
      }
    };

    clickRef.current.addEventListener("click", toggle);

    return () => {
      if(clickRef.current){
      clickRef.current.removeEventListener("click", toggle);
      }
    };
  }, [isMobile, expanded]);

 
  return (
    <nav ref={navbar} className="nav">
      <div ref={clickRef} className="logo">
        <p>Ocean</p>
      </div>
      <div>
        <ul ref={liRef} className="list">
          {nav_items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
