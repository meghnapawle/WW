import React, { useState } from 'react';
import Nav from '../components/navbar/Nav';

const allQuizQuestions = [
  {
    id: 1,
    question: "What percentage of Earth's surface is covered by oceans?",
    options: ["65%", "71%", "75%", "80%"],
    correct: 1,
    explanation: "Oceans cover approximately 71% of Earth's surface."
  },
  {
    id: 2,
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correct: 3,
    explanation: "The Pacific Ocean is the largest and deepest ocean, covering about one-third of Earth's surface."
  },
  {
    id: 3,
    question: "What is the deepest point in the ocean?",
    options: ["Puerto Rico Trench", "Java Trench", "Mariana Trench", "Peru-Chile Trench"],
    correct: 2,
    explanation: "The Mariana Trench is the deepest part of the ocean, reaching depths of over 11,000 meters."
  },
  {
    id: 4,
    question: "Which marine animal is the largest on Earth?",
    options: ["Great White Shark", "Blue Whale", "Giant Squid", "Whale Shark"],
    correct: 1,
    explanation: "The Blue Whale is the largest animal ever known to have lived on Earth, reaching lengths up to 30 meters."
  },
  {
    id: 5,
    question: "What causes coral bleaching?",
    options: ["Cold water", "Pollution only", "Warm water and stress", "Lack of sunlight"],
    correct: 2,
    explanation: "Coral bleaching occurs when corals are stressed by warm water temperatures, pollution, or other environmental factors."
  },
  {
    id: 6,
    question: "How many hearts does an octopus have?",
    options: ["1", "2", "3", "4"],
    correct: 2,
    explanation: "Octopuses have three hearts: two pump blood to the gills, and one pumps blood to the rest of the body."
  },
  {
    id: 7,
    question: "What is a group of jellyfish called?",
    options: ["School", "Pod", "Smack", "Herd"],
    correct: 2,
    explanation: "A group of jellyfish is called a smack, swarm, or bloom."
  },
  {
    id: 8,
    question: "Which ocean zone receives no sunlight?",
    options: ["Sunlight Zone", "Twilight Zone", "Midnight Zone", "Abyssal Zone"],
    correct: 2,
    explanation: "The Midnight Zone (bathypelagic zone) extends from 1000-4000m and receives no sunlight."
  },
  {
    id: 9,
    question: "What percentage of the ocean has been explored by humans?",
    options: ["5%", "20%", "35%", "50%"],
    correct: 0,
    explanation: "Less than 5% of the ocean has been explored and mapped by humans."
  },
  {
    id: 10,
    question: "Which fish is known for changing gender?",
    options: ["Salmon", "Clownfish", "Tuna", "Shark"],
    correct: 1,
    explanation: "Clownfish can change from male to female when the dominant female dies."
  },
  {
    id: 11,
    question: "What is the fastest marine animal?",
    options: ["Dolphin", "Marlin", "Sailfish", "Tuna"],
    correct: 2,
    explanation: "The sailfish can reach speeds of up to 68 mph (110 km/h)."
  },
  {
    id: 12,
    question: "How much oxygen do oceans produce?",
    options: ["30%", "50%", "70%", "90%"],
    correct: 2,
    explanation: "Oceans produce approximately 70% of the oxygen we breathe, mainly from phytoplankton."
  },
  {
    id: 13,
    question: "Which creature has the largest eyes in the animal kingdom?",
    options: ["Blue Whale", "Giant Squid", "Sperm Whale", "Octopus"],
    correct: 1,
    explanation: "Giant squids have the largest eyes, up to 10 inches in diameter."
  },
  {
    id: 14,
    question: "What is the average depth of the ocean?",
    options: ["2.3 miles", "3.7 miles", "5.1 miles", "7.2 miles"],
    correct: 0,
    explanation: "The average depth of the ocean is about 2.3 miles (3.7 kilometers)."
  },
  {
    id: 15,
    question: "Which sea creature can regenerate its limbs?",
    options: ["Jellyfish", "Starfish", "Sea cucumber", "All of the above"],
    correct: 3,
    explanation: "Starfish, sea cucumbers, and some jellyfish can all regenerate lost body parts."
  },
  {
    id: 16,
    question: "What is the smallest ocean?",
    options: ["Arctic Ocean", "Indian Ocean", "Southern Ocean", "Atlantic Ocean"],
    correct: 0,
    explanation: "The Arctic Ocean is the smallest and shallowest ocean."
  },
  {
    id: 17,
    question: "Which marine animal sleeps with one eye open?",
    options: ["Whale", "Dolphin", "Shark", "Seal"],
    correct: 1,
    explanation: "Dolphins practice unihemispheric slow-wave sleep, keeping one brain hemisphere alert."
  },
  {
    id: 18,
    question: "What causes the ocean's tides?",
    options: ["Wind", "Earth's rotation", "Moon's gravity", "Ocean currents"],
    correct: 2,
    explanation: "Tides are primarily caused by the gravitational pull of the moon on Earth's oceans."
  },
  {
    id: 19,
    question: "Which fish can survive in both salt and fresh water?",
    options: ["Salmon", "Goldfish", "Catfish", "Bass"],
    correct: 0,
    explanation: "Salmon are anadromous fish that live in salt water but spawn in fresh water."
  },
  {
    id: 20,
    question: "What is bioluminescence?",
    options: ["Fish breathing", "Light production by living organisms", "Fish migration", "Deep sea pressure"],
    correct: 1,
    explanation: "Bioluminescence is the production and emission of light by living organisms."
  },
  {
    id: 21,
    question: "Which whale species is known for its songs?",
    options: ["Blue Whale", "Sperm Whale", "Humpback Whale", "Orca"],
    correct: 2,
    explanation: "Humpback whales are famous for their complex songs that can last 30 minutes."
  },
  {
    id: 22,
    question: "What is the Great Pacific Garbage Patch?",
    options: ["A coral reef", "A collection of marine plastic debris", "An underwater volcano", "A shipping route"],
    correct: 1,
    explanation: "The Great Pacific Garbage Patch is a collection of marine debris, mainly plastic, in the North Pacific Ocean."
  },
  {
    id: 23,
    question: "Which sea turtle species is the largest?",
    options: ["Green Turtle", "Loggerhead", "Leatherback", "Hawksbill"],
    correct: 2,
    explanation: "The Leatherback turtle is the largest sea turtle, reaching up to 7 feet long and 2000 pounds."
  },
  {
    id: 24,
    question: "What is ocean acidification?",
    options: ["Ocean getting warmer", "Ocean becoming more acidic due to CO2", "Ocean pollution", "Ocean evaporation"],
    correct: 1,
    explanation: "Ocean acidification occurs when CO2 from the atmosphere dissolves in seawater, making it more acidic."
  },
  {
    id: 25,
    question: "Which fish is considered living fossil?",
    options: ["Shark", "Coelacanth", "Ray", "Eel"],
    correct: 1,
    explanation: "The Coelacanth was thought extinct until rediscovered in 1938, virtually unchanged for millions of years."
  },
  {
    id: 26,
    question: "How long can a blue whale hold its breath?",
    options: ["10 minutes", "30 minutes", "90 minutes", "3 hours"],
    correct: 2,
    explanation: "Blue whales can hold their breath for up to 90 minutes when diving."
  },
  {
    id: 27,
    question: "What is a coral polyp?",
    options: ["A type of fish", "The individual animal that builds coral reefs", "A sea plant", "A type of algae"],
    correct: 1,
    explanation: "Coral polyps are tiny animals that secrete calcium carbonate to build coral reefs."
  },
  {
    id: 28,
    question: "Which ocean current affects global climate the most?",
    options: ["Gulf Stream", "California Current", "Kuroshio Current", "Antarctic Circumpolar Current"],
    correct: 0,
    explanation: "The Gulf Stream significantly affects climate in the North Atlantic and Western Europe."
  },
  {
    id: 29,
    question: "What do sea otters use to crack open shellfish?",
    options: ["Their teeth", "Rocks", "Their claws", "Sharp coral"],
    correct: 1,
    explanation: "Sea otters use rocks as tools to crack open shellfish while floating on their backs."
  },
  {
    id: 30,
    question: "Which marine animal has no brain or heart?",
    options: ["Sponge", "Jellyfish", "Sea anemone", "Starfish"],
    correct: 1,
    explanation: "Jellyfish have no brain, heart, blood, or central nervous system."
  },
  {
    id: 31,
    question: "What is the main cause of sea level rise?",
    options: ["Melting ice caps", "Thermal expansion of seawater", "Both A and B", "Ocean currents"],
    correct: 2,
    explanation: "Sea level rise is caused by both melting ice and thermal expansion of warming seawater."
  },
  {
    id: 32,
    question: "Which fish can live for over 100 years?",
    options: ["Salmon", "Greenland Shark", "Tuna", "Cod"],
    correct: 1,
    explanation: "Greenland sharks can live over 400 years, making them the longest-lived vertebrates."
  },
  {
    id: 33,
    question: "What is a tsunami?",
    options: ["Large wave caused by wind", "Seismic sea wave", "Tidal wave", "Storm surge"],
    correct: 1,
    explanation: "A tsunami is a seismic sea wave caused by underwater earthquakes, volcanic eruptions, or landslides."
  },
  {
    id: 34,
    question: "Which marine animal has blue blood?",
    options: ["Blue whale", "Horseshoe crab", "Blue shark", "Blue tang"],
    correct: 1,
    explanation: "Horseshoe crabs have blue blood due to copper-based hemocyanin instead of iron-based hemoglobin."
  },
  {
    id: 35,
    question: "What is the photic zone?",
    options: ["Deep ocean", "Surface layer where light penetrates", "Ocean floor", "Mid-water column"],
    correct: 1,
    explanation: "The photic zone is the upper layer of the ocean where sufficient light penetrates for photosynthesis."
  },
  {
    id: 36,
    question: "Which seabird can dive the deepest?",
    options: ["Pelican", "Emperor Penguin", "Albatross", "Seagull"],
    correct: 1,
    explanation: "Emperor penguins can dive to depths of over 500 meters (1,640 feet)."
  },
  {
    id: 37,
    question: "What is the primary food source for baleen whales?",
    options: ["Fish", "Krill", "Squid", "Seaweed"],
    correct: 1,
    explanation: "Baleen whales primarily feed on krill, small shrimp-like crustaceans."
  },
  {
    id: 38,
    question: "Which ocean basin is shrinking?",
    options: ["Pacific", "Atlantic", "Indian", "Arctic"],
    correct: 0,
    explanation: "The Pacific Ocean is slowly shrinking due to tectonic plate movement."
  },
  {
    id: 39,
    question: "What is the 'dead zone' in oceans?",
    options: ["Areas with no fish", "Areas with low oxygen", "Deep ocean trenches", "Polar regions"],
    correct: 1,
    explanation: "Dead zones are areas with extremely low oxygen levels where most marine life cannot survive."
  },
  {
    id: 40,
    question: "Which marine predator has the strongest bite force?",
    options: ["Great White Shark", "Orca", "Saltwater Crocodile", "Tiger Shark"],
    correct: 2,
    explanation: "Saltwater crocodiles have the strongest bite force of any marine predator at over 3,700 PSI."
  },
  {
    id: 41,
    question: "What is the thermohaline circulation?",
    options: ["Surface currents", "Global deep water circulation", "Tidal movements", "Wave patterns"],
    correct: 1,
    explanation: "Thermohaline circulation is the global conveyor belt of deep ocean currents driven by temperature and salinity."
  },
  {
    id: 42,
    question: "Which fish can produce electricity?",
    options: ["Electric eel", "Electric ray", "Both A and B", "Anglerfish"],
    correct: 2,
    explanation: "Both electric eels and electric rays can generate electrical discharges for hunting and defense."
  },
  {
    id: 43,
    question: "What is the continental shelf?",
    options: ["Deep ocean floor", "Shallow underwater area near continents", "Mid-ocean ridge", "Ocean trench"],
    correct: 1,
    explanation: "The continental shelf is the shallow underwater area that extends from the shore to the continental slope."
  },
  {
    id: 44,
    question: "Which marine animal can camouflage almost instantly?",
    options: ["Flounder", "Octopus", "Cuttlefish", "All of the above"],
    correct: 3,
    explanation: "Octopuses, cuttlefish, and some flatfish like flounders can all rapidly change color and texture."
  },
  {
    id: 45,
    question: "What is upwelling?",
    options: ["Rising warm water", "Rising cold, nutrient-rich water", "Wave formation", "Tidal movement"],
    correct: 1,
    explanation: "Upwelling brings cold, nutrient-rich water from the deep ocean to the surface, supporting marine ecosystems."
  },
  {
    id: 46,
    question: "Which whale has the longest migration?",
    options: ["Blue Whale", "Humpback Whale", "Gray Whale", "Minke Whale"],
    correct: 2,
    explanation: "Gray whales have the longest migration, traveling up to 14,000 miles round trip."
  },
  {
    id: 47,
    question: "What is marine snow?",
    options: ["Frozen seawater", "Falling organic particles", "White coral", "Floating ice"],
    correct: 1,
    explanation: "Marine snow consists of organic particles that fall from surface waters to the deep ocean."
  },
  {
    id: 48,
    question: "Which fish has antifreeze proteins?",
    options: ["Tropical fish", "Arctic fish", "Deep sea fish", "Freshwater fish"],
    correct: 1,
    explanation: "Arctic fish produce antifreeze proteins to prevent ice crystals from forming in their blood."
  },
  {
    id: 49,
    question: "What is the Sargasso Sea known for?",
    options: ["Deepest point", "Floating seaweed", "Coral reefs", "Ice coverage"],
    correct: 1,
    explanation: "The Sargasso Sea is known for its floating masses of brown seaweed called Sargassum."
  },
  {
    id: 50,
    question: "Which marine animal has the most complex nervous system among invertebrates?",
    options: ["Jellyfish", "Octopus", "Sea urchin", "Clam"],
    correct: 1,
    explanation: "Octopuses have the most complex nervous system of any invertebrate, with highly developed intelligence."
  },
  {
    id: 51,
    question: "What is a hydrothermal vent?",
    options: ["Surface water heating", "Underwater hot spring", "Ocean current", "Tidal pool"],
    correct: 1,
    explanation: "Hydrothermal vents are underwater hot springs that support unique ecosystems in the deep ocean."
  },
  {
    id: 52,
    question: "Which sea snake is the most venomous?",
    options: ["Yellow-bellied sea snake", "Beaked sea snake", "Olive sea snake", "Banded sea snake"],
    correct: 1,
    explanation: "The beaked sea snake has the most potent venom of all sea snakes."
  },
  {
    id: 53,
    question: "What causes the blue color of the ocean?",
    options: ["Blue algae", "Reflection of sky", "Absorption and scattering of light", "Dissolved minerals"],
    correct: 2,
    explanation: "Ocean appears blue due to the way water molecules absorb and scatter different wavelengths of light."
  },
  {
    id: 54,
    question: "Which marine animal can live without food for a year?",
    options: ["Shark", "Crocodile", "Penguin", "Seal"],
    correct: 0,
    explanation: "Some deep-sea sharks can survive without food for over a year due to their slow metabolism."
  },
  {
    id: 55,
    question: "What is the abyssal plain?",
    options: ["Surface ocean", "Flat deep ocean floor", "Continental shelf", "Mid-ocean ridge"],
    correct: 1,
    explanation: "Abyssal plains are vast, flat areas of the deep ocean floor covered with sediment."
  },
  {
    id: 56,
    question: "Which fish can walk on land?",
    options: ["Mudskipper", "Lungfish", "Both A and B", "Flying fish"],
    correct: 2,
    explanation: "Both mudskippers and lungfish can move on land using modified fins."
  },
  {
    id: 57,
    question: "What is coral spawning?",
    options: ["Coral eating", "Mass coral reproduction", "Coral bleaching", "Coral growth"],
    correct: 1,
    explanation: "Coral spawning is the synchronized mass release of eggs and sperm by coral colonies."
  },
  {
    id: 58,
    question: "Which marine mammal has the thickest blubber?",
    options: ["Whale", "Seal", "Walrus", "Sea otter"],
    correct: 0,
    explanation: "Bowhead whales have the thickest blubber, up to 70cm thick, for Arctic survival."
  },
  {
    id: 59,
    question: "What is the benthos?",
    options: ["Surface waters", "Ocean floor and organisms living there", "Open ocean", "Coral reefs"],
    correct: 1,
    explanation: "Benthos refers to the ocean floor and all organisms that live on or in the seafloor."
  },
  {
    id: 60,
    question: "Which fish has the most teeth?",
    options: ["Shark", "Piranha", "Catfish", "Needlefish"],
    correct: 2,
    explanation: "Catfish can have up to 9,280 teeth, more than any other vertebrate."
  },
  {
    id: 61,
    question: "What is a gyre?",
    options: ["Ocean trench", "Large circular ocean current", "Underwater mountain", "Coral formation"],
    correct: 1,
    explanation: "A gyre is a large system of circular ocean currents formed by global wind patterns."
  },
  {
    id: 62,
    question: "Which marine animal has the largest brain?",
    options: ["Blue whale", "Sperm whale", "Orca", "Elephant seal"],
    correct: 1,
    explanation: "Sperm whales have the largest brain of any animal, weighing up to 17 pounds."
  },
  {
    id: 63,
    question: "What is the midnight zone temperature?",
    options: ["Above 20°C", "10-20°C", "0-10°C", "Below 0°C"],
    correct: 2,
    explanation: "The midnight zone temperature ranges from near freezing to about 4°C (39°F)."
  },
  {
    id: 64,
    question: "Which seabird can sleep while flying?",
    options: ["Pelican", "Albatross", "Seagull", "Penguin"],
    correct: 1,
    explanation: "Albatrosses can lock their wings and sleep while gliding over the ocean."
  },
  {
    id: 65,
    question: "What is the primary cause of coral reef destruction?",
    options: ["Overfishing", "Climate change", "Pollution", "All of the above"],
    correct: 3,
    explanation: "Coral reefs face multiple threats including climate change, pollution, and overfishing."
  },
  {
    id: 66,
    question: "Which fish can change its sex multiple times?",
    options: ["Clownfish", "Parrotfish", "Wrasse", "All of the above"],
    correct: 3,
    explanation: "Many reef fish including clownfish, parrotfish, and wrasses can change sex."
  },
  {
    id: 67,
    question: "What is marine protected area?",
    options: ["Fishing zone", "Conservation area with restricted human activities", "Shipping lane", "Tourist area"],
    correct: 1,
    explanation: "Marine protected areas are regions where human activities are restricted to conserve marine ecosystems."
  },
  {
    id: 68,
    question: "Which whale species has the longest baleen plates?",
    options: ["Blue whale", "Bowhead whale", "Gray whale", "Humpback whale"],
    correct: 1,
    explanation: "Bowhead whales have the longest baleen plates, up to 4 meters long."
  },
  {
    id: 69,
    question: "What is eutrophication?",
    options: ["Water purification", "Nutrient pollution causing algae blooms", "Ocean acidification", "Coral growth"],
    correct: 1,
    explanation: "Eutrophication occurs when excess nutrients cause harmful algae blooms that deplete oxygen."
  },
  {
    id: 70,
    question: "Which marine animal can regenerate its entire body from a fragment?",
    options: ["Starfish", "Sea sponge", "Sea anemone", "All of the above"],
    correct: 3,
    explanation: "Starfish, sponges, and sea anemones can all regenerate from fragments."
  },
  {
    id: 71,
    question: "What is the twilight zone depth range?",
    options: ["0-200m", "200-1000m", "1000-4000m", "4000m+"],
    correct: 1,
    explanation: "The twilight zone (mesopelagic) extends from 200 to 1000 meters depth."
  },
  {
    id: 72,
    question: "Which fish has the largest eggs?",
    options: ["Salmon", "Whale shark", "Tuna", "Cod"],
    correct: 1,
    explanation: "Whale sharks produce the largest eggs of any fish, up to 30cm long."
  },
  {
    id: 73,
    question: "What is a seamount?",
    options: ["Ocean surface feature", "Underwater mountain", "Coral reef", "Ocean trench"],
    correct: 1,
    explanation: "A seamount is an underwater mountain that rises from the ocean floor."
  },
  {
    id: 74,
    question: "Which marine animal uses echolocation?",
    options: ["Dolphin", "Whale", "Porpoise", "All of the above"],
    correct: 3,
    explanation: "Dolphins, toothed whales, and porpoises all use echolocation for navigation and hunting."
  },
  {
    id: 75,
    question: "What is the primary component of sea salt?",
    options: ["Sodium chloride", "Magnesium", "Calcium", "Potassium"],
    correct: 0,
    explanation: "Sea salt is primarily composed of sodium chloride (about 85%)."
  },
  {
    id: 76,
    question: "Which sea turtle navigates using Earth's magnetic field?",
    options: ["Green turtle", "Loggerhead turtle", "All sea turtles", "Hawksbill turtle"],
    correct: 2,
    explanation: "All sea turtle species can detect and navigate using Earth's magnetic field."
  },
  {
    id: 77,
    question: "What is the average salinity of seawater?",
    options: ["25 ppt", "35 ppt", "45 ppt", "55 ppt"],
    correct: 1,
    explanation: "The average salinity of seawater is about 35 parts per thousand (3.5%)."
  },
  {
    id: 78,
    question: "Which fish can fly above water?",
    options: ["Flying fish", "Manta ray", "Skate", "Angelfish"],
    correct: 0,
    explanation: "Flying fish can glide above water for distances up to 200 meters."
  },
  {
    id: 79,
    question: "What is the deepest diving marine mammal?",
    options: ["Sperm whale", "Beaked whale", "Elephant seal", "Orca"],
    correct: 1,
    explanation: "Cuvier's beaked whales can dive deeper than 3,000 meters, the deepest of any marine mammal."
  },
  {
    id: 80,
    question: "Which ocean phenomenon affects global weather patterns?",
    options: ["El Niño", "La Niña", "Both A and B", "Gulf Stream"],
    correct: 2,
    explanation: "Both El Niño and La Niña are ocean-atmosphere interactions that affect global weather."
  },
  {
    id: 81,
    question: "What is ghost fishing?",
    options: ["Night fishing", "Fishing in haunted waters", "Lost fishing gear continuing to catch fish", "Deep sea fishing"],
    correct: 2,
    explanation: "Ghost fishing occurs when lost or discarded fishing gear continues to trap and kill marine life."
  },
  {
    id: 82,
    question: "Which marine animal has the longest lifespan?",
    options: ["Sea turtle", "Whale", "Clam", "Shark"],
    correct: 2,
    explanation: "Some clams, like the Arctic clam, can live over 500 years."
  },
  {
    id: 83,
    question: "What is a polynya?",
    options: ["Type of coral", "Open water area in sea ice", "Deep ocean current", "Marine animal"],
    correct: 1,
    explanation: "A polynya is an area of open water within sea ice, important for marine mammals."
  },
  {
    id: 84,
    question: "Which fish has the most complex mating ritual?",
    options: ["Seahorse", "Anglerfish", "Pufferfish", "Mandarin fish"],
    correct: 2,
    explanation: "Male pufferfish create elaborate circular sand patterns to attract females."
  },
  {
    id: 85,
    question: "What is the primary threat to marine food chains?",
    options: ["Overfishing", "Climate change", "Plastic pollution", "All of the above"],
    correct: 3,
    explanation: "Marine food chains face multiple threats including overfishing, climate change, and pollution."
  },
  {
    id: 86,
    question: "Which marine animal has the fastest reproduction rate?",
    options: ["Fish", "Jellyfish", "Coral", "Plankton"],
    correct: 3,
    explanation: "Phytoplankton can reproduce multiple times per day under ideal conditions."
  },
  {
    id: 87,
    question: "What is the carbonate compensation depth?",
    options: ["Depth where coral grows", "Depth where calcium carbonate dissolves", "Maximum diving depth", "Photosynthesis limit"],
    correct: 1,
    explanation: "The carbonate compensation depth is where calcium carbonate dissolves as fast as it accumulates."
  },
  {
    id: 88,
    question: "Which whale species is known for breaching?",
    options: ["Blue whale", "Humpback whale", "Minke whale", "Pilot whale"],
    correct: 1,
    explanation: "Humpback whales are famous for their spectacular breaching behavior."
  },
  {
    id: 89,
    question: "What is pelagic?",
    options: ["Ocean floor", "Open ocean water column", "Coastal areas", "Coral reefs"],
    correct: 1,
    explanation: "Pelagic refers to the open ocean water column, away from the shore and bottom."
  },
  {
    id: 90,
    question: "Which fish can survive in the deepest ocean trenches?",
    options: ["Anglerfish", "Snailfish", "Gulper eel", "Lanternfish"],
    correct: 1,
    explanation: "Snailfish have been found in the deepest parts of ocean trenches, over 8,000 meters deep."
  },
  {
    id: 91,
    question: "What is ocean stratification?",
    options: ["Layering of water masses", "Ocean floor sediments", "Coral growth patterns", "Fish migration routes"],
    correct: 0,
    explanation: "Ocean stratification refers to the formation of distinct water layers based on density differences."
  },
  {
    id: 92,
    question: "Which marine animal produces its own light?",
    options: ["Deep sea anglerfish", "Jellyfish", "Dinoflagellates", "All of the above"],
    correct: 3,
    explanation: "Many marine organisms including anglerfish, jellyfish, and dinoflagellates produce bioluminescence."
  },
  {
    id: 93,
    question: "What is the Great Ocean Conveyor Belt?",
    options: ["Surface currents", "Global thermohaline circulation", "Whale migration route", "Shipping lane"],
    correct: 1,
    explanation: "The Great Ocean Conveyor Belt is the global thermohaline circulation system."
  },
  {
    id: 94,
    question: "Which marine ecosystem has the highest biodiversity?",
    options: ["Open ocean", "Coral reefs", "Deep sea", "Polar seas"],
    correct: 1,
    explanation: "Coral reefs have the highest biodiversity of any marine ecosystem despite covering less than 1% of the ocean."
  },
  {
    id: 95,
    question: "What is a barnacle?",
    options: ["Type of fish", "Crustacean", "Mollusk", "Coral"],
    correct: 1,
    explanation: "Barnacles are marine crustaceans that attach permanently to hard surfaces."
  },
  {
    id: 96,
    question: "Which fish can change color to match emotions?",
    options: ["Chameleon fish", "Cuttlefish", "Octopus", "Mood fish"],
    correct: 1,
    explanation: "Cuttlefish can rapidly change color and pattern to communicate emotions and intentions."
  },
  {
    id: 97,
    question: "What is marine biotechnology?",
    options: ["Study of marine life", "Use of marine organisms for technological applications", "Ocean conservation", "Marine pollution control"],
    correct: 1,
    explanation: "Marine biotechnology uses marine organisms and their products for technological and commercial applications."
  },
  {
    id: 98,
    question: "Which marine animal has the strongest shell?",
    options: ["Turtle", "Lobster", "Conch", "Abalone"],
    correct: 3,
    explanation: "Abalone shells are among the strongest natural materials, tougher than most ceramics."
  },
  {
    id: 99,
    question: "What is a marine sanctuary?",
    options: ["Fish farm", "Protected marine area", "Research station", "Diving site"],
    correct: 1,
    explanation: "A marine sanctuary is a protected area where marine life and habitats are conserved."
  },
  {
    id: 100,
    question: "Which factor most affects ocean currents?",
    options: ["Moon phases", "Wind patterns", "Marine life", "Ocean floor topology"],
    correct: 1,
    explanation: "Wind patterns are the primary driver of surface ocean currents globally."
  },
  {
    id: 101,
    question: "What is the 'Ring of Fire' in oceanography?",
    options: ["A coral formation", "A volcanic region around the Pacific", "A bioluminescent phenomenon", "A shipping route"],
    correct: 1,
    explanation: "The Ring of Fire is a region around the Pacific Ocean with high volcanic and seismic activity."
  },
  {
    id: 102,
    question: "Which marine animal can live both in salt and fresh water throughout its life?",
    options: ["Bull shark", "Salmon", "Eel", "Stingray"],
    correct: 0,
    explanation: "Bull sharks are one of the few sharks that can live in both saltwater and freshwater environments."
  },
  {
    id: 103,
    question: "What is the primary cause of the ocean's blue color?",
    options: ["Blue algae", "Sky reflection", "Water molecule absorption of red light", "Dissolved minerals"],
    correct: 2,
    explanation: "Water molecules absorb red wavelengths more than blue, making the ocean appear blue."
  },
  {
    id: 104,
    question: "Which deep-sea creature has the largest mouth relative to body size?",
    options: ["Anglerfish", "Gulper eel", "Pelican eel", "Viper fish"],
    correct: 1,
    explanation: "The gulper eel can unhinge its massive jaw to swallow prey larger than itself."
  },
  {
    id: 105,
    question: "What is a 'blue hole'?",
    options: ["A deep underwater sinkhole", "A type of whale", "A weather phenomenon", "A shipping term"],
    correct: 0,
    explanation: "Blue holes are large underwater sinkholes that appear as dark blue circles from above."
  },
  {
    id: 106,
    question: "Which marine animal has the most advanced camouflage?",
    options: ["Chameleon fish", "Mimic octopus", "Leafy sea dragon", "Flounder"],
    correct: 1,
    explanation: "The mimic octopus can imitate over 15 different marine species with remarkable accuracy."
  },
  {
    id: 107,
    question: "What percentage of marine species remain undiscovered?",
    options: ["20%", "50%", "80%", "95%"],
    correct: 2,
    explanation: "Scientists estimate that about 80% of marine species are still unknown to science."
  },
  {
    id: 108,
    question: "Which whale has teeth instead of baleen?",
    options: ["Blue whale", "Humpback whale", "Sperm whale", "Gray whale"],
    correct: 2,
    explanation: "Sperm whales are toothed whales (odontocetes) rather than baleen whales."
  },
  {
    id: 109,
    question: "What is the fastest recorded speed of a killer whale?",
    options: ["25 mph", "35 mph", "45 mph", "55 mph"],
    correct: 2,
    explanation: "Killer whales (orcas) can reach speeds of up to 45 mph when hunting."
  },
  {
    id: 110,
    question: "Which fish can produce sounds audible to humans?",
    options: ["Grunt fish", "Croaker", "Drumfish", "All of the above"],
    correct: 3,
    explanation: "Many fish species can produce sounds using their swim bladders or pharyngeal teeth."
  },
  {
    id: 111,
    question: "What is the lifespan of a typical coral polyp?",
    options: ["1 year", "10 years", "100 years", "1000+ years"],
    correct: 3,
    explanation: "Individual coral polyps can live for hundreds to thousands of years in healthy reefs."
  },
  {
    id: 112,
    question: "Which ocean has the highest average temperature?",
    options: ["Pacific", "Atlantic", "Indian", "Arctic"],
    correct: 2,
    explanation: "The Indian Ocean has the highest average temperature due to its tropical location."
  },
  {
    id: 113,
    question: "What is a 'rogue wave'?",
    options: ["A tsunami", "An unexpectedly large wave", "A tidal wave", "A storm surge"],
    correct: 1,
    explanation: "Rogue waves are unusually large, unexpected waves that can be extremely dangerous to ships."
  },
  {
    id: 114,
    question: "Which marine animal has rectangular pupils?",
    options: ["Shark", "Octopus", "Cuttlefish", "Stingray"],
    correct: 2,
    explanation: "Cuttlefish have distinctive W-shaped, rectangular pupils that help with vision."
  },
  {
    id: 115,
    question: "What is the deepest-living fish ever recorded?",
    options: ["Anglerfish", "Snailfish", "Cusk eel", "Grenadier"],
    correct: 1,
    explanation: "Snailfish have been recorded at depths exceeding 8,000 meters in ocean trenches."
  },
  {
    id: 116,
    question: "Which sea turtle species is critically endangered?",
    options: ["Green turtle", "Hawksbill turtle", "Kemp's ridley turtle", "All of the above"],
    correct: 3,
    explanation: "All sea turtle species are threatened, with Hawksbill and Kemp's ridley being critically endangered."
  },
  {
    id: 117,
    question: "What causes the 'dead zone' in the Gulf of Mexico?",
    options: ["Oil spills", "Agricultural runoff", "Overfishing", "Climate change"],
    correct: 1,
    explanation: "Agricultural runoff creates algae blooms that consume oxygen, creating dead zones."
  },
  {
    id: 118,
    question: "Which marine animal can regenerate its brain?",
    options: ["Starfish", "Sea slug", "Jellyfish", "Sea cucumber"],
    correct: 1,
    explanation: "Some sea slug species can regenerate their entire head, including the brain."
  },
  {
    id: 119,
    question: "What is the pressure at the bottom of the Mariana Trench?",
    options: ["100 times surface pressure", "500 times surface pressure", "1000+ times surface pressure", "10,000 times surface pressure"],
    correct: 2,
    explanation: "The pressure at the bottom of the Mariana Trench is over 1,000 times greater than at sea level."
  },
  {
    id: 120,
    question: "Which whale species migrates the farthest?",
    options: ["Blue whale", "Gray whale", "Humpback whale", "Arctic whale"],
    correct: 1,
    explanation: "Gray whales make the longest migration, traveling up to 14,000 miles round trip."
  },
  {
    id: 121,
    question: "What is 'whale fall'?",
    options: ["Whale migration", "Dead whale sinking to ocean floor", "Whale songs", "Whale hunting"],
    correct: 1,
    explanation: "Whale fall refers to a whale carcass that sinks to the ocean floor, creating a unique ecosystem."
  },
  {
    id: 122,
    question: "Which fish has antifreeze in its blood?",
    options: ["Antarctic icefish", "Arctic cod", "Polar shark", "All of the above"],
    correct: 3,
    explanation: "Many polar fish species have antifreeze proteins in their blood to survive near-freezing waters."
  },
  {
    id: 123,
    question: "What is the most abundant element in seawater after hydrogen and oxygen?",
    options: ["Sodium", "Chlorine", "Magnesium", "Calcium"],
    correct: 1,
    explanation: "Chlorine is the third most abundant element in seawater, forming salt with sodium."
  },
  {
    id: 124,
    question: "Which marine animal has the longest pregnancy?",
    options: ["Blue whale", "Elephant seal", "Sperm whale", "Frilled shark"],
    correct: 3,
    explanation: "Frilled sharks have the longest pregnancy of any vertebrate, lasting up to 42 months."
  },
  {
    id: 125,
    question: "What is bioluminescent plankton called?",
    options: ["Photoplankton", "Dinoflagellates", "Nanoplankton", "Holoplankton"],
    correct: 1,
    explanation: "Dinoflagellates are marine plankton that can produce bioluminescent light."
  },
  {
    id: 126,
    question: "Which ocean phenomenon can affect weather patterns worldwide?",
    options: ["El Niño/La Niña", "Gulf Stream", "Antarctic Circumpolar Current", "All of the above"],
    correct: 3,
    explanation: "Major ocean currents and phenomena like El Niño can influence global weather patterns."
  },
  {
    id: 127,
    question: "What is the average age of ocean water?",
    options: ["100 years", "1,000 years", "10,000 years", "100,000 years"],
    correct: 1,
    explanation: "The average age of ocean water is approximately 1,000-1,500 years."
  },
  {
    id: 128,
    question: "Which marine animal can survive being frozen solid?",
    options: ["Antarctic fish", "Arctic jellyfish", "Wood frog", "Tardigrade"],
    correct: 3,
    explanation: "Tardigrades (water bears) can survive being completely frozen and dehydrated."
  },
  {
    id: 129,
    question: "What is the 'twilight zone' migration?",
    options: ["Fish swimming to surface at night", "Whale migration", "Coral spawning", "Tide movement"],
    correct: 0,
    explanation: "Many deep-sea creatures migrate to surface waters at night to feed, the largest migration on Earth."
  },
  {
    id: 130,
    question: "Which shark species can walk on land?",
    options: ["Hammerhead", "Walking shark", "Nurse shark", "Tiger shark"],
    correct: 1,
    explanation: "Walking sharks (epaulette sharks) can use their fins to 'walk' across coral reefs and shallow water."
  },
  {
    id: 131,
    question: "What percentage of Earth's water is in the oceans?",
    options: ["71%", "85%", "97%", "99%"],
    correct: 2,
    explanation: "About 97% of all water on Earth is in the oceans, with only 3% being freshwater."
  },
  {
    id: 132,
    question: "Which marine animal has the most complex social structure?",
    options: ["Dolphins", "Orcas", "Sperm whales", "All of the above"],
    correct: 3,
    explanation: "All cetaceans have complex social structures with sophisticated communication and cooperation."
  },
  {
    id: 133,
    question: "What is a 'living fossil' in marine biology?",
    options: ["Old coral", "Unchanged species", "Fossilized fish", "Ancient DNA"],
    correct: 1,
    explanation: "Living fossils are species that have remained largely unchanged for millions of years."
  },
  {
    id: 134,
    question: "Which ocean zone has the most biodiversity?",
    options: ["Surface zone", "Twilight zone", "Midnight zone", "Abyssal zone"],
    correct: 1,
    explanation: "The twilight zone (mesopelagic) has the highest biodiversity of marine life."
  },
  {
    id: 135,
    question: "What is the Great Barrier Reef's length?",
    options: ["1,200 miles", "1,600 miles", "2,300 miles", "3,000 miles"],
    correct: 2,
    explanation: "The Great Barrier Reef stretches for approximately 2,300 kilometers (1,430 miles)."
  },
  {
    id: 136,
    question: "Which fish can change from female to male?",
    options: ["Clownfish", "Parrotfish", "Grouper", "All of the above"],
    correct: 3,
    explanation: "Many reef fish species are sequential hermaphrodites and can change sex."
  },
  {
    id: 137,
    question: "What is the 'biological pump' in oceans?",
    options: ["Fish circulation", "Carbon sequestration process", "Nutrient cycling", "Oxygen production"],
    correct: 1,
    explanation: "The biological pump is the process by which oceans sequester carbon from the atmosphere."
  },
  {
    id: 138,
    question: "Which marine animal has the best memory?",
    options: ["Dolphin", "Octopus", "Elephant seal", "Sea otter"],
    correct: 0,
    explanation: "Dolphins have exceptional long-term memory and can remember other dolphins for decades."
  },
  {
    id: 139,
    question: "What is the temperature of deep ocean water?",
    options: ["0-2°C", "2-4°C", "4-6°C", "6-8°C"],
    correct: 1,
    explanation: "Deep ocean water maintains a consistent temperature of 2-4°C (35-39°F) globally."
  },
  {
    id: 140,
    question: "Which sea creature can live without oxygen?",
    options: ["Deep sea fish", "Anaerobic bacteria", "Tube worms", "All of the above"],
    correct: 3,
    explanation: "Some deep-sea organisms have adapted to live in oxygen-free environments."
  },
  {
    id: 141,
    question: "What is the most venomous marine animal?",
    options: ["Box jellyfish", "Blue-ringed octopus", "Sea snake", "Cone snail"],
    correct: 0,
    explanation: "The box jellyfish is considered the most venomous marine animal, with potentially fatal stings."
  },
  {
    id: 142,
    question: "Which ocean current is the strongest?",
    options: ["Gulf Stream", "Kuroshio Current", "Antarctic Circumpolar Current", "California Current"],
    correct: 2,
    explanation: "The Antarctic Circumpolar Current is the strongest ocean current, transporting 600 times the Amazon River flow."
  },
  {
    id: 143,
    question: "What is marine permaculture?",
    options: ["Fish farming", "Seaweed cultivation for ocean restoration", "Coral farming", "Whale conservation"],
    correct: 1,
    explanation: "Marine permaculture uses seaweed cultivation to restore marine ecosystems and sequester carbon."
  },
  {
    id: 144,
    question: "Which fish can survive out of water the longest?",
    options: ["Lungfish", "Mudskipper", "Walking catfish", "Eel"],
    correct: 0,
    explanation: "Lungfish can survive out of water for several months by burrowing in mud and using lungs."
  },
  {
    id: 145,
    question: "What is the 'marine snow' made of?",
    options: ["Ice crystals", "Dead plankton and organic matter", "Salt crystals", "Sand particles"],
    correct: 1,
    explanation: "Marine snow consists of dead plankton, fecal pellets, and other organic particles falling through water."
  },
  {
    id: 146,
    question: "Which whale species has the most complex songs?",
    options: ["Blue whale", "Humpback whale", "Bowhead whale", "Fin whale"],
    correct: 1,
    explanation: "Humpback whales have the most complex and varied songs, which can last up to 30 minutes."
  },
  {
    id: 147,
    question: "What is ocean thermal energy conversion (OTEC)?",
    options: ["Wave energy", "Temperature difference energy", "Tidal energy", "Current energy"],
    correct: 1,
    explanation: "OTEC generates electricity using temperature differences between surface and deep ocean water."
  },
  {
    id: 148,
    question: "Which marine animal has the fastest reflexes?",
    options: ["Mantis shrimp", "Electric eel", "Swordfish", "Barracuda"],
    correct: 0,
    explanation: "Mantis shrimp have the fastest recorded strike in the animal kingdom, faster than a bullet."
  },
  {
    id: 149,
    question: "What is the primary producer in ocean food chains?",
    options: ["Seaweed", "Phytoplankton", "Coral", "Fish"],
    correct: 1,
    explanation: "Phytoplankton are the primary producers that form the base of most ocean food chains."
  },
  {
    id: 150,
    question: "Which ocean phenomenon creates the strongest waves?",
    options: ["Hurricanes", "Earthquakes", "Underwater landslides", "All of the above"],
    correct: 3,
    explanation: "Hurricanes, earthquakes, and landslides can all generate extremely powerful ocean waves."
  },
  {
    id: 151,
    question: "What is the 'oxygen minimum zone'?",
    options: ["Surface water", "Deep water layer with low oxygen", "Polar regions", "Coral reefs"],
    correct: 1,
    explanation: "The oxygen minimum zone is a layer in the ocean where oxygen levels are naturally very low."
  },
  {
    id: 152,
    question: "Which marine animal can live the deepest?",
    options: ["Anglerfish", "Snailfish", "Amphipod", "Xenophyophore"],
    correct: 2,
    explanation: "Amphipods have been found at the deepest recorded depths in ocean trenches."
  },
  {
    id: 153,
    question: "What is blue carbon?",
    options: ["Blue coral", "Carbon stored in marine ecosystems", "Deep water carbon", "Plankton carbon"],
    correct: 1,
    explanation: "Blue carbon refers to carbon stored in coastal marine ecosystems like mangroves and seagrass."
  },
  {
    id: 154,
    question: "Which fish has the largest scales?",
    options: ["Tarpon", "Arapaima", "Coelacanth", "Giant trevally"],
    correct: 1,
    explanation: "Arapaima fish have some of the largest scales, which can be several inches across."
  },
  {
    id: 155,
    question: "What causes the 'red tide'?",
    options: ["Pollution", "Algae bloom", "Coral spawning", "Fish migration"],
    correct: 1,
    explanation: "Red tide is caused by blooms of algae that can produce toxins harmful to marine life."
  },
  {
    id: 156,
    question: "Which whale has the longest dive time?",
    options: ["Sperm whale", "Cuvier's beaked whale", "Blue whale", "Pilot whale"],
    correct: 1,
    explanation: "Cuvier's beaked whales hold the record for longest dives, over 2 hours underwater."
  },
  {
    id: 157,
    question: "What is a 'marine desert'?",
    options: ["Dry ocean area", "Low-nutrient ocean region", "Dead coral reef", "Polluted water"],
    correct: 1,
    explanation: "Marine deserts are ocean regions with very low nutrient levels and sparse marine life."
  },
  {
    id: 158,
    question: "Which fish can produce the loudest sound?",
    options: ["Whale", "Pistol shrimp", "Croaker fish", "Toadfish"],
    correct: 1,
    explanation: "Pistol shrimp can produce sounds over 200 decibels, louder than a gunshot."
  },
  {
    id: 159,
    question: "What is the 'Great Ocean Cleanup'?",
    options: ["Beach cleaning", "Plastic removal project", "Oil spill cleanup", "Coral restoration"],
    correct: 1,
    explanation: "The Ocean Cleanup is a project to remove plastic pollution from ocean gyres."
  },
  {
    id: 160,
    question: "Which marine animal has transparent blood?",
    options: ["Icefish", "Jellyfish", "Glass sponge", "Sea angel"],
    correct: 0,
    explanation: "Antarctic icefish have transparent blood with no red blood cells or hemoglobin."
  },
  {
    id: 161,
    question: "What is the 'marine layer'?",
    options: ["Ocean depth zone", "Coastal fog", "Plankton layer", "Current system"],
    correct: 1,
    explanation: "The marine layer is a stable layer of fog or clouds that forms over cool ocean waters."
  },
  {
    id: 162,
    question: "Which sea turtle species is the smallest?",
    options: ["Kemp's ridley", "Olive ridley", "Hawksbill", "Loggerhead"],
    correct: 0,
    explanation: "Kemp's ridley turtle is the smallest sea turtle species, weighing about 75-100 pounds."
  },
  {
    id: 163,
    question: "What is 'acoustic pollution' in oceans?",
    options: ["Chemical pollution", "Noise pollution", "Plastic pollution", "Oil pollution"],
    correct: 1,
    explanation: "Acoustic pollution refers to harmful noise from ships, sonar, and other human activities."
  },
  {
    id: 164,
    question: "Which fish can swim backwards?",
    options: ["Triggerfish", "Boxfish", "Seahorse", "All of the above"],
    correct: 3,
    explanation: "Many fish species including triggerfish, boxfish, and seahorses can swim backwards."
  },
  {
    id: 165,
    question: "What is the 'albedo effect' in polar oceans?",
    options: ["Ice reflection of sunlight", "Water absorption", "Current formation", "Marine life migration"],
    correct: 0,
    explanation: "The albedo effect refers to ice reflecting sunlight, affecting ocean and global temperatures."
  },
  {
    id: 166,
    question: "Which marine bacteria can eat plastic?",
    options: ["Ideonella sakaiensis", "Vibrio", "Pseudomonas", "Bacillus"],
    correct: 0,
    explanation: "Ideonella sakaiensis is a bacteria that can break down and consume PET plastic."
  },
  {
    id: 167,
    question: "What is the 'edge effect' in marine reserves?",
    options: ["Border phenomenon", "Depth variation", "Temperature gradient", "Current boundary"],
    correct: 0,
    explanation: "The edge effect refers to changes in ecosystem characteristics at the boundary of protected areas."
  },
  {
    id: 168,
    question: "Which whale species is known for 'spy hopping'?",
    options: ["Gray whale", "Orca", "Humpback whale", "All of the above"],
    correct: 3,
    explanation: "Many whale species engage in spy hopping - vertically lifting their heads above water to observe."
  },
  {
    id: 169,
    question: "What is 'ocean grabbing'?",
    options: ["Fishing technique", "Large-scale ocean resource acquisition", "Wave formation", "Current capture"],
    correct: 1,
    explanation: "Ocean grabbing refers to large-scale acquisition of ocean resources by powerful entities."
  },
  {
    id: 170,
    question: "Which fish has the most sophisticated hunting strategy?",
    options: ["Archerfish", "Anglerfish", "Grouper", "Frogfish"],
    correct: 0,
    explanation: "Archerfish shoot jets of water to knock insects off branches above the water surface."
  },
  {
    id: 171,
    question: "What is 'marine spatial planning'?",
    options: ["Fish migration tracking", "Ocean use management", "Current mapping", "Depth measurement"],
    correct: 1,
    explanation: "Marine spatial planning is the process of managing human uses of marine areas."
  },
  {
    id: 172,
    question: "Which coral species can survive bleaching events?",
    options: ["Hard corals", "Soft corals", "Heat-resistant corals", "All corals"],
    correct: 2,
    explanation: "Some coral species have evolved heat resistance and can survive warming events."
  },
  {
    id: 173,
    question: "What is the 'solubility pump' in oceans?",
    options: ["Nutrient cycling", "CO2 absorption", "Oxygen production", "Salt distribution"],
    correct: 1,
    explanation: "The solubility pump is the process by which oceans absorb CO2 from the atmosphere."
  },
  {
    id: 174,
    question: "Which marine animal has the most teeth?",
    options: ["Shark", "Catfish", "Sea lamprey", "Cookiecutter shark"],
    correct: 1,
    explanation: "Catfish can have thousands of tiny teeth, more than any other marine animal."
  },
  {
    id: 175,
    question: "What is 'marine rewilding'?",
    options: ["Fish stocking", "Ecosystem restoration", "Coral planting", "Predator reintroduction"],
    correct: 1,
    explanation: "Marine rewilding involves restoring marine ecosystems to their natural state."
  },
  {
    id: 176,
    question: "Which ocean has the most plastic pollution?",
    options: ["Atlantic", "Pacific", "Indian", "Arctic"],
    correct: 1,
    explanation: "The Pacific Ocean contains the largest accumulation of plastic pollution, including the Great Pacific Garbage Patch."
  },
  {
    id: 177,
    question: "What is 'blue economy'?",
    options: ["Ocean-based economic development", "Deep sea mining", "Fishing industry", "Marine tourism"],
    correct: 0,
    explanation: "Blue economy refers to sustainable use of ocean resources for economic growth and development."
  },
  {
    id: 178,
    question: "Which fish can live in both Arctic and Antarctic waters?",
    options: ["None", "Arctic char", "Polar cod", "Notothenioid"],
    correct: 0,
    explanation: "No fish species naturally occurs in both Arctic and Antarctic waters due to geographic isolation."
  },
  {
    id: 179,
    question: "What is 'marine heatwave'?",
    options: ["Hot water current", "Temporary ocean warming", "Volcanic activity", "Solar heating"],
    correct: 1,
    explanation: "Marine heatwaves are prolonged periods of unusually warm ocean temperatures."
  },
  {
    id: 180,
    question: "Which whale species was saved from extinction?",
    options: ["Blue whale", "Gray whale", "Humpback whale", "Right whale"],
    correct: 1,
    explanation: "Gray whales recovered from near extinction in the 20th century through conservation efforts."
  },
  {
    id: 181,
    question: "What is 'ocean literacy'?",
    options: ["Marine education", "Navigation skills", "Fishing knowledge", "Swimming ability"],
    correct: 0,
    explanation: "Ocean literacy is understanding the ocean's influence on humans and our impact on the ocean."
  },
  {
    id: 182,
    question: "Which marine animal uses tools most effectively?",
    options: ["Dolphin", "Sea otter", "Octopus", "Seal"],
    correct: 1,
    explanation: "Sea otters are master tool users, using rocks to crack open shellfish while floating."
  },
  {
    id: 183,
    question: "What is 'marine snow'?",
    options: ["Frozen seawater", "Organic particles falling", "White plankton", "Salt crystals"],
    correct: 1,
    explanation: "Marine snow consists of organic particles that continuously fall through the water column."
  },
  {
    id: 184,
    question: "Which ocean zone has no light at all?",
    options: ["Twilight zone", "Midnight zone", "Abyssal zone", "Hadal zone"],
    correct: 2,
    explanation: "The abyssal zone and below receive no sunlight and exist in complete darkness."
  },
  {
    id: 185,
    question: "What is 'ghost gear'?",
    options: ["Old fishing equipment", "Lost fishing nets", "Abandoned boats", "Underwater debris"],
    correct: 1,
    explanation: "Ghost gear refers to lost or abandoned fishing equipment that continues to trap marine life."
  },
  {
    id: 186,
    question: "Which fish has the most unusual reproduction?",
    options: ["Seahorse", "Anglerfish", "Pipefish", "All of the above"],
    correct: 3,
    explanation: "All these species have unique reproductive strategies, with males often caring for eggs."
  },
  {
    id: 187,
    question: "What is 'marine citizen science'?",
    options: ["Professional research", "Public participation in marine research", "Government studies", "Commercial surveys"],
    correct: 1,
    explanation: "Marine citizen science involves the public in collecting data for marine research projects."
  },
  {
    id: 188,
    question: "Which whale species has the thickest skin?",
    options: ["Blue whale", "Sperm whale", "Right whale", "Bowhead whale"],
    correct: 3,
    explanation: "Bowhead whales have the thickest skin of any whale, up to 2 feet thick."
  },
  {
    id: 189,
    question: "What is 'sea level fingerprinting'?",
    options: ["Ocean mapping", "Regional sea level patterns", "Tidal measurement", "Current tracking"],
    correct: 1,
    explanation: "Sea level fingerprinting identifies regional patterns of sea level change from different causes."
  },
  {
    id: 190,
    question: "Which marine animal has the strongest grip?",
    options: ["Octopus", "Lobster", "Giant clam", "Moray eel"],
    correct: 2,
    explanation: "Giant clams have incredibly strong adductor muscles that can snap shut with tremendous force."
  },
  {
    id: 191,
    question: "What is 'marine permafrost'?",
    options: ["Frozen seawater", "Underwater frozen sediment", "Ice shelves", "Polar ice"],
    correct: 1,
    explanation: "Marine permafrost is permanently frozen sediment beneath the ocean floor in polar regions."
  },
  {
    id: 192,
    question: "Which fish can survive in space?",
    options: ["None", "Tardigrade", "Extremophile bacteria", "Antarctic fish"],
    correct: 1,
    explanation: "Tardigrades (water bears) can survive the vacuum and radiation of space."
  },
  {
    id: 193,
    question: "What is 'ocean memory'?",
    options: ["Marine animal memory", "Ocean's response to past conditions", "Historical records", "Genetic memory"],
    correct: 1,
    explanation: "Ocean memory refers to how oceans respond to and retain effects of past climate conditions."
  },
  {
    id: 194,
    question: "Which whale species has the most complex brain?",
    options: ["Sperm whale", "Orca", "Pilot whale", "Beluga whale"],
    correct: 1,
    explanation: "Orcas have highly complex brains with advanced social cognition and cultural transmission."
  },
  {
    id: 195,
    question: "What is 'marine telemetry'?",
    options: ["Underwater communication", "Remote animal tracking", "Ocean measurement", "Sonar mapping"],
    correct: 1,
    explanation: "Marine telemetry uses electronic tags to remotely track marine animal movements and behavior."
  },
  {
    id: 196,
    question: "Which coral can live in the deepest water?",
    options: ["Hard coral", "Soft coral", "Deep-sea coral", "Cold-water coral"],
    correct: 2,
    explanation: "Deep-sea corals can live in complete darkness at depths exceeding 6,000 meters."
  },
  {
    id: 197,
    question: "What is 'ocean connectivity'?",
    options: ["Internet cables", "Current connections", "Species movement between areas", "Shipping routes"],
    correct: 2,
    explanation: "Ocean connectivity refers to how ocean currents and geographic features allow species movement."
  },
  {
    id: 198,
    question: "Which marine animal has the best color vision?",
    options: ["Octopus", "Mantis shrimp", "Cuttlefish", "Parrotfish"],
    correct: 1,
    explanation: "Mantis shrimp have the most complex color vision, seeing 12-16 types of color receptors."
  },
  {
    id: 199,
    question: "What is 'marine archaeology'?",
    options: ["Study of marine life", "Underwater historical research", "Ocean geology", "Coral dating"],
    correct: 1,
    explanation: "Marine archaeology studies human history through underwater sites and shipwrecks."
  },
  {
    id: 200,
    question: "Which ocean will be ice-free first due to climate change?",
    options: ["Arctic Ocean", "Antarctic Ocean", "North Atlantic", "North Pacific"],
    correct: 0,
    explanation: "The Arctic Ocean is predicted to be ice-free in summer within decades due to rapid warming."
  }
];

