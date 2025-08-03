import { Routes , Route } from "react-router";

import HomePage from "./pages/HomePage.jsx";
import Solutions from "./pages/Solutions.jsx"
import SpeciesProfile from "./pages/SpeciesProfile.jsx";
import DiscoverSpecies from "./pages/DiscoverSpecies.jsx"
import SampleSpecies from "./pages/SampleSpecies.jsx";
import Explore from "./pages/Explore.jsx";
import Threats from "./pages/Threats.jsx";
import OceanChallenges from "./pages/OceanChallenges.jsx";
import Stories from "./pages/Stories.jsx";
import Infographics from "./pages/Infographics.jsx";
import Quiz from "./pages/Quiz.jsx";
import OceanDive from "./pages/Explore pages/OceanDive.jsx";

// Species Pages
import Parrotfish from "./pages/species/Parrotfish.jsx";
import PortugueseManOWar from "./pages/species/PortugueseManOWar.jsx";
import BottlenoseDolphin from "./pages/species/BottlenoseDolphin.jsx";
import Seal from "./pages/species/Seal.jsx";
import Stingray from "./pages/species/Stingray.jsx";
import Cephalopods from "./pages/species/Cephalopods.jsx";
import RibbonEel from "./pages/species/RibbonEel.jsx";
import LeafySeaDragon from "./pages/species/LeafySeaDragon.jsx";
import Orca from "./pages/species/Orca.jsx";
import SeaTurtle from "./pages/species/SeaTurtle.jsx";
import HermitCrab from "./pages/species/HermitCrab.jsx";
import DeepwaterOctopus from "./pages/species/DeepwaterOctopus.jsx";
import GreatWhiteShark from "./pages/species/GreatWhiteShark.jsx";
import FlabbyWhalefish from "./pages/species/FlabbyWhalefish.jsx";
import Chimaera from "./pages/species/Chimaera.jsx";
import CookiecutterShark from "./pages/species/CookiecutterShark.jsx";
import ZombieWorms from "./pages/species/ZombieWorms.jsx";
import PelicanEel from "./pages/species/PelicanEel.jsx";
import GiantSquid from "./pages/species/GiantSquid.jsx";
import JapaneseSpiderCrab from "./pages/species/JapaneseSpiderCrab.jsx";
import CombJellies from "./pages/species/CombJellies.jsx";
import Viperfish from "./pages/species/Viperfish.jsx";
import GlassSquid from "./pages/species/GlassSquid.jsx";
import Bristlemouth from "./pages/species/Bristlemouth.jsx";
import Lanternfish from "./pages/species/Lanternfish.jsx";
import VampireSquid from "./pages/species/VampireSquid.jsx";
import SeaAngel from "./pages/species/SeaAngel.jsx";
import Hatchetfish from "./pages/species/Hatchetfish.jsx";
import DumboOctopus from "./pages/species/DumboOctopus.jsx";
import FrilledShark from "./pages/species/FrilledShark.jsx";
import GoblinShark from "./pages/species/GoblinShark.jsx";
import Blobfish from "./pages/species/Blobfish.jsx";
import BarreleyeFish from "./pages/species/BarreleyeFish.jsx";
import Anglerfish from "./pages/species/Anglerfish.jsx";
import Sunfish from "./pages/species/Sunfish.jsx";
import YetiCrab from "./pages/species/YetiCrab.jsx";
import SpermWhale from "./pages/species/SpermWhale.jsx";
import Snailfish from "./pages/species/Snailfish.jsx";
import BigfinSquid from "./pages/species/BigfinSquid.jsx";
import ColossalSquid from "./pages/species/ColossalSquid.jsx";
import BlackSwallower from "./pages/species/BlackSwallower.jsx";

