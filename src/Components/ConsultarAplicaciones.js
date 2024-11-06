import React from 'react'
import styles from "../Styles/ConsultarAplicaciones.module.css";

const ConsultarAplicaciones = () => {
  const data = [
    { id: 1, 
      empresa: 'Bancolombia', 
      especialidad: 'Desarrollo de Software',
      departamento: 'Tecnología y Desarrollo',
      ubicacion: 'Medellín',
      fechaSolicitud: '25-10-2024',
      estado: 'En proceso',},

    { id: 2, 
      empresa: 'Sura', 
      especialidad: 'Ciberseguridad',
      departamento: 'Infraestructura',
      ubicacion: 'Cali',
      fechaSolicitud: '25-10-2024',
      estado: 'Pendiente',},

    { id: 3, 
      empresa: 'Sena', 
      especialidad: 'Desarrollo de Software',
      departamento: 'Desarrollo de Producto',
      ubicacion: 'Bogotá',
      fechaSolicitud: '25-10-2024',
      estado: 'En revisión',},
  ];

  return (
    <div>
        <h1 className={styles.title}>Consultar Aplicaciones</h1>
          <div>
            <table className={styles.table}>
              <thead className={styles.header}>
                <tr>
                  <th className={styles.th}>Empresa</th>
                  <th className={styles.th}>Especialidad</th>
                  <th className={styles.th}>Departamento</th>
                  <th className={styles.th}>Ubicación</th>
                  <th className={styles.th}>Fecha de la Solicitud</th>
                  <th className={styles.th}>Estado</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) =>(
                  <tr key={item.id} className={styles.row}>
                    <td className={styles.td}>{item.empresa}</td>
                    <td className={styles.td}>{item.especialidad}</td>
                    <td className={styles.td}>{item.departamento}</td>
                    <td className={styles.td}>{item.ubicacion}</td>
                    <td className={styles.td}>{item.fechaSolicitud}</td>
                    <td className={styles.td}>{item.estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    </div>
  );
}

export default ConsultarAplicaciones;
