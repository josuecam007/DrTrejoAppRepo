import React from 'react';
import '../assets/styles/components/Contenido.scss';
import inicioImage from '../assets/static/man-running-during-daytime-desktop.jpg';
import logoMarca from '../assets/static/logo1@2x.png';
import logoTextoMarca from '../assets/static/textoMarca.png';
import drjose from '../assets/static/drjose.jpg';

const Contenido = () => {
  const sectionStyle = {
    backgroundImage: `url(${logoMarca})`,
  };
  return (
    <div className='container-contenido'>

      <section id='Inicio' className='inicio-area'>
        <figure className='change-ratio'>
          <img src={inicioImage} alt='bannerInicio' className='banner-area' />
        </figure>
        <div className='marca'>
          {/* <img src={logoMarca} alt='logoMarca' className='logoMarca' />
          <div className='textoMarca'>DR. JOSÉ TREJO BELMONTE</div> */}
          {/* <img src={logoTextoMarca} alt='logoMarca' className='logoTextoMarca' /> */}
        </div>
      </section>

      <section id='Acerca' className='acerca-area'>
        <img src={drjose} alt='Foto-dr-jose' className='img-card' />
        <div>
          <h2>Acerca de mí</h2>
          <h1>ESCOLARIDAD</h1>
          <ul>
            <li>
              Postgrado: Alta especialidad en microcirugía articular Tecnológico
              de Monterrey en el hospital Zambrano Hellion
            </li>
            <li>
              Especialidad en traumatología y ortopedia Universidad Nacional
              Autónoma de México en el Instituto Nacional de Rehabilitación
            </li>
            <li>
              Licenciatura: Médico cirujano Universidad Nacional Autónoma de
              México - Facultad de estudios superiores Zaragoza
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contenido;