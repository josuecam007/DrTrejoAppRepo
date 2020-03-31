import React from 'react';
import logo from '../assets/static/logoDrTrejo.png';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='containerHeader'>
    <div></div>
    <img src={logo} alt='logo-doctor-jose-trejo' width='99' height='80' />
    <div></div>
    <div></div>
    <div></div>
    <nav className='menu'>
      <ul>
        <li>Inicio</li>
        <li>Acerca de mi</li>
        <li>Servicios</li>
        <li>Seguros</li>
        <li>Contacto</li>
      </ul>
    </nav>
    <div></div>
    
  </header>
);

export default Header;
