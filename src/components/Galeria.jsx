import React from 'react';
import Slider from '@farbenmeer/react-spring-slider';
import ortopedicos from '../assets/static/servicios/ortopedicos.png';

const Galeria = () => {
  return (
    <Slider
        activeIndex={2} 
		auto 
		hasBullets >
        <div>
            <img
            src={ortopedicos}
            alt='imagen_fractura'
            className='servicios__img'
            />
        </div>
    </Slider>
  );
};

export default Galeria;
