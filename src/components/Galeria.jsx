import React from 'react';
// import Slider from '@farbenmeer/react-spring-slider';
import Carousel from 'react-elastic-carousel';
import '../assets/styles/components/Galeria.scss';
import chivasCampeon2 from '../assets/static/galeria/chivas.campeon-2.jpg';
import equipoChivas from '../assets/static/galeria/chivas.jpg';
import chivasCampeon1 from '../assets/static/galeria/chivas-campeon1.jpg';
import chivasCampeon3 from '../assets/static/galeria/chivas-campeon-3.jpg';
import colegasJose from '../assets/static/galeria/colegas1.jpg';
import congreso1 from '../assets/static/galeria/congreso1.jpg';
import curso1 from '../assets/static/galeria/curso1.jpg';
import cursoRodilla from '../assets/static/galeria/curso-rodilla.jpg';
import hopilalZambrano1 from '../assets/static/galeria/hospital-zambrano-1.jpg';
import hospitalZambrano2 from '../assets/static/galeria/hospital-zambrano-2.jpg';
import atencionFutbolista from '../assets/static/galeria/jose-atendiendo-jugador.jpg';
import joseCampeonChivas from '../assets/static/galeria/jose-campeon1.jpg';
import joseEnCampoChivas from '../assets/static/galeria/jose-chivas-campo.jpg';
import joseCampoVolcan from '../assets/static/galeria/jose-chivas-campo2.jpg';
import joseCirujano from '../assets/static/galeria/jose-cirujano.jpg';
import joseEnCirujia from '../assets/static/galeria/jose-cirujia.jpg';
import joseHalconesFC from '../assets/static/galeria/jose-halcones.jpg';
import joseJugador from '../assets/static/galeria/jose-jugador.jpg';
import joseConJugadoresChivas from '../assets/static/galeria/jose-jugadores-chivas.jpg';
import joseTrofeoChivas from '../assets/static/galeria/jose-trofeo.jpg';
import joseTrofeoChivas2 from '../assets/static/galeria/jose-trofeo2.jpg';
import colegas2 from '../assets/static/galeria/urgencias.jpg';


import hospitanZambranoInterior from '../assets/static/galeria/hospitan-zambrano-interior.jpg';
import inrExterior from '../assets/static/galeria/inr-exterior.jpg';
import instrumentosA from '../assets/static/galeria/instrumentos-a.jpg';
import instrumentosB from '../assets/static/galeria/instrumentos-b.jpg';
import instrumentosC from '../assets/static/galeria/instrumentos-c.jpg';
import joseColega from '../assets/static/galeria/jose-colega.jpg';
import joseCompañerosHalcones from '../assets/static/galeria/jose-compañeros-halcones.jpg';
import joseFichaGdl from '../assets/static/galeria/jose-ficha-gdl.jpg';
import joseGdl from '../assets/static/galeria/jose-gdl.jpg';
import joseHalconesFicha from '../assets/static/galeria/jose-halcones-ficha.jpg';
import joseTraje from '../assets/static/galeria/jose-traje.jpg';


const Galeria = () => {
  const imagenes = [
    chivasCampeon2,
    equipoChivas,
    chivasCampeon1,
    chivasCampeon3,
    colegasJose,
    congreso1,
    curso1,
    cursoRodilla,
    hopilalZambrano1,
    hospitalZambrano2,
    atencionFutbolista,
    joseCampeonChivas,
    joseEnCampoChivas,
    joseCampoVolcan,
    joseCirujano,
    joseEnCirujia,
    joseHalconesFC,
    joseJugador,
    joseConJugadoresChivas,
    joseTrofeoChivas,
    joseTrofeoChivas2,
    colegas2,
    hospitanZambranoInterior,
    inrExterior,
    instrumentosA,
    instrumentosB,
    instrumentosC,
    joseColega,
    joseCompañerosHalcones,
    joseFichaGdl,
    joseGdl,
    joseHalconesFicha,
    joseTraje,
  ];

  // const onSlideChange = (index) => console.log(`changed to slide ${index}`);
  // const BulletComponent = ({ onClick, isActive }) => (
  //   <li
  //     style={{
  //       width: '25px',
  //       height: '25px',
  //       backgroundColor: 'white',
  //       margin: '0 2px',
  //       opacity: isActive && '0.5',
  //     }}
  //     onClick={onClick}
  //   />
  // );

  // BulletComponent.propTypes = {
  //   onClick: PropTypes.func.isRequired,
  //   isActive: PropTypes.bool.isRequired,
  // };

  // const ArrowComponent = ({ onClick, direction }) => {
  //   return (
  //     <div
  //       style={{
  //         border: '5px solid black',
  //         padding: '2em',
  //         backgroundColor: 'white',
  //       }}
  //       onClick={onClick}
  //     >
  //       {direction}
  //     </div>
  //   );
  // };

  // ArrowComponent.propTypes = {
  //   onClick: PropTypes.func.isRequired,
  //   direction: PropTypes.string.isRequired,
  // };

  // return (
  //   <div className='galeria-container'>
  //     <Slider
  //       activeIndex={imagenes.length}
  //       auto={4000}
  //       hasBullets
  //       hasArrows={true}
	// 		  BulletComponent={BulletComponent}
	// 		  //ArrowComponent={ArrowComponent}
	// 		  //onSlideChange={onSlideChange}
  //     >
  //       {imagenes.map((item, key) => (
         
  //         <img src={item} alt='jose-trejo' className='image-size' />
         
  //       ))}
  //     </Slider>
  //   </div>
  // );

  return (
    <div className='galeria-section'>
      <h1>Galería</h1>
      <Carousel itemsToShow={1}>
        {imagenes.map((item, key) => (
          <img src={item} alt="jose-trejo" className="image-size" />
        ))}
      </Carousel>
    </div>
  );


};

export default Galeria;
