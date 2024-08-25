//import Geometrias from "./components/Geometrias";
import { Scene3D } from "./components/Scene3D";


//componente normal de react que manda a llamar a una scena3D con un canvas que con tiene un modelo
const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <header
        style={{
          padding: "20px",
          background: "#282c34",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>Navbar</h1>
      </header>
      <main style={{ flex: 1, display: "flex" }}>
        {/* Texto a la izquierda */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
          }}
        >
          <h2 style={{ color: "#000", textAlign: "center" }}>
            Aquí puedes poner tu texto o descripción
          </h2>
        </div>
        {/* Modelo 3D a la derecha */}
        <div style={{ flex: 1 }}>
          <Scene3D />
        </div>
      </main>
      <footer
        style={{
          padding: "10px",
          background: "#282c34",
          color: "white",
          textAlign: "center",
        }}
      >
        <p>© 2024 </p>
      </footer>
    </div>
  );
};

export default App;
