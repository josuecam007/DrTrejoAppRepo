import React from 'react';
import '../assets/styles/components/Formacion.scss';
import logoTecMty from '../assets/static/formacion/tec_monterrey.png';
import logoINR from '../assets/static/formacion/logo_inr.png';
import logoUNAM from '../assets/static/formacion/logo_unam.png';
import logoCMOT from '../assets/static/formacion/logo-cmot-nav.png';
import logoAMECRA from '../assets/static/formacion/amecra-logo.png';
import logoChivas from '../assets/static/formacion/logo_chivas_.png';
import logoTapat from '../assets/static/formacion/tapa.svg';

const Formacion = () => {
  return (
    <div className='formacion-section'>
      <h1>Formación</h1>
      <ul className='formacion-container'>
        <li type='square'>
          <span>Licenciatura en Médico Cirujano </span>
          <span>Avalado por la Universidad Nacional Autónoma de México (UNAM)</span>
        </li>
        <img src={logoUNAM} alt='logo_inr' className='inr-img item-img' />

        <li type='square'>
          <span>Alta especialidad en Microcirugía Articular.</span>
          <span>Hospital Zambrano Hellion TecSalud</span>
          <span>Avalada por el Tecnológico de Monterrey</span>
        </li>
        <img src={logoTecMty} alt='logo_tec_monterrey' className='tec-img item-img' />

        <li type='square'>
          <span>Especialidad en Traumatología y Ortopedia</span>
          <span>Instituto Nacional de Rehabilitación (INR)</span>
          <span>Avalada por la Universidad Nacional Autónoma de México (UNAM)</span>
        </li>
        <img src={logoINR} alt='logo_inr' className='inr-img item-img' />

        <li type='square'>
          <span>Diplomado presencial en Medicina del Deporte, Ejercicio y Actividad Física</span>
          <span>Avalado por la Universidad Nacional Autónoma de México (UNAM)</span>
        </li>
        <img src={logoUNAM} alt='logo_inr' className='inr-img item-img' />

        <li type='square'>
          <span>Médico certificado por el Consejo Mexicano de Ortopedia y Traumatología A.C. (CMOT)</span>
        </li>
        <img src={logoCMOT} alt='logo_inr' className='inr-img item-img' />

        <li type='square'>
          <span>Miembro de la Asociación Mexicana de Cirugía Reconstructiva Articular y Artroscopia A.C. (AMECRA)</span>
        </li>
        <img src={logoAMECRA} alt='logo_inr' className='inr-img item-img' />

        <li type='square'>
          <span>Médico Titular de Club Deportivo Guadalajara Sub 20 Liga MX</span>
        </li>
        <img src={logoChivas} alt='logo_inr' className='inr-img item-img' />

        <li type='square'>
          <span>Médico Titular de Club Deportivo Tapatio Liga Expansión MX</span>
        </li>
        <img src={logoTapat} alt='logo_inr' className='inr-img item-img' />

      </ul>
    </div>
  );
};

export default Formacion;