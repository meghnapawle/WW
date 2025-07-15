// src/components/CesiumGlobe.jsx
import React, { useEffect, useRef } from 'react';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import { Viewer } from 'cesium';

const CesiumGlobe = () => {
  const cesiumRef = useRef(null);

  useEffect(() => {
    const viewer = new Viewer(cesiumRef.current, {
      shouldAnimate: true,
    });

    return () => viewer.destroy();
  }, []);

  return <div ref={cesiumRef} style={{ height: '100vh', width: '100%' }} />;
};

export default CesiumGlobe;
