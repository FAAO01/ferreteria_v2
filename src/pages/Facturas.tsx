import { useState } from "react";
import { FiSearch, FiPlus, FiEdit, FiTrash, FiEye, FiPrinter } from "react-icons/fi";

const Facturas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [facturas] = useState([
    { id: 1, cliente: "Juan Pérez", total: "$150.00", fecha: "21/05/2025" },
    { id: 2, cliente: "María López", total: "$200.00", fecha: "20/05/2025" },
  ]);
  const [isModalOpen, setModalOpen] = useState(false);

  const filteredFacturas = facturas.filter((factura) =>
    factura.cliente.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Gestión de Facturas</h2>

      {/* Contenedor de búsqueda y botón */}
      <div className="flex items-center justify-between mb-4">
        {/* Motor de búsqueda */}
        <div className="flex items-center w-2/3">
          <FiSearch size={20} className="mr-2" />
          <input
            type="text"
            placeholder="Buscar factura..."
            className="border p-2 rounded w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Botón para crear factura */}
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <FiPlus size={20} /> Crear Factura
        </button>
      </div>

      {/* Tabla de facturas */}
      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Cliente</th>
            <th className="border border-gray-300 p-2">Total</th>
            <th className="border border-gray-300 p-2">Fecha</th>
            <th className="border border-gray-300 p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredFacturas.map((factura) => (
            <tr key={factura.id} className="text-center">
              <td className="border border-gray-300 p-2">{factura.cliente}</td>
              <td className="border border-gray-300 p-2">{factura.total}</td>
              <td className="border border-gray-300 p-2">{factura.fecha}</td>
              <td className="border border-gray-300 p-2 flex justify-center gap-2">
                <button className="text-blue-500 hover:text-blue-700">
                  <FiEye size={20} />
                </button>
                <button className="text-green-500 hover:text-green-700">
                  <FiEdit size={20} />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FiTrash size={20} />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <FiPrinter size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para crear factura */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded w-200">
            <h3 className="text-xl font-bold mb-4">Nueva Factura</h3>
            <input type="text" placeholder="Cliente" className="border p-2 rounded w-full mb-2" />
            <input type="number" placeholder="Total" className="border p-2 rounded w-full mb-2" />
            <input type="date" className="border p-2 rounded w-full mb-2" />
            <button
              onClick={() => setModalOpen(false)}
              className="bg-green-600 text-white px-4 py-2 rounded w-full mt-2"
            >
              Guardar Factura
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Facturas;
