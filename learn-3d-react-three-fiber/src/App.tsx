// App.tsx
import { useEffect, useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import { Scene3D } from "./components/Scene3D";
import Scene3DScroll from "./components/MovingObject";

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Navbar</h1>
      </header>
      <main className="main">
        {/* Texto a la izquierda */}
        <div className="text-container">
          <h2 style={{ color: "#fff", textAlign: "center" }}>
            Aquí puedes poner tu texto o descripción
          </h2>
        </div>
        {/* Modelo 3D a la derecha */}
        <div className="model-container">
          <Scene3D />
        </div>
      </main>
      <div className="carousel">
        <Carousel />
      </div>
      <div className="ScrollComponent" style={{height: '100vh'}}>
        <Scene3DScroll scrollY={scrollY} />
      </div>
      <footer className="footer">
        <p>© 2024</p>
      </footer>
    </div>
  );
};

export default App;
