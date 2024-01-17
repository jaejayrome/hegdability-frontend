import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/utils/Navbar';
import HomeScreen from './components/screens/HomeScreen';
import Footer from './components/utils/Footer';
import ArchitectureScreen from './components/screens/ArchitectureScreen';
import DocsScreen from './components/screens/DocsScreen';
import PlaygroundScreen from './components/screens/PlaygroundScreen';
import './gradient.css';


const App = () => {
  const location = useLocation();
  const [color, setColor] = useState('bg-white');

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setColor('bg-white');
        break;
      case '/design':
        setColor('bg-blue-100');
        break;
      case '/playground':
        setColor('bg-pink-100');
        break;
      case '/docs':
        setColor('bg-green-100');
        break;
      default:
        setColor('bg-white');
        break;
    }
  }, [location.pathname]);


  return (
    <div className={`${color} w-screen min-h-screen overflow-x-hidden`}>
      <div className="flex-column px-4">
        {/* Navbar Section */}
        <div className="w-full mt-6 px-6">
          <Navbar />
        </div>

        <Routes>
          {/* Home Page Section */}
          <Route path="/" element={<HomeScreen />} />
          <Route path="/design" element={<ArchitectureScreen />} />
          <Route path="/playground" element={<PlaygroundScreen />} />
          <Route path="/docs" element={<DocsScreen />} />
        </Routes>
      </div>
          {/* Footer Section */}
          <Footer backgroundColor={color}/>
    </div>
  );
};

export default App;
