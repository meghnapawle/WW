import React from 'react';
import Nav from '../components/navbar/Nav';

function Explore() {
  return (
    <div>
      <Nav />
      <div className="min-h-screen bg-blue-50 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
            Explore Ocean Life
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Marine Ecosystems</h2>
              <p className="text-gray-600">
                Discover the diverse underwater ecosystems that support countless species.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Deep Sea Creatures</h2>
              <p className="text-gray-600">
                Explore the mysterious creatures that live in the depths of our oceans.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Coral Reefs</h2>
              <p className="text-gray-600">
                Learn about the vibrant coral reef ecosystems and their inhabitants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
