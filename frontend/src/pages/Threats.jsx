import React from 'react';
import Nav from '../components/navbar/Nav';

function Threats() {
  return (
    <div>
      <Nav />
      <div className="min-h-screen bg-red-50 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-red-900 mb-8 text-center">
            Ocean Threats
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-red-800 mb-4">Climate Change</h2>
              <p className="text-gray-700 mb-4">
                Rising ocean temperatures and acidification are affecting marine ecosystems worldwide.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Ocean warming</li>
                <li>• Sea level rise</li>
                <li>• Ocean acidification</li>
                <li>• Coral bleaching</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-red-800 mb-4">Pollution</h2>
              <p className="text-gray-700 mb-4">
                Various forms of pollution are contaminating our oceans and harming marine life.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Plastic waste</li>
                <li>• Chemical runoff</li>
                <li>• Oil spills</li>
                <li>• Microplastics</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-red-800 mb-4">Overfishing</h2>
              <p className="text-gray-700 mb-4">
                Unsustainable fishing practices are depleting fish populations and disrupting marine food chains.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Commercial overfishing</li>
                <li>• Illegal fishing</li>
                <li>• Bycatch issues</li>
                <li>• Habitat destruction</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-red-800 mb-4">Habitat Loss</h2>
              <p className="text-gray-700 mb-4">
                Coastal development and human activities are destroying critical marine habitats.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Coastal development</li>
                <li>• Mangrove destruction</li>
                <li>• Seabed mining</li>
                <li>• Wetland loss</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Threats;
