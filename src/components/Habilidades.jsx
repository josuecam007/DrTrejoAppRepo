  import React from 'react';
import '../assets/styles/components/Habilidades.scss';

const Habilidades = () => {
  return (
    <div className='habilidades-section'>
      <h1>Conocimientos y habilidades</h1>
      <ul className='habilidades-container'>
        <li>
          Curso de rodilla nivel III (LATAM). Curso avanzado de artroscopia en cadáver. Naples, Florida; febrero de 2020
        </li>
        <li>
          Diplomado presencial en medicina del deporte, ejercicio y actividad física, 2016. Universidad Nacional Autónoma de México (UNAM)
        </li>
        <li>
          AO Curso de trauma. Principios del manejo  conservador y quirúrgico de fracturas. Del 13 al 16 julio del 2016
        </li>
        <li>
          Advanced Trauma Life Support American College of Surgeons (ATLS). Centro de Capacitación Dalinde (CECADA)
        </li>
        <li>
          Advanced Cardiovascular Life Support American Heart Association (ACLS). Centro de Capacitación Dalinde (CECADA)
        </li>
        <li>
          Acreditación del idioma inglés. Departamento de lenguas extranjeras. Facultad de Estudios Superiores Zaragoza. Abril de 2005
        </li>
      </ul>
    </div>
  );
};

export default Habilidades;
