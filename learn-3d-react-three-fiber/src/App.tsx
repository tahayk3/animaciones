// App.tsx
import './App.css';
import { Scene3D } from "./components/Scene3D";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Navbar</h1>
      </header>
      <main className="main">
        {/* Texto a la izquierda */}
        <div className="text-container">
          <h2 style={{ color: "#000", textAlign: "center" }}>
            Aquí puedes poner tu texto o descripción
          </h2>
        </div>
        {/* Modelo 3D a la derecha */}
        <div className="model-container">
          <Scene3D />
        </div>
      </main>
      <footer className="footer">
        <p>© 2024</p>
      </footer>
    </div>
  );
};

export default App;
