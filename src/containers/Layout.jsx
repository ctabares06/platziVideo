import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div className='app'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
