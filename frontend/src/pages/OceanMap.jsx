import React , {useState} from 'react'
import OLMap from '../components/OLMap.jsx';
import CesiumGlobe from '../components/CesiumGlobe.jsx';

const OceanMap = () => {
  const [view, setView] = useState('ol');
  return (
    <div>
<button className='gap-8 border-5 border-b-emerald-700 ' onClick={() => setView('ol')}>OpenLayers</button>
<button  className='gap-14 p-3 border-5 border-b-emerald-700 ' onClick={() => setView('cesium')}>Cesium</button>

{view === 'ol' ? <OLMap /> : <CesiumGlobe />}

    </div>
  )
}

export default OceanMap;


