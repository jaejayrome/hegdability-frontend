import Navbar from "./components/utils/Navbar"
import { Routes, Route } from "react-router-dom"
import HomeScreen from "./components/screens/HomeScreen";
import Footer from "./components/utils/Footer";
import ArchitectureScreen from "./components/screens/ArchitectureScreen";
import DocsScreen from "./components/screens/DocsScreen";

const App = () => {
  return (
    <div className="flex-column overflow-x-hidden">
      {/* Navbar Section */}
      <div className = "w-full mt-4 px-2">
        <Navbar />
      </div>

      <Routes> 
        {/* Home Page Section */}
        <Route path = "/" element= {<HomeScreen />}/>
        <Route path = "/design" element= {<ArchitectureScreen />}/>
        <Route path = "/playground" element= {<HomeScreen />}/>
        <Route path = "/docs" element= {<DocsScreen />}/>
      </Routes>

      
      {/* Footer Section */}
      <Footer />
      
    </div>
  )
}

export default App;
