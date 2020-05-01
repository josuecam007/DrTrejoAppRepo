import React from 'react';
import '../assets/styles/components/Formacion.scss';
import logoTecMty from '../assets/static/formacion/tec_monterrey.png';
import logoINR from '../assets/static/formacion/logo_inr.png';
import logoUNAM from '../assets/static/formacion/logo_unam.png';
import logoCMOT from '../assets/static/formacion/logo-cmot-nav.png';
import logoAMECRA from '../assets/static/formacion/amecra-logo.png';
import logoChivas from '../assets/static/formacion/logo_chivas.png';

const Formacion = () => {
  return (
    <div className='formacion-section'>
      <ul className='formacion-container'>
        <li>
          <h1>Formación</h1>
        </li>

        <li type='square'>
          Alta especialidad en microcirugía articular tecnológico de monterrey
          en el Hospital Zambrano Hellion
        </li>
        <img src={logoTecMty} alt='logo_tec_monterrey' className='tec-img' />

        <li type='square'>
          Especialidad en traumatología y ortopedia Universidad Nacional
          Autónoma de México (UNAM) en el Instituto Nacional de Rehabilitación
          (INR)
        </li>
        <img src={logoINR} alt='logo_inr' className='inr-img' />

        <li type='square'>
          Diplomado presencial en Medicina del Deporte, Ejercicio y Actividad
          Física, Universidad Nacional Autónoma de México (UNAM)
        </li>
        <img src={logoUNAM} alt='logo_inr' className='inr-img' />

        <li type='square'>
          Licenciatura: Médico Cirujano, Universidad Nacional Autónoma de México (UNAM) &nbsp;&nbsp;
        </li>
        <img src={logoUNAM} alt='logo_inr' className='inr-img' />

        <li type='square'>
          Médico certificado por el Consejo Mexicano de Ortopedia y
          Traumatología A.C. (CMOT)
        </li>
        <img src={logoCMOT} alt='logo_inr' className='inr-img' />

        <li type='square'>
          Miembro de la Asociación Mexicana de Cirugía Reconstructiva Articular
          y Artroscopia A.C. (AMECRA)
        </li>
        <img src={logoAMECRA} alt='logo_inr' className='inr-img' />

        <li type='square'>
          Actualmente Médico Titular del equipo Club Deportivo Guadalajara Sub
          20 Liga MX
        </li>
        <img src={logoChivas} alt='logo_inr' className='inr-img' />
      </ul>
    </div>
  );
};

export default Formacion;