import React,{useEffect,useState} from "react";

const BubbleTransition=({onComplete})=>
{
  const [isAnimating,setIsAnimating]=useState(false);
  
  useEffect(()=>
  {
    setIsAnimating(true);
    
    const timer=setTimeout(()=>
    {
      onComplete();
    },3000);
    
    return ()=>clearTimeout(timer);
  },[onComplete]);
  
  const generateBubbleWaves=()=>
  {
    const waves=[];
    const waveCount=5;
    
    for(let wave=0;wave<waveCount;wave++)
    {
      const bubblesInWave=[];
      const bubblesPerWave=12;
      
      for(let i=0;i<bubblesPerWave;i++)
      {
        const delay=wave*0.3+i*0.1;
        const size=Math.random()*60+20;
        const startX=Math.random()*window.innerWidth;
        const endX=startX+(Math.random()-0.5)*200;
        const opacity=Math.random()*0.8+0.2;
        
        bubblesInWave.push(
          <div
            key={`${wave}-${i}`}
            className="absolute rounded-full transition-bubble"
            style={{
              left:`${startX}px`,
              animationDelay:`${delay}s`,
              width:`${size}px`,
              height:`${size}px`,
              opacity:opacity,
              '--end-x':`${endX}px`,
              bottom: '-100px'
            }}
          />
        );
      }
      
      waves.push(
        <div key={wave} className="absolute w-full h-full">
          {bubblesInWave}
        </div>
      );
    }
    
    return waves;
  };
  
  return(
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
        
        @keyframes deepenColor {
          0% {
            background: linear-gradient(to bottom, #87CEEB 0%, #4A90E2 50%, #2E86AB 100%);
          }
          100% {
            background: linear-gradient(to bottom, #4A90E2 0%, #2E86AB 30%, #1B4965 60%, #0B1426 100%);
          }
        }
        
        @keyframes bubbleRiseTransition {
          0% {
            bottom: -100px;
            opacity: 0;
            transform: translateX(0px) scale(0.5);
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 0.8;
          }
          100% {
            bottom: 110vh;
            opacity: 0;
            transform: translateX(var(--end-x, 0px)) scale(1.2);
          }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        @keyframes rippleExpand {
          0% {
            width: 0px;
            height: 0px;
            opacity: 1;
          }
          100% {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }
        
        @media (max-width: 768px) {
          @keyframes rippleExpand {
            0% {
              width: 0px;
              height: 0px;
              opacity: 1;
            }
            100% {
              width: 200px;
              height: 200px;
              opacity: 0;
            }
          }
        }
        
        .transition-background {
          background: linear-gradient(to bottom, #4A90E2 0%, #2E86AB 30%, #1B4965 60%, #0B1426 100%);
          animation: deepenColor 3s ease-in-out forwards;
        }
        
        .transition-bubble {
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.1)
          );
          animation: bubbleRiseTransition 3s ease-out forwards;
          box-shadow: 
            inset 0 0 15px rgba(255, 255, 255, 0.3),
            0 0 25px rgba(255, 255, 255, 0.1);
        }
        
        .diving-title {
          background: linear-gradient(90deg, #00ffea, #00fbf7, #01ffc8);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 2s ease infinite, fadeInScale 0.8s ease-out;
        }
        
        .dot-1 { animation: dotPulse 1.5s ease-in-out infinite; animation-delay: 0s; }
        .dot-2 { animation: dotPulse 1.5s ease-in-out infinite; animation-delay: 0.3s; }
        .dot-3 { animation: dotPulse 1.5s ease-in-out infinite; animation-delay: 0.6s; }
        
        .ripple-1 { animation: rippleExpand 2s ease-out infinite; animation-delay: 0s; }
        .ripple-2 { animation: rippleExpand 2s ease-out infinite; animation-delay: 0.7s; }
        .ripple-3 { animation: rippleExpand 2s ease-out infinite; animation-delay: 1.4s; }
      `}</style>
      
      <div className={`fixed top-0 left-0 w-screen h-screen overflow-hidden z-[1000] ${isAnimating ? 'animating' : ''}`}>
        <div className="absolute top-0 left-0 w-full h-full transition-background" />
        
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {generateBubbleWaves()}
        </div>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10" style={{fontFamily: 'Inter, sans-serif'}}>
          <h2 className="text-5xl md:text-4xl sm:text-3xl font-bold mb-5 diving-title">
            Diving Deep...
          </h2>
          <div className="flex justify-center gap-2.5 sm:gap-2">
            <span className="text-3xl md:text-2xl sm:text-xl dot-1">•</span>
            <span className="text-3xl md:text-2xl sm:text-xl dot-2">•</span>
            <span className="text-3xl md:text-2xl sm:text-xl dot-3">•</span>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 border-2 md:border border-white/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 ripple-1"></div>
          <div className="absolute top-1/2 left-1/2 border-2 md:border border-white/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 ripple-2"></div>
          <div className="absolute top-1/2 left-1/2 border-2 md:border border-white/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 ripple-3"></div>
        </div>
      </div>
    </>
  );
};

export default BubbleTransition;