function App() {
  return (
   <div>
    <Routes>
      <Route path= "/" element ={<HomePage/>} /> 
      <Route path= "/explore" element ={<OceanDive/>} />
      <Route path= "/threats" element ={<Threats/>} />
      <Route path= "/ocean-challenges" element ={<OceanChallenges/>} />
      <Route path= "/solutions" element ={<Solutions/>} />
      <Route path= "/stories" element ={<Stories/>} />
      <Route path= "/infographics" element ={<Infographics/>} />
      <Route path= "/quiz" element ={<Quiz/>} />
      <Route path= "/species" element ={<SpeciesProfile />} /> 
      <Route path= "/discoverspecies" element ={<DiscoverSpecies />} /> 
      <Route path= "/samplespecies" element ={<SampleSpecies />} /> 
      
      {/* Species Profile Routes */}
      <Route path= "/species/parrotfish" element ={<Parrotfish />} />
      <Route path= "/species/portuguese-man-o-war" element ={<PortugueseManOWar />} />
      <Route path= "/species/bottlenose-dolphin" element ={<BottlenoseDolphin />} />
      <Route path= "/species/seal" element ={<Seal />} />
      <Route path= "/species/stingray" element ={<Stingray />} />
      <Route path= "/species/cephalopods" element ={<Cephalopods />} />
      <Route path= "/species/ribbon-eel" element ={<RibbonEel />} />
      <Route path= "/species/leafy-sea-dragon" element ={<LeafySeaDragon />} />
      <Route path= "/species/orca" element ={<Orca />} />
      <Route path= "/species/sea-turtle" element ={<SeaTurtle />} />
      <Route path= "/species/hermit-crab" element ={<HermitCrab />} />
      <Route path= "/species/deepwater-octopus" element ={<DeepwaterOctopus />} />
      <Route path= "/species/great-white-shark" element ={<GreatWhiteShark />} />
      <Route path= "/species/flabby-whalefish" element ={<FlabbyWhalefish />} />
      <Route path= "/species/chimaera" element ={<Chimaera />} />
      <Route path= "/species/cookiecutter-shark" element ={<CookiecutterShark />} />
      <Route path= "/species/zombie-worms" element ={<ZombieWorms />} />
      <Route path= "/species/pelican-eel" element ={<PelicanEel />} />
      <Route path= "/species/giant-squid" element ={<GiantSquid />} />
      <Route path= "/species/japanese-spider-crab" element ={<JapaneseSpiderCrab />} />
      <Route path= "/species/comb-jellies" element ={<CombJellies />} />
      <Route path= "/species/viperfish" element ={<Viperfish />} />
      <Route path= "/species/glass-squid" element ={<GlassSquid />} />
      <Route path= "/species/bristlemouth" element ={<Bristlemouth />} />
      <Route path= "/species/lanternfish" element ={<Lanternfish />} />
      <Route path= "/species/vampire-squid" element ={<VampireSquid />} />
      <Route path= "/species/sea-angel" element ={<SeaAngel />} />
      <Route path= "/species/hatchetfish" element ={<Hatchetfish />} />
      <Route path= "/species/dumbo-octopus" element ={<DumboOctopus />} />
      <Route path= "/species/frilled-shark" element ={<FrilledShark />} />
      <Route path= "/species/goblin-shark" element ={<GoblinShark />} />
      <Route path= "/species/blobfish" element ={<Blobfish />} />
      <Route path= "/species/barreleye-fish" element ={<BarreleyeFish />} />
      <Route path= "/species/anglerfish" element ={<Anglerfish />} />
      <Route path= "/species/sunfish" element ={<Sunfish />} />
      <Route path= "/species/yeti-crab" element ={<YetiCrab />} />
      <Route path= "/species/sperm-whale" element ={<SpermWhale />} />
      <Route path= "/species/snailfish" element ={<Snailfish />} />
      <Route path= "/species/bigfin-squid" element ={<BigfinSquid />} />
      <Route path= "/species/colossal-squid" element ={<ColossalSquid />} />
      <Route path= "/species/black-swallower" element ={<BlackSwallower />} />
    </Routes>
   </div>
  );
}

export default App;
