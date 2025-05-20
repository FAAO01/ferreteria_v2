import type { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX, FiHome, FiUser, FiSettings, FiLogOut } from "react-icons/fi"; 

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-gray-0">
      {/* Sidebar */}
      <aside className={`bg-gray-900 text-white h-screen flex flex-col transition-all duration-300 ${isSidebarOpen ? "w-50" : "w-20"} p-3`}>
        {/* Botón de menú */}
        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-white text-2xl focus:outline-none">
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Opciones de navegación */}
        <nav className="mt-6 flex-grow space-y-3">
          <Link to="/dashboard" className="flex items-center gap-3 p-3 rounded hover:bg-gray-700">
            <FiHome size={20} /> {isSidebarOpen && "Dashboard"}
          </Link>
          <Link to="/profile" className="flex items-center gap-3 p-3 rounded hover:bg-gray-700">
            <FiUser size={20} /> {isSidebarOpen && "Perfil"}
          </Link>
          <Link to="/settings" className="flex items-center gap-3 p-3 rounded hover:bg-gray-700">
            <FiSettings size={20} /> {isSidebarOpen && "Configuración"}
          </Link>
        </nav>

        {/* Botón de salir en el footer */}
        <div className="mt-auto pt-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full p-3 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            <FiLogOut size={20} /> {isSidebarOpen && "Salir"}
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <div className="flex flex-col flex-grow">
        {/* Navbar */}
         <header className="bg-blue-600 text-white p-4">
         <h1 className="text-2xl font-bold">Panel de Control</h1> 
         </header>

        {/* Contenido de la página */}
        <main className="p-6 flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-500 text-white text-center p-4">
          <p>&copy; 2025 Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;