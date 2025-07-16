import './App.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText)

function App() {
  const headingRef = useRef(null)
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
      duration: 1.1,
      ease: "back.out",
      stagger: 0.13,
    });
  },[])

  return (
    <>
    <div className='banner'></div>
    <div ref={headingRef} className='main-heading'><h1>Ocean</h1></div>
    <div className='cursorEffect'/>
    </>
  )
}

export default App
