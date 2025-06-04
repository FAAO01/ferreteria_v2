import React, { useState } from "react";

// Datos simulados de devoluciones
const devoluciones = [
  { id: 1, usuario: "Juan", fecha: "2024-06-10", producto: "Martillo", cantidad: 1, motivo: "Defectuoso" },
  { id: 2, usuario: "Ana", fecha: "2024-06-11", producto: "Clavos", cantidad: 2, motivo: "No era el tamaño correcto" },
  { id: 3, usuario: "Pedro", fecha: "2024-06-12", producto: "Taladro", cantidad: 1, motivo: "No funcionaba" },
];

const styles = {
  container: {
    padding: 32,
    fontFamily: 'Segoe UI, Roboto, Arial, sans-serif',
    background: '#f4f6fb',
    minHeight: '100vh',
  } as React.CSSProperties,
  card: {
    background: '#fff',
    borderRadius: 12,
    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
    marginBottom: 32,
    padding: 24,
    transition: 'box-shadow 0.2s',
  } as React.CSSProperties,
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: 12,
  } as React.CSSProperties,
  th: {
    background: '#2d3e50', // Color del sidebar
    color: '#fff',
    padding: '12px 8px',
    fontWeight: 600,
    textAlign: 'left',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  } as React.CSSProperties,
  td: {
    padding: '10px 8px',
    borderBottom: '1px solid #e0e6ed',
    color: '#2d3e50',
    background: '#f9fafc',
  } as React.CSSProperties,
  trHover: {
    background: '#eaf1fb',
  } as React.CSSProperties,
  titulo: {
    fontSize: 28,
    fontWeight: 800,
    color: '#1a2233', // Color similar al sidebar
    marginBottom: 32,
    letterSpacing: 1,
  } as React.CSSProperties,
  searchBox: {
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'flex-start',
  } as React.CSSProperties,
  input: {
    padding: '8px 14px',
    borderRadius: 6,
    border: '1px solid #b0b8c1',
    fontSize: 16,
    outline: 'none',
    width: 420,
    marginLeft: 0,
    background: '#fff',
    color: '#2d3e50',
    boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
    transition: 'border 0.2s',
  } as React.CSSProperties,
};

export default function Devoluciones() {
  const [busqueda, setBusqueda] = useState("");

  const devolucionesFiltradas = devoluciones.filter((dev) => {
    const texto = busqueda.toLowerCase();
    return (
      dev.usuario.toLowerCase().includes(texto) ||
      dev.producto.toLowerCase().includes(texto) ||
      dev.fecha.includes(texto) ||
      dev.motivo.toLowerCase().includes(texto) ||
      dev.id.toString().includes(texto)
    );
  });

  return (
    <div style={styles.container}>
      <h2 style={styles.titulo}>Productos Devueltos por Usuario</h2>
      <div style={styles.searchBox}>
        <input
          style={styles.input}
          type="text"
          placeholder="Buscar por usuario, producto, fecha, motivo o ID..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
      </div>
      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Usuario</th>
              <th style={styles.th}>Fecha</th>
              <th style={styles.th}>Producto</th>
              <th style={styles.th}>Cantidad</th>
              <th style={styles.th}>Motivo</th>
            </tr>
          </thead>
          <tbody>
            {devolucionesFiltradas.length === 0 && (
              <tr>
                <td style={styles.td} colSpan={6} align="center">No hay devoluciones registradas.</td>
              </tr>
            )}
            {devolucionesFiltradas.map((dev, idx) => (
              <tr key={dev.id} style={idx % 2 === 0 ? undefined : styles.trHover}>
                <td style={styles.td}>{dev.id}</td>
                <td style={styles.td}>{dev.usuario}</td>
                <td style={styles.td}>{dev.fecha}</td>
                <td style={styles.td}>{dev.producto}</td>
                <td style={styles.td}>{dev.cantidad}</td>
                <td style={styles.td}>{dev.motivo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
