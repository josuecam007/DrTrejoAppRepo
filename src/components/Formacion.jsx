import React from 'react';
import '../assets/styles/components/Formacion.scss';
import logoTecMty from '../assets/static/tec_monterrey.svg';
import logoINR from '../assets/static/inr.svg';
import logoUNAM from '../assets/static/logo_unam.png';
import logoCMOT from '../assets/static/logo-cmot-nav.png';
import logoAMECRA from '../assets/static/amecra-logo.png';
import logoChivas from '../assets/static/logo_chivas.png';

const Formacion = () => {
  return (
    <div className='formacion-section'>
      <ul className='formacion-container'>
        <li>
          <h1>Formación</h1>
        </li>
        <li type='square'>
          ALTA ESPECIALIDAD EN MICROCIRUGÍA ARTICULAR TECNOLÓGICO DE MONTERREY
          EN EL HOSPITAL ZAMBRANO HELLION
        </li>
        <img src={logoTecMty} alt='logo_tec_monterrey' className='inr-img' />

        <li type='square'>
          ESPECIALIDAD EN TRAUMATOLOGÍA Y ORTOPEDIA UNIVERSIDAD NACIONAL
          AUTÓNOMA DE MÉXICO (UNAM) EN EL INSTITUTO NACIONAL DE REHABILITACIÓN
          (INR)
        </li>
        <img src={logoINR} alt='logo_inr' className='inr-img' />

        <li type='square'>
          DIPLOMADO PRESENCIAL EN MEDICINA DEL DEPORTE, EJERCICIO Y ACTIVIDAD
          FÍSICA, UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO (UNAM)
        </li>
        <img src={logoUNAM} alt='logo_inr' className='inr-img' />

        <li type='square'>
          LICENCIATURA: MÉDICO CIRUJANO UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO
          (UNAM)
        </li>
        <img src={logoUNAM} alt='logo_inr' className='inr-img' />

        <li type='square'>
          MÉDICO CERTIFICADO POR EL CONSEJO MEXICANO DE ORTOPEDIA Y
          TRAUMATOLOGÍA A.C.(CMOT)
        </li>
        <img src={logoCMOT} alt='logo_inr' className='inr-img' />

        <li type='square'>
          MIEMBRO DE LA ASOCIACIÓN MEXICANA DE CIRUGÍA RECONSTRUCTIVA ARTICULAR
          Y ARTROSCOPIA A.C. (AMECRA)
        </li>
        <img src={logoAMECRA} alt='logo_inr' className='inr-img' />

        <li type='square'>
          ACTUALMENTE MÉDICO TITULAR DEL EQUIPO CLUB DEPORTIVO GUADALAJARA SUB
          20 LIGA MX
        </li>
        <img src={logoChivas} alt='logo_inr' className='inr-img' />
      </ul>
    </div>
  );
};

export default Formacion;