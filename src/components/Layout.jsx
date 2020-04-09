import React, { children } from 'react';
// import Header from './Header';
//import Footer from './Footer';
import HeaderNavMenu from './HeaderNavMenu';
import '../assets/styles/components/Layout.scss';

const Layout = ({ children }) => (
  <div className='layout-containter'>
    {/* <Header /> */}
    <HeaderNavMenu />
    <div className='grid-content'>
      {children}
    </div>
  </div>
);

export default Layout;