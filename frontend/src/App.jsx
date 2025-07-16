import { Routes , Route } from "react-router";
import OceanMap from "./pages/OceanMap.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import HomePage from "./pages/HomePage.jsx";
import Solutions from "./pages/Solutions.jsx"
function App() {
  return (
   <div>
    <Routes>

      <Route path= "/" element ={<HomePage/>} /> 
      <Route path= "/solutions" element ={<Solutions/>} />
      <Route path= "/map" element ={<OceanMap/>} /> 
      
      <Route path= "/login" element ={<Login />} /> 

      <Route path= "/signup" element ={<SignUp />} /> 
    </Routes>
   </div>
  );
}

export default App;
