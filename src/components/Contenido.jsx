import React from 'react';
import '../assets/styles/components/Contenido.scss';
import inicioImage from '../assets/static/inicio/cuerpo_95875774_compressed.jpg';
import drjose from '../assets/static/inicio/DrJose.jpg';
import Formacion from './Formacion';
import Experiencia from './Experiencia';
import Habilidades from './Habilidades';
import Footer from './Footer';
import Servicios from './Servicios';
import Congresos from './Congresos';
import Galeria from './Galeria';

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
          <div className='titulo-banner titulo-banner--texto-principal'>
            TRAUMATOLOGÍA Y ORTOPEDIA
            <br />
            Lesiones deportivas y
            <br />
            Microcirugía artroscópica
          </div>
        </figure>
      </section>

      <section id='Acerca' className='acerca-container'>
        <div className='text-card'>
          <h1>Acerca de mí</h1>
          <p>
            Soy un médico especialista enfocado en ofrecerte lo mejor para ti y tu familia con base en la ciencia; siempre que sea posible buscaré evitar la cirugía y si la necesitas te brindaré la información necesaria resolviendo todas tus dudas para que tomes la mejor decisión.
            <br />
            Mis prioridades y valores son la honestidad, el trato humano y el cuidado de mi paciente. 
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