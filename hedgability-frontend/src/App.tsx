import Navbar from "./components/utils/Navbar"
import { Routes, Route } from "react-router-dom"
import HomeScreen from "./components/screens/HomeScreen";

const App = () => {
  return (
    <div className="flex-column">
      {/* Navbar Section */}
      <div className = "w-full mt-4 px-2">
        <Navbar />
      </div>

      <Routes> 
        {/* Home Page Section */}
        <Route path = "/" element= {<HomeScreen />}/>
      </Routes>

      
      {/* Footer Section */}
      {/* <section> 
        <div className="bg-gray-100"> 
          <span className="text-gray-500 font-bold text-sm"> The Hedge API in Action </span>
        </div>
      </section> */}
      
    </div>
  )
}

export default App;
