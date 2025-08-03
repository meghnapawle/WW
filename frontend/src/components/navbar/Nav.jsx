import './nav.css';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(CSSPlugin);

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
const links = ["/explore", "/threats", "/solutions", "/stories", "/infographics", "/quiz"];

function Nav() {
  const navbar = useRef(null);
  const liRef = useRef(null);
  const tl = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });
  const [expanded, setExpanded] = useState(false);
  const clickRef = useRef(null);

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

    if (isMobile) {
      gsap.set(nav, {
        position: "fixed",
        top: "20px",
        left: "20px",
        height: 'auto',
        textAlign: "center",
        width: "7vw",
        minWidth: "6em",
        display: "flex",
        justifyContent:"center",
        zIndex: 1000,
      });

      gsap.set(list, {
        visibility: "hidden",
        opacity: 0,
        display: "none"
      });
      setExpanded(false);
    } else {
      gsap.set(nav, {
        height: 'auto',
        display: "flex",
        flexDirection: "row",
        width: "97vw",
        justifyContent: "space-between",
        x: 0,
        left: "50%",
        xPercent: -50,
        textAlign: "left",
        position: "relative",
      });

      gsap.set(list, {
        visibility: "visible",
        opacity: 1,
        display: "flex",
        flexDirection: "row",
      });
      setExpanded(true);
    }
  },[isMobile])

  useEffect(() => {
    const nav = navbar.current;
    const list = liRef.current;
    if (!nav || !list) return;
    
    if (!isMobile) {
      return;
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

    if (clickRef.current) {
      clickRef.current.addEventListener("click", toggle);
    }

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
            <li key={index}>
              <a href={links[index]} style={{ textDecoration: 'none', color: 'inherit' }}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;