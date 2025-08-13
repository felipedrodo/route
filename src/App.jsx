import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Contador from "./pages/Contador";
import Usuarios from "./pages/Usuarios";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/Contador">Contador</Link> | <Link to="/Usuarios">Usuarios</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contador" element={<Contador />} />
        <Route path="/Usuarios" element={<Usuarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
