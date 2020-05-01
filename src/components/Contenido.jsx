import React from 'react';
import '../assets/styles/components/Contenido.scss';
import inicioImage from '../assets/static/cuerpo_95875774_compressed.jpg';
import drjose from '../assets/static/inicio/DrJose.jpg';
import Formacion from './Formacion';
import Experiencia from './Experiencia';
import Habilidades from './Habilidades';
import Footer from './Footer';
import Servicios from './Servicios';
import Congresos from './Congresos';
import Galeria from './Galeria';
import imageCongreso from '../assets/static/congresos/congreso-1117902230.jpg';

const Contenido = () => {
  // const sectionStyle = {
  //   backgroundImage: `url(${imageCongreso})`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: '100% auto',
  //   // style={sectionStyle}
  // };
  return (
    <div className='main-container'>

      <section id='Inicio' className='main-container__inicio-area'>
        <figure className='change-ratio'>
          <img src={inicioImage} alt='bannerInicio' className='inicio-area__banner-area' />
          {/* <img src={logoMarca} alt='logoMarcaCentered' className='logo-centered' /> */}
          {/* <div className='titulo-banner titulo-banner--texto-principal'>
            DR. JOSÉ TREJO BELMONTE
          </div> */}
          <div className='titulo-banner titulo-banner--texto-principal'>
            TRAUMATOLOGÍA Y ORTOPEDIA
            <br />
            Lesiones deportivas y
            <br />
            Microcirugía artroscópica
          </div>
          {/* <div className='titulo-banner titulo-banner--texto-secundario'>
            Lesiones deportivas Y Microcirugía artroscópica
          </div> */}
          {/* <div className='titulo-banner titulo-banner--texto-terciario'>
          </div> */}
        </figure>
      </section>

      <section id='Acerca' className='acerca-container'>
        <div className='text-card'>
          <h1>Acerca de mí</h1>
          <p>
            {/* SOY UN MÉDICO ESPECIALISTA ENFOCADO EN OFRECER LO MEJOR PARA TI BASADO EN LA CIENCIA, BUSCARE EVITAR LA CIRUGÍA SIEMPRE QUE SEA POSIBLE Y SI LA NECESITAS TE BRINDARE TODA LA INFORMACIÓN PARA QUE TOMES LA MEJOR DECISIÓN, MI PRIORIDAD ES LA HONESTIDAD, EL TRATO HUMANO Y CUIDADO DE MI PACIENTE */}
            Soy un médico especialista enfocado en ofrecer lo mejor para ti basado en la ciencia, buscare evitar la cirugía siempre que sea posible y si la necesitas te brindare toda la información para que tomes la mejor decisión, mi prioridad es la honestidad, el trato humano y cuidado de mi paciente
          </p>
        </div>
        <div className='img-card'>
          <img src={drjose} alt='Foto-dr-jose' className='img-card' />
        </div>
      </section>

      <section id='Formacion'>
        <Formacion />
      </section>

      <section className='experiencia-section' id='Experiencia'>
        <Experiencia />
      </section>

      <section id='Habilidades'>
        <Habilidades />
      </section>

      <section id='Congresos'>
        <Congresos />
      </section>

      <section id='Servicios'>
        <Servicios />
      </section>

      <section id='Galeria' className='galeria-container'>
        <Galeria />
      </section>

      <footer id='Citas'>
        <Footer />
      </footer>
    </div>
  );
};

export default Contenido;