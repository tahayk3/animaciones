// App.jsx
import React from 'react';
import './App.css';
import ModelViewer from './Components/ModelViewer';
import Navbar from './Components/NavBar';
import Xd from './Components/Xd';

function App() {
  return (
    <div>
      <Navbar />
      <div className="model-viewer-container">
        <ModelViewer modelUrl="/mueble2.glb" />
      </div>
      <Xd/>
    </div>
  );
}

export default App;