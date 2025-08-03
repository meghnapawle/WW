import React, { useState, useEffect } from 'react';
import Nav from '../components/navbar/Nav';

const newsArticles = [
  // Latest News
  {
    id: 1,
    category: "Latest News",
    title: "Antarctic Ice Sheet Shows Unprecedented Melting Patterns in 2025",
    excerpt: "Satellite data reveals alarming acceleration in ice loss across West Antarctica, with implications for global sea level rise affecting coastal cities worldwide.",
    date: "August 2, 2025",
    author: "Dr. Emily Rodriguez",
    source: "International Antarctic Research Consortium",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "8 min read",
    content: `
      <p class="text-lg text-gray-100 mb-6 leading-relaxed">Recent satellite observations from the European Space Agency's CryoSat-2 mission have documented unprecedented ice loss patterns across the West Antarctic Ice Sheet during the 2024-2025 summer season.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4">Key Findings</h3>
      <p class="text-gray-200 mb-4">The study, published in <em>Nature Climate Change</em>, reveals that the Pine Island and Thwaites glaciers have accelerated their retreat by 35% compared to the previous decade. This acceleration is attributed to warming ocean currents penetrating beneath the ice shelves.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4">Global Implications</h3>
      <p class="text-gray-200 mb-4">Dr. Maria Santos, lead glaciologist at the International Antarctic Research Consortium, stated: "These changes represent a tipping point in Antarctic ice dynamics. We're witnessing irreversible changes that will contribute 3-4 mm annually to global sea level rise."</p>
      
      <h3 class="text-2xl font-bold text-white mb-4">Research Methodology</h3>
      <p class="text-gray-200 mb-4">The research team utilized advanced radar altimetry and gravimetric measurements from multiple satellites, including NASA's ICESat-2 and the GRACE Follow-On mission. Ground-based measurements from research stations corroborated the satellite findings.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4">Future Projections</h3>
      <p class="text-gray-200 mb-4">Climate models suggest that without significant global emission reductions, the West Antarctic Ice Sheet could lose up to 15% of its mass by 2100, contributing to 1.2 meters of sea level rise worldwide.</p>
      
      <blockquote class="border-l-4 border-blue-400 pl-6 my-6 italic text-gray-300">
        "This research underscores the urgency of international climate action. The changes we're observing today will impact coastal communities for generations to come." - Dr. James Mitchell, IPCC Lead Author
      </blockquote>
    `,
    tags: ["Climate Change", "Antarctica", "Sea Level Rise", "Glaciology"]
  },
  {
    id: 2,
    category: "Breaking News",
    title: "New Species of Bioluminescent Jellyfish Discovered in Mariana Trench",
    excerpt: "Scientists aboard the deep-sea vessel Challenger III have identified a previously unknown species of jellyfish with unique light-producing capabilities that may revolutionize biotechnology.",
    date: "July 28, 2025",
    author: "Dr. Hiroshi Tanaka",
    source: "Deep Ocean Research Institute",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "6 min read",
    content: `
      <p class="text-lg text-gray-100 mb-6 leading-relaxed">Marine biologists from the Deep Ocean Research Institute have announced the discovery of <em>Atolla wyvillei challenger</em>, a new species of deep-sea jellyfish found at depths exceeding 10,000 meters in the Challenger Deep of the Mariana Trench.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4">Unique Characteristics</h3>
      <p class="text-gray-200 mb-4">This remarkable species exhibits the deepest-recorded bioluminescence in any cnidarian, producing blue-green light through specialized photophores arranged in a distinctive crown pattern around its bell. The jellyfish measures approximately 15 centimeters in diameter with transparent, gelatinous tissues adapted to extreme pressure.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4">Scientific Significance</h3>
      <p class="text-gray-200 mb-4">Dr. Hiroshi Tanaka, expedition leader, explained: "This discovery challenges our understanding of life's limits in Earth's most extreme environments. The bioluminescent capabilities at such depths suggest entirely new biochemical pathways for light production."</p>
      
      <h3 class="text-2xl font-bold text-white mb-4">Research Technology</h3>
      <p class="text-gray-200 mb-4">The discovery was made possible through the use of advanced ROV technology equipped with ultra-sensitive cameras and pressure-resistant sampling equipment. The team spent over 200 hours documenting the species' behavior and habitat preferences.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4">Evolutionary Insights</h3>
      <p class="text-gray-200 mb-4">Genetic analysis reveals that this species diverged from its shallow-water relatives approximately 50 million years ago, developing unique adaptations for life in the hadal zone, including specialized pressure-resistant proteins and modified nervous systems.</p>
      
      <div class="bg-blue-50/10 p-6 rounded-lg my-6">
        <h4 class="font-bold text-blue-300 mb-2">Conservation Impact</h4>
        <p class="text-blue-200">This discovery highlights the importance of protecting deep-sea environments from mining and pollution, as these ecosystems may harbor countless unknown species with potential biotechnological applications.</p>
      </div>
    `,
    tags: ["Marine Biology", "Deep Sea", "Bioluminescence", "New Species"]
  },
  {
    id: 3,
    category: "Research Update",
    title: "Great Pacific Garbage Patch Shrinks by 40% Following Cleanup Operations",
    excerpt: "The Ocean Cleanup foundation reports significant success in removing plastic debris from the North Pacific Subtropical Gyre, offering hope for global ocean restoration efforts.",
    date: "July 25, 2025",
    author: "Sarah Chen",
    source: "The Ocean Cleanup Foundation",
    image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "7 min read",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">The Ocean Cleanup foundation has announced remarkable progress in their mission to remove plastic pollution from the Great Pacific Garbage Patch, with latest measurements showing a 40% reduction in debris concentration since operations began in 2019.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Cleanup Technology</h3>
      <p class="text-gray-700 mb-4">The foundation's innovative System 03, a 2,500-meter-long U-shaped barrier system, has successfully collected over 200 tons of plastic debris in the past 18 months. The system uses ocean currents to concentrate plastic while allowing marine life to pass safely underneath.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Environmental Impact</h3>
      <p class="text-gray-700 mb-4">Boyan Slat, founder and CEO, stated: "These results exceed our most optimistic projections. We're not just removing plastic; we're demonstrating that large-scale ocean cleanup is both technically feasible and environmentally beneficial."</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Marine Life Recovery</h3>
      <p class="text-gray-700 mb-4">Concurrent marine biology studies show a 25% increase in zooplankton populations and improved feeding patterns among seabirds in the cleaned areas. Microplastic concentrations in fish tissue samples have decreased by 30% over the monitoring period.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Global Expansion</h3>
      <p class="text-gray-700 mb-4">Building on this success, The Ocean Cleanup plans to deploy similar systems in the Mediterranean Sea and Caribbean by 2026, targeting major pollution hotspots identified through satellite mapping and oceanographic modeling.</p>
      
      <div class="bg-green-50 p-6 rounded-lg my-6">
        <h4 class="font-bold text-green-800 mb-2">Plastic Recycling Initiative</h4>
        <p class="text-green-700">Collected plastic is being transformed into consumer products, with major brands committing to purchase ocean plastic for packaging, creating a sustainable economic model for continued cleanup operations.</p>
      </div>
    `,
    tags: ["Ocean Cleanup", "Plastic Pollution", "Environmental Technology", "Conservation"]
  },

  // Historical Incidents
  {
    id: 4,
    category: "Historical Incident",
    title: "The 1755 Lisbon Tsunami: Europe's Deadliest Marine Disaster",
    excerpt: "Examining the catastrophic earthquake and tsunami that devastated Lisbon and reshaped understanding of oceanic hazards.",
    date: "November 1, 1755",
    author: "Historical Research Team",
    source: "European Geological Survey Archives",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "10 min read",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">On November 1, 1755, All Saints' Day, a catastrophic earthquake measuring an estimated magnitude 8.5-9.0 struck off the coast of Portugal, generating massive tsunami waves that devastated Lisbon and coastal areas across the Atlantic.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">The Earthquake</h3>
      <p class="text-gray-700 mb-4">The earthquake occurred at approximately 9:40 AM local time, with its epicenter located in the Atlantic Ocean, roughly 200 kilometers southwest of Cape St. Vincent. The seismic event was felt across Europe and North Africa, making it one of the most widely felt earthquakes in recorded history.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Tsunami Generation</h3>
      <p class="text-gray-700 mb-4">The submarine earthquake displaced massive volumes of seawater, generating tsunami waves reaching heights of 15-20 meters in some coastal areas. The waves reached Lisbon approximately 20 minutes after the earthquake, compounding the destruction already caused by ground shaking and fires.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Devastation and Impact</h3>
      <p class="text-gray-700 mb-4">Contemporary accounts describe three major tsunami waves striking Lisbon's harbor and lower city. The waves penetrated up to 2 kilometers inland, destroying the royal palace, numerous churches, and thousands of homes. An estimated 60,000 people perished in Portugal alone.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Atlantic-Wide Effects</h3>
      <p class="text-gray-700 mb-4">The tsunami's impact extended far beyond Portugal. Significant waves were recorded in Morocco (where 10,000 died in Agadir), southern Spain, and even reached the coasts of Ireland and Cornwall. Smaller waves were observed across the entire Atlantic basin, including the Caribbean and North Africa.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Scientific Legacy</h3>
      <p class="text-gray-700 mb-4">This disaster marked a turning point in earthquake and tsunami science. The Marquis of Pombal's systematic collection of eyewitness accounts and damage reports represents one of the first scientific approaches to studying seismic phenomena, laying groundwork for modern seismology.</p>
      
      <blockquote class="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-600">
        "In a matter of minutes, the sea rose and fell like a tide, but with such fury and velocity that it overwhelmed all the lower parts of the city." - Contemporary eyewitness account
      </blockquote>
    `,
    tags: ["Historical Event", "Tsunami", "Earthquake", "European History", "Natural Disaster"]
  },
  {
    id: 5,
    category: "Historical Incident",
    title: "The Krakatoa Eruption of 1883: When Sound Waves Circled the Earth",
    excerpt: "The explosive volcanic eruption that generated the loudest sound in recorded history and devastating tsunamis across the Indian Ocean.",
    date: "August 27, 1883",
    author: "Volcanic Research Institute",
    source: "Royal Society of London Archives",
    image: "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "11 min read",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">The catastrophic eruption of Krakatoa volcano in the Sunda Strait between Java and Sumatra on August 27, 1883, remains one of the most violent volcanic events in recorded history, producing sound waves that circled the Earth four times and tsunamis that killed over 36,000 people.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">The Explosive Event</h3>
      <p class="text-gray-700 mb-4">The final explosion occurred at 10:02 AM local time, with an estimated Volcanic Explosivity Index (VEI) of 6. The eruption ejected approximately 21 cubic kilometers of rock and ash, destroying two-thirds of the volcanic island and creating a caldera 7 kilometers wide.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Acoustic Phenomena</h3>
      <p class="text-gray-700 mb-4">The sound of the explosion was heard 4,800 kilometers away in Mauritius and Australia, making it the loudest sound in recorded human history, estimated at 180 decibels at a distance of 160 kilometers. Barometric pressure waves from the explosion were recorded circling the Earth multiple times.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Tsunami Generation</h3>
      <p class="text-gray-700 mb-4">The collapse of the volcanic structure into the sea generated massive tsunamis reaching heights of up to 40 meters in some coastal areas. These waves devastated 295 coastal towns and villages across Java and Sumatra, with some waves traveling at speeds exceeding 700 kilometers per hour.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Global Climate Effects</h3>
      <p class="text-gray-700 mb-4">The eruption injected an estimated 15 million tons of sulfur dioxide into the stratosphere, creating vivid red sunsets worldwide for months afterward. Global temperatures dropped by as much as 1.2°C in the year following the eruption due to atmospheric ash and gas.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Scientific Observations</h3>
      <p class="text-gray-700 mb-4">The Krakatoa eruption was one of the first major natural disasters to be studied using modern telegraph communications and scientific instruments. Weather stations worldwide recorded the pressure waves, providing unprecedented data about atmospheric wave propagation.</p>
      
      <div class="bg-red-50 p-6 rounded-lg my-6">
        <h4 class="font-bold text-red-800 mb-2">Modern Significance</h4>
        <p class="text-red-700">Krakatoa's eruption established baseline understanding for volcanic tsunami generation and remains a crucial case study for modern tsunami warning systems throughout the Indian Ocean region.</p>
      </div>
    `,
    tags: ["Volcanic Eruption", "Tsunami", "Historical Event", "Natural Disaster", "Climate Impact"]
  },

  // Natural Phenomena
  {
    id: 6,
    category: "Natural Phenomenon",
    title: "The Mysterious Milky Sea Phenomenon: Ocean-Wide Bioluminescence",
    excerpt: "Scientists unlock the secrets behind rare oceanic events where entire sea surfaces glow with ethereal blue light visible from space.",
    date: "June 15, 2025",
    author: "Dr. Rebecca Martinez",
    source: "Marine Bioluminescence Research Center",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "8 min read",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">The milky sea phenomenon, where vast expanses of ocean surface emit a steady, ethereal blue glow visible from space, has puzzled mariners for centuries. Recent scientific breakthroughs have finally revealed the biological mechanisms behind these spectacular displays.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Scale and Occurrence</h3>
      <p class="text-gray-700 mb-4">Milky seas can cover areas exceeding 15,000 square kilometers - roughly the size of Connecticut - and persist for several consecutive nights. Satellite observations have documented these events primarily in the northwestern Indian Ocean, particularly around the Arabian Sea and Bay of Bengal.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Biological Mechanism</h3>
      <p class="text-gray-700 mb-4">Dr. Rebecca Martinez's research team has identified the luminous bacterium <em>Vibrio harveyi</em> as the primary cause. These bacteria exist symbiotically with algae and achieve bioluminescence through quorum sensing - a process where bacteria communicate chemically to coordinate group behaviors when population density reaches critical thresholds.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Environmental Conditions</h3>
      <p class="text-gray-700 mb-4">Milky seas typically occur when specific environmental conditions align: water temperatures between 24-28°C, moderate salinity levels, low wave action, and high concentrations of organic matter. These conditions often coincide with algal bloom cycles and seasonal monsoon patterns.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Biochemical Process</h3>
      <p class="text-gray-700 mb-4">The light production involves the enzyme luciferase catalyzing the oxidation of luciferin in the presence of ATP. Unlike the brief flashes of disturbed bioluminescent organisms, milky sea bacteria maintain steady light emission for hours, creating the characteristic sustained glow.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Historical Accounts</h3>
      <p class="text-gray-700 mb-4">Maritime logs dating back to the 1600s describe encounters with luminous seas. Jules Verne's "Twenty Thousand Leagues Under the Sea" was inspired by such accounts, and modern research has validated many historical descriptions previously dismissed as sailors' tales.</p>
      
      <blockquote class="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-600">
        "The sea appeared as if covered with snow, glowing with a soft, uniform light that extended to the horizon in all directions." - Captain's log, HMS Vulture, 1854
      </blockquote>
      
      <div class="bg-blue-50 p-6 rounded-lg my-6">
        <h4 class="font-bold text-blue-800 mb-2">Climate Change Implications</h4>
        <p class="text-blue-700">Warming ocean temperatures and changing nutrient patterns may alter the frequency and distribution of milky sea events, making them valuable indicators for monitoring oceanic ecosystem health.</p>
      </div>
    `,
    tags: ["Bioluminescence", "Marine Biology", "Natural Phenomenon", "Ocean Science"]
  },
  {
    id: 7,
    category: "Natural Phenomenon",
    title: "Rogue Waves: The Ocean's 80-Foot Monsters That 'Don't Exist'",
    excerpt: "Exploring the science behind freak waves that tower above the ocean surface, defying statistical predictions and threatening maritime safety.",
    date: "May 22, 2025",
    author: "Dr. Michael Anderson",
    source: "International Wave Research Consortium",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "9 min read",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">Until the 1990s, mariners' accounts of massive waves exceeding 25 meters in height were dismissed as maritime folklore. Today, satellite radar and ocean monitoring systems have confirmed that these "rogue waves" are real, posing significant threats to shipping and offshore installations.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Definition and Characteristics</h3>
      <p class="text-gray-700 mb-4">Rogue waves are defined as waves that are more than twice the significant wave height of the surrounding sea state. These waves appear suddenly, often described as "walls of water," and can exceed 30 meters in height while lasting only 10-15 seconds.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Formation Mechanisms</h3>
      <p class="text-gray-700 mb-4">Current research identifies several formation processes: constructive interference where multiple wave systems converge, focusing effects caused by ocean currents, and nonlinear wave dynamics including the Benjamin-Feir instability that can cause wave groups to concentrate energy into single massive waves.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">The Draupner Wave</h3>
      <p class="text-gray-700 mb-4">The first scientifically measured rogue wave was recorded on January 1, 1995, at the Draupner platform in the North Sea. This 25.6-meter wave in 12-meter seas provided the first concrete evidence that such waves occur more frequently than linear wave theory predicted.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Global Hotspots</h3>
      <p class="text-gray-700 mb-4">Satellite analysis reveals rogue wave hotspots including the North Atlantic (particularly the Grand Banks), the North Sea, the Agulhas Current off South Africa, and the Southern Ocean. These areas often feature strong currents opposing prevailing wave directions.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Maritime Impact</h3>
      <p class="text-gray-700 mb-4">Rogue waves are suspected in numerous ship losses, including the MV München (1978) and MS München sister ship incidents. Modern shipping lanes are now planned considering rogue wave probability, and vessels are equipped with advanced wave radar systems for early detection.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Predictive Technology</h3>
      <p class="text-gray-700 mb-4">The European Space Agency's radar satellites can now detect rogue waves in real-time, while machine learning algorithms analyze oceanographic data to predict favorable conditions for rogue wave formation with increasing accuracy.</p>
      
      <div class="bg-orange-50 p-6 rounded-lg my-6">
        <h4 class="font-bold text-orange-800 mb-2">Safety Implications</h4>
        <p class="text-orange-700">Modern shipping protocols now include rogue wave contingencies, with recommended course alterations and speed reductions when conditions favor their formation.</p>
      </div>
    `,
    tags: ["Rogue Waves", "Maritime Safety", "Ocean Physics", "Natural Phenomenon"]
  },

  // More recent discoveries and phenomena
  {
    id: 8,
    category: "Scientific Discovery",
    title: "Underwater Forest Preserved for 60,000 Years Reveals Ancient Climate Secrets",
    excerpt: "A perfectly preserved cypress forest discovered in the Gulf of Mexico provides unprecedented insights into prehistoric ocean conditions.",
    date: "July 10, 2025",
    author: "Dr. Catherine Williams",
    source: "Paleoceanography Research Institute",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "10 min read",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">Marine archaeologists and paleoclimatologists have made a remarkable discovery 60 feet beneath the Gulf of Mexico: a perfectly preserved ancient cypress forest that lived approximately 60,000 years ago, offering unprecedented insights into prehistoric climate conditions and sea level changes.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">The Discovery</h3>
      <p class="text-gray-700 mb-4">Located 15 miles off the Alabama coast, the forest was exposed by Hurricane Ivan in 2004 but remained largely unstudied until recent technological advances in underwater archaeology. The site contains hundreds of tree stumps, some with trunks still reaching 6 meters in height.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Preservation Conditions</h3>
      <p class="text-gray-700 mb-4">The forest's exceptional preservation resulted from rapid burial under sediments, creating anaerobic conditions that prevented bacterial decomposition. The lack of oxygen and presence of hydrogen sulfide created a natural preservation environment that maintained wood cellular structure and even organic compounds.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Climate Data</h3>
      <p class="text-gray-700 mb-4">Analysis of growth rings and wood isotopes reveals detailed climate patterns from 60,000 years ago, including seasonal temperature variations, precipitation cycles, and atmospheric CO2 concentrations. This data fills crucial gaps in understanding climate during the last glacial period.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Sea Level Insights</h3>
      <p class="text-gray-700 mb-4">The forest's position indicates that sea levels were approximately 120-140 feet lower during its growth period, confirming glacial period sea level models. Sediment analysis shows the exact timing and rate of subsequent sea level rise as ice sheets melted.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Biodiversity Archive</h3>
      <p class="text-gray-700 mb-4">The site preserves not just trees but entire ecosystems, including insects, pollen, and plant materials trapped in amber-like tree resin. This provides a complete snapshot of Gulf Coast biodiversity from the Pleistocene epoch.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Modern Applications</h3>
      <p class="text-gray-700 mb-4">Data from the underwater forest is being used to validate and improve climate models predicting future sea level rise. The forest's response to ancient warming events provides crucial analogs for understanding current climate change impacts.</p>
      
      <blockquote class="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-600">
        "This forest is like a time machine, offering us a window into how coastal ecosystems responded to major climate shifts in the past." - Dr. Catherine Williams, Lead Researcher
      </blockquote>
    `,
    tags: ["Paleoclimatology", "Underwater Archaeology", "Climate Change", "Sea Level", "Ancient Ecosystems"]
  },

  {
    id: 9,
    category: "Marine Conservation",
    title: "World's Largest Marine Protected Area Established in Antarctic Waters",
    excerpt: "International agreement creates 1.5 million square kilometer sanctuary protecting critical Southern Ocean ecosystems.",
    date: "June 30, 2025",
    author: "Conservation International",
    source: "Antarctic Treaty System",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "7 min read",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">The Commission for the Conservation of Antarctic Marine Living Resources (CCAMLR) has unanimously approved the establishment of the world's largest marine protected area in the Weddell Sea, covering 1.5 million square kilometers of pristine Antarctic waters.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Protected Area Details</h3>
      <p class="text-gray-700 mb-4">The Weddell Sea Marine Protected Area encompasses critical breeding grounds for Antarctic species including emperor penguins, leopard seals, and Antarctic toothfish. The protection zone includes a complete fishing moratorium and restrictions on research activities that could disturb wildlife.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Biodiversity Significance</h3>
      <p class="text-gray-700 mb-4">The Weddell Sea supports the highest concentration of emperor penguin colonies in Antarctica, hosting over 250,000 breeding pairs. The area also serves as a crucial habitat for Antarctic blue whales, crabeater seals, and numerous endemic fish species adapted to sub-zero waters.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Climate Importance</h3>
      <p class="text-gray-700 mb-4">This region plays a critical role in global ocean circulation, being a major source of Antarctic Bottom Water that drives deep ocean currents worldwide. Protecting this area ensures the preservation of processes essential for global climate regulation.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">International Cooperation</h3>
      <p class="text-gray-700 mb-4">The MPA represents unprecedented international cooperation, with 25 nations agreeing to the protection measures despite potential economic interests in the region's rich fisheries. The agreement includes provisions for scientific research and monitoring.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Implementation Timeline</h3>
      <p class="text-gray-700 mb-4">Protection measures take effect immediately, with full implementation expected by October 2025. An international monitoring consortium will track ecosystem health using satellite technology, automated sensors, and annual research expeditions.</p>
      
      <div class="bg-green-50 p-6 rounded-lg my-6">
        <h4 class="font-bold text-green-800 mb-2">Global Impact</h4>
        <p class="text-green-700">This MPA brings the total global ocean protection to 8.2%, moving significantly closer to the international goal of protecting 30% of ocean areas by 2030.</p>
      </div>
    `,
    tags: ["Marine Protected Area", "Antarctica", "Conservation", "International Agreement", "Biodiversity"]
  },

  {
    id: 10,
    category: "Extreme Weather",
    title: "Category 6 Hurricane: The Storm That Broke the Scale",
    excerpt: "Hurricane Zeta's unprecedented intensity forces meteorologists to consider expanding the hurricane classification system.",
    date: "September 15, 2024",
    author: "Dr. James Rodriguez",
    source: "National Hurricane Center",
    image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "9 min read",
    content: `
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">Hurricane Zeta, which devastated the Caribbean in September 2024, achieved wind speeds of 215 mph and pressure readings that forced meteorologists to question whether the traditional five-category Saffir-Simpson scale adequately describes the most extreme tropical cyclones.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Record-Breaking Metrics</h3>
      <p class="text-gray-700 mb-4">Zeta reached maximum sustained winds of 215 mph with gusts exceeding 250 mph, while its central pressure dropped to 872 millibars - the lowest ever recorded in the Atlantic basin. The storm's eye wall contained convective towers reaching 65,000 feet into the stratosphere.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Formation Conditions</h3>
      <p class="text-gray-700 mb-4">The hurricane developed over exceptionally warm sea surface temperatures exceeding 31°C, combined with minimal wind shear and optimal atmospheric conditions. Ocean heat content measurements showed unprecedented energy availability for storm intensification.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Rapid Intensification</h3>
      <p class="text-gray-700 mb-4">Zeta underwent explosive intensification, increasing from Category 1 to its peak intensity in just 18 hours - the fastest strengthening rate ever observed. This rapid development challenged existing forecast models and evacuation timelines.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Oceanographic Impact</h3>
      <p class="text-gray-700 mb-4">The storm generated waves exceeding 80 feet in height and caused ocean cooling of up to 6°C through intense upwelling. Sediment displacement was detected at depths exceeding 200 meters, fundamentally altering seafloor topography in affected areas.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Climate Change Connection</h3>
      <p class="text-gray-700 mb-4">Climate scientists attribute Zeta's intensity to anthropogenic warming, noting that ocean temperatures in its formation region were 2.8°C above the 20th-century average. Models suggest such extreme events may become more frequent as warming continues.</p>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Scale Revision Debate</h3>
      <p class="text-gray-700 mb-4">The World Meteorological Organization is now formally considering adding a Category 6 classification for storms exceeding 200 mph, recognizing that current categories may not adequately convey the risk posed by the most extreme hurricanes.</p>
      
      <blockquote class="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-600">
        "Zeta represents a new class of hypercane that our traditional classification system wasn't designed to handle. We need to adapt our communication methods to match the evolving reality of extreme weather." - Dr. Sarah Mitchell, WMO Hurricane Committee
      </blockquote>
    `,
    tags: ["Hurricane", "Extreme Weather", "Climate Change", "Meteorology", "Ocean Temperature"]
  },

  // Additional Latest News
  {
    id: 11,
    category: "Latest News",
    title: "Coral Reef Restoration Breakthrough: Lab-Grown Corals Show 95% Survival Rate",
    excerpt: "Revolutionary 3D bioprinting technology creates resilient coral structures that survive in warming oceans, offering new hope for reef conservation worldwide.",
    date: "August 1, 2025",
    author: "Dr. Marina Santos",
    source: "Global Coral Alliance",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "9 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">Marine biologists at the Global Coral Alliance have achieved a groundbreaking 95% survival rate for lab-grown corals using advanced 3D bioprinting technology, representing the most successful coral restoration effort in history.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Revolutionary Technology</h3>
      <p class="text-gray-300 mb-4">The breakthrough involves printing coral polyps using a calcium carbonate-based bio-ink that mimics natural reef structures. The printed corals are pre-loaded with heat-resistant algae symbionts that help them survive in temperatures 2-3°C warmer than current ocean conditions.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Field Testing Results</h3>
      <p class="text-gray-300 mb-4">Over 10,000 printed coral fragments were deployed across degraded reef sites in the Caribbean, Great Barrier Reef, and Red Sea. After 18 months, 95% remained healthy and showed active growth, compared to just 30% survival rates for traditional coral transplantation methods.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Global Impact Potential</h3>
      <p class="text-gray-300 mb-4">Dr. Marina Santos estimates that scaling this technology could restore 500,000 hectares of coral reef by 2030, providing habitat for over 25% of marine species and protecting coastlines from storm surge and erosion.</p>
      
      <blockquote class="border-l-4 border-blue-400 pl-6 my-6 italic text-gray-400">
        "We're not just growing corals; we're engineering entire reef ecosystems that can adapt to our changing climate." - Dr. Marina Santos, Lead Researcher
      </blockquote>
    `,
    tags: ["Coral Restoration", "Marine Biology", "Climate Adaptation", "3D Bioprinting", "Conservation"]
  },
  {
    id: 12,
    category: "Breaking News",
    title: "Massive Underwater Landslide Detected Off Norway Coast",
    excerpt: "Seismic monitoring reveals a submarine landslide covering 3,000 square kilometers, potentially triggering tsunami warnings across the North Sea region.",
    date: "July 30, 2025",
    author: "Dr. Lars Andersen",
    source: "Norwegian Geophysical Institute",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "5 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">The Norwegian Geophysical Institute has detected a massive underwater landslide off the Norwegian continental slope, covering over 3,000 square kilometers and displacing an estimated 5 billion cubic meters of sediment.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Event Details</h3>
      <p class="text-gray-300 mb-4">The landslide occurred at depths between 200-800 meters along the Storegga Slide region, historically known for prehistoric underwater avalanches. Seismic sensors recorded the event lasting approximately 12 minutes with magnitude readings reaching 4.2.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Tsunami Risk Assessment</h3>
      <p class="text-gray-300 mb-4">While no immediate tsunami was generated, oceanographers are monitoring wave propagation models across the North Sea. The displaced sediment volume is approximately 10% of the historic Storegga Slide that created tsunamis 8,200 years ago.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Scientific Implications</h3>
      <p class="text-gray-300 mb-4">This event provides unprecedented real-time data on submarine landslide mechanics. Autonomous underwater vehicles are currently mapping the slide scar to understand triggering mechanisms and improve tsunami early warning systems.</p>
    `,
    tags: ["Submarine Landslide", "Tsunami Risk", "North Sea", "Seismic Activity", "Marine Geology"]
  },
  {
    id: 13,
    category: "Scientific Discovery",
    title: "Deep-Sea Methane Seeps Harbor Complex Microbial Cities",
    excerpt: "Scientists discover vast underground ecosystems around methane seeps that could hold keys to understanding life's origins and developing new biotechnologies.",
    date: "July 28, 2025",
    author: "Dr. Chen Wei",
    source: "Deep Sea Microbiology Consortium",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "10 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">Research expeditions to deep-sea methane seeps have revealed complex microbial communities that form underwater "cities" with sophisticated metabolic networks, potentially revolutionizing our understanding of early life on Earth.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Microbial Metropolises</h3>
      <p class="text-gray-300 mb-4">These microbial communities create multi-layered biofilms spanning several kilometers, with specialized zones for different metabolic processes including methane oxidation, sulfate reduction, and nitrogen cycling. Some formations reach 50 meters in height.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Biotechnology Applications</h3>
      <p class="text-gray-300 mb-4">Enzymes isolated from these organisms show remarkable stability under extreme conditions, with potential applications in industrial processes, carbon capture technologies, and the development of new antibiotics resistant to current drug-resistant pathogens.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Astrobiology Connections</h3>
      <p class="text-gray-300 mb-4">The discovery provides insights into how life might exist on other worlds. Similar methane-rich environments exist on Mars, Europa, and Enceladus, suggesting these findings could guide future space exploration missions.</p>
      
      <div class="bg-blue-900/30 p-6 rounded-lg my-6 border border-blue-700/30">
        <h4 class="font-bold text-blue-300 mb-2">Research Impact</h4>
        <p class="text-blue-200">This discovery has led to 15 new species classifications and opened three major research initiatives studying extremophile biotechnology applications.</p>
      </div>
    `,
    tags: ["Microbiology", "Deep Sea", "Methane Seeps", "Biotechnology", "Astrobiology"]
  },
  {
    id: 14,
    category: "Marine Conservation",
    title: "Blue Whale Population Reaches Pre-Whaling Numbers in Pacific",
    excerpt: "Comprehensive population surveys reveal Pacific blue whale numbers have recovered to historic levels, marking the most successful marine mammal conservation story.",
    date: "July 26, 2025",
    author: "Marine Mammal Protection Society",
    source: "International Whaling Commission",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "8 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">The Pacific blue whale population has officially reached pre-whaling numbers of approximately 25,000 individuals, representing the most successful large whale recovery in conservation history.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Conservation Milestone</h3>
      <p class="text-gray-300 mb-4">This recovery took 55 years following the international whaling moratorium of 1970. At their lowest point in 1970, Pacific blue whales numbered fewer than 2,000 individuals, making this a remarkable conservation success story.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Recovery Factors</h3>
      <p class="text-gray-300 mb-4">Key factors included strict whaling bans, ship strike reduction programs, fishing gear modifications to prevent entanglement, and protection of critical feeding areas rich in krill populations along the Pacific coast.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Ecosystem Benefits</h3>
      <p class="text-gray-300 mb-4">Blue whale recovery has strengthened ocean carbon sequestration through the "whale pump" effect, where whales transport nutrients from deep waters to surface zones, supporting phytoplankton growth that absorbs atmospheric CO2.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Ongoing Challenges</h3>
      <p class="text-gray-300 mb-4">Despite this success, blue whales face new challenges including ocean acidification, climate-driven shifts in krill distribution, and increasing noise pollution from shipping traffic affecting their communication systems.</p>
    `,
    tags: ["Blue Whale", "Conservation Success", "Marine Mammals", "Population Recovery", "Ocean Ecosystem"]
  },
  {
    id: 15,
    category: "Climate Research",
    title: "Arctic Ocean Shows Rapid Acidification as Ice Melts",
    excerpt: "New research reveals the Arctic Ocean is acidifying twice as fast as other oceans due to ice melt and increased atmospheric CO2 absorption.",
    date: "July 24, 2025",
    author: "Dr. Arctic Climate Research Team",
    source: "Arctic Council Scientific Committee",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "7 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">The Arctic Ocean is experiencing acidification at twice the global average rate, with pH levels dropping 0.02 units annually due to rapid ice loss and increased CO2 absorption in ice-free waters.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Accelerating Changes</h3>
      <p class="text-gray-300 mb-4">As sea ice retreats, newly exposed ocean surfaces absorb atmospheric CO2 at unprecedented rates. The Arctic Ocean has lost 40% of its summer ice cover since 1980, creating vast areas of CO2-absorbing open water.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Marine Life Impact</h3>
      <p class="text-gray-300 mb-4">Arctic marine organisms, particularly shell-forming species like pteropods and Arctic cod, show reduced calcification rates and increased mortality. These changes threaten the entire Arctic food web from plankton to polar bears.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Global Implications</h3>
      <p class="text-gray-300 mb-4">Arctic acidification affects global ocean circulation patterns and carbon cycling. The region serves as a major carbon sink, but acidification may reduce its capacity to absorb atmospheric CO2, accelerating climate change.</p>
      
      <blockquote class="border-l-4 border-blue-400 pl-6 my-6 italic text-gray-400">
        "The Arctic Ocean is becoming a chemical testing ground for the rest of the world's oceans. What we see here today will likely occur globally within decades." - Dr. Sarah Mitchell, Lead Oceanographer
      </blockquote>
    `,
    tags: ["Arctic Ocean", "Ocean Acidification", "Climate Change", "Marine Chemistry", "Ice Loss"]
  },
  {
    id: 16,
    category: "Technology",
    title: "AI-Powered Ocean Monitoring Network Deployed Globally",
    excerpt: "Revolutionary autonomous sensor network uses artificial intelligence to monitor ocean health in real-time, tracking everything from temperature to marine life populations.",
    date: "July 22, 2025",
    author: "TechOcean Innovation Lab",
    source: "Global Ocean Observation System",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "6 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">A network of 50,000 AI-powered autonomous sensors has been deployed across the world's oceans, creating the most comprehensive real-time marine monitoring system ever constructed.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Advanced Sensor Technology</h3>
      <p class="text-gray-300 mb-4">Each sensor unit combines environmental monitoring (temperature, salinity, pH, oxygen levels) with advanced acoustic and optical systems that can identify and count marine species using machine learning algorithms.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Real-Time Data Processing</h3>
      <p class="text-gray-300 mb-4">The AI system processes over 2 petabytes of oceanographic data daily, providing instant alerts for anomalous conditions like harmful algal blooms, temperature spikes, or unusual migration patterns that could indicate ecosystem stress.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Conservation Applications</h3>
      <p class="text-gray-300 mb-4">The network has already detected illegal fishing activities in protected areas, tracked microplastic pollution sources, and provided early warnings for coral bleaching events, enabling rapid response from conservation organizations.</p>
      
      <div class="bg-green-900/30 p-6 rounded-lg my-6 border border-green-700/30">
        <h4 class="font-bold text-green-300 mb-2">Global Impact</h4>
        <p class="text-green-200">The monitoring network covers 85% of global shipping routes and 95% of major fishing grounds, providing unprecedented insight into human ocean impact.</p>
      </div>
    `,
    tags: ["AI Technology", "Ocean Monitoring", "Marine Conservation", "Environmental Sensors", "Real-time Data"]
  },
  {
    id: 17,
    category: "Historical Incident",
    title: "The 2004 Indian Ocean Tsunami: 20 Years Later",
    excerpt: "Two decades after the devastating tsunami that killed 230,000 people, new research reveals how the disaster transformed tsunami science and coastal protection.",
    date: "December 26, 2024",
    author: "Tsunami Research Consortium",
    source: "UNESCO Intergovernmental Oceanographic Commission",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "12 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">Twenty years after the catastrophic Indian Ocean tsunami of December 26, 2004, new research reveals how this tragedy fundamentally transformed global tsunami science, early warning systems, and coastal protection strategies.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">The Devastating Event</h3>
      <p class="text-gray-300 mb-4">The magnitude 9.1-9.3 underwater megathrust earthquake off Sumatra generated tsunami waves reaching heights of 30 meters in some areas. The waves traveled across the entire Indian Ocean basin, affecting coastlines from Indonesia to Somalia, killing approximately 230,000 people across 14 countries.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Scientific Transformation</h3>
      <p class="text-gray-300 mb-4">The disaster exposed critical gaps in tsunami science and warning systems. Prior to 2004, the Indian Ocean had no tsunami warning network, and many coastal communities had never experienced such events, lacking traditional knowledge for natural warning signs.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Warning System Revolution</h3>
      <p class="text-gray-300 mb-4">The Indian Ocean Tsunami Warning System became operational in 2006, featuring real-time seismic monitoring, deep-ocean tsunami detection buoys, and coastal sea level monitoring. The system now provides warnings within 15 minutes of major earthquakes.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Coastal Protection Advances</h3>
      <p class="text-gray-300 mb-4">Post-tsunami research led to breakthrough understanding of how natural coastal features like mangroves, coral reefs, and sand dunes provide tsunami protection. Many affected regions have invested heavily in restoring these natural barriers.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Community Preparedness</h3>
      <p class="text-gray-300 mb-4">Education programs now teach millions of coastal residents to recognize natural tsunami warnings: strong earthquake shaking, ocean recession, and unusual animal behavior. Annual drills involving 500 million people across the Indian Ocean region test evacuation procedures.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Ongoing Vulnerabilities</h3>
      <p class="text-gray-300 mb-4">Despite advances, rapid coastal development, sea level rise, and population growth continue to increase tsunami risk. Remote coastal areas and small islands remain particularly vulnerable to locally-generated tsunamis that allow little warning time.</p>
      
      <blockquote class="border-l-4 border-blue-400 pl-6 my-6 italic text-gray-400">
        "The 2004 tsunami was a wake-up call that transformed how humanity prepares for natural disasters. We honor the victims by ensuring their sacrifice leads to saving lives in the future." - Dr. Patricio Winckler, Tsunami Commission Chair
      </blockquote>
    `,
    tags: ["Tsunami", "Historical Event", "Disaster Preparedness", "Early Warning Systems", "Indian Ocean"]
  },
  {
    id: 18,
    category: "Natural Phenomenon",
    title: "Underwater Rivers: The Hidden Currents Beneath Ocean Floors",
    excerpt: "Scientists map extensive underwater river systems flowing beneath the seafloor, revealing a hidden hydrological network that affects global ocean circulation.",
    date: "July 20, 2025",
    author: "Dr. Subsurface Hydrology Team",
    source: "International Ocean Drilling Program",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "9 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">Advanced seismic imaging has revealed vast networks of underwater rivers flowing through porous rock layers beneath ocean floors, fundamentally changing our understanding of global water circulation and marine ecosystems.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Hidden Hydrological Networks</h3>
      <p class="text-gray-300 mb-4">These subsurface rivers flow through permeable sediments and fractured bedrock, carrying freshwater, nutrients, and dissolved minerals across ocean basins. Some systems extend over 1,000 kilometers beneath the seafloor.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Discovery Methods</h3>
      <p class="text-gray-300 mb-4">Scientists used seismic reflection surveys and electromagnetic imaging to map these hidden waterways. Temperature and chemical sensors deployed through deep drilling confirmed active flow rates reaching several meters per day.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Ecosystem Connections</h3>
      <p class="text-gray-300 mb-4">The underwater rivers support unique microbial communities and transport nutrients that fuel deep-sea ecosystems. They also influence seafloor hot springs and cold seeps that serve as oases for specialized marine life.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Climate Implications</h3>
      <p class="text-gray-300 mb-4">These systems affect global ocean circulation by transporting heat and dissolved gases between the ocean and Earth's interior. They may also serve as long-term carbon storage systems, influencing global climate regulation.</p>
      
      <div class="bg-purple-900/30 p-6 rounded-lg my-6 border border-purple-700/30">
        <h4 class="font-bold text-purple-300 mb-2">Research Breakthrough</h4>
        <p class="text-purple-200">This discovery reveals that underwater rivers transport an estimated 100 billion tons of water annually, equivalent to the flow of all terrestrial rivers combined.</p>
      </div>
    `,
    tags: ["Underwater Rivers", "Subsurface Hydrology", "Ocean Circulation", "Marine Geology", "Deep Sea"]
  },
  {
    id: 19,
    category: "Marine Biology",
    title: "Giant Kelp Forests Expand Rapidly in Warming Arctic Waters",
    excerpt: "Climate change enables kelp forests to colonize Arctic regions for the first time in millennia, creating new ecosystems and carbon sequestration opportunities.",
    date: "July 18, 2025",
    author: "Dr. Arctic Marine Ecology Institute",
    source: "Polar Biology Research Station",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "8 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">Giant kelp forests are rapidly colonizing Arctic waters as sea ice retreats and temperatures warm, creating entirely new marine ecosystems that could sequester massive amounts of carbon dioxide.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Unprecedented Expansion</h3>
      <p class="text-gray-300 mb-4">Kelp coverage in the Arctic has increased by 500% since 2010, with forests now established along previously ice-covered coastlines of Alaska, northern Canada, and Greenland. Some kelp beds extend over 50 kilometers from shore.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Ecosystem Transformation</h3>
      <p class="text-gray-300 mb-4">These new kelp forests provide habitat for temperate species moving northward, including various fish, sea otters, and invertebrates. The forests create complex three-dimensional habitats that support biodiversity previously unknown in Arctic marine environments.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Carbon Sequestration Potential</h3>
      <p class="text-gray-300 mb-4">Arctic kelp forests show exceptional growth rates due to extended daylight during polar summer. Scientists estimate these new ecosystems could sequester 2-5 times more carbon per hectare than tropical rainforests.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Indigenous Perspectives</h3>
      <p class="text-gray-300 mb-4">Arctic indigenous communities report dramatic changes in traditional hunting and fishing areas. Some communities are adapting by developing sustainable kelp harvesting for food and traditional medicine, while monitoring impacts on traditional marine mammals.</p>
      
      <blockquote class="border-l-4 border-blue-400 pl-6 my-6 italic text-gray-400">
        "We're witnessing the birth of entirely new ecosystems. The Arctic Ocean is transforming before our eyes into something Earth hasn't seen for millions of years." - Dr. Maria Fredriksen, Arctic Marine Biologist
      </blockquote>
    `,
    tags: ["Kelp Forests", "Arctic Ecosystems", "Climate Change", "Carbon Sequestration", "Marine Biology"]
  },
  {
    id: 20,
    category: "Ocean Exploration",
    title: "Deepest Human Dive Ever: 12,000 Meters to Ocean's Absolute Bottom",
    excerpt: "Pioneering deep-sea explorer breaks world record reaching the deepest accessible point on Earth, discovering unknown species and geological formations.",
    date: "July 15, 2025",
    author: "Deep Ocean Exploration Society",
    source: "Extreme Depths Research Initiative",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "11 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">Explorer Dr. James Chen has achieved the deepest human dive in history, reaching 12,047 meters at the bottom of an unnamed trench in the Pacific Ocean, surpassing previous records and making groundbreaking scientific discoveries.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Record-Breaking Descent</h3>
      <p class="text-gray-300 mb-4">Using the revolutionary submersible "Abyssal Pioneer," Dr. Chen spent 8 hours at crushing depths where pressure exceeds 1,200 times that at sea level. The dive required three years of preparation and technological innovation in pressure-resistant materials.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Technological Breakthrough</h3>
      <p class="text-gray-300 mb-4">The submersible features a titanium-graphene composite hull and revolutionary life support systems that recycle air and water with 99.9% efficiency. Advanced AI navigation systems enabled precise maneuvering in complete darkness.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Scientific Discoveries</h3>
      <p class="text-gray-300 mb-4">The expedition documented 15 new species including transparent fish with antifreeze proteins, bacterial mats that glow in previously unknown colors, and mineral formations that suggest unique geological processes at extreme depths.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Geological Revelations</h3>
      <p class="text-gray-300 mb-4">Core samples revealed rock formations dating back 4.2 billion years, potentially containing clues about early Earth conditions and the origins of life. Unusual mineral deposits suggest active geological processes previously unknown to science.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Psychological Challenges</h3>
      <p class="text-gray-300 mb-4">Dr. Chen describes the psychological impact of experiencing Earth's deepest accessible point: "The absolute silence and darkness create a sense of being at the edge of existence. It's simultaneously terrifying and profoundly peaceful."</p>
      
      <div class="bg-indigo-900/30 p-6 rounded-lg my-6 border border-indigo-700/30">
        <h4 class="font-bold text-indigo-300 mb-2">Future Exploration</h4>
        <p class="text-indigo-200">This mission paves the way for permanent research stations at extreme depths, potentially unlocking secrets about life's limits and Earth's deep interior processes.</p>
      </div>
    `,
    tags: ["Deep Sea Exploration", "World Record", "Marine Discovery", "Extreme Depths", "Submersible Technology"]
  },
  // Additional Major Ocean Topics and Disasters
  {
    id: 21,
    category: "Ship Disasters",
    title: "RMS Titanic: The 'Unsinkable' Ship That Changed Maritime Safety Forever",
    excerpt: "The tragic sinking of the Titanic on April 15, 1912, killed 1,517 people and revolutionized international maritime safety regulations and emergency procedures.",
    date: "April 15, 1912",
    author: "Maritime History Institute",
    source: "International Maritime Organization Archives",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "12 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">The RMS Titanic disaster remains the most infamous maritime tragedy in history, fundamentally changing how we approach ocean safety, ship design, and emergency preparedness across the globe.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">The Fateful Night</h3>
      <p class="text-gray-300 mb-4">On the night of April 14-15, 1912, the "unsinkable" RMS Titanic struck an iceberg at 11:40 PM during its maiden voyage from Southampton to New York City. The ship sank in just 2 hours and 40 minutes, taking 1,517 lives.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Design Flaws and Human Error</h3>
      <p class="text-gray-300 mb-4">The Titanic's watertight compartments only extended partway up the hull, allowing water to spill from one compartment to another. The ship was also traveling at near-maximum speed despite ice warnings, and there were insufficient lifeboats for all passengers and crew.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Regulatory Revolution</h3>
      <p class="text-gray-300 mb-4">The disaster led to the 1914 International Convention for the Safety of Life at Sea (SOLAS), establishing mandatory 24-hour radio watch, sufficient lifeboats for all aboard, and the International Ice Patrol to track icebergs in shipping lanes.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Modern Legacy</h3>
      <p class="text-gray-300 mb-4">Today's cruise ships incorporate lessons from the Titanic: advanced radar systems, GPS navigation, satellite communications, and sophisticated watertight compartment designs that can handle multiple breaches.</p>
      
      <blockquote class="border-l-4 border-blue-400 pl-6 my-6 italic text-gray-400">
        "The Titanic disaster taught humanity that no ship is unsinkable and no safety measure is too excessive when lives are at stake." - Captain Edward Smith Memorial Foundation
      </blockquote>
    `,
    tags: ["Titanic", "Maritime Disaster", "Ship Safety", "Historical Event", "Ocean Safety"]
  },
  {
    id: 22,
    category: "Tsunamis",
    title: "Japan's 2011 Tsunami: Nuclear Crisis and Coastal Devastation",
    excerpt: "The magnitude 9.0 earthquake off Japan's coast generated 40-meter tsunami waves that caused the Fukushima nuclear disaster and killed over 20,000 people.",
    date: "March 11, 2011",
    author: "Japan Tsunami Research Coalition",
    source: "Japan Meteorological Agency",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "14 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">The Great East Japan Earthquake and Tsunami of March 11, 2011, created waves reaching 40 meters high, triggered a nuclear crisis at Fukushima, and fundamentally changed global approaches to coastal protection and nuclear safety.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">The Megaquake</h3>
      <p class="text-gray-300 mb-4">At 2:46 PM JST, a magnitude 9.0 earthquake occurred 130 kilometers east of Sendai. The rupture zone extended 500 kilometers along the Japan Trench, making it one of the most powerful earthquakes ever recorded.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Tsunami Generation and Impact</h3>
      <p class="text-gray-300 mb-4">The seafloor displacement generated tsunami waves that reached heights of 40.5 meters in Miyako and traveled up to 10 kilometers inland. The waves overtopped seawalls designed for much smaller tsunamis, inundating 561 square kilometers of land.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Fukushima Nuclear Crisis</h3>
      <p class="text-gray-300 mb-4">Tsunami waves overwhelmed the Fukushima Daiichi Nuclear Power Plant's seawalls, causing power outages that led to nuclear meltdowns in three reactors. This created the worst nuclear accident since Chernobyl, forcing evacuation of 154,000 residents.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Human and Economic Toll</h3>
      <p class="text-gray-300 mb-4">The disaster killed 20,896 people, with 2,537 still missing. Economic losses exceeded $235 billion, making it the costliest natural disaster in history. Entire coastal towns like Minami-Sanriku were completely destroyed.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Global Impact</h3>
      <p class="text-gray-300 mb-4">Debris from the tsunami crossed the Pacific Ocean, washing up on North American shores. The event also caused a temporary shutdown of nuclear reactors worldwide as safety protocols were reevaluated.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Reconstruction and Lessons</h3>
      <p class="text-gray-300 mb-4">Japan's reconstruction efforts include building higher seawalls, relocating communities to higher ground, and developing advanced early warning systems. The disaster emphasized the importance of considering maximum credible events in disaster planning.</p>
    `,
    tags: ["Japan Tsunami", "Nuclear Disaster", "Earthquake", "Coastal Protection", "Fukushima"]
  },
  {
    id: 23,
    category: "Cyclones",
    title: "Hurricane Katrina: How Storm Surge Devastated New Orleans",
    excerpt: "Hurricane Katrina's storm surge and levee failures flooded 80% of New Orleans, killing 1,833 people and exposing critical infrastructure vulnerabilities in coastal cities.",
    date: "August 29, 2005",
    author: "National Hurricane Research Center",
    source: "NOAA Hurricane Database",
    image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "13 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">Hurricane Katrina became one of the deadliest and most destructive hurricanes in U.S. history, not primarily due to wind damage, but because of catastrophic storm surge and levee failures that flooded 80% of New Orleans.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Storm Development and Path</h3>
      <p class="text-gray-300 mb-4">Katrina formed over the Bahamas on August 23, 2005, reaching Category 5 intensity over the Gulf of Mexico with winds of 175 mph. Though it weakened to Category 3 at landfall, its massive size generated a devastating 25-foot storm surge.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Storm Surge Mechanics</h3>
      <p class="text-gray-300 mb-4">The hurricane's counterclockwise rotation pushed massive volumes of Gulf water toward the Louisiana coast. The shallow continental shelf amplified wave heights, while the funnel shape of Lake Pontchartrain concentrated surge forces against New Orleans' levee system.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Levee System Failures</h3>
      <p class="text-gray-300 mb-4">Multiple levee breaches occurred along the Industrial Canal, 17th Street Canal, and London Avenue Canal. These failures were caused by design flaws, poor maintenance, and wave forces exceeding design specifications, flooding neighborhoods that had never flooded before.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Human Catastrophe</h3>
      <p class="text-gray-300 mb-4">The disaster killed 1,833 people across five states, with 1,577 deaths in Louisiana alone. Over 1 million people were displaced, making it the largest displacement of Americans since the Dust Bowl of the 1930s.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Environmental Impact</h3>
      <p class="text-gray-300 mb-4">Storm surge destroyed 217 square miles of Louisiana's coastal wetlands, which normally provide natural hurricane protection. Oil spills, chemical contamination, and saltwater intrusion caused long-lasting environmental damage.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Infrastructure Reconstruction</h3>
      <p class="text-gray-300 mb-4">Post-Katrina reconstruction included the $14.6 billion Hurricane and Storm Damage Risk Reduction System, featuring improved levees, floodwalls, and the world's largest storm surge barrier to protect against future hurricanes.</p>
      
      <div class="bg-red-900/30 p-6 rounded-lg my-6 border border-red-700/30">
        <h4 class="font-bold text-red-300 mb-2">Climate Change Connection</h4>
        <p class="text-red-200">Warmer Gulf waters and rising sea levels increase the potential for Katrina-scale disasters, making coastal adaptation and retreat increasingly important for vulnerable communities.</p>
      </div>
    `,
    tags: ["Hurricane Katrina", "Storm Surge", "Levee Failure", "New Orleans", "Coastal Flooding"]
  },
  {
    id: 24,
    category: "Ocean Geography",
    title: "Ocean Trenches: Earth's Deepest Mysteries and Extreme Life",
    excerpt: "Ocean trenches represent Earth's deepest regions, reaching depths exceeding 11,000 meters and hosting unique ecosystems adapted to crushing pressure and eternal darkness.",
    date: "July 12, 2025",
    author: "Deep Ocean Geography Institute",
    source: "International Seabed Authority",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "10 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">Ocean trenches are the deepest parts of our planet, formed by tectonic plate subduction and hosting extreme environments where life persists under conditions more alien than outer space.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Formation and Structure</h3>
      <p class="text-gray-300 mb-4">Ocean trenches form where oceanic plates subduct beneath other plates, creating deep depressions in the seafloor. The Mariana Trench, deepest known point on Earth at 11,034 meters, was formed by the Pacific Plate subducting under the Philippine Sea Plate.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Extreme Conditions</h3>
      <p class="text-gray-300 mb-4">At maximum depths, pressure reaches 1,100 times that at sea level - equivalent to 50 jumbo jets pressing down on every square meter. Temperatures hover just above freezing, and no sunlight has ever penetrated these depths.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Unique Ecosystems</h3>
      <p class="text-gray-300 mb-4">Despite extreme conditions, trenches support diverse life including amphipods, snailfish, and unique bacteria. These organisms have evolved specialized proteins that function under extreme pressure and obtain energy through chemosynthesis rather than photosynthesis.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Global Distribution</h3>
      <p class="text-gray-300 mb-4">Major ocean trenches include the Mariana (Pacific), Puerto Rico (Atlantic), South Sandwich (Southern Ocean), and Japan Trench (Pacific). Each has unique characteristics based on local geology and oceanographic conditions.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Scientific Significance</h3>
      <p class="text-gray-300 mb-4">Trenches provide insights into plate tectonics, earthquake generation, and life's limits. They also serve as natural laboratories for studying extreme biochemistry and potential extraterrestrial life conditions.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Pollution Concerns</h3>
      <p class="text-gray-300 mb-4">Surprisingly, even the deepest trenches show signs of human pollution, including microplastics and persistent organic pollutants, demonstrating the global reach of human environmental impact.</p>
    `,
    tags: ["Ocean Trenches", "Deep Sea", "Plate Tectonics", "Extreme Life", "Ocean Geography"]
  },
  {
    id: 25,
    category: "Ocean Geography",
    title: "Ocean Currents: The Global Conveyor Belt Driving Weather and Climate",
    excerpt: "Ocean currents transport heat, nutrients, and marine life across the globe, functioning as a planetary circulation system that regulates Earth's climate and weather patterns.",
    date: "July 8, 2025",
    author: "Global Oceanography Consortium",
    source: "World Ocean Circulation Project",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    readTime: "11 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">Ocean currents form a global circulation system that transports 20 times more heat than the atmosphere, fundamentally controlling Earth's climate, weather patterns, and marine ecosystem distribution.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Types of Ocean Currents</h3>
      <p class="text-gray-300 mb-4">Surface currents are driven by wind patterns and affect the top 400 meters of ocean. Deep water currents are driven by density differences caused by temperature and salinity variations, forming the global thermohaline circulation.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">The Global Conveyor Belt</h3>
      <p class="text-gray-300 mb-4">The thermohaline circulation connects all oceans in a single system taking 1,000 years to complete one cycle. Cold, salty water sinks in the North Atlantic and Antarctica, while warm surface water flows poleward to replace it.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Major Current Systems</h3>
      <p class="text-gray-300 mb-4">The Gulf Stream transports warm water northward, moderating European climate. The Kuroshio Current affects Asian weather, while the Antarctic Circumpolar Current is the only current that circles the globe, connecting all ocean basins.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Climate Regulation</h3>
      <p class="text-gray-300 mb-4">Ocean currents redistribute solar energy from equatorial regions toward the poles, reducing global temperature extremes. Without ocean circulation, equatorial regions would be 25°C warmer and polar regions 40°C colder.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Marine Life Distribution</h3>
      <p class="text-gray-300 mb-4">Currents transport nutrients, larvae, and marine organisms across ocean basins. Upwelling currents bring deep, nutrient-rich water to the surface, supporting highly productive fishing grounds like those off Peru and California.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Climate Change Impacts</h3>
      <p class="text-gray-300 mb-4">Warming and freshwater influx from melting ice are slowing key current systems. The Atlantic Meridional Overturning Circulation has weakened 15% since 1950, potentially affecting weather patterns across North America and Europe.</p>
      
      <blockquote class="border-l-4 border-blue-400 pl-6 my-6 italic text-gray-400">
        "Ocean currents are the circulatory system of our planet, and like any circulatory system, disruption can have far-reaching consequences for the entire organism." - Dr. Stefan Rahmstorf, Oceanographer
      </blockquote>
    `,
    tags: ["Ocean Currents", "Climate Regulation", "Thermohaline Circulation", "Marine Ecosystems", "Global Weather"]
  },
  {
    id: 26,
    category: "Ocean Geography",
    title: "Continental Shelf: The Submerged Edge of Our Continents",
    excerpt: "Continental shelves represent the underwater extension of continents, supporting 90% of marine life while containing vast energy resources and hosting critical coastal ecosystems.",
    date: "July 5, 2025",
    author: "Continental Margin Research Institute",
    source: "International Seabed Mapping Consortium",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    readTime: "9 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">Continental shelves are the shallow, gently sloping underwater extensions of continents, covering just 8% of ocean area but supporting 90% of marine life and containing most of the world's offshore energy resources.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Geological Structure</h3>
      <p class="text-gray-300 mb-4">Continental shelves extend from the shoreline to the shelf break at approximately 200 meters depth, where the seafloor drops steeply toward the deep ocean. They consist of continental crust covered by sediments eroded from land over millions of years.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Formation and Variation</h3>
      <p class="text-gray-300 mb-4">Shelf width varies dramatically worldwide - from less than 1 kilometer off some coasts to over 1,500 kilometers in the Arctic Ocean. Formation depends on tectonic activity, sediment supply, and sea level changes during ice ages.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Biological Productivity</h3>
      <p class="text-gray-300 mb-4">Shallow depths allow sunlight penetration, supporting photosynthesis and primary productivity. Upwelling brings nutrients from deep water, while river runoff adds terrestrial nutrients, creating highly productive marine ecosystems.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Economic Importance</h3>
      <p class="text-gray-300 mb-4">Continental shelves provide 95% of global fish catch and contain 60% of known offshore oil and gas reserves. They also host wind farms, underwater cables, and increasingly, deep-sea mining operations.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Sea Level History</h3>
      <p class="text-gray-300 mb-4">During ice ages, sea levels dropped 120 meters, exposing much of today's continental shelf. Ancient river valleys and land bridges that allowed human and animal migration are now submerged features of the shelf.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Environmental Challenges</h3>
      <p class="text-gray-300 mb-4">Continental shelves face multiple pressures including overfishing, pollution, coastal development, and climate change. Rising seas and ocean acidification threaten shelf ecosystems that billions of people depend on for food and livelihoods.</p>
      
      <div class="bg-blue-900/30 p-6 rounded-lg my-6 border border-blue-700/30">
        <h4 class="font-bold text-blue-300 mb-2">Legal Significance</h4>
        <p class="text-blue-200">Under international law, nations have exclusive rights to continental shelf resources up to 200 nautical miles from shore, or beyond if they can prove geological connection to land.</p>
      </div>
    `,
    tags: ["Continental Shelf", "Marine Productivity", "Offshore Resources", "Coastal Ecosystems", "Ocean Geology"]
  },
  {
    id: 27,
    category: "Ship Disasters",
    title: "MV Sewol Ferry Disaster: Modern Maritime Safety Failures",
    excerpt: "The 2014 Sewol ferry disaster killed 304 people, mostly students, exposing critical safety failures in modern passenger vessel operations and emergency response procedures.",
    date: "April 16, 2014",
    author: "Maritime Safety Investigation Board",
    source: "Korean Maritime Safety Tribunal",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    readTime: "11 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">The MV Sewol ferry disaster became South Korea's worst maritime accident in modern history, killing 304 people and exposing systemic failures in vessel modification, crew training, and emergency response that reverberated globally.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">The Capsizing Event</h3>
      <p class="text-gray-300 mb-4">On April 16, 2014, the ferry Sewol capsized while traveling from Incheon to Jeju Island. The vessel began listing severely after making a sharp turn, then capsized completely within hours, trapping passengers inside as it sank.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Fatal Design Modifications</h3>
      <p class="text-gray-300 mb-4">The ferry had been modified to increase passenger capacity by adding extra decks and cabins, raising its center of gravity. These modifications, combined with inadequate ballast, made the vessel dangerously unstable in rough conditions.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Cargo and Stability Issues</h3>
      <p class="text-gray-300 mb-4">The ship was carrying 2,142 tons of cargo - exceeding safe limits by 1,077 tons. Much of this cargo was improperly secured, causing it to shift during the turn and contributing to the vessel's loss of stability.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Crew Response Failures</h3>
      <p class="text-gray-300 mb-4">Instead of ordering immediate evacuation, crew members told passengers to stay in their cabins. The captain and most crew abandoned ship while passengers remained trapped inside, violating fundamental maritime emergency protocols.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Rescue Operation Shortcomings</h3>
      <p class="text-gray-300 mb-4">The coast guard response was hampered by poor coordination, inadequate diving capabilities, and lack of heavy lifting equipment. Many passengers could have been saved with more effective rescue operations in the critical first hours.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Regulatory Reforms</h3>
      <p class="text-gray-300 mb-4">The disaster led to comprehensive maritime safety reforms including stricter vessel modification oversight, enhanced crew training requirements, improved emergency response protocols, and better passenger vessel safety equipment standards.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Global Impact</h3>
      <p class="text-gray-300 mb-4">The Sewol disaster prompted international reviews of ferry safety regulations, particularly regarding stability assessments after vessel modifications and passenger vessel emergency evacuation procedures.</p>
      
      <blockquote class="border-l-4 border-blue-400 pl-6 my-6 italic text-gray-400">
        "The Sewol tragedy reminded the world that maritime safety is only as strong as its weakest link - from vessel design to crew training to emergency response." - International Maritime Organization
      </blockquote>
    `,
    tags: ["Ferry Disaster", "Maritime Safety", "Sewol", "Passenger Vessel", "Emergency Response"]
  },
  {
    id: 28,
    category: "Cyclones",
    title: "Typhoon Haiyan: The Strongest Storm Ever to Make Landfall",
    excerpt: "Super Typhoon Haiyan devastated the Philippines in 2013 with sustained winds of 195 mph, storm surge up to 20 feet, and catastrophic damage across multiple islands.",
    date: "November 8, 2013",
    author: "Philippines Weather Bureau",
    source: "World Meteorological Organization",
    image: "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    readTime: "12 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">Super Typhoon Haiyan (known locally as Yolanda) made landfall in the Philippines as the strongest tropical cyclone ever recorded at landfall, with sustained winds of 195 mph and devastating storm surge that killed over 6,300 people.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Record-Breaking Intensity</h3>
      <p class="text-gray-300 mb-4">Haiyan reached maximum sustained winds of 195 mph with gusts exceeding 235 mph - the strongest winds ever measured in a tropical cyclone at landfall. The storm's minimum central pressure dropped to 895 millibars, among the lowest ever recorded.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Devastating Storm Surge</h3>
      <p class="text-gray-300 mb-4">The typhoon generated storm surge reaching 20 feet in height, devastating coastal areas of Leyte and Samar provinces. The city of Tacloban was particularly hard hit, with surge penetrating up to 2 kilometers inland and destroying entire neighborhoods.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Rapid Intensification</h3>
      <p class="text-gray-300 mb-4">Haiyan intensified explosively over the warm waters of the western Pacific, increasing from tropical storm to super typhoon in just 24 hours. Sea surface temperatures exceeding 30°C provided abundant energy for this rapid strengthening.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Human Impact</h3>
      <p class="text-gray-300 mb-4">The typhoon killed 6,352 people and displaced over 4 million. Tacloban, a city of 250,000, was virtually destroyed with 90% of structures damaged or destroyed. The Tacloban airport and its control tower were completely devastated.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">International Response</h3>
      <p class="text-gray-300 mb-4">The disaster triggered one of the largest humanitarian responses in history, with over $800 million in international aid. The U.S. military deployed thousands of personnel and aircraft for rescue and relief operations.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Climate Change Connection</h3>
      <p class="text-gray-300 mb-4">Scientists link Haiyan's intensity to unusually warm ocean temperatures in the western Pacific. Climate models suggest that while typhoon frequency may decrease, the strongest storms will become more intense as oceans continue warming.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Lessons Learned</h3>
      <p class="text-gray-300 mb-4">The disaster highlighted the need for better storm surge forecasting, improved early warning systems for remote areas, and climate-resilient infrastructure in typhoon-prone regions.</p>
      
      <div class="bg-red-900/30 p-6 rounded-lg my-6 border border-red-700/30">
        <h4 class="font-bold text-red-300 mb-2">Building Back Better</h4>
        <p class="text-red-200">Post-Haiyan reconstruction focused on resilient infrastructure, elevated buildings, and improved evacuation centers designed to withstand future super typhoons.</p>
      </div>
    `,
    tags: ["Super Typhoon", "Haiyan", "Storm Surge", "Philippines", "Extreme Weather"]
  },
  {
    id: 29,
    category: "Ocean Phenomena",
    title: "El Niño and La Niña: How Ocean Temperature Patterns Control Global Weather",
    excerpt: "The El Niño-Southern Oscillation (ENSO) is the most powerful driver of year-to-year climate variability, affecting weather patterns, agriculture, and marine ecosystems worldwide.",
    date: "June 25, 2025",
    author: "Climate Prediction Center",
    source: "NOAA Climate Observatory",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "10 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">The El Niño-Southern Oscillation (ENSO) represents the most significant climate pattern affecting global weather, driven by interactions between ocean temperatures and atmospheric pressure systems across the Pacific Ocean.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">The ENSO Cycle</h3>
      <p class="text-gray-300 mb-4">ENSO alternates between three phases: El Niño (warm phase), La Niña (cool phase), and neutral conditions. Each phase typically lasts 9-12 months but can persist for up to 2 years, with cycles occurring every 2-7 years.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">El Niño Conditions</h3>
      <p class="text-gray-300 mb-4">During El Niño, sea surface temperatures in the central and eastern Pacific warm by 1-3°C above average. Trade winds weaken, allowing warm water to spread eastward toward the Americas, disrupting normal ocean circulation patterns.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">La Niña Effects</h3>
      <p class="text-gray-300 mb-4">La Niña brings cooler than normal sea surface temperatures to the central and eastern Pacific. Stronger trade winds push warm water westward, enhancing upwelling of cold, nutrient-rich water along the South American coast.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Global Weather Impacts</h3>
      <p class="text-gray-300 mb-4">El Niño typically brings increased rainfall to the southern United States and Peru, while causing droughts in Australia, Indonesia, and parts of Africa. La Niña generally produces opposite effects, with enhanced monsoons in Southeast Asia and increased hurricane activity in the Atlantic.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Marine Ecosystem Effects</h3>
      <p class="text-gray-300 mb-4">ENSO dramatically affects marine food chains. El Niño reduces upwelling, decreasing phytoplankton and fish populations off South America. La Niña enhances productivity but can lead to harmful algal blooms and fish kills due to low oxygen conditions.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Economic Consequences</h3>
      <p class="text-gray-300 mb-4">ENSO events cause billions in economic losses through agricultural disruption, extreme weather damage, and fishery collapses. The 1997-98 El Niño caused an estimated $96 billion in global economic losses.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Prediction and Monitoring</h3>
      <p class="text-gray-300 mb-4">Scientists monitor ENSO using satellite observations, ocean buoys, and atmospheric measurements. Current models can predict ENSO events 6-9 months in advance, enabling preparation for associated weather extremes.</p>
    `,
    tags: ["El Niño", "La Niña", "ENSO", "Climate Patterns", "Ocean Temperature"]
  },
  {
    id: 30,
    category: "Marine Life",
    title: "The Great White Shark: Apex Predator and Keystone Species",
    excerpt: "Great white sharks are among the most searched marine topics, serving as apex predators that maintain ocean ecosystem balance while facing increasing conservation challenges.",
    date: "June 20, 2025",
    author: "Shark Research Institute",
    source: "International Shark Conservation Foundation",
    image: "https://images.unsplash.com/photo-1560275619-4662e36fa65c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "9 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">Great white sharks are among the ocean's most feared and misunderstood predators, playing crucial roles as apex predators while facing significant population declines due to human activities and habitat loss.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Physical Adaptations</h3>
      <p class="text-gray-300 mb-4">Great whites can reach lengths of 20 feet and weights exceeding 5,000 pounds. Their streamlined bodies, powerful tails, and specialized dentition make them perfectly adapted for hunting marine mammals in coastal waters.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Hunting Behavior</h3>
      <p class="text-gray-300 mb-4">These sharks employ ambush tactics, approaching prey from below at speeds up to 35 mph. Their ability to breach completely out of the water demonstrates their incredible power and hunting precision.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Ecosystem Role</h3>
      <p class="text-gray-300 mb-4">As apex predators, great whites control populations of seals, sea lions, and other marine mammals, preventing overgrazing of fish populations and maintaining healthy marine food webs.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Migration Patterns</h3>
      <p class="text-gray-300 mb-4">Great whites undertake epic migrations spanning thousands of miles between feeding and breeding areas. Pacific populations migrate between California and Hawaii in predictable patterns that scientists are still studying.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Conservation Status</h3>
      <p class="text-gray-300 mb-4">Great white populations have declined by 60-90% in many regions due to overfishing, bycatch, and habitat degradation. They are now protected in many countries but face ongoing threats from illegal fishing.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Human Interactions</h3>
      <p class="text-gray-300 mb-4">Despite their fearsome reputation, great whites rarely attack humans. Most incidents are cases of mistaken identity, with sharks investigating unfamiliar objects in their territory.</p>
    `,
    tags: ["Great White Shark", "Apex Predator", "Marine Conservation", "Shark Behavior", "Ocean Ecosystem"]
  },
  // Additional High-Interest Ocean Topics
  {
    id: 31,
    category: "Ship Disasters",
    title: "Costa Concordia: Modern Cruise Ship Disaster Off Italian Coast",
    excerpt: "The 2012 Costa Concordia disaster killed 32 people when the cruise ship ran aground off Giglio Island, exposing safety failures in modern passenger shipping.",
    date: "January 13, 2012",
    author: "Italian Maritime Investigation",
    source: "European Maritime Safety Agency",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "10 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">The Costa Concordia disaster shocked the world when a modern cruise ship carrying 4,252 people ran aground and capsized off the Italian coast, highlighting critical safety failures in contemporary maritime operations.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">The Collision</h3>
      <p class="text-gray-300 mb-4">On January 13, 2012, Costa Concordia struck underwater rocks near Giglio Island while performing an unauthorized "sail-by" salute. The impact tore a 50-meter gash in the hull, causing immediate flooding and list.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Captain's Fatal Decisions</h3>
      <p class="text-gray-300 mb-4">Captain Francesco Schettino deviated from the planned route without informing the crew, sailed too close to shore, and abandoned ship while passengers remained trapped aboard. His actions violated fundamental maritime principles and international law.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Evacuation Chaos</h3>
      <p class="text-gray-300 mb-4">The evacuation was delayed and chaotic, with crew members giving conflicting instructions and no general alarm sounded for over an hour. Passengers were initially told to return to their cabins, losing critical evacuation time.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Rescue Operations</h3>
      <p class="text-gray-300 mb-4">Local residents and coast guard vessels rescued 4,195 people, but 32 died and several were never found. The ship's list prevented lowering lifeboats on one side, forcing dangerous evacuations down the tilted deck.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Environmental Impact</h3>
      <p class="text-gray-300 mb-4">The wreck threatened the pristine Tuscan Archipelago National Park with fuel spills and environmental damage. The unprecedented salvage operation took three years and cost $1.5 billion.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Industry Reforms</h3>
      <p class="text-gray-300 mb-4">The disaster led to enhanced bridge resource management training, improved passenger mustering procedures, and mandatory safety briefings before departure for all cruise passengers worldwide.</p>
    `,
    tags: ["Costa Concordia", "Cruise Ship Disaster", "Maritime Safety", "Emergency Evacuation", "Captain Error"]
  },
  {
    id: 32,
    category: "Tsunamis",
    title: "Boxing Day Tsunami 2004: When the Ocean Turned Deadly",
    excerpt: "The Indian Ocean tsunami triggered by a magnitude 9.1 earthquake devastated 14 countries, killed 230,000 people, and forever changed tsunami science and early warning systems.",
    date: "December 26, 2004",
    author: "Indian Ocean Tsunami Research Team",
    source: "UNESCO Tsunami Information Centre",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    readTime: "15 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">The Boxing Day tsunami of 2004 remains the deadliest tsunami in recorded history, transforming our understanding of these devastating natural phenomena and spurring global improvements in warning systems and coastal preparedness.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">The Massive Earthquake</h3>
      <p class="text-gray-300 mb-4">At 07:58:53 local time, a magnitude 9.1-9.3 earthquake struck off the west coast of northern Sumatra. The rupture zone extended 1,600 kilometers northward from Sumatra, making it the longest fault rupture ever documented.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Tsunami Generation</h3>
      <p class="text-gray-300 mb-4">The massive seafloor displacement generated waves reaching 24 meters high in Sumatra and 15 meters in Thailand. The tsunami traveled across the Indian Ocean at speeds of 500-800 km/h, reaching Somalia 7 hours after the earthquake.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Devastating Impact</h3>
      <p class="text-gray-300 mb-4">The tsunami killed approximately 230,000 people across 14 countries, with Indonesia bearing the heaviest toll (167,540 deaths). Thailand, Sri Lanka, India, and the Maldives also suffered massive casualties and destruction.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Warning System Failures</h3>
      <p class="text-gray-300 mb-4">The Indian Ocean had no tsunami warning system, and many coastal communities lacked knowledge of natural warning signs. Despite hours of warning time for distant coasts, no effective alerts reached vulnerable populations.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Global Response</h3>
      <p class="text-gray-300 mb-4">The disaster triggered the largest humanitarian response in history, with over $14 billion in aid. It also catalyzed international cooperation to establish the Indian Ocean Tsunami Warning System, operational since 2006.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Scientific Advances</h3>
      <p class="text-gray-300 mb-4">Post-tsunami research revolutionized understanding of mega-thrust earthquakes, tsunami propagation, and coastal inundation modeling. New paleotsunamiological methods now identify ancient tsunami deposits to assess long-term hazards.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Lessons for the Future</h3>
      <p class="text-gray-300 mb-4">The 2004 tsunami emphasized the importance of education, early warning systems, and natural coastal protection. Today, 75% of the Indian Ocean's at-risk population can receive tsunami warnings within 15 minutes.</p>
      
      <blockquote class="border-l-4 border-blue-400 pl-6 my-6 italic text-gray-400">
        "The 2004 tsunami was a wake-up call that no ocean is immune to these devastating waves. International cooperation and scientific advancement are our best defenses against future tragedies." - Dr. Laura Kong, UNESCO IOC
      </blockquote>
    `,
    tags: ["2004 Tsunami", "Indian Ocean", "Natural Disaster", "Earthquake", "Tsunami Warning"]
  },
  {
    id: 33,
    category: "Marine Life",
    title: "Dolphins: The Intelligent Ocean Ambassadors",
    excerpt: "Dolphins are among the most intelligent marine animals, displaying complex social behaviors, problem-solving abilities, and communication skills that continue to fascinate scientists and the public.",
    date: "June 15, 2025",
    author: "Marine Mammal Research Institute",
    source: "Dolphin Intelligence Project",
    image: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "8 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">Dolphins rank among the most intelligent animals on Earth, demonstrating self-awareness, complex social structures, and communication abilities that challenge our understanding of consciousness and cognition in the marine world.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Cognitive Abilities</h3>
      <p class="text-gray-300 mb-4">Dolphins pass the mirror self-recognition test, use tools, demonstrate numerical concepts, and can learn complex behavioral sequences. Their brain-to-body ratio is second only to humans among mammals.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Communication Systems</h3>
      <p class="text-gray-300 mb-4">Dolphins use echolocation for navigation and hunting, producing clicks at frequencies up to 150 kHz. They also communicate through whistles, with each individual having a unique "signature whistle" that functions like a name.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Social Structures</h3>
      <p class="text-gray-300 mb-4">Dolphin societies are complex, with multi-level alliances, cooperative hunting strategies, and cultural transmission of behaviors. Some populations have developed unique feeding techniques passed down through generations.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Conservation Challenges</h3>
      <p class="text-gray-300 mb-4">Dolphins face threats from pollution, fishing nets, ship strikes, and habitat degradation. Climate change affects their prey distribution, while noise pollution interferes with their echolocation abilities.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Human Interactions</h3>
      <p class="text-gray-300 mb-4">Dolphins have been documented helping humans, including assisting fishermen and rescuing drowning people. Their intelligence and apparent empathy have made them subjects of numerous scientific studies and conservation efforts.</p>
    `,
    tags: ["Dolphins", "Marine Intelligence", "Animal Cognition", "Marine Mammals", "Ocean Conservation"]
  },
  {
    id: 34,
    category: "Ocean Geography",
    title: "Coral Reefs: The Rainforests of the Sea",
    excerpt: "Coral reefs support 25% of marine species while covering less than 1% of ocean area, making them among Earth's most biodiverse and economically important ecosystems.",
    date: "June 10, 2025",
    author: "Coral Reef Research Foundation",
    source: "Global Coral Reef Monitoring Network",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "9 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">Coral reefs are among Earth's most diverse ecosystems, supporting an estimated 25% of all marine species while covering less than 1% of the ocean floor, earning them the nickname "rainforests of the sea."</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Reef Formation</h3>
      <p class="text-gray-300 mb-4">Coral reefs are built by tiny coral polyps that secrete calcium carbonate skeletons. Over thousands of years, these accumulate to form massive structures that can be seen from space, like the Great Barrier Reef.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Symbiotic Relationships</h3>
      <p class="text-gray-300 mb-4">Corals have a symbiotic relationship with zooxanthellae algae, which provide up to 90% of the coral's energy through photosynthesis. This partnership allows reefs to thrive in nutrient-poor tropical waters.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Biodiversity Hotspots</h3>
      <p class="text-gray-300 mb-4">The Coral Triangle region (Indonesia, Malaysia, Philippines) hosts the highest coral diversity, with over 600 coral species and 3,000 fish species. These ecosystems support complex food webs and provide nursery habitats for marine life.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Economic Importance</h3>
      <p class="text-gray-300 mb-4">Coral reefs provide $375 billion annually in global economic benefits through fisheries, tourism, and coastal protection. They support the livelihoods of over 500 million people worldwide.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Climate Threats</h3>
      <p class="text-gray-300 mb-4">Rising ocean temperatures cause coral bleaching, while ocean acidification weakens coral skeletons. The Great Barrier Reef has experienced five mass bleaching events since 1998, with some areas suffering 90% coral mortality.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Conservation Efforts</h3>
      <p class="text-gray-300 mb-4">Scientists are developing heat-resistant coral strains, establishing marine protected areas, and implementing coral restoration programs. Local actions to reduce pollution and overfishing are crucial for reef survival.</p>
    `,
    tags: ["Coral Reefs", "Marine Biodiversity", "Ocean Ecosystems", "Climate Change", "Conservation"]
  },
  {
    id: 35,
    category: "Cyclones",
    title: "Hurricane Sandy: The Perfect Storm That Devastated New York",
    excerpt: "Hurricane Sandy merged with a winter storm system in 2012, creating a 'superstorm' that flooded New York City subways and caused $65 billion in damage across the northeastern United States.",
    date: "October 29, 2012",
    author: "National Hurricane Center",
    source: "NOAA Storm Database",
    image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    readTime: "11 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">Hurricane Sandy evolved into an unprecedented "superstorm" when it merged with a winter weather system, creating a massive cyclone that devastated the northeastern United States with storm surge, flooding, and widespread power outages.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Unusual Storm Evolution</h3>
      <p class="text-gray-300 mb-4">Sandy transitioned from a tropical hurricane to an extratropical cyclone while maintaining hurricane-force winds. This hybrid storm system grew to over 1,800 kilometers in diameter - nearly one-third the width of the continental United States.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Perfect Storm Conditions</h3>
      <p class="text-gray-300 mb-4">A high-pressure system over Greenland blocked Sandy's normal eastward track, forcing it to make a rare westward turn toward the coast. This collision with a winter storm created unique meteorological conditions never before observed.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Devastating Storm Surge</h3>
      <p class="text-gray-300 mb-4">Sandy's massive size and unusual track generated a 4.3-meter storm surge in New York Harbor, flooding subway tunnels, PATH trains, and automotive tunnels. Lower Manhattan lost power for days, affecting 8.5 million people across multiple states.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Infrastructure Failures</h3>
      <p class="text-gray-300 mb-4">The storm exposed critical vulnerabilities in coastal infrastructure. New York's subway system, airports, and hospitals were severely damaged. Many backup generators failed when placed below flood level, leaving critical facilities without power.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Economic Impact</h3>
      <p class="text-gray-300 mb-4">Sandy caused $65 billion in damage, making it the fourth-costliest hurricane in U.S. history. The storm disrupted global financial markets, closed nuclear power plants, and grounded thousands of flights for multiple days.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Climate Change Implications</h3>
      <p class="text-gray-300 mb-4">Scientists link Sandy's intensity to unusually warm Atlantic waters and changing jet stream patterns. The storm highlighted how climate change may increase the frequency of unusual storm tracks and intensities.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Resilience Building</h3>
      <p class="text-gray-300 mb-4">Post-Sandy recovery focused on building climate resilience, including elevated infrastructure, improved flood barriers, and strengthened emergency response systems. New York invested $20 billion in coastal protection projects.</p>
    `,
    tags: ["Hurricane Sandy", "Superstorm", "New York", "Storm Surge", "Infrastructure Resilience"]
  },
  {
    id: 36,
    category: "Ocean Geography",
    title: "Mid-Ocean Ridges: Where New Ocean Floor is Born",
    excerpt: "Mid-ocean ridges form the longest mountain chain on Earth, stretching 65,000 kilometers across the seafloor and creating new oceanic crust through volcanic activity.",
    date: "June 5, 2025",
    author: "Marine Geology Institute",
    source: "International Ridge Research Program",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    readTime: "8 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">Mid-ocean ridges form the Earth's longest mountain chain, snaking 65,000 kilometers across the ocean floor and serving as underwater factories where new oceanic crust is continuously created through volcanic processes.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Ridge Formation</h3>
      <p class="text-gray-300 mb-4">Mid-ocean ridges form at divergent plate boundaries where tectonic plates move apart. Magma rises from the mantle to fill the gap, creating new oceanic crust through a process called seafloor spreading.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Spreading Rates</h3>
      <p class="text-gray-300 mb-4">Different ridges spread at varying rates: slow-spreading ridges (2-5 cm/year) like the Mid-Atlantic Ridge have rugged topography, while fast-spreading ridges (>9 cm/year) like the East Pacific Rise have smoother profiles.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Hydrothermal Vents</h3>
      <p class="text-gray-300 mb-4">Volcanic activity at ridges creates hydrothermal vents that spew superheated, mineral-rich water. These vents support unique ecosystems based on chemosynthesis rather than photosynthesis, including giant tube worms and specialized bacteria.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Global Impact</h3>
      <p class="text-gray-300 mb-4">Mid-ocean ridges influence global ocean circulation, climate, and the distribution of marine life. They also control the chemistry of seawater by altering the composition of water that circulates through the oceanic crust.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Scientific Discoveries</h3>
      <p class="text-gray-300 mb-4">Ridge exploration has revealed new species, mineral deposits, and insights into early Earth conditions. The discovery of hydrothermal vents in 1977 revolutionized understanding of life's limits and origins.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Resource Potential</h3>
      <p class="text-gray-300 mb-4">Ridges contain valuable minerals including copper, gold, silver, and rare earth elements. Deep-sea mining interest is growing, though environmental concerns about ecosystem damage remain significant.</p>
    `,
    tags: ["Mid-Ocean Ridges", "Seafloor Spreading", "Hydrothermal Vents", "Plate Tectonics", "Deep Sea"]
  },
  {
    id: 37,
    category: "Marine Life",
    title: "Whales: The Ocean's Gentle Giants and Ecosystem Engineers",
    excerpt: "Whales are the largest animals ever to live on Earth, playing crucial roles in ocean ecosystems through the 'whale pump' effect and serving as indicators of ocean health.",
    date: "May 30, 2025",
    author: "Whale Research Consortium",
    source: "International Whaling Commission",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    readTime: "9 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">Whales are not only the largest animals ever to exist on Earth but also serve as "ecosystem engineers" that profoundly influence ocean productivity, carbon cycling, and marine biodiversity through their feeding and migration behaviors.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Size and Diversity</h3>
      <p class="text-gray-300 mb-4">Blue whales can reach 30 meters in length and weigh up to 200 tons, while smaller species like minke whales measure just 10 meters. There are about 90 whale species, divided into toothed whales (odontocetes) and baleen whales (mysticetes).</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">The Whale Pump</h3>
      <p class="text-gray-300 mb-4">Whales transport nutrients from deep waters to the surface through vertical migrations and defecation, fertilizing phytoplankton and supporting marine food webs. This "whale pump" enhances ocean productivity and carbon sequestration.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Migration Patterns</h3>
      <p class="text-gray-300 mb-4">Many whale species undertake epic migrations, with gray whales traveling 20,000 kilometers annually between feeding and breeding grounds. These migrations connect distant ocean ecosystems and redistribute nutrients across ocean basins.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Communication and Intelligence</h3>
      <p class="text-gray-300 mb-4">Whales use complex songs and calls for communication across vast distances. Humpback whale songs can travel hundreds of kilometers, while sperm whales use echolocation clicks that may stun prey and facilitate social interactions.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Conservation Success</h3>
      <p class="text-gray-300 mb-4">Many whale populations have recovered following the 1986 commercial whaling moratorium. Humpback whale numbers have increased from 5,000 to over 80,000, demonstrating the effectiveness of international conservation efforts.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Modern Threats</h3>
      <p class="text-gray-300 mb-4">Despite protection from hunting, whales face new challenges including ship strikes, fishing gear entanglement, ocean noise pollution, and climate change affecting their prey distribution and migration routes.</p>
    `,
    tags: ["Whales", "Marine Mammals", "Ocean Ecosystems", "Migration", "Conservation Success"]
  },
  {
    id: 38,
    category: "Ocean Phenomena",
    title: "Ocean Acidification: The Other CO2 Problem",
    excerpt: "Ocean acidification, caused by absorption of atmospheric CO2, is changing seawater chemistry faster than any time in 300 million years, threatening marine ecosystems worldwide.",
    date: "May 25, 2025",
    author: "Ocean Chemistry Research Alliance",
    source: "Global Ocean Acidification Observing Network",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    readTime: "10 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">Ocean acidification represents a fundamental change in ocean chemistry, with oceans absorbing 30% of human CO2 emissions and becoming 30% more acidic since the Industrial Revolution, threatening marine life that depends on calcium carbonate structures.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Chemical Process</h3>
      <p class="text-gray-300 mb-4">When CO2 dissolves in seawater, it forms carbonic acid, which releases hydrogen ions and lowers ocean pH. This process also reduces carbonate ion availability, making it harder for organisms to build shells and skeletons.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Rate of Change</h3>
      <p class="text-gray-300 mb-4">Current acidification rates are 100 times faster than natural fluctuations over the past 20 million years. Ocean pH has dropped 0.1 units since 1750, representing a 26% increase in hydrogen ion concentration.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Vulnerable Species</h3>
      <p class="text-gray-300 mb-4">Shell-forming organisms like oysters, clams, sea butterflies, and coral reefs are most vulnerable. Laboratory studies show reduced calcification rates, shell dissolution, and behavioral changes in acidified conditions.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Ecosystem Impacts</h3>
      <p class="text-gray-300 mb-4">Acidification affects marine food webs from phytoplankton to fish. Changes in prey species abundance and distribution can cascade through ecosystems, affecting commercial fisheries and marine biodiversity.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Regional Variations</h3>
      <p class="text-gray-300 mb-4">Cold waters naturally hold more CO2, making polar regions especially vulnerable. The Arctic Ocean is acidifying twice as fast as the global average, while upwelling zones experience severe acidification as deep, CO2-rich water reaches the surface.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Economic Consequences</h3>
      <p class="text-gray-300 mb-4">The U.S. shellfish industry already reports $110 million in annual losses due to acidification. Pacific Northwest oyster farms have experienced massive die-offs, forcing adaptation strategies and hatchery modifications.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Solutions and Adaptation</h3>
      <p class="text-gray-300 mb-4">Reducing CO2 emissions remains the primary solution, but local actions like reducing nutrient pollution can help. Scientists are also developing acidification-resistant species and monitoring systems to track changes.</p>
    `,
    tags: ["Ocean Acidification", "Climate Change", "Marine Chemistry", "CO2 Emissions", "Marine Ecosystems"]
  },
  {
    id: 39,
    category: "Ship Disasters",
    title: "MS Estonia: Europe's Deadliest Modern Ferry Disaster",
    excerpt: "The 1994 sinking of MS Estonia in the Baltic Sea killed 852 people, becoming Europe's deadliest peacetime maritime disaster and leading to major ferry safety improvements.",
    date: "September 28, 1994",
    author: "Baltic Maritime Safety Commission",
    source: "Joint Accident Investigation Commission",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    readTime: "12 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">The MS Estonia disaster remains Europe's deadliest peacetime maritime accident, when the ferry sank in severe weather conditions in the Baltic Sea, killing 852 of the 989 people aboard and exposing critical design flaws in ferry construction.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">The Fatal Voyage</h3>
      <p class="text-gray-300 mb-4">On September 27, 1994, MS Estonia departed Tallinn, Estonia, bound for Stockholm, Sweden, carrying 989 passengers and crew. The ferry encountered severe weather with waves up to 6 meters high and winds reaching 25 meters per second.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Bow Visor Failure</h3>
      <p class="text-gray-300 mb-4">The disaster began when the bow visor locks failed under repeated wave impacts, allowing water to enter the car deck. The visor's separation created a large opening that flooded the vessel's lower decks rapidly.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Rapid Sinking</h3>
      <p class="text-gray-300 mb-4">Water flooding the car deck caused severe list and stability loss. The ferry sank within 90 minutes of the initial failure, giving passengers and crew minimal time to evacuate in harsh weather conditions.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Evacuation Challenges</h3>
      <p class="text-gray-300 mb-4">The rapid list prevented normal lifeboat launching, and many passengers were trapped in their cabins. Only 137 people survived, mostly crew members who had better knowledge of the ship's layout and escape routes.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">International Investigation</h3>
      <p class="text-gray-300 mb-4">A joint investigation by Estonia, Finland, and Sweden identified design flaws in the bow visor attachment system and inadequate watertight integrity of the car deck as primary causes of the disaster.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Safety Improvements</h3>
      <p class="text-gray-300 mb-4">The disaster led to the Stockholm Agreement requiring rapid implementation of ferry safety improvements including enhanced stability standards, improved watertight integrity, and better passenger evacuation systems.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Legacy</h3>
      <p class="text-gray-300 mb-4">Modern ferries now feature stronger bow designs, better car deck drainage, improved stability criteria, and enhanced evacuation systems. The Estonia disaster fundamentally changed ferry design and safety regulations worldwide.</p>
      
      <blockquote class="border-l-4 border-blue-400 pl-6 my-6 italic text-gray-400">
        "The Estonia tragedy showed that even in familiar waters, the sea demands absolute respect and the highest safety standards. We cannot afford complacency in maritime safety." - International Maritime Organization
      </blockquote>
    `,
    tags: ["MS Estonia", "Ferry Disaster", "Baltic Sea", "Maritime Safety", "Bow Visor Failure"]
  },
  {
    id: 40,
    category: "Ocean Geography",
    title: "Abyssal Plains: Earth's Vast Underwater Deserts",
    excerpt: "Abyssal plains cover more than half of Earth's surface, forming vast underwater landscapes that harbor unique life forms and play crucial roles in global ocean circulation.",
    date: "May 20, 2025",
    author: "Deep Ocean Research Institute",
    source: "International Seabed Authority",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    readTime: "8 min read",
    content: `
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">Abyssal plains represent Earth's largest habitat, covering over 50% of the planet's surface with vast, flat underwater landscapes that extend for thousands of kilometers across the deep ocean floor.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Formation and Characteristics</h3>
      <p class="text-gray-300 mb-4">Abyssal plains form at depths of 3,000-6,000 meters through the accumulation of fine sediments over millions of years. These sediments bury the underlying volcanic topography, creating some of the flattest surfaces on Earth.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Extreme Conditions</h3>
      <p class="text-gray-300 mb-4">These environments experience crushing pressure, near-freezing temperatures (1-4°C), and eternal darkness. Food is scarce, consisting mainly of marine snow - organic particles that drift down from the surface ocean.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Adapted Life Forms</h3>
      <p class="text-gray-300 mb-4">Despite harsh conditions, abyssal plains support diverse communities including sea cucumbers, polychaete worms, and specialized bacteria. Many organisms have evolved transparent bodies, bioluminescence, and efficient metabolism.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Sediment Layers</h3>
      <p class="text-gray-300 mb-4">Sediment cores from abyssal plains provide climate records spanning millions of years, containing information about past ocean conditions, ice ages, and atmospheric composition preserved in microscopic fossils.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Global Circulation</h3>
      <p class="text-gray-300 mb-4">Abyssal plains play crucial roles in deep ocean circulation, storing vast amounts of carbon and serving as pathways for deep water masses that regulate global climate patterns.</p>
      
      <h3 class="text-2xl font-bold text-gray-100 mb-4">Resource Potential</h3>
      <p class="text-gray-300 mb-4">These areas contain polymetallic nodules rich in manganese, nickel, and copper. Growing interest in deep-sea mining raises concerns about disturbing these pristine ecosystems before they are fully understood.</p>
    `,
    tags: ["Abyssal Plains", "Deep Sea", "Ocean Floor", "Marine Sediments", "Deep Ocean Life"]
  }
];

