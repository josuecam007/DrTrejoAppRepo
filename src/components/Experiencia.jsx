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
            Médico de traumatología y ortopedia Instituto Nacional de
            Rehabilitación LGII del 1 de marzo del 2013 al 28 de febrero de 2017
          </dd>
        </dl>
        <dl className='timeline--entry'>
          <dt className='timeline--entry__title'>Hospital Zambrano Hellion</dt>
          <dd className='timeline--entry__detail'>
            Médico de la alta especialidad en Cirugía articular Tecnológico de
            Monterrey hospital Zambrano Hellion del 1 de marzo del 2017 al 28 de
            febrero de 2018
          </dd>
        </dl>
        <dl className='timeline--entry'>
          <dt className='timeline--entry__title'>Grupo Torre Médica</dt>
          <dd className='timeline--entry__detail'>
            Medico ortopedista en Grupo Torre Médica desde marzo de 2018 hasta
            febrero de 2019
          </dd>
        </dl>
        <dl className='timeline--entry'>
          <dt className='timeline--entry__title'>
            Centro Médico ISSEMYM Ecatepec
          </dt>
          <dd className='timeline--entry__detail'>
            Médico adscrito ortopedista en centro médico ISSEMYM Ecatepec desde
            agosto de 2018 hasta abril de 2019
          </dd>
        </dl>
        <dl className='timeline--entry'>
          <dt className='timeline--entry__title'>
            3ra División Profesional Halcones negros FC
          </dt>
          <dd className='timeline--entry__detail'>
            Jefe médico del equipo de futbol de 3ra división profesional
            Halcones negros FC desde agosto de 2018 a Abril de 2019
          </dd>
        </dl>
        <dl className='timeline--entry'>
          <dt className='timeline--entry__title'>
            Club Deportivo Guadalajara sub 17 liga MX
          </dt>
          <dd className='timeline--entry__detail'>
            Médico titular del equipo club deportivo Guadalajara sub 17 liga MX
            campeón del torneo apertura 2019
          </dd>
        </dl>
        <dl className='timeline--entry'>
          <dt className='timeline--entry__title'>Club deportivo Guadalajara</dt>
          <dd className='timeline--entry__detail'>
            Coordinador interino de servicios médicos del club deportivo
            Guadalajara de agosto a diciembre de 2019
          </dd>
        </dl>
        <dl className='timeline--entry'>
          <dt className='timeline--entry__title'>
            Club deportivo Guadalajara sub 20
          </dt>
          <dd className='timeline--entry__detail'>
            Médico titular del equipo club deportivo Guadalajara sub 20 liga MX
            actualmente
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default Experiencia;