import { Home, Login, SingUp, Element } from "../pages/Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/Login" element={<Home />} />
        <Route path="/SingUp" element={<SingUp />} />
        <Route path="/Login" element={<Login />} />

        {/* Rutas privadas */}
        <Route path="/Element" element={<Element />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
