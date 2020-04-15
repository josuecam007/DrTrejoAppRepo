import React from 'react';
import '../assets/styles/components/Formacion.scss';
import logoTecMty from '../assets/static/tec_monterrey.png';
import logoINR from '../assets/static/logo_inr.png';
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
          {/* ALTA ESPECIALIDAD EN MICROCIRUGÍA ARTICULAR TECNOLÓGICO DE MONTERREY
          EN EL HOSPITAL ZAMBRANO HELLION */}
          Alta especialidad en microcirugía articular tecnológico de monterrey
          en el Hospital Zambrano Hellion
        </li>
        <img src={logoTecMty} alt='logo_tec_monterrey' className='tec-img' />

        <li type='square'>
          {/* ESPECIALIDAD EN TRAUMATOLOGÍA Y ORTOPEDIA UNIVERSIDAD NACIONAL
          AUTÓNOMA DE MÉXICO (UNAM) EN EL INSTITUTO NACIONAL DE REHABILITACIÓN
          (INR) */}
          Especialidad en traumatología y ortopedia Universidad Nacional
          Autónoma de México (UNAM) en el Instituto Nacional de Rehabilitación
          (INR)
        </li>
        <img src={logoINR} alt='logo_inr' className='inr-img' />

        <li type='square'>
          {/* DIPLOMADO PRESENCIAL EN MEDICINA DEL DEPORTE, EJERCICIO Y ACTIVIDAD
          FÍSICA, UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO (UNAM) */}
          Diplomado presencial en Medicina del Deporte, Ejercicio y Actividad
          Física, Universidad Nacional Autónoma de México (UNAM)
        </li>
        <img src={logoUNAM} alt='logo_inr' className='inr-img' />

        <li type='square'>
          {/* LICENCIATURA: MÉDICO CIRUJANO UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO (UNAM) */}
          Licenciatura: Médico Cirujano, Universidad Nacional Autónoma de México (UNAM)
        </li>
        <img src={logoUNAM} alt='logo_inr' className='inr-img' />

        <li type='square'>
          {/* MÉDICO CERTIFICADO POR EL CONSEJO MEXICANO DE ORTOPEDIA Y
          TRAUMATOLOGÍA A.C.(CMOT) */}
          Médico certificado por el Consejo Mexicano de Ortopedia y
          Traumatología a.c.(CMOT)
        </li>
        <img src={logoCMOT} alt='logo_inr' className='inr-img' />

        <li type='square'>
          {/* MIEMBRO DE LA ASOCIACIÓN MEXICANA DE CIRUGÍA RECONSTRUCTIVA ARTICULAR
          Y ARTROSCOPIA A.C. (AMECRA) */}
          Miembro de la Asociación Mexicana de Cirugía Reconstructiva Articular
          y Artroscopia A.C. (AMECRA)
        </li>
        <img src={logoAMECRA} alt='logo_inr' className='inr-img' />

        <li type='square'>
          {/* ACTUALMENTE MÉDICO TITULAR DEL EQUIPO CLUB DEPORTIVO GUADALAJARA SUB
          20 LIGA MX */}
          Actualmente Médico Titular del equipo Club Deportivo Guadalajara Sub
          20 Liga MX
        </li>
        <img src={logoChivas} alt='logo_inr' className='inr-img' />
      </ul>
    </div>
  );
};

export default Formacion;