function Stories() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "Latest News", "Breaking News", "Research Update", "Historical Incident", "Natural Phenomenon", "Scientific Discovery", "Marine Conservation", "Extreme Weather", "Climate Research", "Technology", "Marine Biology", "Ocean Exploration", "Ship Disasters", "Tsunamis", "Cyclones", "Ocean Geography", "Ocean Phenomena", "Marine Life"];

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (selectedArticle) {
    return (
      <div>
        <Nav />
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-900">
          {/* Article Header */}
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title}
                className="w-full h-full object-cover opacity-20"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-cyan-900/90"></div>
            </div>
            
            <div className="relative max-w-4xl mx-auto px-6 py-12">
              <button
                onClick={() => setSelectedArticle(null)}
                className="mb-6 flex items-center text-cyan-300 hover:text-cyan-100 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Ocean News
              </button>
              
              <div className="mb-4 flex items-center space-x-4">
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-cyan-100 px-4 py-2 rounded-full text-sm font-medium">
                  {selectedArticle.category}
                </span>
                <span className="text-cyan-300 text-sm flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {selectedArticle.readTime}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                {selectedArticle.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-cyan-200 mb-6">
                <span className="mr-6 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {selectedArticle.author}
                </span>
                <span className="mr-6 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {selectedArticle.date}
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  {selectedArticle.source}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {selectedArticle.tags.map((tag, index) => (
                  <span key={index} className="bg-slate-700/50 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Article Content */}
          <div className="max-w-4xl mx-auto px-6 py-12">
            <div 
              className="prose prose-lg max-w-none prose-invert prose-headings:text-white prose-p:text-gray-200 prose-strong:text-white prose-em:text-gray-300 prose-blockquote:text-gray-300 prose-blockquote:border-blue-400"
              style={{
                '--tw-prose-body': 'rgb(229 231 235)',
                '--tw-prose-headings': 'rgb(255 255 255)',
                '--tw-prose-bold': 'rgb(255 255 255)',
                '--tw-prose-quotes': 'rgb(209 213 219)',
                '--tw-prose-code': 'rgb(156 163 175)',
                '--tw-prose-links': 'rgb(96 165 250)'
              }}
              dangerouslySetInnerHTML={{ 
                __html: selectedArticle.content.replace(/text-gray-700/g, 'text-gray-200')
                                                .replace(/text-gray-800/g, 'text-white')
                                                .replace(/text-blue-700/g, 'text-blue-200')
                                                .replace(/text-blue-800/g, 'text-blue-300')
                                                .replace(/text-green-700/g, 'text-green-200')
                                                .replace(/text-green-800/g, 'text-green-300')
                                                .replace(/text-red-700/g, 'text-red-200')
                                                .replace(/text-red-800/g, 'text-red-300')
                                                .replace(/text-orange-700/g, 'text-orange-200')
                                                .replace(/text-orange-800/g, 'text-orange-300')
                                                .replace(/text-purple-700/g, 'text-purple-200')
                                                .replace(/text-purple-800/g, 'text-purple-300')
                                                .replace(/text-indigo-700/g, 'text-indigo-200')
                                                .replace(/text-indigo-800/g, 'text-indigo-300')
                                                .replace(/text-gray-600/g, 'text-gray-300')
                                                .replace(/bg-blue-50/g, 'bg-blue-900/30')
                                                .replace(/bg-green-50/g, 'bg-green-900/30')
                                                .replace(/bg-red-50/g, 'bg-red-900/30')
                                                .replace(/bg-orange-50/g, 'bg-orange-900/30')
                                                .replace(/bg-purple-50/g, 'bg-purple-900/30')
                                                .replace(/bg-indigo-50/g, 'bg-indigo-900/30')
                                                .replace(/border-blue-500/g, 'border-blue-400')
                                                .replace(/border-green-500/g, 'border-green-400')
                                                .replace(/border-red-500/g, 'border-red-400')
              }}
            />
            
            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <h3 className="text-lg font-semibold text-gray-200 mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </button>
                <button className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-6 py-3 rounded-lg hover:from-blue-800 hover:to-indigo-800 transition-all duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
                <button className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-teal-500/10 rounded-full blur-lg"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 py-20">
            <div className="text-center">
              <div className="mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-2xl">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H16" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 text-cyan-300 mb-4">
                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-20"></div>
                  <span className="text-sm uppercase tracking-wider font-medium">Latest Updates</span>
                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-20"></div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Ocean News
                </span>
                <br />
                <span className="text-white text-4xl md:text-5xl">Portal</span>
              </h1>
              
              <p className="text-xl text-cyan-200 max-w-4xl mx-auto leading-relaxed mb-8">
                Dive deep into the latest oceanic discoveries, groundbreaking marine science research, 
                historical maritime events, and extraordinary natural phenomena from the world's vast oceans. 
                Your gateway to understanding our planet's most mysterious frontier.
              </p>
              
              <div className="flex items-center justify-center space-x-8 text-cyan-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Live Updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                  <span className="text-sm">Global Coverage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                  <span className="text-sm">Expert Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-gradient-to-r from-slate-800/50 to-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700/50 p-8 mb-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <label className="flex items-center text-sm font-medium text-cyan-300 mb-3">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search Ocean News
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by title, content, author, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-900/70 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                  />
                  <svg className="absolute left-4 top-4.5 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              <div>
                <label className="flex items-center text-sm font-medium text-cyan-300 mb-3">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Filter by Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-4 bg-slate-900/70 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">{category}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-700">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Showing {filteredArticles.length} articles</span>
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Updated daily
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    Peer reviewed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="group bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden hover:shadow-cyan-500/10 transition-all duration-500 cursor-pointer transform hover:-translate-y-3 border border-slate-700/50 hover:border-cyan-500/30"
              >
                <div className="h-56 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-400/30 group-hover:to-blue-400/30 transition-all duration-500"></div>
                  
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-black/40 backdrop-blur-sm text-cyan-300 px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/30">
                      {article.category}
                    </span>
                    <div className="bg-black/40 backdrop-blur-sm text-cyan-300 px-2 py-1 rounded-full text-xs flex items-center border border-cyan-500/30">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {article.readTime}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-200 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-300 mb-4">
                    <span className="flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {article.author}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-slate-700/50 text-cyan-300 px-2 py-1 rounded text-xs border border-cyan-500/20">
                        #{tag}
                      </span>
                    ))}
                    {article.tags.length > 2 && (
                      <span className="bg-slate-700/30 text-gray-300 px-2 py-1 rounded text-xs border border-slate-600/30">
                        +{article.tags.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-500">
                      {article.source}
                    </div>
                    <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 transform group-hover:scale-105 flex items-center">
                      Read More
                      <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50">
                <svg className="w-20 h-20 mx-auto text-slate-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.485 0-4.735.948-6.414 2.499C4.886 18.61 4 19.801 4 21h16c0-1.199-.886-2.39-1.586-3.501z" />
                </svg>
                <h3 className="text-2xl font-semibold text-slate-300 mb-4">No articles found</h3>
                <p className="text-slate-400 mb-6">Try adjusting your search terms or category filter to discover more ocean news.</p>
                <button 
                  onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-700 hover:to-blue-700 transition-all duration-200"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Stories;
