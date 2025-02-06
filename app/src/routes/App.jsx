import { Home, Login, SingUp, Element } from "../pages/Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/general/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Rutas públicas */}
        <Route path="/Home" element={<Home />} />
        <Route path="/SingUp" element={<SingUp />} />
        <Route path="/" element={<Login />} />

        {/* Rutas privadas */}
        <Route path="/Element" element={<Element />} />
      </Routes>
    </Router>
  );
}

export default App;
