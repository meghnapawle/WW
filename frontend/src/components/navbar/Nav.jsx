// uses ".banner" for scroll trigger
// navbar expands when bottom of banner reaches 70% of viewport
// refer lines 118 and 119 to change trigger behaviour

import './nav.css';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);


const show_nav= {
            x:0 ,
            display :'flex',
            width: '97vw',
            duration: 0.5, 
            ease: "power2.out"
        }

const show_links={
        visibility: "visible",
        display:'flex',
        opacity: 1,
        duration: 0, 
        ease: "power2.out"
    }


const hide_nav= {
        stagger:0,
        // display: 'block',
        textAlign:"center",
        width:'7vw',
        left: "50%",
        xPercent: -50,
        duration: 0.3,
    }

const hide_links= {
        delay:0.1,
        visibility: "hidden",
        opacity: 0,
        display: 'none',
        duration: 0.1    
    }

const nav_items=["Explore", "Threats", "Solutions", "Stories", "Infographics", "Quiz"]
function Nav(){
    const navbar = useRef(null)
    const li = useRef(null)
    const tl = useRef(null);


    const handleMouseEnter = ()=>{
    console.log("evevt triggered")
    const navBar=navbar.current
    const links=li.current
    if (!navBar || !links) {
        console.warn("Refs not ready on mouse enter.");
        return;
    }

    console.log("Mouse Enter - Animation Started");
    if(navBar.classList.contains("active")) return;
    if (tl.current) {
        tl.current.kill();
    }
    tl.current=gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.current
    .to(navBar,show_nav)
    .to(links, show_links)
    }

    const handleMouseOut = ()=>{
    console.log("mouseout triggered")
    const navBar=navbar.current
    const links=li.current
    if (!navBar || !links) {
        console.warn("Refs not ready on mouse out.");
        return;
    }
    if(navBar.classList.contains("active")) return;
    if (tl.current) {
            tl.current.kill();
        }
    console.log("Mouse out - Animation Started");
    tl.current=gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.current
        .to(links, hide_links)
        .to(navBar, hide_nav);

}
    useGSAP(()=>{
        const element= navbar.current
        const liRef=li.current
        gsap.set(element, {
            textAlign:"center",
            width:'7vw',
            left: "50%",
            xPercent: -50,
        })
        gsap.set(liRef, {
            visibility: "hidden",
            opacity: 0,
            display: 'none'
        })
        if(navbar.current ){
            element.addEventListener('pointerenter', handleMouseEnter);
            element.addEventListener('pointerleave', handleMouseOut);
        }

        
        ScrollTrigger.create({
            trigger: ".banner",
            start : "bottom 70%",
            toggleClass: {targets: ".nav", className: "active"},
            onEnter: () => {
                console.log("Scroll Enter: Expand Nav");
                gsap.to(element, show_nav);
                gsap.to(liRef, show_links);
            },
            onLeaveBack: () => {
                console.log("Scroll Leave Back:Contract Nav");
                gsap.to(liRef, hide_links);
                gsap.to(element, hide_nav);
            
            },
            // markers: true,
        })
        

        return ()=> {
            if(navbar.current){
            element.removeEventListener('pointerenter', handleMouseEnter);
            element.removeEventListener('pointerleave', handleMouseOut);
            }
        }
},[])
    return(
        <nav ref={navbar} className='nav' >
            <div className='logo'>
                <p>Ocean</p>
            </div>
            <div>
                <ul ref={li} className='list'>
                    {nav_items.map((item, index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default Nav