function Quiz() {
  // State variables for quiz functionality
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // Utility functions for quiz logic
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const startQuiz = () => {
    const questions = shuffleArray(allQuizQuestions)
      .slice(0, numberOfQuestions)
      .map((q, index) => ({...q, id: index + 1}));
    setShuffledQuestions(questions);
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  };

  const submitAnswer = () => {
    if (!selectedAnswer) return;
    
    if (selectedAnswer === shuffledQuestions[currentQuestionIndex].correct) {
      setScore(score + 1);
    }
    setAnswerSubmitted(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
      setAnswerSubmitted(false);
    } else {
      setShowResults(true);
    }
  };

  // Quiz setup screen
  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black">
        <Nav />
        <div className="min-h-screen p-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Ocean Knowledge Quiz
              </h1>
              <p className="text-xl text-gray-300">
                Dive deep into marine science with our comprehensive question bank
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-700">
              <div className="mb-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-full">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-6">Quiz Setup</h2>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Challenge yourself with our comprehensive collection of marine science questions! 
                  From basic oceanography to advanced marine biology, test your knowledge of the blue planet.
                </p>
              </div>
              
              <div className="mb-10">
                <label className="block text-2xl font-semibold text-white mb-6">
                  Choose Your Challenge
                </label>
                
                <div className="grid grid-cols-3 md:grid-cols-7 gap-3 mb-6">
                  {[5, 10, 15, 20, 25, 30, 50].map((num) => (
                    <button
                      key={num}
                      onClick={() => setNumberOfQuestions(num)}
                      className={`relative px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        numberOfQuestions === num
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                          : 'bg-gray-700/50 text-gray-300 border border-gray-600 hover:bg-gray-600/50 hover:text-white'
                      }`}
                    >
                      {num}
                      {numberOfQuestions === num && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
                
                <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600">
                  <label className="block text-gray-300 mb-3 font-medium">Custom Number (1-200):</label>
                  <div className="flex items-center justify-center space-x-4">
                    <button 
                      onClick={() => setNumberOfQuestions(Math.max(1, numberOfQuestions - 1))}
                      className="bg-gray-600 hover:bg-gray-500 text-white p-2 rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <input
                      type="number"
                      min="1"
                      max="200"
                      value={numberOfQuestions}
                      onChange={(e) => setNumberOfQuestions(Math.min(200, Math.max(1, parseInt(e.target.value) || 1)))}
                      className="w-24 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-center text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                    <button 
                      onClick={() => setNumberOfQuestions(Math.min(200, numberOfQuestions + 1))}
                      className="bg-gray-600 hover:bg-gray-500 text-white p-2 rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-6 mb-8 border border-blue-700/30">
                <h3 className="font-bold text-cyan-400 mb-4 text-xl flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Enhanced Quiz Features
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      <span>Comprehensive marine knowledge</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span>Advanced marine biology topics</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      <span>Conservation & climate science</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span>Detailed scientific explanations</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span>Progress tracking & analytics</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      <span>Randomized question selection</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={startQuiz}
                className="group relative bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white px-10 py-4 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 000-6h-1m0 0a3 3 0 000 6v6a1 1 0 102 0v-6h.5a3.5 3.5 0 010 7H10" />
                  </svg>
                  Start Ocean Quiz ({numberOfQuestions} Questions)
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz results screen
  if (showResults) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    const isExcellent = percentage >= 80;
    const isGood = percentage >= 60;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black">
        <Nav />
        <div className="min-h-screen p-8">
          <div className="max-w-4xl mx-auto">
            {/* Results Header */}
            <div className="text-center mb-8">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4">
                  <span className="text-4xl animate-bounce">
                    {score === shuffledQuestions.length ? "🏆" : isExcellent ? "🌊" : isGood ? "🐟" : "🏊"}
                  </span>
                </div>
                <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Quiz Complete!
                </h1>
                <p className="text-xl text-gray-300">
                  Your ocean knowledge journey ends here... for now!
                </p>
              </div>
            </div>
            
            {/* Results Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-700 mb-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Your Ocean Mastery</h2>
                
                {/* Score Circle */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-gray-600"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${percentage * 2.83} 283`}
                        className={`transition-all duration-1000 ${
                          isExcellent ? 'text-green-500' : isGood ? 'text-yellow-500' : 'text-red-500'
                        }`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-4xl font-bold text-white">{score}</div>
                      <div className="text-lg text-gray-400">/{shuffledQuestions.length}</div>
                      <div className={`text-2xl font-bold ${
                        isExcellent ? 'text-green-400' : isGood ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {percentage}%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Message */}
                <div className={`p-6 rounded-xl mb-8 ${
                  isExcellent 
                    ? 'bg-green-900/30 border border-green-700' 
                    : isGood 
                    ? 'bg-yellow-900/30 border border-yellow-700'
                    : 'bg-red-900/30 border border-red-700'
                }`}>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    isExcellent ? 'text-green-400' : isGood ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {score === shuffledQuestions.length 
                      ? "Perfect Ocean Expert!" 
                      : isExcellent
                      ? "Marine Biologist Level!"
                      : isGood
                      ? "Ocean Enthusiast!"
                      : "Beginning Explorer!"}
                  </h3>
                  <p className="text-gray-300">
                    {score === shuffledQuestions.length 
                      ? "You've mastered the mysteries of the deep blue!" 
                      : isExcellent
                      ? "Your ocean knowledge runs as deep as the Mariana Trench!"
                      : isGood
                      ? "Great job! You're swimming confidently in ocean science!"
                      : "Every expert started as a beginner! Keep exploring!"}
                  </p>
                </div>

                {/* Detailed Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600">
                    <div className="flex items-center mb-3">
                      <div className="bg-green-500 p-2 rounded-full mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-white">Correct</h4>
                    </div>
                    <div className="text-3xl font-bold text-green-400">{score}</div>
                    <div className="text-gray-400">out of {shuffledQuestions.length}</div>
                  </div>
                  
                  <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600">
                    <div className="flex items-center mb-3">
                      <div className="bg-red-500 p-2 rounded-full mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-white">Missed</h4>
                    </div>
                    <div className="text-3xl font-bold text-red-400">{shuffledQuestions.length - score}</div>
                    <div className="text-gray-400">need improvement</div>
                  </div>

                  <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600">
                    <div className="flex items-center mb-3">
                      <div className="bg-purple-500 p-2 rounded-full mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-white">Grade</h4>
                    </div>
                    <div className={`text-3xl font-bold ${
                      isExcellent ? 'text-green-400' : isGood ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {isExcellent ? 'A+' : isGood ? 'B+' : percentage >= 40 ? 'C+' : 'F'}
                    </div>
                    <div className="text-gray-400">{percentage}% accuracy</div>
                  </div>
                </div>

                {/* Achievement Badges */}
                {(score === shuffledQuestions.length || isExcellent || score >= shuffledQuestions.length * 0.5) && (
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {score === shuffledQuestions.length && (
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <span>Perfect Score</span>
                      </div>
                    )}
                    {isExcellent && (
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full font-bold flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <span>Ocean Expert</span>
                      </div>
                    )}
                    {score >= shuffledQuestions.length * 0.5 && (
                      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full font-bold flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span>Knowledge Seeker</span>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    onClick={() => {
                      setQuizStarted(false);
                      setCurrentQuestionIndex(0);
                      setScore(0);
                      setSelectedAnswer('');
                      setAnswerSubmitted(false);
                      setShowResults(false);
                    }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-xl flex items-center justify-center space-x-3"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>New Challenge</span>
                  </button>
                  
                  <button 
                    onClick={() => {
                      const questions = allQuizQuestions
                        .sort(() => Math.random() - 0.5)
                        .slice(0, numberOfQuestions)
                        .map((q, index) => ({...q, id: index + 1}));
                      
                      setShuffledQuestions(questions);
                      setCurrentQuestionIndex(0);
                      setScore(0);
                      setSelectedAnswer('');
                      setAnswerSubmitted(false);
                      setShowResults(false);
                    }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-xl flex items-center justify-center space-x-3"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Retry Same Setup</span>
                    <span className="bg-white/20 px-2 py-1 rounded text-sm">{numberOfQuestions}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz question screen
  if (quizStarted && !showResults) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black">
        <Nav />
        <div className="min-h-screen p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            {/* Progress Header */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 mb-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full font-bold">
                    Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
                  </div>
                  <div className="text-gray-300">
                    Score: <span className="text-cyan-400 font-bold">{score}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    setQuizStarted(false);
                    setCurrentQuestionIndex(0);
                    setScore(0);
                    setSelectedAnswer('');
                    setAnswerSubmitted(false);
                    setShowResults(false);
                  }}
                  className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span>Exit Quiz</span>
                </button>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-3 shadow-inner">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-500 ease-out shadow-lg"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="text-right text-sm text-gray-400 mt-2">
                {Math.round(progress)}% Complete
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-700">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                  {currentQuestion.question}
                </h2>
              </div>

              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => {
                  let buttonClass = "w-full p-6 text-left rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] ";
                  
                  if (answerSubmitted) {
                    if (option === currentQuestion.correct) {
                      buttonClass += "bg-gradient-to-r from-green-600 to-green-500 border-green-400 text-white shadow-lg shadow-green-500/25";
                    } else if (option === selectedAnswer && option !== currentQuestion.correct) {
                      buttonClass += "bg-gradient-to-r from-red-600 to-red-500 border-red-400 text-white shadow-lg shadow-red-500/25";
                    } else {
                      buttonClass += "bg-gray-700/50 border-gray-600 text-gray-400";
                    }
                  } else {
                    if (selectedAnswer === option) {
                      buttonClass += "bg-gradient-to-r from-cyan-600 to-blue-600 border-cyan-400 text-white shadow-lg shadow-cyan-500/25";
                    } else {
                      buttonClass += "bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50 hover:border-gray-500 hover:text-white";
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => !answerSubmitted && setSelectedAnswer(option)}
                      disabled={answerSubmitted}
                      className={buttonClass}
                    >
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 ${
                          answerSubmitted && option === currentQuestion.correct
                            ? 'bg-white text-green-600'
                            : answerSubmitted && option === selectedAnswer && option !== currentQuestion.correct
                            ? 'bg-white text-red-600'
                            : selectedAnswer === option && !answerSubmitted
                            ? 'bg-white text-cyan-600'
                            : 'bg-gray-600 text-gray-300'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="text-lg">{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Answer Explanation */}
              {answerSubmitted && (
                <div className="mt-8 p-6 bg-gray-700/30 rounded-xl border border-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-full ${
                      selectedAnswer === currentQuestion.correct ? 'bg-green-500' : 'bg-yellow-500'
                    }`}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-2">
                        {selectedAnswer === currentQuestion.correct ? '🎉 Correct!' : '📚 Learn More:'}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">{currentQuestion.explanation}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-8 flex justify-center space-x-4">
                {!answerSubmitted ? (
                  <button
                    onClick={submitAnswer}
                    disabled={!selectedAnswer}
                    className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                      selectedAnswer
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={nextQuestion}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-xl"
                  >
                    {currentQuestionIndex === shuffledQuestions.length - 1 ? 'View Results' : 'Next Question'}
                    <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Quiz;
