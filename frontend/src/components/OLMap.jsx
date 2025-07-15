// src/components/OLMap.jsx
import React, { useRef, useEffect } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';

const OLMap = () => {
  const olRef = useRef();

  useEffect(() => {
    const map = new Map({
      target: olRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }, []);

  return <div ref={olRef} className='w-full h-screen' />;
};

export default OLMap;
