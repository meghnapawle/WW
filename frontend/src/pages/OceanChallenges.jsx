import React, { useState, useEffect } from "react";
import Habitspinner from "./Habitspinner.jsx";
import Nav from "../components/navbar/Nav";
import { motion, useScroll, useTransform } from "framer-motion";

const FloatingIcon = ({ emoji, baseLeft, baseTop, xOffset, yOffset }) => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 500], [0, xOffset]);
  const y = useTransform(scrollY, [0, 1000], [0, yOffset]);

  return ( 
    <motion.div
      style={{
        position: "absolute",
        left: baseLeft,
        top: baseTop,
        x,
        y,
        fontSize: "4rem",
        zIndex: 1,
        pointerEvents: "none",
      }}
      whileHover={{ scale: 1.2, rotate: 10 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      {emoji}
    </motion.div>
  );
};

const OceanChallenges = () => {
  const [scroll, setScroll] = useState(0);
  const [activeTab, setActiveTab] = useState('threats');

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const threatCategories = [
    {
      id: 'climate',
      title: 'Climate Crisis & Glacial Melt',
      icon: '🌡️',
      color: 'from-red-600 to-orange-600',
      threats: [
        {
          name: 'Glacial Ice Loss',
          description: 'Arctic sea ice is disappearing at 13% per decade, causing habitat loss for polar bears, seals, and Arctic species.',
          impacts: ['Sea level rise affecting 630 million people', 'Loss of albedo effect accelerating warming', 'Disrupted ocean circulation patterns'],
          image: 'https://images.unsplash.com/photo-1578662996442-374dcbcb3a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Ocean Acidification',
          description: 'Oceans have absorbed 30% of human CO2 emissions, reducing pH by 0.1 units since pre-industrial times.',
          impacts: ['Shell-forming organisms struggling to build shells', 'Coral reef dissolution', 'Fish behavior and reproduction affected'],
          image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Rising Sea Temperatures',
          description: 'Ocean temperatures have risen 0.33°C since 1969, triggering massive coral bleaching events.',
          impacts: ['50% of coral reefs lost in past 30 years', 'Marine species migration patterns disrupted', 'Increased hurricane intensity'],
          image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    {
      id: 'pollution',
      title: 'Pollution & Contamination',
      icon: '🏭',
      color: 'from-gray-600 to-black',
      threats: [
        {
          name: 'Plastic Pollution',
          description: '8 million tons of plastic enter oceans annually, forming massive garbage patches and microplastic contamination.',
          impacts: ['1 million seabirds and 100,000 marine mammals die yearly', 'Microplastics in food chain affecting humans', 'Entanglement and ingestion by marine life'],
          image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Chemical Runoff',
          description: 'Agricultural fertilizers and industrial chemicals create massive dead zones where no marine life can survive.',
          impacts: ['400+ dead zones covering 245,000 km²', 'Harmful algal blooms producing toxins', 'Groundwater contamination affecting coastal communities'],
          image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Oil Spills & Industrial Waste',
          description: 'Major oil spills and continuous industrial discharge devastate marine ecosystems for decades.',
          impacts: ['Long-term ecosystem damage', 'Seabird and marine mammal deaths', 'Coastal community livelihood destruction'],
          image: 'https://images.unsplash.com/photo-1604985119538-b0d8db966c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    {
      id: 'biodiversity',
      title: 'Endangered Species Crisis',
      icon: '🐋',
      color: 'from-purple-600 to-pink-600',
      threats: [
        {
          name: 'Marine Mammal Decline',
          description: 'Whales, dolphins, and seals face extinction from ship strikes, fishing nets, and habitat loss.',
          impacts: ['North Atlantic right whales: only 340 remain', 'Vaquita porpoise: fewer than 10 left', 'Monk seals critically endangered across species'],
          image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Sea Turtle Extinction',
          description: 'All seven sea turtle species are threatened, with hawksbill and Kemp\'s ridley critically endangered.',
          impacts: ['Plastic ingestion mistaken for jellyfish', 'Coastal development destroying nesting beaches', 'Climate change affecting sex ratios of hatchlings'],
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Shark Population Collapse',
          description: 'Shark populations have declined 71% since 1970, disrupting marine food webs globally.',
          impacts: ['100 million sharks killed annually', 'Ecosystem cascade effects', 'Loss of apex predator regulation'],
          image: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    {
      id: 'human',
      title: 'Human Impact & Exploitation',
      icon: '⚓',
      color: 'from-blue-600 to-indigo-600',
      threats: [
        {
          name: 'Overfishing & Illegal Fishing',
          description: '90% of large fish stocks are depleted, with illegal fishing worth $23 billion annually.',
          impacts: ['Bluefin tuna populations collapsed by 97%', '2.3 billion people depend on fish for protein', 'Small-scale fishers losing livelihoods'],
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Coastal Development',
          description: 'Uncontrolled coastal development destroys mangroves, coral reefs, and critical marine habitats.',
          impacts: ['50% of global mangroves destroyed', 'Coastal communities losing natural storm protection', 'Loss of nursery habitats for marine species'],
          image: 'https://images.unsplash.com/photo-1571123777119-47b29c8bc827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Deep-Sea Mining',
          description: 'New threat of mining the seafloor for minerals could devastate unknown deep-sea ecosystems.',
          impacts: ['Destruction of slow-growing deep-sea communities', 'Sediment plumes affecting vast areas', 'Loss of undiscovered species'],
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ]
    }
  ];

  const solutionCategories = [
    {
      id: 'conservation',
      title: 'Marine Conservation & Protection',
      icon: '🛡️',
      color: 'from-green-600 to-emerald-600',
      solutions: [
        {
          name: 'Marine Protected Areas (MPAs)',
          description: 'Creating no-take zones and protected habitats to allow ecosystem recovery and species conservation.',
          achievements: ['30% of oceans to be protected by 2030', '18,000+ MPAs covering 8% of oceans', 'Fish populations recover 600% in protected areas'],
          image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Species Recovery Programs',
          description: 'Targeted conservation efforts to save critically endangered species through breeding and habitat restoration.',
          achievements: ['California sea otter population grew from 50 to 3,000', 'Humpback whale recovery from 5,000 to 80,000', 'Green turtle nesting sites protected worldwide'],
          image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Coral Restoration',
          description: 'Advanced techniques growing coral 40x faster and making them heat-resistant to rebuild reef ecosystems.',
          achievements: ['10,000+ coral fragments planted annually', '95% survival rate with new techniques', 'Heat-resistant coral varieties developed'],
          image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    {
      id: 'cleanup',
      title: 'Pollution Cleanup & Prevention',
      icon: '♻️',
      color: 'from-cyan-600 to-blue-600',
      solutions: [
        {
          name: 'Ocean Cleanup Systems',
          description: 'Revolutionary technology removing plastic from ocean garbage patches and preventing river pollution.',
          achievements: ['200,000+ pounds of plastic removed from Pacific', 'System 002 collecting 1 truck of plastic daily', '1,000+ cleanup systems planned globally'],
          image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Plastic Alternatives',
          description: 'Developing biodegradable alternatives to single-use plastics and implementing plastic bans.',
          achievements: ['127 countries banned single-use plastics', 'Biodegradable packaging solutions scaling up', 'Plastic production reduction targets set'],
          image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Water Treatment Technology',
          description: 'Advanced filtration and treatment systems preventing agricultural and industrial runoff.',
          achievements: ['Nutrient pollution reduced 50% in key watersheds', 'Dead zones showing signs of recovery', 'Green infrastructure protecting coastlines'],
          image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    {
      id: 'sustainable',
      title: 'Sustainable Ocean Use',
      icon: '🎣',
      color: 'from-teal-600 to-green-600',
      solutions: [
        {
          name: 'Sustainable Fisheries',
          description: 'Science-based fishing quotas, gear improvements, and aquaculture to meet food needs without depletion.',
          achievements: ['MSC-certified sustainable fisheries growing 20% annually', 'Bycatch reduced 80% with new gear designs', 'Aquaculture producing 50% of global seafood'],
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Blue Economy Development',
          description: 'Creating economic opportunities that depend on healthy oceans, aligning conservation with prosperity.',
          achievements: ['$2.5 trillion blue economy supporting 31 million jobs', 'Sustainable tourism generating $52 billion annually', 'Ocean-based renewable energy expanding rapidly'],
          image: 'https://images.unsplash.com/photo-1571123777119-47b29c8bc827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Climate Solutions',
          description: 'Ocean-based climate mitigation through blue carbon, renewable energy, and carbon capture.',
          achievements: ['Mangrove restoration storing 10x more carbon than forests', 'Offshore wind capacity growing 30% annually', 'Seagrass meadows being restored globally'],
          image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    {
      id: 'technology',
      title: 'Innovation & Technology',
      icon: '🔬',
      color: 'from-indigo-600 to-purple-600',
      solutions: [
        {
          name: 'AI Ocean Monitoring',
          description: 'Artificial intelligence and satellite technology providing real-time ocean health monitoring.',
          achievements: ['AI detecting illegal fishing with 90% accuracy', 'Satellite monitoring covering 100% of oceans', 'Early warning systems for algal blooms'],
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Biotechnology Solutions',
          description: 'Using biotechnology to develop coral probiotics, plastic-eating enzymes, and marine restoration tools.',
          achievements: ['Coral probiotics increasing survival by 40%', 'Plastic-eating enzymes breaking down bottles in hours', 'Genetic rescue programs for endangered species'],
          image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: 'Renewable Ocean Energy',
          description: 'Harnessing wave, tidal, and offshore wind energy to reduce fossil fuel dependence.',
          achievements: ['Offshore wind capacity reaching 35 GW globally', 'Wave energy pilots producing clean electricity', 'Floating solar farms on reservoirs expanding'],
          image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ]
    }
  ];

  const impactStats = [
    { number: '8M', label: 'Tons of plastic enter oceans yearly', color: 'text-red-400' },
    { number: '50%', label: 'Of coral reefs lost to bleaching', color: 'text-orange-400' },
    { number: '90%', label: 'Of large fish stocks depleted', color: 'text-red-400' },
    { number: '630M', label: 'People threatened by sea level rise', color: 'text-blue-400' },
    { number: '71%', label: 'Decline in shark populations', color: 'text-red-400' },
    { number: '13%', label: 'Arctic ice loss per decade', color: 'text-cyan-400' }
  ];

  const progressStats = [
    { number: '18K+', label: 'Marine Protected Areas created', color: 'text-green-400' },
    { number: '200K', label: 'Pounds of plastic removed', color: 'text-blue-400' },
    { number: '80K', label: 'Humpback whales recovered', color: 'text-green-400' },
    { number: '127', label: 'Countries banned single-use plastics', color: 'text-green-400' },
    { number: '95%', label: 'Coral restoration survival rate', color: 'text-emerald-400' },
    { number: '35GW', label: 'Offshore wind capacity globally', color: 'text-blue-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-indigo-950">
      <Nav />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Ocean Animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-indigo-900/60 to-slate-900/80"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <FloatingIcon emoji="🌊" baseLeft="10%" baseTop="20%" xOffset={100} yOffset={-80} />
          <FloatingIcon emoji="🐋" baseLeft="50%" baseTop="72%" xOffset={-120} yOffset={100} />
          <FloatingIcon emoji="🦈" baseLeft="80%" baseTop="30%" xOffset={70} yOffset={-120} />
          <FloatingIcon emoji="🐢" baseLeft="20%" baseTop="80%" xOffset={90} yOffset={-60} />
          <FloatingIcon emoji="🐙" baseLeft="70%" baseTop="15%" xOffset={-100} yOffset={90} />
        </div>

        {/* Hero Text */}
        <div 
          className="relative z-10 text-center px-4"
          style={{ transform: `translateY(${scroll * 0.5}px)` }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-cyan-200 to-indigo-200 bg-clip-text text-transparent">
            OCEAN CHALLENGES
          </h1>
          <p className="text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Understanding the threats facing our oceans and the solutions that can save them
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                setActiveTab('threats');
                document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
            >
              Explore Threats 🌡️
            </button>
            <button 
              onClick={() => {
                setActiveTab('solutions');
                document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
            >
              Discover Solutions 🛡️
            </button>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-blue-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            <span className="border-b-4 border-red-400/60 pb-2">🚨 CRISIS BY THE NUMBERS</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {impactStats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center p-6 bg-gradient-to-br from-slate-800/70 to-blue-900/50 backdrop-blur-sm border border-red-500/40 rounded-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section id="content" className="py-8 bg-gradient-to-b from-blue-950 to-indigo-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-full p-2 border border-slate-600/50">
              <button
                onClick={() => setActiveTab('threats')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'threats'
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                🌡️ Ocean Threats
              </button>
              <button
                onClick={() => setActiveTab('solutions')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'solutions'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                🛡️ Solutions & Progress
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Threats Content */}
      {activeTab === 'threats' && (
        <section className="py-20 bg-gradient-to-b from-indigo-950 to-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-red-300 mb-16">
              Critical Threats to Our Oceans
            </h2>
            
            {threatCategories.map((category, categoryIdx) => (
              <motion.div
                key={category.id}
                className="mb-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIdx * 0.2 }}
              >
                <div className="text-center mb-12">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-4`}>
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {category.threats.map((threat, threatIdx) => (
                    <motion.div
                      key={threatIdx}
                      className="group bg-gradient-to-br from-slate-800/70 to-red-900/30 backdrop-blur-sm border border-red-500/40 rounded-xl overflow-hidden hover:border-red-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105"
                    >
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={threat.image} 
                          alt={threat.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-red-300 mb-3">{threat.name}</h4>
                        <p className="text-gray-300 mb-4 leading-relaxed">{threat.description}</p>
                        <div>
                          <h5 className="text-lg font-semibold text-red-400 mb-2">Critical Impacts:</h5>
                          <ul className="space-y-1">
                            {threat.impacts.map((impact, idx) => (
                              <li key={idx} className="text-gray-400 text-sm flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                {impact}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Solutions Content */}
      {activeTab === 'solutions' && (
        <section className="py-20 bg-gradient-to-b from-indigo-950 to-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            {/* Progress Statistics */}
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-green-300 mb-8">Conservation Success Stories</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {progressStats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="text-center p-6 bg-gradient-to-br from-slate-800/70 to-green-900/50 backdrop-blur-sm border border-green-500/40 rounded-xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                    <p className="text-gray-300 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <h2 className="text-4xl font-bold text-center text-green-300 mb-16">
              Solutions Saving Our Oceans
            </h2>
            
            {solutionCategories.map((category, categoryIdx) => (
              <motion.div
                key={category.id}
                className="mb-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIdx * 0.2 }}
              >
                <div className="text-center mb-12">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-4`}>
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {category.solutions.map((solution, solutionIdx) => (
                    <motion.div
                      key={solutionIdx}
                      className="group bg-gradient-to-br from-slate-800/70 to-green-900/30 backdrop-blur-sm border border-green-500/40 rounded-xl overflow-hidden hover:border-green-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 transform hover:scale-105"
                    >
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={solution.image} 
                          alt={solution.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-green-300 mb-3">{solution.name}</h4>
                        <p className="text-gray-300 mb-4 leading-relaxed">{solution.description}</p>
                        <div>
                          <h5 className="text-lg font-semibold text-green-400 mb-2">Key Achievements:</h5>
                          <ul className="space-y-1">
                            {solution.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-gray-400 text-sm flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Action Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-blue-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-cyan-100 mb-16 text-center">
            <span className="border-b-4 border-cyan-400/60 pb-2">🔄 TAKE ACTION NOW</span>
          </h2>
          <div className="flex justify-center">
            <Habitspinner />
          </div>
        </div>
      </section>

    </div>
  );
};

export default OceanChallenges;
