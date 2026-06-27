import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 500,
          fontSize: 22,
          marginLeft: 600,
        }}
      >
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <div style={{ display: "flex", marginTop: 20 }}>
          <p>Current Version:</p>
          <p style={{ marginLeft: 10, fontWeight: "bold" }}>22</p>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
