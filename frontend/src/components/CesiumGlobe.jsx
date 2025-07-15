// src/components/CesiumGlobe.jsx
import React, { useEffect, useRef } from 'react';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import Cesium, { Viewer , SceneMode } from 'cesium';
// import Cesium from 'cesium';

const CesiumGlobe = () => {
  const cesiumRef = useRef(null);

  useEffect(() => {
    const viewer = new Viewer(cesiumRef.current, {
      sceneMode :Cesium.SceneMode.SCENE2D,
      shouldAnimate: true,
    });

    return () => viewer.destroy();
  }, []);

  return <div ref={cesiumRef} 
  className='w-full h-screen' />;
};

export default CesiumGlobe;
