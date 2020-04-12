import React, { children } from 'react';
// import Header from './Header';
//import Footer from './Footer';
import HeaderNavMenu from './HeaderNavMenu';
import '../assets/styles/components/Layout.scss';
// import Contenido from './Contenido';
 import Formacion from './Formacion';

const Layout = ({ children }) => (
  <div className='layout-container'>
    <HeaderNavMenu />
    <div className='contenido-container__grid-colums-container'>
      {children}
    </div>
  </div>
);

export default Layout;