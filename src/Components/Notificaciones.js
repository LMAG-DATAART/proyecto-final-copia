import React from 'react';
import styles from "../Styles/Notificaciones.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const Notificaciones = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.notificaciones}>
      <div className={styles.notificacionesHeader}>
        <h2>Notificaciones</h2>
        <button onClick={onClose} className={styles.toggleButton}>
                <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className={styles.notificacionesBody}>
        <h2>Nuevas Ofertas</h2>
        <p> Revisa las nuevas ofertas para ti</p>
        <h2>Notificaciones</h2>
        <p> No hay notificaciones pendientes</p>
      </div>
      
    </div>
  );
};

export default Notificaciones;