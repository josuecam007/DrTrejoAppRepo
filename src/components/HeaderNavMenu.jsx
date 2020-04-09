import React from 'react';
import logo from '../assets/static/logoDrTrejo.png';
import '../assets/styles/components/HeaderNavMenu.scss';
//import 'jquery';

const HeaderNavMenu = () => {
  $(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<i class='fas fa-bars'></i>");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<i class='fas fa-times'></i>");
        }
    });
});
  return (
    <header className='Header-main'>
      <nav>
        <ul className='menu'>
          <li className='logo'>
            <img src={logo} alt='logo-doctor-jose-trejo' />
            <a href='#'>DR.  JOSÉ TREJO BELMONTE</a>
          </li>
          <li className='item'>
            <a href='#'>Inicio</a>
          </li>
          <li className='item'>
            <a href='#'>Acerca</a>
          </li>
          <li className='item'>
            <a href='#'>Servicios</a>
          </li>
          <li className='item'>
            <a href='#'>Seguros</a>
          </li>
          <li className='item button'>
            <a href='#'>Citas</a>
          </li>
          <li className='item button secondary'>
            <a href='#'>Contacto</a>
          </li>
          <li className='toggle'>
            <a href='#'>
              <i className='fas fa-bars'></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNavMenu;