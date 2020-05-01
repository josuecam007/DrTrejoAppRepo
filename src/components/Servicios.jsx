import React from 'react';
import '../assets/styles/components/Servicios.scss';
import fracturaLuxacion from '../assets/static/servicios/fractura_de_antebrazo_v2.png';
import articulaciones from '../assets/static/servicios/articulaciones.png';
import pieTobillo from '../assets/static/servicios/pie.png';
import mano from '../assets/static/servicios/muneca.png';
import brazo from '../assets/static/servicios/brazo-antebrazo.png';
import hombro from '../assets/static/servicios/hombro.png';
import espina from '../assets/static/servicios/espina.png';
import rodilla from '../assets/static/servicios/rodilla.png';
import infeccion from '../assets/static/servicios/infeccion-muscoesqueletico.png';
import jugador from '../assets/static/servicios/deporte.png';
import pierna from '../assets/static/servicios/muslo-pierna.png';
import ortopedicos from '../assets/static/servicios/ortopedicos.png';

const Servicios = () => {
  return (
    <div className='servicios_section'>
      <h1>Servicios</h1>
      <h1>Padecimientos del paciente adulto y pediatrico:</h1>
      <ul className='servicios-container'>
        <li>
          <img src={fracturaLuxacion} alt='imagen_fractura' className='servicios__img' />
          <span>Fracturas y luxaciones</span>
        </li>
        <li>
          <img src={ortopedicos} alt='imagen_fractura' className='servicios__img' />
          <span>Padecimientos ortopédicos</span>
        </li>
        <li>
          <img src={pieTobillo} alt='imagen_fractura' className='servicios__img' />
          <span>Pie y tobillo</span>
        </li>
        <li>
          <img src={mano} alt='imagen_fractura' className='servicios__img' />
          <span>Mano y muñeca</span>
        </li>
        <li>
          <img src={brazo} alt='imagen_fractura' className='servicios__img' />
          <span>Lesiones de brazo, antebrazo y codo</span>
        </li>
        <li>
          <img src={pierna} alt='imagen_fractura' className='servicios__img' />
          <span>Muslo y pierna</span>
        </li>
        <li>
          <img src={articulaciones} alt='imagen_fractura' className='servicios__img' />
          <span>Lesiones articulares</span>
        </li>
        <li>
          <img src={rodilla} alt='imagen_fractura' className='servicios__img' />
          <span>Lesiones de rodilla</span>
        </li>
        <li>
          <img src={hombro} alt='imagen_fractura' className='servicios__img' />
          <span>Lesiones de hombro</span>
        </li>
        <li>
          <img src={jugador} alt='imagen_fractura' className='servicios__img' />
          <span>lesiones deportivas y prescripción del ejercicio</span>
        </li>
        <li>
          <img src={espina} alt='imagen_fractura' className='servicios__img' />
          <span>Lesiones de la columna incluyendo dolor de origen ciático</span>
        </li>
        <li>
          <img src={infeccion} alt='imagen_fractura' className='servicios__img' />
          <span>Infecciones y tumores del sistema musculoesquelético</span>
        </li>
      </ul>
    </div>
  );
};

export default Servicios;
