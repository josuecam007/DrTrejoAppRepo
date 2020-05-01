import React, { children } from 'react';
import HeaderNavMenu from './HeaderNavMenu';
import '../assets/styles/components/Layout.scss';

const Layout = ({ children }) => (
  <div className='layout-container'>
    <HeaderNavMenu />
    <div className='contenido-container__grid-colums-container'>
      {children}
    </div>
  </div>
);

export default Layout;