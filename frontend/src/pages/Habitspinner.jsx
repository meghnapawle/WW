import React, { useState } from 'react';

const OceanHabitSpinner = () => {
  const oceanHabits = [
    { name: "Use Reusable Water Bottle", icon: "🚰", color: "#4FC3F7" },
    { name: "Beach Cleanup", icon: "🏖️", color: "#29B6F6" },
    { name: "No Single-Use Plastics", icon: "🚫", color: "#03A9F4" },
    { name: "Support Ocean Charities", icon: "💝", color: "#0288D1" },
    { name: "Eat Sustainable Seafood", icon: "🐟", color: "#0277BD" },
    { name: "Learn About Marine Life", icon: "📚", color: "#01579B" },
    { name: "Reduce Water Usage", icon: "💧", color: "#006064" },
    { name: "Use Reef-Safe Sunscreen", icon: "🧴", color: "#00838F" },
    { name: "Share Ocean Facts", icon: "📱", color: "#0097A7" },
    { name: "Plant Seagrass/Kelp", icon: "🌱", color: "#00ACC1" },
    { name: "Choose Eco-Friendly Products", icon: "🌿", color: "#00BCD4" },
    { name: "Report Ocean Pollution", icon: "📞", color: "#26C6DA" }
  ];

  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selectedHabit, setSelectedHabit] = useState(null);
  const [spinRotation, setSpinRotation] = useState(0);

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setShowResult(false);
    setSelectedHabit(null);
    
    // Random spin between 3-8 full rotations + random angle
    const spins = Math.floor(Math.random() * 6) + 3;
    const finalAngle = Math.random() * 360;
    const totalRotation = spins * 360 + finalAngle;
    
    setSpinRotation(prev => prev + totalRotation);
    
    // Calculate which habit was selected
    const segmentAngle = 360 / oceanHabits.length;
    const normalizedAngle = (360 - (finalAngle % 360)) % 360;
    const selectedIndex = Math.floor(normalizedAngle / segmentAngle);
    
    setTimeout(() => {
      setSelectedHabit(oceanHabits[selectedIndex]);
      setIsSpinning(false);
      setShowResult(true);
    }, 3000);
  };

  const resetWheel = () => {
    setShowResult(false);
    setSelectedHabit(null);
  };

  const segmentAngle = 360 / oceanHabits.length;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 p-8">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          🌊 spin to save the sea 🐠
        </h2>
        
        <div className="relative flex justify-center items-center mb-8">
          {/* Wheel Container */}
          <div className="relative">
            {/* Pointer */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-20">
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-red-500 drop-shadow-lg"></div>
            </div>
            
            {/* Wheel */}
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
              <svg 
                className="w-full h-full transition-transform duration-[3000ms] ease-out"
                style={{ transform: `rotate(${spinRotation}deg)` }}
                viewBox="0 0 200 200"
              >
                {oceanHabits.map((habit, index) => {
                  const startAngle = index * segmentAngle;
                  const endAngle = (index + 1) * segmentAngle;
                  
                  // Convert to radians
                  const startRad = (startAngle * Math.PI) / 180;
                  const endRad = (endAngle * Math.PI) / 180;
                  
                  // Calculate path for segment
                  const largeArcFlag = segmentAngle > 180 ? 1 : 0;
                  const x1 = 100 + 90 * Math.cos(startRad);
                  const y1 = 100 + 90 * Math.sin(startRad);
                  const x2 = 100 + 90 * Math.cos(endRad);
                  const y2 = 100 + 90 * Math.sin(endRad);
                  
                  const pathData = `M 100 100 L ${x1} ${y1} A 90 90 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
                  
                  // Calculate text position
                  const textAngle = startAngle + segmentAngle / 2;
                  const textRad = (textAngle * Math.PI) / 180;
                  const textX = 100 + 60 * Math.cos(textRad);
                  const textY = 100 + 60 * Math.sin(textRad);
                  
                  return (
                    <g key={index}>
                      <path
                        d={pathData}
                        fill={habit.color}
                        stroke="white"
                        strokeWidth="2"
                        className="hover:opacity-80 transition-opacity"
                      />
                      <text
                        x={textX}
                        y={textY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="fill-white font-bold text-xs"
                        transform={`rotate(${textAngle}, ${textX}, ${textY})`}
                      >
                        {habit.icon}
                      </text>
                      
                    </g>
                  );
                })}
              </svg>
            </div>
            
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg flex items-center justify-center border-4 border-white">
              <span className="text-2xl">🎯</span>
            </div>
          </div>
        </div>
        
        {/* Spin Button */}
        <div className="text-center mb-6">
          <button
            onClick={spinWheel}
            disabled={isSpinning}
            className={`px-8 py-4 rounded-full font-bold text-white text-xl transition-all duration-300 transform ${
              isSpinning 
                ? 'bg-gray-400 cursor-not-allowed scale-95' 
                : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl'
            }`}
          >
            {isSpinning ? 'Spinning...' : 'Spin the Wheel!'}
          </button>
        </div>
        
        {/* Result Display */}
        {showResult && selectedHabit && (
          <div className="text-center bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-6 shadow-lg animate-pulse">
            <h2 className="text-3xl font-bold text-white mb-2">Your Ocean Action!</h2>
            <div className="text-6xl mb-2">{selectedHabit.icon}</div>
            <p className="text-2xl font-semibold text-white mb-4">{selectedHabit.name}</p>
            <button
              onClick={resetWheel}
              className="px-6 py-2 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Save More Oceans!
            </button>
          </div>
        )}
        
        {/* Loading Animation */}
        {isSpinning && (
          <div className="text-center">
            <div className="inline-flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <p className="text-gray-600 mt-2">Finding your ocean-saving action...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OceanHabitSpinner;