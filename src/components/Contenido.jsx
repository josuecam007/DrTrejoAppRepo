import React from 'react';
import '../assets/styles/components/Contenido.scss';
import inicioImage from '../assets/static/computer-desk-laptop-stethoscope-big.jpg';
//import logoMarca from '../assets/static/logo1@2x.png';
import drjose from '../assets/static/drjose.jpg';
import Formacion from './Formacion';
import Experiencia from './Experiencia';


const Contenido = () => {
  // const sectionStyle = {
  //   backgroundImage: `url(${logoMarca})`,
  // };
  return (
    <div className='main-container'>

      <section id='Inicio' className='main-container__inicio-area'>
        <figure className='change-ratio'>
          <img src={inicioImage} alt='bannerInicio' className='inicio-area__banner-area' />
          {/* <img src={logoMarca} alt='logoMarcaCentered' className='logo-centered' /> */}
          <div className='titulo-banner titulo-banner--texto-principal'>
            DR. JOSÉ TREJO BELMONTE
          </div>
          <div className='titulo-banner titulo-banner--texto-secundario'>
            Traumatología y Ortopedia
          </div>
          <div className='titulo-banner titulo-banner--texto-terciario'>
            Lesiones deportivas Y Microcirugía artroscópica
          </div>
        </figure>
      </section>

      <section id='Acerca' className='acerca-container'>
        <div className='text-card'>
          <h1>ACERCA DE MÍ</h1>
          <p>
            SOY UN MÉDICO ESPECIALISTA ENFOCADO EN OFRECER LO MEJOR PARA TI BASADO EN LA CIENCIA, BUSCARE EVITAR LA CIRUGÍA SIEMPRE QUE SEA POSIBLE Y SI LA NECESITAS TE BRINDARE TODA LA INFORMACIÓN PARA QUE TOMES LA MEJOR DECISIÓN, MI PRIORIDAD ES LA HONESTIDAD, EL TRATO HUMANO Y CUIDADO DE MI PACIENTE
          </p>
        </div>
        <div className='img-card'>
          <img src={drjose} alt='Foto-dr-jose' className='img-card' />
        </div>
      </section>
      <section>
        <Formacion />
      </section>
      <section className='experiencia-section' id='Experiencia'>
        <Experiencia />
      </section>
    </div>
  );
};

export default Contenido;