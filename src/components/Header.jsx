import React from 'react';
import logo from '../assets/static/logoDrTrejo.png';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <Header className='containerHeader'>
    <img src={logo} alt='logo-doctor-jose-trejo' />
    <div>hola</div>
  </Header>
);

export default Header;
