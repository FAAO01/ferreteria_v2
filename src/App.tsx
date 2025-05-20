import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";

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
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
