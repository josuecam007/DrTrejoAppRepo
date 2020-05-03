import React from 'react';
import '../assets/styles/components/Experiencia.scss';
import logoChivas from '../assets/static/formacion/logo_chivas.png';


const Experiencia = () => {

  return (
    <div className='wrapper'>
      <h1>Experiencia</h1>
      <div className='timeline'>
        <dl className='timeline--entry'>
          <dt className='timeline--entry__title'>Centro Médico Dalinde</dt>
          <dd className='timeline--entry__detail'>
            Médico de hospitalización en Centro Médico Dalinde durante 2 años
          </dd>
        </dl>
        <dl className='timeline--entry'>
          <dt className='timeline--entry__title'>
            Instituto Nacional de Rehabilitación LGII
          </dt>
          <dd className='timeline--entry__detail'>
            Médico de Traumatología y Ortopedia en el Instituto Nacional
            de Rehabilitación (LGII) del 1 de marzo del 2013 al 28 de Febrero de 2017
          </dd>
        </dl>
        <dl className='timeline--entry'>
          <dt className='timeline--entry__title'>Hospital Zambrano Hellion TecSalud</dt>
          <dd className='timeline--entry__detail'>
            Médico de alta especialidad en Cirugía Articular Tecnológico de
            Monterrey hospital Zambrano Hellion del 1 de marzo del 2017 al 28 de
            febrero de 2018
          </dd>
        </dl>
        <dl className='timeline--entry'>
          <dt className='timeline--entry__title'>Grupo Torre Médica</dt>
          <dd className='timeline--entry__detail'>
            Medico ortopedista en Grupo Torre Médica de marzo de 2018 a febrero de 2019
          </dd>
        </dl>
        <dl className='timeline--entry'>
          <dt className='timeline--entry__title'>
            Centro Médico ISSEMYM Ecatepec
          </dt>
          <dd className='timeline--entry__detail'>
            Médico ortopedista adscrito al Centro médico ISSEMYM Ecatepec de 
            agosto de 2018 a abril de 2019
          </dd>
        </dl>
        <dl className='timeline--entry'>
          <dt className='timeline--entry__title'>
            3ra División Profesional Halcones Negros FC
          </dt>
          <dd className='timeline--entry__detail'>
            Jefe médico del equipo de fútbol de 3ra división profesional 
            Halcones negros FC de agosto de 2018 a Abril de 2019
          </dd>
        </dl>
        <dl className='timeline--entry'>
          <dt className='timeline--entry__title'>
            Club Deportivo Guadalajara Sub 17 liga MX
          </dt>
          <dd className='timeline--entry__detail'>
            Médico titular del equipo Club Deportivo Guadalajara sub 17 liga MX.
            Campeón del torneo apertura 2019
          </dd>
        </dl>
        <dl className='timeline--entry'>
          <dt className='timeline--entry__title'>Club Deportivo Guadalajara</dt>
          <dd className='timeline--entry__detail'>
            Coordinador interino de servicios médicos del Club Deportivo
            Guadalajara de agosto a diciembre de 2019
          </dd>
        </dl>
        <dl className='timeline--entry'>
          <dt className='timeline--entry__title'>
            Club Deportivo Guadalajara sub 20
          </dt>
          <dd className='timeline--entry__detail'>
            Actualidad
            <br />
            Médico titular del equipo Club Deportivo Guadalajara sub 20 liga MX
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default Experiencia;