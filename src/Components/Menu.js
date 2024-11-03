import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faClipboardCheck, faHome, faUser, faBriefcase, faBuilding, faCalendarAlt, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from "../Styles/Menu.module.css";
import Header from './Header';

const Menu = () => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <nav className={`${styles.menu} ${!isMenuOpen ? styles.closed : ''}`}>
                {isMenuOpen && 
                <ul>
                    <li>
                        <Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
                    </li>
                    <li>
                        <Link to="/Perfil"><FontAwesomeIcon icon={faUser} /> Perfil</Link>
                    </li>
                    <li>
                        <Link to="/Empleos"><FontAwesomeIcon icon={faBriefcase} /> Empleos</Link>
                    </li>
                    <li>
                        <Link to="/Cursos"><FontAwesomeIcon icon={faBook} /> Cursos</Link>
                    </li>
                    <li>
                        <Link to="/ConsultarAplicaciones"><FontAwesomeIcon icon={faClipboardCheck} /> Consultar Aplicaciones</Link>
                    </li>
                    <li>
                        <Link to="/Empresas"><FontAwesomeIcon icon={faBuilding} /> Empresas</Link>
                    </li>
                    <li onClick={toggleSubMenu}>
                        <span>
                            <FontAwesomeIcon icon={faCalendarAlt} /> Eventos
                        </span>
                        {isSubMenuOpen && (
                            <ul>
                                <li>
                                    <Link to="/Eventos/HackatonesNacionales">Hackatones Nacionales</Link>
                                </li>
                                <li>
                                    <Link to="/Eventos/HackatonesInternacionales">Hackatones Internacionales</Link>
                                </li>
                                <li>
                                    <Link to="/Eventos/RankingNacional">Ranking Nacional</Link>
                                </li>
                                <li>
                                    <Link to="/Eventos/RankingInternacional">Ranking Internacional</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link to="/Notificaciones"><FontAwesomeIcon icon={faBell} /> Notificaciones</Link>
                    </li>
                    <li>
                        <Link to="/Login"><FontAwesomeIcon icon={faSignOutAlt} /> Cerrar Sesión</Link>
                    </li>
                </ul>
                }
            </nav>
        </>
    );
};

export default Menu;
