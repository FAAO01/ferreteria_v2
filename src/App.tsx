import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";;
import CrearFactura from "./pages/CrearFactura.tsx";
import VentasDiarias from "./pages/VentasDiarias.tsx";
import Devoluciones from "./pages/Devoluciones.tsx";
import Descuentos from "./pages/Descuentos.tsx";
import Dashboard from "./pages/Dashboard.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/facturas/crear" element={<Layout><CrearFactura /></Layout>} />
        <Route path="/facturas/ventas-diarias" element={<Layout><VentasDiarias /></Layout>} />
        <Route path="/facturas/devoluciones" element={<Layout><Devoluciones /></Layout>} />
        <Route path="/facturas/descuentos" element={<Layout><Descuentos /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard></Dashboard></Layout>} />
        <Route path="/profile" element={<Layout><h2>Perfil de Usuario</h2></Layout>} />
        <Route path="/settings" element={<Layout><h2>Configuración</h2></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
