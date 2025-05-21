import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Facturas from "./pages/Facturas";
//import Dashboard from "./pages/Dashboard";

function Dashboard() {
  return <h2 className="text-center text-2xl font-bold">Bienvenido al Dashboard</h2>;
}

function Profile() {
  return <h2 className="text-center text-2xl font-bold">Perfil de Usuario</h2>;
}

function Settings() {
  return <h2 className="text-center text-2xl font-bold">Configuración</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/facturas" element={<Layout><Facturas /></Layout>} />  //Funcionalidad y sub funcionalidades de Facturas
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
