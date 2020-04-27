import React from 'react';
import logo from '../assets/static/header/logoDrTrejo.png';
import '../assets/styles/components/HeaderNavMenu.scss';
import BurguerButton from './BurguerButton';
//import 'jquery';

const HeaderNavMenu = () => {
  $(function () {
    $(".toggle").on("click", function () {
      if ($(".item").hasClass("active")) {
        $(".item").removeClass("active");
        $('.bmenu').removeClass('close');
        //$(this).find("a").html("<i class='fas fa-bars'></i>");
      } else {
        $(".item").addClass("active");
        $(".bmenu").addClass("close");

        //$(this).find("a").html("<i class='fas fa-times'></i>");
      }
    });
  });

  $(function () {
    $(".item").on("click", function () {
      $(".toggle").trigger("click");
    });
  });

  return (
    <header className='Header-main'>
      <nav className='nav'>
        <ul className='menu'>
          <li className='logo'>
            <img src={logo} alt='logo-doctor-jose-trejo' />
            <a href='#'>DR.  JOSÉ TREJO BELMONTE</a>
          </li>
          <li className='item'>
            <a href='#Inicio'>Inicio</a>
          </li>
          <li className='item'>
            <a href='#Acerca'>Acerca</a>
          </li>
          <li className='item'>
            <a href='#Formacion'>Formación</a>
          </li>
          <li className='item'>
            <a href='#Experiencia'>Experiencia</a>
          </li>
          <li className='item'>
            <a href='#Habilidades'>Conocimientos</a>
          </li>
          <li className='item'>
            <a href='#Congresos'>Congresos</a>
          </li>
          <li className='item'>
            <a href='#Servicios'>Servicios</a>
          </li>
          <li className='item'>
            <a href='#Galeria'>Galeria</a>
          </li>
          <li className='item button'>
            <a href='#Citas'>Citas</a>
          </li>
          <li className='toggle'>
            {/* <a href='#'>
              <i className='fas fa-bars'></i>
            </a> */}
            <BurguerButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNavMenu;