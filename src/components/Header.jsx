import React from 'react';
import logo from '../assets/static/logoDrTrejo.png';
import '../assets/styles/components/Header.scss';

const Header = () => {
  /* Toggle between adding and removing the 'responsive' class to topnav when the user clicks on the icon */
  function showMenu() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }
  return (
    <header className='Header-main'>
      <div></div>
      <div className='Header__marca'>
        <img src={logo} alt='logo-doctor-jose-trejo' width='99' height='80' />
        <div>DR JOSÉ TREJO BELMONTE</div>
      </div>
      <div></div>
      <div className='topnav' id='myTopnav'>
        <a></a>
        <a href='#Inicio'>Inicio</a>
        <a href='#Acerca'>Acerca de mi</a>
        <a href='#Servicios'>Servicios</a>
        <a href='#Seguros'>Seguros</a>
        <a href='#Contacto'>Contacto</a>
        <a href='javascript:void(0);' className='icon' onClick={showMenu}>
          <label>&#9776;</label>
        </a>
      </div>
    </header>
  );
};

export default Header;
