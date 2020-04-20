import React from 'react';
import '../assets/styles/components/Servicios.scss';
import fracturaLuxacion from '../assets/static/servicios/brazo-fractura.png';
import ortopedicos from '../assets/static/servicios/espina.png';
import pieTobillo from '../assets/static/servicios/pie.png';
import mano from '../assets/static/servicios/muneca.png';
import brazo from '../assets/static/servicios/brazo-antebrazo.png';
import hombro from '../assets/static/servicios/hombro.png';
//import articulares from '../assets/static/servicios/pie.png';
import rodilla from '../assets/static/servicios/rodilla.png';

const Servicios = () => {
  return (
    <div className='servicios_section'>
      <h1>Servicios</h1>
      <ul className='servicios-container'>
        <li>
          <img src={fracturaLuxacion} alt='imagen_fractura' className='servicios__img' />
          Fracturas y luxaciones
        </li>
        <li>
          <img src={ortopedicos} alt='imagen_fractura' className='servicios__img' />
          Padecimientos ortopedicos
        </li>
        <li>
          <img src={pieTobillo} alt='imagen_fractura' className='servicios__img' />
          Pie y tobillo
        </li>
        <li>
          <img src={mano} alt='imagen_fractura' className='servicios__img' />
          Mano y muñeca
        </li>
        <li>
          <img src={brazo} alt='imagen_fractura' className='servicios__img' />
          Lesiones de brazo, antebrazo y codo
        </li>
        <li>
          <img src={ortopedicos} alt='imagen_fractura' className='servicios__img' />
          Muslo y pierna
        </li>
        <li>
          <img src={ortopedicos} alt='imagen_fractura' className='servicios__img' />
          Lesiones articulares
        </li>
        <li>
          <img src={rodilla} alt='imagen_fractura' className='servicios__img' />
          Lesiones de rodilla
        </li>
        <li>
          <img src={hombro} alt='imagen_fractura' className='servicios__img' />
          Lesiones de hombro
        </li>
        <li>
          <img src={ortopedicos} alt='imagen_fractura' className='servicios__img' />
          lesiones deportivas y prescripcion del ejercicio
        </li>
        <li>
          <img src={ortopedicos} alt='imagen_fractura' className='servicios__img' />
          Lesiones de la columna incluyendo dolor de origen ciatico
        </li>
        <li>
          <img src={ortopedicos} alt='imagen_fractura' className='servicios__img' />
          Infecciones y tumores del sistema musculoesqueletico
        </li>
      </ul>
    </div>
  );
};

export default Servicios;
